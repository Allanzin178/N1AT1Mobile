import { TextInput } from "react-native";

export default function TextInputEx(){
    return (
        <TextInput 
            placeholder="Escreva aqui"
            style={{
                padding: 10,
                borderWidth: 1,
                margin: 12
            }}
            multiline={false}
        />
    )
}