import { useState } from "react";
import { Switch, View, Text } from "react-native";

export default function SwitchEx() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <Text>{enabled ? "StatusBar Ativado" : "StatusBar Desativado"}</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
    </View>
  );
}
