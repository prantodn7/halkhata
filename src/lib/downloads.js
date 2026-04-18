// Single download URL that controls all download buttons
export const DEFAULT_DOWNLOAD_URL = 'https://dl.dropboxusercontent.com/scl/fi/govvpndzd50n2v8yjw0rv/app-release.apk?rlkey=ymucptfmippcllze9t9yrc68h&st=2doxf39d';

export const BUTTON_KEYS = {
  HOME_BANNER_DOWNLOAD: 'home_banner_download',
  HOME_HERO_DOWNLOAD: 'home_hero_download',
  HEADER_DOWNLOAD: 'header_download',
  FOOTER_DOWNLOAD: 'footer_download',
}

export const FALLBACK_URLS = {
  [BUTTON_KEYS.HOME_BANNER_DOWNLOAD]: DEFAULT_DOWNLOAD_URL,
  [BUTTON_KEYS.HOME_HERO_DOWNLOAD]: DEFAULT_DOWNLOAD_URL,
  [BUTTON_KEYS.HEADER_DOWNLOAD]: DEFAULT_DOWNLOAD_URL,
  [BUTTON_KEYS.FOOTER_DOWNLOAD]: DEFAULT_DOWNLOAD_URL,
}

export const FALLBACK_BUTTONS = Object.values(BUTTON_KEYS).map((buttonKey) => ({
  id: `fallback-${buttonKey}`,
  button_key: buttonKey,
  file_url: FALLBACK_URLS[buttonKey],
  status: 'active',
}))

export function getFallbackButton(buttonKey) {
  return {
    id: `fallback-${buttonKey}`,
    button_key: buttonKey,
    file_url: DEFAULT_DOWNLOAD_URL,
    status: 'active',
  }
}
