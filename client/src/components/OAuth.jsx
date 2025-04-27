import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, photo: result.user.photoURL }),
      })

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/')
      
    } catch (error) {
      console.log('could not sign in with google', error);
      
    }
  }
  return (
    <div>
      <button onClick={handleGoogleClick} className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2 hover:bg-blue-50 transition mb-4">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-sm text-gray-700 font-medium">
          Continue with Google  
        </span>
      </button>
    </div>
  );
}
