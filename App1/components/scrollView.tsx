import { ScrollView, Text } from "react-native";

export default function ScrollViewEx() {
  return (
    <ScrollView>
      {Array.from({ length: 20 }).map((_, i) => (
        <Text key={i} style={{ padding: 10 }}>
          ScrollViewEx Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
