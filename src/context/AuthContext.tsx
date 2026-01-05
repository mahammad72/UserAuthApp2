import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from storage on app start
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    const userData = { name, email, password };
    await AsyncStorage.setItem('registeredUser', JSON.stringify(userData));
    setUser({ name, email });
    await AsyncStorage.setItem('user', JSON.stringify({ name, email }));
  };

  const login = async (email: string, password: string) => {
    const storedUser = await AsyncStorage.getItem('registeredUser');

    if (!storedUser) {
      throw new Error('User not found. Please sign up first.');
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.email !== email || parsedUser.password !== password) {
      throw new Error('Incorrect email or password');
    }

    const loggedInUser = { name: parsedUser.name, email: parsedUser.email };
    setUser(loggedInUser);
    await AsyncStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
