import { useState, useEffect } from 'react';

const albumPaths = {
  'awards': '/images/awards',
  'sold': '/images/sold'
};

export const useLocalImages = (albumType) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        
        const basePath = albumPaths[albumType];
        if (!basePath) {
          throw new Error(`Unknown album type: ${albumType}`);
        }

        // Fetch metadata JSON
        const response = await fetch(`${basePath}/metadata.json`);
        if (!response.ok) {
          throw new Error(`Failed to load images: ${response.status}`);
        }
        
        const metadata = await response.json();
        
        // Map to local image paths
        const imagesData = metadata.map(image => ({
          id: image.id,
          link: `${basePath}/${image.filename}`,
          title: image.title || '',
          description: image.description || ''
        }));

        // Preload images
        imagesData.forEach(image => {
          const link = document.createElement('link');
          link.id = image.link;
          link.rel = 'preload';
          link.href = image.link;
          link.as = 'image';
          document.head.appendChild(link);
        });

        setImages(imagesData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error('Error loading images:', err);
      } finally {
        setLoading(false);
      }
    };

    if (albumType) {
      fetchImages();
    }
  }, [albumType]);

  return { images, loading, error };
};
