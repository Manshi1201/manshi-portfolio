import { writeFile } from 'fs/promises';

// Try the common ImgBB direct URL pattern
const urls = [
  'https://i.ibb.co/t16CG71/profile-photo.jpg',
  'https://i.ibb.co/t16CG71/profile-photo.png',
  'https://i.ibb.co/1t16CG71.jpg',
];

async function tryDownload(url) {
  try {
    console.log(`Trying: ${url}`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      redirect: 'follow',
    });
    console.log(`Status: ${res.status}, Content-Type: ${res.headers.get('content-type')}`);
    if (res.ok && res.headers.get('content-type')?.includes('image')) {
      const buffer = Buffer.from(await res.arrayBuffer());
      await writeFile('/vercel/share/v0-project/public/profile.jpg', buffer);
      console.log(`Success! Downloaded from ${url}`);
      return true;
    }
  } catch (e) {
    console.log(`Failed: ${e.message}`);
  }
  return false;
}

for (const url of urls) {
  const ok = await tryDownload(url);
  if (ok) break;
}
