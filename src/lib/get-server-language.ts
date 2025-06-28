import { cookies } from 'next/headers';

export async function getServerLanguage(): Promise<'vi' | 'en'> {
  try {
    const cookieStore = await cookies();
    const languageCookie = cookieStore.get('language');
    
    if (languageCookie?.value === 'en' || languageCookie?.value === 'vi') {
      return languageCookie.value;
    }
    
    // Default to Vietnamese if no cookie found
    return 'vi';
  } catch {
    // Fallback to Vietnamese if cookies can't be read
    return 'vi';
  }
}
