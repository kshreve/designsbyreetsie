# Local Image Hosting

The site now hosts all gallery images locally instead of fetching them from Imgur's API.

## Why the Change?

1. **No API rate limits** - No more 429 errors or dependency on Imgur's API availability
2. **Faster loading** - Images are served directly from your CDN (Netlify)
3. **Offline development** - Works perfectly in local development
4. **Smaller bundle** - Removed axios dependency (~36KB savings)
5. **Better reliability** - No external API dependencies

## Image Storage

Images are stored in:
- `public/images/awards/` - Award-winning gourd art (84 images)
- `public/images/sold/` - Sold gourd art (33 images)

Each directory contains:
- `*.jpeg` - The actual image files
- `metadata.json` - Image titles and descriptions

## How It Works

### Old Approach (Imgur API)
```javascript
// Made HTTP request to Imgur API
const response = await axios.get(`https://api.imgur.com/3/album/${albumId}/images`);
```

### New Approach (Local Files)
```javascript
// Fetch metadata from local JSON file
const response = await fetch(`/images/awards/metadata.json`);
// Images served as: /images/awards/filename.jpeg
```

## Downloading Images

If you need to update or re-download images from Imgur:

```bash
# Create directories
mkdir -p public/images/awards public/images/sold

# Download Awards album (ePmjl)
curl -s 'https://api.imgur.com/3/album/ePmjl/images' \
  -H 'authorization: Client-Id 4dd8fa5ed1dafe1' | \
  jq -r '.data[] | .link' | \
  while read url; do 
    filename=$(basename "$url")
    curl -s "$url" -o "public/images/awards/$filename"
    echo "Downloaded: $filename"
  done

# Download Sold album (qiBAL)
curl -s 'https://api.imgur.com/3/album/qiBAL/images' \
  -H 'authorization: Client-Id 4dd8fa5ed1dafe1' | \
  jq -r '.data[] | .link' | \
  while read url; do 
    filename=$(basename "$url")
    curl -s "$url" -o "public/images/sold/$filename"
    echo "Downloaded: $filename"
  done

# Save metadata
curl -s 'https://api.imgur.com/3/album/ePmjl/images' \
  -H 'authorization: Client-Id 4dd8fa5ed1dafe1' | \
  jq '[.data[] | {id: .id, filename: (.link | split("/")[-1]), title: .title, description: .description}]' \
  > public/images/awards/metadata.json

curl -s 'https://api.imgur.com/3/album/qiBAL/images' \
  -H 'authorization: Client-Id 4dd8fa5ed1dafe1' | \
  jq '[.data[] | {id: .id, filename: (.link | split("/")[-1]), title: .title, description: .description}]' \
  > public/images/sold/metadata.json
```

## Adding New Images

To add new images:

1. Place image files in the appropriate directory:
   - `public/images/awards/newimage.jpeg`
   - `public/images/sold/newimage.jpeg`

2. Update the corresponding `metadata.json`:
```json
{
  "id": "unique-id",
  "filename": "newimage.jpeg",
  "title": "Image Title",
  "description": "Image description"
}
```

3. Rebuild: `npm run build`

## Build Process

The Vite build process:
1. Copies all files from `public/images/` to `dist/images/`
2. The React app fetches `metadata.json` at runtime
3. Images are referenced as `/images/awards/filename.jpeg`

## Migration Details

### Files Removed
- `src/hooks/useImgurApi.js` - Imgur API integration
- Axios dependency
- Imgur proxy in Vite config

### Files Added
- `src/hooks/useLocalImages.js` - Local image loader
- `public/images/awards/` - 84 images + metadata.json
- `public/images/sold/` - 33 images + metadata.json

### Files Modified
- `src/pages/Awards.jsx` - Uses `useLocalImages` instead of `useImgurApi`
- `src/pages/GourdArtSold.jsx` - Uses `useLocalImages` instead of `useImgurApi`
- `vite.config.mjs` - Copies images to dist folder
- `package.json` - Removed axios

## Image Optimization (Future)

Consider optimizing images for better performance:

```bash
# Using ImageMagick
mogrify -quality 85 -resize 2000x2000\> public/images/**/*.jpeg

# Or using modern formats
# Convert to WebP for smaller file sizes
for file in public/images/**/*.jpeg; do
  cwebp -q 85 "$file" -o "${file%.jpeg}.webp"
done
```

## Storage Size

- Awards: ~35MB (84 images)
- Sold: ~11MB (33 images)
- Total: ~46MB

This is well within Netlify's limits and CDN will cache them efficiently.

## Reverting to Imgur API

If you need to revert to Imgur API:

1. Reinstall axios: `npm install axios`
2. Update pages to use `useImgurApi` instead of `useLocalImages`
3. Remove image copy from `vite.config.mjs`
4. Optionally delete `public/images/` to save space in repo

But local hosting is recommended for better performance and reliability!
