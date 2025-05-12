import { useMutation } from '@tanstack/react-query';
import { loginUser, registerUser } from '../api/authApi';

export const useRegister = () =>
  useMutation({
    mutationFn: registerUser,
  });

export const useLogin = () =>
  useMutation({
    mutationFn: loginUser,
  });
