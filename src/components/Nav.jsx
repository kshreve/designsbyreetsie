import { Link, useLocation } from 'react-router-dom';

const routes = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About Reetsie' },
  { url: '/awards', name: 'Award Winning Gourds' },
  { url: '/sold', name: 'Gourd Art Sold' },
  { url: '/contact', name: 'Contact' }
];

export const Nav = ({ isOpen, onLinkClick }) => {
  const location = useLocation();

  const isActive = (url) => {
    return location.pathname === url ? 'active' : '';
  };

  return (
    <nav className={`bg-nav-bg w-full m-0 text-white p-2.5 lg:block ${isOpen ? 'block' : 'hidden'}`}>
      <div className="container mx-auto">
        <ul className="m-0 mx-2.5 p-0 list-none flex flex-col lg:flex-row items-start lg:items-center gap-2">
          {routes.map((route) => (
            <li key={route.url} className="mb-0 lg:pr-2 lg:border-r border-[#979797] lg:last:border-r-0 pb-2 lg:pb-0 border-b lg:border-b-0 border-[#979797] last:border-b-0 lg:last:border-b-0 w-full lg:w-auto" onClick={onLinkClick}>
              <Link 
                to={route.url} 
                className={`text-[#979797] font-script text-left lg:text-center no-underline font-semibold text-base block ${isActive(route.url) ? 'text-white' : ''}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
