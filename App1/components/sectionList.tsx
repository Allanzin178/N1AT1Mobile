import { SectionList, Text } from "react-native";

export default function SectionListEx() {
  const sections = [
    { title: "Seção de Frutas", data: ["Maçã", "Banana", "Laranja"] },
    { title: "Seção de Legumes", data: ["Cenoura", "Batata", "Tomate"] },
  ];

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Text style={{ padding: 5 }}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: "bold", padding: 5 }}>{section.title}</Text>
      )}
    />
  );
}
