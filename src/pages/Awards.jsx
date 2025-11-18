import { Link } from 'react-router-dom';
import { useLocalImages } from '../hooks/useLocalImages';
import { ImageGridItem } from '../components/ImageGridItem';

export const Awards = () => {
  const { images, loading, error } = useLocalImages('awards');

  return (
    <div className="flex flex-wrap w-full gap-0 md:gap-[4%]">
      <div className="w-full md:w-[56.67%] box-border">
        <p className="text-title font-sans text-xl mb-2">Gourds by Reetsie</p>
        <p className="mb-2">Reetsie's works of art come in variety of styles, shapes and sizes.</p>
        <p className="mb-2">
          Here is a sampling of her work. If you'd like to purchase artwork from Reetsie, please{' '}
          <Link to="/contact" className="text-link">contact her.</Link>
        </p>
        <p className="mb-2">Click on the photos below to view full size image.</p>
        {loading && <p className="mb-2">Loading images...</p>}
        {error && (
          <div className="p-5 bg-[#fff3cd] border border-[#ffc107] rounded-md mt-5">
            <p className="m-0 text-[#856404]"><strong>⚠️ {error}</strong></p>
          </div>
        )}
        <div className="w-full flex flex-wrap gap-3">
          {images.map((image) => (
            <ImageGridItem key={image.id} image={image} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-[39.33%] box-border">
        <p className="text-title font-sans text-xl mb-2">Award Winning Artwork</p>
        <div className="text-center">
          <img className="mx-auto block" src="../img/ReetsieWinningGourd.jpg" />
        </div>
        <p className="mb-2">
          Reetsie's gourd artwork has achieved many awards over the past few years, including
          multiple first places, best of shows, judges choice awards, and fine arts awards:
        </p>
        <p className="mb-2"><b>Best of Division</b>, FINE ARTS DIVISION, 2014 Oregon State Fair, Salem, Oregon</p>
        <p className="mb-2">
          <b>Best of Division</b>, HOBBY AND COLLECTIBLES Division, 2014 Oregon State Fair, Salem,
          Oregon
        </p>
        <p className="mb-2">
          <b>First Place and Best of Division</b>, MASTER'S DIVISION, 2011 Northwest Gourd
          Festival, Moses Lake, Washington
        </p>
        <p className="mb-2"><b>First Place</b>, FINE ARTS DIVISION, 2011 Riverside Fair, Riverside, California</p>
        <p className="mb-2">
          <b>Judges Choice and Best of Show</b>, FINE ARTS DIVISION, 2010 Riverside Fair,
          Riverside, California
        </p>
        <p className="mb-2">
          <b>First Place, Best of Division and Best of Show</b> at 2010 Northwest Gourd Festival,
          Moses Lake, Washington
        </p>
        <p className="mb-2">
          <b>Supervisors Award</b>, FINE ARTS DIVISION, 2008 Riverside Fair, Riverside, California
        </p>
        <p className="mb-2">
          <b>First, Best of Class and Special Award</b>, WOODBURNING, 2009 Oregon State Fair,
          Salem, Oregon
        </p>
        <p className="mb-2"><b>First</b>, 2009 Wuertz Gourd Festival</p>
        <p className="mb-2">
          <b>First and Judges Choice</b>, FINE ARTS DIVISION, 2009 Yamhill County Fair, Yamhill,
          Oregon
        </p>
        <p className="mb-2">
          <b>First and Best of Show</b>, MADE FROM NATURE DIVISION, 2009 Yamhill County Fair, Yamhill,
          Oregon
        </p>
        <p className="mb-2">
          <b>First and Best of Show</b>, WOODBURNED DIVISION, 2009 Yamhill County Fair, Yamhill,
          Oregon
        </p>
      </div>
    </div>
  );
};
