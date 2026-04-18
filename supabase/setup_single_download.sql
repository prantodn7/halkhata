-- ============================================
-- Single Download Link Settings Table
-- ============================================

-- Create the app_settings table
CREATE TABLE IF NOT EXISTS public.app_settings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on key
CREATE INDEX IF NOT EXISTS idx_app_settings_key ON public.app_settings(key);

-- Enable RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON public.app_settings
    FOR SELECT USING (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated users to update" ON public.app_settings
    FOR UPDATE USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert" ON public.app_settings
    FOR INSERT WITH CHECK (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Insert default download URL (your existing Dropbox link)
INSERT INTO public.app_settings (key, value) VALUES
    ('app_download_url', 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d')
ON CONFLICT (key) DO NOTHING;

-- Grant permissions
GRANT SELECT ON public.app_settings TO anon;
GRANT SELECT ON public.app_settings TO authenticated;
GRANT ALL ON public.app_settings TO service_role;
