import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Admin client with service role key for updating user metadata
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabaseAdmin = supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

// POST /api/users/admin - Make user an admin
export async function POST(request) {
    try {
        if (!supabaseAdmin) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 503 }
            );
        }

        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Get user by email
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();

        if (listError) {
            console.error('Error listing users:', listError);
            return NextResponse.json(
                { error: 'Failed to find user' },
                { status: 500 }
            );
        }

        const user = users.find(u => u.email === email);

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Update user metadata to make admin
        const { data: updateData, error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
            user.id,
            {
                user_metadata: {
                    ...user.user_metadata,
                    role: 'admin'
                }
            }
        );

        if (updateError) {
            console.error('Error updating user:', updateError);
            return NextResponse.json(
                { error: 'Failed to make user admin' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: `User ${email} is now an admin`
        });

    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// DELETE /api/users/admin - Remove admin from user
export async function DELETE(request) {
    try {
        if (!supabaseAdmin) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 503 }
            );
        }

        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json(
                { error: 'Email is required' },
                { status: 400 }
            );
        }

        // Get user by email
        const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();

        if (listError) {
            console.error('Error listing users:', listError);
            return NextResponse.json(
                { error: 'Failed to find user' },
                { status: 500 }
            );
        }

        const user = users.find(u => u.email === email);

        if (!user) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            );
        }

        // Update user metadata to remove admin role
        const { user_metadata } = user;
        const newMetadata = { ...user_metadata };
        delete newMetadata.role;

        const { data: updateData, error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
            user.id,
            {
                user_metadata: newMetadata
            }
        );

        if (updateError) {
            console.error('Error updating user:', updateError);
            return NextResponse.json(
                { error: 'Failed to remove admin role' },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: `Admin role removed from ${email}`
        });

    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
