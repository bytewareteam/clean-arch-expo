import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  return (
    <SafeAreaView>
      <Text>Hello world</Text>
      <Link href="/(auth)/sign-in">Sign in</Link>
    </SafeAreaView>
  );
}
