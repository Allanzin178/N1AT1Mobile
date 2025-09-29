import { useState } from "react";
import { Modal, View, Text, Button } from "react-native";

export default function ModalEx() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Abrir Modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} animationType="slide" transparent>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00000099",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text>Conteúdo do Modal</Text>
            <Button title="Fechar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
