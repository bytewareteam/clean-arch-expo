import {create} from 'zustand';

type AuthState = {
    token: string | null;
    userId: string | null;
}

const useAuth = create<AuthState>(() =>({
    token: null,
    userId: null,
}));

export const signIn = (token: string, userId: string) => {
    useAuth.setState({token, userId});
    return Promise.resolve();
};
export const signOut = () => {
    useAuth.setState({token: null, userId: null});
    return Promise.resolve();
};

export const useToken = () => useAuth(state => state.token);
export const useUserId = () => useAuth(state => state.userId);
export const useIsAuthenticated = () => useAuth(state => !!state.token);

export default useAuth;