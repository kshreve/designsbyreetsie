export const ImageGridItem = ({ image, showDescription = false }) => {
  return (
    <figure 
      className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)] p-2 bg-white rounded-lg shadow-md overflow-hidden"
    >
      <a href={image.link} className="block overflow-hidden rounded">
        <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
          <img 
            src={image.link} 
            alt={image.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </a>
      {showDescription && image.description?.trim() && (
        <figcaption className="text-center italic text-sm indent-0 mt-2 text-[#666]">
          {image.description.trim()}
        </figcaption>
      )}
    </figure>
  );
};

