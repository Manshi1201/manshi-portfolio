import { writeFile, mkdir } from 'fs/promises';

const urls = [
  'https://i.ibb.co/t16CG71/profile-photo.jpg',
  'https://i.ibb.co/t16CG71/image.jpg',
  'https://i.ibb.co/t16CG71/image.png',
  'https://i.ibb.co/t16CG71.jpg',
];

import { join } from 'path';

const outputFile = join(process.cwd(), 'public', 'profile.jpg');

await mkdir(join(process.cwd(), 'public'), { recursive: true });
console.log('CWD:', process.cwd());
console.log('Output file:', outputFile);

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
      await writeFile(outputFile, buffer);
      console.log(`Success! Downloaded from ${url}`);
      return true;
    }
  } catch (e) {
    console.log(`Failed: ${e.message}`);
  }
  return false;
}

let success = false;
for (const url of urls) {
  success = await tryDownload(url);
  if (success) break;
}

if (!success) {
  // Try fetching the ImgBB page itself and extract the image URL
  console.log('Trying to scrape ImgBB page...');
  try {
    const res = await fetch('https://ibb.co/t16CG71', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    const html = await res.text();
    // Look for the direct image URL in the page
    const match = html.match(/https:\/\/i\.ibb\.co\/[^"'\s]+/g);
    if (match) {
      console.log('Found image URLs:', match);
      for (const imgUrl of match) {
        success = await tryDownload(imgUrl);
        if (success) break;
      }
    }
  } catch (e) {
    console.log(`Scrape failed: ${e.message}`);
  }
}

if (!success) {
  console.log('Could not download image from any URL');
}
