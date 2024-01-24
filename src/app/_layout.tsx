import {Slot, useFocusEffect, useRouter} from "expo-router";
import {useIsAuthenticated} from "@features/auth/use-auth";

export default function RootLayout() {
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();
    useFocusEffect(() => {
        if (isAuthenticated) return;
        router.replace('/sign-in');
    });
    return (
        <Slot/>
    );
}