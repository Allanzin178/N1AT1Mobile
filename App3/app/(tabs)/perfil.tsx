import { Image, StyleSheet, View as RNView } from "react-native";

import { ScrollView, Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Advertise from "@/components/Advertise";
import MenuItem from "@/components/MenuItem";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <Image source={require("../../assets/images/favicon.png")} style={styles.image} />
          <View style={styles.profileInner}>
            <Text>Diego Rodrigues</Text>
            <Text>Adicionar telefone de acesso</Text>
          </View>
        </View>

        <Advertise imageSource={require("../../assets/images/favicon.png")}/>
        <MenuItem 
            icon="chatbubble-outline"
            title="Conversas"
            subtitle="Meu histórico de conversas"
            badge={2}
        />
        <MenuItem
          icon="notifications-outline"
          title="Notificações"
          subtitle="Minha central de notificações"
          badge={2}
        />
        
        <MenuItem
          icon="card-outline"
          title="Dados da conta"
          subtitle="Minhas informações da conta"
          badge={1}
          badgeColor="#FFA500"
        />
        
        <MenuItem
          icon="wallet-outline"
          title="Pagamentos"
          subtitle="Meus meios de pagamento"
          badge="NOVO"
        />
        
        <MenuItem
          icon="heart-outline"
          title="Clube iFood"
          subtitle="Todos benefícios exclusivos"
        />
        
        <MenuItem
          icon="pricetag-outline"
          title="Cupons"
          subtitle="Meus cupons de desconto"
        />
        
        <MenuItem
          icon="people-outline"
          title="Comunidade iFood"
          subtitle="Junte-se a nós"
          badge="NOVO"
        />
        
        <MenuItem
          icon="keypad-outline"
          title="Código de entrega"
          subtitle="Ative ou desative o código"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    paddingVertical: 20,
    marginHorizontal: 16
  },
  profile: {
    flexDirection: "row",
    alignContent: 'center',
    gap: 15,
    paddingHorizontal: 12,
  },
  profileInner: {
    justifyContent: 'center'
  },
  image: {
    borderRadius: 100
  },
});
