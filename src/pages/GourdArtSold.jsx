import { Link } from 'react-router-dom';
import { useLocalImages } from '../hooks/useLocalImages';
import { ImageGridItem } from '../components/ImageGridItem';

export const GourdArtSold = () => {
  const { images, loading, error } = useLocalImages('sold');

  return (
    <div className="w-full">
      <p className="text-title font-sans text-xl mb-2">Thank you!</p>
      <p className="mb-2">
        Reetsie extends her most sincere thanks to all those who have already purchased her gourd
        art.
      </p>
      <p className="mb-2">
        If you would like to learn how you too, may purchase Reetsie's gourd art, please{' '}
        <Link to="/contact" className="text-link">contact Reetsie directly.</Link>
      </p>
      <p className="mb-2">{/*blank*/}</p>
      {loading && <p className="mb-2">Loading images...</p>}
      {error && (
        <div className="p-5 bg-[#fff3cd] border border-[#ffc107] rounded-md mt-5">
          <p className="m-0 text-[#856404]"><strong>⚠️ {error}</strong></p>
        </div>
      )}
      <div className="w-full flex flex-wrap gap-3">
        {images.map((image) => (
          <ImageGridItem key={image.id} image={image} showDescription={true} />
        ))}
      </div>
    </div>
  );
};
