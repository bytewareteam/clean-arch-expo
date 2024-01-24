import {Button, Text, View} from "react-native";

type Props = {
    onSubmit: (email: string, password: string) => void;
}
export default function SignInForm(props: Props) {
    const handleSubmit = () => {
        props.onSubmit("admin", "admin");
    }
    return (
        <View>
            <Text>Sign In Form</Text>
            <Button title="Iniciar sesión" onPress={handleSubmit}/>
        </View>
    );
}