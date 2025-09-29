import { TouchableOpacity, Text } from "react-native";

export default function TouchableOpacityEx() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "green",
        padding: 10,
        marginBottom: 100,
        borderRadius: 8,
        alignItems: "center",
      }}
      onPress={() => alert("Você clicou!")}
    >
      <Text style={{ color: "white" }}>Botão Personalizado</Text>
    </TouchableOpacity>
  );
}
