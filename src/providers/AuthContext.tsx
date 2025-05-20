import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from 'models/User';
import {jwtDecode} from "jwt-decode";
import api from 'api/apiConfig';
import axios from 'axios';

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token) {
      try {
        const decoded = jwtDecode(token) as { user: User; exp: number };
        const isExpired = decoded.exp * 1000 < Date.now();

        if (!isExpired) {

          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          if (storedUser) {
            setUser(JSON.parse(storedUser));
          } else {

            setUser(decoded.user);
          }
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } catch (e) {
        console.error('Nie udało się zdekodować tokena:', e);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }


    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    delete api.defaults.headers.common['Authorization'];
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
