import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { FALLBACK_BUTTONS } from '@/src/lib/downloads';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// GET /api/downloads - Fetch all download buttons
export async function GET() {
    try {
        if (!supabase) {
            return NextResponse.json({ data: FALLBACK_BUTTONS, source: 'fallback' });
        }

        const { data, error } = await supabase
            .from('download_buttons')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching download buttons:', error);
            return NextResponse.json({ data: FALLBACK_BUTTONS, source: 'fallback' });
        }

        return NextResponse.json({ data: data?.length ? data : FALLBACK_BUTTONS });
    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json({ data: FALLBACK_BUTTONS, source: 'fallback' });
    }
}
