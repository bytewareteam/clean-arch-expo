import { signOut } from '@features/auth';
import { useCallback } from 'react';

export const useSignOut = () => {
  return useCallback(() => signOut(), []);
};
