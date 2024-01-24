import { signIn } from '@features/auth';
import { delay } from '@shared/utils';
import { useCallback } from 'react';

export interface Credentials {
  username: string;
  password: string;
}

export const useSignInWithEmailAndPassword = () => {
  return useCallback(async (credentials: Credentials) => {
    await delay(200);
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      await signIn('token', 'userId');
    }
  }, []);
};
