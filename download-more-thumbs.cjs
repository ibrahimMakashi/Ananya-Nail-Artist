// download-more-thumbs.cjs
const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const f = fs.createWriteStream(dest);
    https.get(url, (res) => {
      res.pipe(f);
      f.on('finish', () => f.close(resolve));
    }).on('error', reject);
  });
}

(async () => {
  await download('https://assets.mixkit.co/videos/15806/15806-thumb-720-0.jpg', 'thumb-15806.jpg');
  await download('https://assets.mixkit.co/videos/24817/24817-thumb-720-0.jpg', 'thumb-24817.jpg');
  await download('https://assets.mixkit.co/videos/24769/24769-thumb-720-0.jpg', 'thumb-24769.jpg');
  await download('https://assets.mixkit.co/videos/51651/51651-thumb-720-0.jpg', 'thumb-51651.jpg');
  console.log('Downloaded more thumbnails!');
})();
