import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();

  const handleSignoutClicked = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser(
              {uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });

      return()=> unsubscribe();
}, []);

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black to-transparent z-10">
      <img className="w-32 md:w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center space-x-4">
          <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src="https://occ-0-3631-64.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABf9O_Y-yToJ_3AGmhEQ9W85RfCPriDoLzS4-4qlNnvS4jHsNkHxE0ckYvsSRln__0G4uV5h1qxD9d6TwOAqiy2_Pzvoz2YA.png?r=652" alt="Profile Icon" />
          <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded" onClick={handleSignoutClicked}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
