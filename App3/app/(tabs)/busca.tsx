import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function CreditCardScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View 
          style={styles.header}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(0,0,0,0)"
        >
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons name="close" size={28} color="#717171" />
          </TouchableOpacity>
        </View>

        <View 
          style={styles.illustrationContainer}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(0,0,0,0)"
        >
          <View style={styles.gratisCircle}>
            <Text style={styles.gratisText}>GRÁTIS</Text>
          </View>
          <View 
            style={styles.phoneCard}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <View style={styles.phone}>
              <View style={styles.phoneScreen} />
            </View>
            <View style={styles.creditCard}>
              <Text style={styles.cardText}>VISA</Text>
            </View>
          </View>
        </View>

        <Text style={styles.title}>
          Peça seu Cartão de Crédito Mercado Pago e aproveite essas vantagens exclusivas:
        </Text>

        <View 
          style={styles.benefits}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(0,0,0,0)"
        >
          <View 
            style={styles.benefitItem}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <Text 
              style={styles.benefitBullet}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.6)"
            >
              •
            </Text>
            <Text 
              style={styles.benefitText}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.7)"
            >
              Parcele suas compras em até{" "}
              <Text 
                style={styles.benefitBold}
                lightColor="#000"
                darkColor="#fff"
              >
                18x sem juros
              </Text>{" "}
              no Mercado Livre
            </Text>
          </View>

          <View 
            style={styles.benefitItem}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <Text 
              style={styles.benefitBullet}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.6)"
            >
              •
            </Text>
            <Text 
              style={styles.benefitText}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.7)"
            >
              <Text 
                style={styles.benefitBold}
                lightColor="#000"
                darkColor="#fff"
              >
                Anuidade Grátis
              </Text>
            </Text>
          </View>

          <View 
            style={styles.benefitItem}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <Text 
              style={styles.benefitBullet}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.6)"
            >
              •
            </Text>
            <Text 
              style={styles.benefitText}
              lightColor="#717171"
              darkColor="rgba(255,255,255,0.7)"
            >
              Segurança e controle: acompanhe seus gastos pelo App, garantindo{" "}
              <Text 
                style={styles.benefitBold}
                lightColor="#000"
                darkColor="#fff"
              >
                controle de todas suas transações.
              </Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>Peça já</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 32,
  },
  header: {
    alignItems: "flex-end",
    marginBottom: 16,
  },
  closeButton: {
    padding: 8,
  },
  illustrationContainer: {
    alignItems: "center",
    marginBottom: 32,
    position: "relative",
    height: 140,
    justifyContent: "center",
  },
  gratisCircle: {
    position: "absolute",
    left: 60,
    top: 0,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  gratisText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#000",
  },
  phoneCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: -30,
    marginTop: 10,
  },
  phone: {
    width: 90,
    height: 110,
    backgroundColor: "#4A9EFF",
    borderRadius: 12,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  phoneScreen: {
    width: 70,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  creditCard: {
    width: 110,
    height: 75,
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 26,
    paddingHorizontal: 8,
  },
  benefits: {
    marginBottom: 32,
  },
  benefitItem: {
    flexDirection: "row",
    marginBottom: 20,
    paddingRight: 8,
  },
  benefitBullet: {
    fontSize: 16,
    marginRight: 12,
  },
  benefitText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
  },
  benefitBold: {
    fontWeight: "600",
  },
  requestButton: {
    backgroundColor: "#3483FA",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  requestButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});