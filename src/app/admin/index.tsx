import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {useSignOut} from "@features/auth/sign-out/use-sign-out";
import {useRouter} from "expo-router";

export default function AdminIndex() {
    const signOut = useSignOut();
    const router = useRouter();
    const onSignOut = async () => {
        await signOut();
        router.replace('/(auth)/sign-in')
    }
    return (
        <SafeAreaView>
            <Text>Admin</Text>
            <Text onPress={onSignOut}>Sign out</Text>
        </SafeAreaView>
    );
}