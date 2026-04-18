-- ============================================
-- Download Buttons Management Table
-- ============================================
-- This table stores download button configurations
-- controlled from the admin panel

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

-- Create policy to allow public read access (for getting download URLs)
CREATE POLICY "Allow public read access" ON public.download_buttons
    FOR SELECT USING (true);

-- Create policy to allow authenticated users to update (admin function)
CREATE POLICY "Allow authenticated users to update" ON public.download_buttons
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to insert (admin function)
CREATE POLICY "Allow authenticated users to insert" ON public.download_buttons
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- ============================================
-- Insert default button keys
-- ============================================
-- These are the default download buttons used across the app
INSERT INTO public.download_buttons (button_key, file_url, status) VALUES
    ('home_banner_download', NULL, 'active'),
    ('home_hero_download', NULL, 'active'),
    ('header_download', NULL, 'active'),
    ('footer_download', NULL, 'active')
ON CONFLICT (button_key) DO NOTHING;

-- ============================================
-- Create function to update updated_at timestamp
-- ============================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_download_buttons_updated_at
    BEFORE UPDATE ON public.download_buttons
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- Grant necessary permissions
-- ============================================
-- Allow public to select from download_buttons
GRANT SELECT ON public.download_buttons TO anon;
GRANT SELECT ON public.download_buttons TO authenticated;

-- Allow service_role to manage everything
GRANT ALL ON public.download_buttons TO service_role;
