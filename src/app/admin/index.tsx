import { useSignOut } from '@features/auth';
import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AdminIndex() {
  const signOut = useSignOut();
  const router = useRouter();
  const onSignOut = async () => {
    await signOut();
    router.replace('/(auth)/sign-in');
  };
  return (
    <SafeAreaView>
      <Text>Admin</Text>
      <Text onPress={onSignOut}>Sign out</Text>
    </SafeAreaView>
  );
}
