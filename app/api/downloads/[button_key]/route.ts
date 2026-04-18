import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { getFallbackButton } from '@/src/lib/downloads';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// PUT /api/downloads/:button_key - Update a download button
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ button_key: string }> }
) {
    try {
        const { button_key: buttonKey } = await params;

        if (!supabase) {
            return NextResponse.json({ error: 'Downloads backend is not configured' }, { status: 503 });
        }

        const body = await request.json();

        const { data, error } = await supabase
            .from('download_buttons')
            .update({
                file_url: body.file_url,
                status: body.status,
                updated_at: new Date().toISOString()
            })
            .eq('button_key', buttonKey)
            .select()
            .single();

        if (error) {
            console.error('Error updating download button:', error);
            return NextResponse.json({ error: 'Failed to update download button' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

// GET /api/downloads/:button_key - Get a single download button
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ button_key: string }> }
) {
    try {
        const { button_key: buttonKey } = await params;
        const fallbackButton = getFallbackButton(buttonKey);

        if (!supabase) {
            return NextResponse.json({ data: fallbackButton, source: 'fallback' });
        }

        const { data, error } = await supabase
            .from('download_buttons')
            .select('*')
            .eq('button_key', buttonKey)
            .maybeSingle();

        if (error) {
            console.error('Error fetching download button:', error);
            return NextResponse.json({ data: fallbackButton, source: 'fallback' });
        }

        return NextResponse.json({ data: data ?? fallbackButton });
    } catch (err) {
        console.error('API Error:', err);
        const { button_key: buttonKey } = await params;
        return NextResponse.json({ data: getFallbackButton(buttonKey), source: 'fallback' });
    }
}
