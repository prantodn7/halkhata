import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { DEFAULT_DOWNLOAD_URL } from '@/src/lib/downloads';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

const DOWNLOAD_URL_KEY = 'app_download_url';

// GET /api/download-url - Get the single download URL.
export async function GET() {
    try {
        if (!supabase) {
            return NextResponse.json({ data: { file_url: DEFAULT_DOWNLOAD_URL }, source: 'fallback' });
        }

        const { data, error } = await supabase
            .from('app_settings')
            .select('value')
            .eq('key', DOWNLOAD_URL_KEY)
            .maybeSingle();

        if (error) {
            console.error('Error fetching download URL:', error);
            return NextResponse.json({ data: { file_url: DEFAULT_DOWNLOAD_URL }, source: 'fallback' });
        }

        return NextResponse.json({
            data: { file_url: data?.value || DEFAULT_DOWNLOAD_URL },
        });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ data: { file_url: DEFAULT_DOWNLOAD_URL }, source: 'fallback' });
    }
}

// PUT /api/download-url - Update the download URL.
export async function PUT(request) {
    try {
        if (!supabase) {
            return NextResponse.json({ error: 'Database is not configured' }, { status: 503 });
        }

        const body = await request.json();
        const { file_url } = body;

        if (!file_url) {
            return NextResponse.json({ error: 'file_url is required' }, { status: 400 });
        }

        const { data, error } = await supabase
            .from('app_settings')
            .upsert({ key: DOWNLOAD_URL_KEY, value: file_url }, { onConflict: 'key' })
            .select()
            .single();

        if (error) {
            console.error('Error saving download URL:', error);
            return NextResponse.json({ error: 'Failed to save download URL' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
