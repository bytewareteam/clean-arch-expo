import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {Link} from "expo-router";

export default function HomePage() {
    return (
        <SafeAreaView>
            <Text>Hello world</Text>
            <Link href={"/(auth)/sign-in"}>Sign in</Link>
        </SafeAreaView>
    );
}