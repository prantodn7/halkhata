import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// POST /api/contact - Submit a contact message
export async function POST(request) {
    try {
        if (!supabase) {
            return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
        }

        const body = await request.json();
        const { name, phone, business_type, reason, message } = body;

        // Validation
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: 'Name, phone, and message are required' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('contact_messages')
            .insert({
                name,
                phone,
                business_type: business_type || null,
                reason: reason || null,
                message,
                status: 'unread',
                created_at: new Date().toISOString()
            })
            .select()
            .single();

        if (error) {
            console.error('Error saving contact message:', error);
            return NextResponse.json(
                { error: 'Failed to submit message' },
                { status: 500 }
            );
        }

        return NextResponse.json({ data, success: true });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// GET /api/contact - Fetch all contact messages
export async function GET() {
    try {
        if (!supabase) {
            return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
        }

        const { data, error } = await supabase
            .from('contact_messages')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching contact messages:', error);
            return NextResponse.json(
                { error: 'Failed to fetch messages' },
                { status: 500 }
            );
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// PATCH /api/contact - Update message status (mark as read/unread)
export async function PATCH(request) {
    try {
        if (!supabase) {
            return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
        }

        const body = await request.json();
        const { id, status } = body;

        if (!id || !status) {
            return NextResponse.json(
                { error: 'id and status are required' },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('contact_messages')
            .update({ status })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            console.error('Error updating message status:', error);
            return NextResponse.json(
                { error: 'Failed to update message' },
                { status: 500 }
            );
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// DELETE /api/contact - Delete a message
export async function DELETE(request) {
    try {
        if (!supabase) {
            return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
        }

        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'id is required' },
                { status: 400 }
            );
        }

        const { error } = await supabase
            .from('contact_messages')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting message:', error);
            return NextResponse.json(
                { error: 'Failed to delete message' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
