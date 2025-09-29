import { FlatList, Text } from "react-native";

export default function FlatListEx() {
  const data = ["Item 1", "Item 2", "Item 3"];
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Text style={{ padding: 10 }}>{item}</Text>}
    />
  );
}
