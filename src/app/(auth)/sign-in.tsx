import { SignInForm, useSignInWithEmailAndPassword } from '@features/auth';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  const signIn = useSignInWithEmailAndPassword();
  const router = useRouter();

  const handleSignInWithEmailAndPassword = async (email: string, password: string) => {
    await signIn({ password, username: email });
    router.replace('/admin');
  };

  return (
    <SafeAreaView>
      <SignInForm onSubmit={handleSignInWithEmailAndPassword} />
    </SafeAreaView>
  );
}
