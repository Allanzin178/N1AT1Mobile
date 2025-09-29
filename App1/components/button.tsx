import { Button, Alert } from "react-native";

export default function ButtonEx() {
  return (
    <Button
      title="Clique aqui"
      onPress={() => Alert.alert("Olá!", "Você clicou no botão.")}
    />
  );
}
