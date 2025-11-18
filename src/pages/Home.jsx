import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="w-full flex flex-wrap gap-0 md:gap-[4%]">
      <div className="w-full md:w-[48%] box-border">
        <div className="relative pb-[56.25%] pt-[35px] h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            height="315"
            width="560"
            src="//www.youtube.com/embed/X_7I35SMbCw?feature=player_embedded"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-title font-sans text-xl mb-2">New Gourd Art</p>
        <p className="mb-2">N.W. Icons and Fantasy 2 are two of Reetsie's most recent pieces.</p>
        <p className="mb-2">
          <Link to="/awards" className="text-link">View more Award Winning Gourds.</Link>
        </p>
      </div>
      <div className="w-full md:w-[48%] box-border">
        <p className="text-title font-sans text-xl mb-2">Award Winning Artwork</p>

        <div className="w-full flex flex-wrap gap-0 md:gap-[4%] items-start">
          <p className="w-full md:w-[65.33%] box-border mb-2">
            Marguerite "Reetsie" Fuller is a self taught artist and professional equine trainer who
            has always been enthralled by the beauty she sees around her in nature.
          </p>
          <img className="w-full md:w-[30.67%] box-border" src="img/ReetsieProfileHead.jpg" />
        </div>

        <p className="mb-2">
          Her pieces include wildlife, domesticated animals, Native American cultural pieces,
          Southwestern themes, flora and a variety of other idiosyncratic pieces as the "mood"
          strikes her.
        </p>
        <p className="mb-2">
          <Link to="/about" className="text-link">Learn more about Reetsie</Link>
        </p>
        <hr className="my-6 border-0 border-t border-[#E1E1E1]" />
        <p className="text-title font-sans text-xl mb-2">Reetsie's Gourd Art</p>
        <p className="mb-2">
          View a sampling of Reetsie's fine art and learn more about her{' '}
          <Link to="/awards" className="text-link">Award Winning Gourds.</Link>
        </p>
      </div>
    </div>
  );
};
