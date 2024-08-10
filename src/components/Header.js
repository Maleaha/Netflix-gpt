import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, PROFILE_ICON, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { onChangeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store) => store.gpt.showGptSearch);
  const handGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
  };
  // useEffect(()=>{

  // },[])
  const handleSignoutClicked = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLanguageChange=(e)=>{
    dispatch(onChangeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gradient-to-b from-black to-transparent z-10">
      <img className="w-32 md:w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
          <select className="py-2 px-4 border border-gray-300 bg-black text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
            ))}
          </select>
          )}

          <button className='bg-black text-white py-2 px-4 rounded-lg my-2' onClick={handGptSearchClick}>{ showGptSearch? "homepage" :"GPT Search"}</button>
          <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src={PROFILE_ICON} alt="Profile Icon" />
          <button className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded" onClick={handleSignoutClicked}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
