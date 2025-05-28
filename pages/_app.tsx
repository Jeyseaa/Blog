// File: pages/_app.tsx
import type { AppProps } from 'next/app';
import { Provider, useDispatch } from 'react-redux';
import { store } from '../store';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { setUser } from '../store/slices/authSlice';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppInitializer />
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

// This component fetches the logged-in user and updates Redux
function AppInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        const { id, email, user_metadata } = data.user;

        dispatch(
          setUser({
            id,
            email: email ?? '',
            name: user_metadata?.name ?? 'User',
          })
        );
      }
    };

    loadUser();
  }, [dispatch]);

  return null;
}

export default MyApp;
