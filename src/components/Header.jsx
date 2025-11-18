import { useLocation } from 'react-router-dom';

const routeNames = {
  '/': '',
  '/about': 'About Reetsie',
  '/awards': 'Gourd Art',
  '/sold': 'Gourd Art Sold',
  '/contact': 'Contact Reetsie'
};

export const Header = ({ onMenuToggle }) => {
  const location = useLocation();
  const routeName = routeNames[location.pathname] || '';

  return (
    <header className="bg-header-bg w-full flex items-center justify-between font-serif text-2xl text-white h-[69px] overflow-hidden">
      <div className="container mx-auto px-5 flex items-center justify-between w-full">
        <button 
          className="block lg:hidden bg-transparent border border-transparent min-w-[44px] min-h-[44px] my-[16.5px] pl-5 pr-3 py-2 -ml-2" 
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="block w-[22px] h-0.5 bg-white"></span>
          <span className="block w-[22px] h-0.5 bg-white mt-1.5"></span>
          <span className="block w-[22px] h-0.5 bg-white mt-1.5"></span>
        </button>
        <p className="font-script p-0 m-0 text-4xl max-[550px]:text-2xl">
          <span>Designs</span> by Reetsie
        </p>
        <p className="text-route-name mr-[4%] mt-[16.5px] hidden lg:block font-script">{routeName}</p>
      </div>
    </header>
  );
};
