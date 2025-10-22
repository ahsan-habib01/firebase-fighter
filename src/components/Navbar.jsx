import { Link } from 'react-router';
import logo from '../assets/img/firebase-logo.png';
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';

const Navbar = () => {
  const { user, setUser, signOutUser, loading, } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast.success('Signout successful');
        setUser(null);
      })
      .catch(e => {
        toast.error(e.message);
      });
  };

  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-3">
          <li>
            <MyLink to={'/'}>Home</MyLink>
          </li>
          <li>
            <MyLink to={'/about-us'}>About US</MyLink>
          </li>
          <li>
            <MyLink to={'/profile'}>Profile</MyLink>
          </li>
        </ul>

        {loading ? (
          <HashLoader />
        ) : user ? (
          <div className="text-center space-y-3">
            <button
              className=""
              popoverTarget="popover-1"
              style={{ anchorName: '--anchor-1' }}
            >
              <img
                src={user?.photoURL || 'https://via.placeholder.com/88'}
                className="h-11 w-11 rounded-full mx-auto"
                alt=""
              />
            </button>

            <div
              className="dropdown dropdown-end menu w-52 rounded-box bg-base-100 shadow-sm space-y-2"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: '--anchor-1' }}
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="">{user?.email}</p>
              <button onClick={handleSignout} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={'/signin'}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
