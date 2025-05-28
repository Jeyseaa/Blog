import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useDispatch } from 'react-redux';
import { clearUser } from '../store/slices/authSlice';
import { useRouter } from 'next/router';

export default function Logout() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await supabase.auth.signOut();
      dispatch(clearUser());
      localStorage.removeItem('isLoggedIn'); // Clear login status flag
      router.push('/login');
    };
    doLogout();
  }, [dispatch, router]);

  return <p>Logging out...</p>;
}
