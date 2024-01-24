import {useCallback} from "react";
import {signOut} from "@features/auth/use-auth";

export const useSignOut = () => {
    return useCallback(() => signOut(), [])
}