"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/utils/supabase/client';

type AuthState = {
  user: any | null;
  role: string | null;
  loading: boolean;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthState>({ user: null, role: null, loading: true, refresh: async () => {} });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await supabase.auth.getUser();
      const supaUser = data?.user ?? null;
      setUser(supaUser);

      if (supaUser) {
        const { data: profile } = await supabase.from('profiles').select('role').eq('id', supaUser.id).maybeSingle();
        const resolvedRole = profile?.role ?? supaUser.user_metadata?.role ?? null;
        setRole(resolvedRole);
      } else {
        setRole(null);
      }
    } catch (err) {
      console.error('AuthContext.load error', err);
      setUser(null);
      setRole(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      load();
    });
    return () => {
      try {
        listener.subscription.unsubscribe();
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return <AuthContext.Provider value={{ user, role, loading, refresh: load }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
