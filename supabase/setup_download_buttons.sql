-- ============================================
-- Download Buttons Management Table
-- ============================================

-- Create the download_buttons table
CREATE TABLE IF NOT EXISTS public.download_buttons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    button_key TEXT UNIQUE NOT NULL,
    file_url TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on button_key for faster lookups
CREATE INDEX IF NOT EXISTS idx_download_buttons_button_key ON public.download_buttons(button_key);

-- Enable Row Level Security (RLS)
ALTER TABLE public.download_buttons ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON public.download_buttons
    FOR SELECT USING (true);

-- Allow authenticated users to update
CREATE POLICY "Allow authenticated users to update" ON public.download_buttons
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to insert" ON public.download_buttons
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Insert default buttons
INSERT INTO public.download_buttons (button_key, file_url, status) VALUES
    ('home_banner_download', 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d', 'active'),
    ('home_hero_download', 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d', 'active'),
    ('header_download', 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d', 'active'),
    ('footer_download', 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d', 'active')
ON CONFLICT (button_key) DO NOTHING;

-- Grant permissions
GRANT SELECT ON public.download_buttons TO anon;
GRANT SELECT ON public.download_buttons TO authenticated;
GRANT ALL ON public.download_buttons TO service_role;
