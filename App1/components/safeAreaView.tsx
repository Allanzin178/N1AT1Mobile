import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeAreaViewEx() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "lightblue" }}>
      <Text>Dentro da SafeAreaView</Text>
    </SafeAreaView>
  );
}
