import { useState } from "react";
import { Switch, View, Text } from "react-native";

export default function SwitchEx() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <Text>{enabled ? "Ativado" : "Desativado"}</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
    </View>
  );
}
