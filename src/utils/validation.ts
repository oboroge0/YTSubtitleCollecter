export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateYouTubeUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const validHosts = ['www.youtube.com', 'youtube.com', 'youtu.be', 'm.youtube.com'];
    
    if (!validHosts.includes(urlObj.hostname)) {
      return false;
    }

    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.length > 1;
    }

    const videoId = urlObj.searchParams.get('v');
    return !!videoId && videoId.length === 11;
  } catch {
    return false;
  }
}

export function validateLanguageCode(code: string): boolean {
  // Basic ISO 639-1 validation (2-letter codes)
  // Can be extended with full list of valid codes
  return /^[a-z]{2}(-[A-Z]{2})?$/.test(code);
}

export function validateFormat(format: string): boolean {
  const validFormats = ['txt', 'srt', 'vtt', 'json'];
  return validFormats.includes(format.toLowerCase());
}

export function validateBatchFile(urls: string[]): { valid: string[]; invalid: string[] } {
  const valid: string[] = [];
  const invalid: string[] = [];

  urls.forEach(url => {
    if (validateYouTubeUrl(url)) {
      valid.push(url);
    } else {
      invalid.push(url);
    }
  });

  return { valid, invalid };
}