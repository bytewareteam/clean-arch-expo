import { useIsAuthenticated } from '@features/auth';
import { Slot, useFocusEffect, useRouter } from 'expo-router';

export default function RootLayout() {
  const isAuthenticated = useIsAuthenticated();
  const router = useRouter();
  useFocusEffect(() => {
    if (isAuthenticated) return;
    router.replace('/sign-in');
  });
  return <Slot />;
}
