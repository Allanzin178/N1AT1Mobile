import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { ScrollView, Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function RestaurantScreen() {
  const ProductCard = ({
    image,
    price,
    title,
  }: {
    image: any;
    price: string;
    title: string;
  }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={image} style={styles.productImage} />
      <Text 
        style={styles.productPrice}
        lightColor="#000"
        darkColor="#fff"
      >
        {price}
      </Text>
      <Text 
        style={styles.productTitle}
        lightColor="#717171"
        darkColor="rgba(255,255,255,0.6)"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View 
          style={styles.headerImageContainer}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(0,0,0,0)"
        >
          <Image
            source={require("../../assets/images/favicon.png")}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View 
          style={styles.restaurantInfoCard}
          lightColor="#fff"
          darkColor="#1a1a1a"
        >
          <Text 
            style={styles.restaurantName}
            lightColor="#000"
            darkColor="#fff"
          >
            Bolos do Flávio - Águas Claras
          </Text>
          <Text 
            style={styles.restaurantDetails}
            lightColor="#717171"
            darkColor="rgba(255,255,255,0.6)"
          >
            Entrega realizada • 1,8 km • Min R$ 30,00
          </Text>

          <View 
            style={styles.ratingContainer}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <View 
              style={styles.rating}
              lightColor="rgba(0,0,0,0)"
              darkColor="rgba(0,0,0,0)"
            >
              <Ionicons name="star" size={14} color="#FFB800" />
              <Text 
                style={styles.ratingText}
                lightColor="#000"
                darkColor="#fff"
              >
                4,9 (1.203 avaliações)
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#717171" />
          </View>

          <View 
            style={styles.deliveryInfo}
            lightColor="rgba(0,0,0,0)"
            darkColor="rgba(0,0,0,0)"
          >
            <Text 
              style={styles.deliveryLabel}
              lightColor="#000"
              darkColor="#fff"
            >
              Entrega
            </Text>
            <View 
              style={styles.deliveryTime}
              lightColor="rgba(0,0,0,0)"
              darkColor="rgba(0,0,0,0)"
            >
              <Ionicons name="time-outline" size={16} color="#717171" />
              <Text 
                style={styles.deliveryTimeText}
                lightColor="#000"
                darkColor="#fff"
              >
                Hoje, 35-45 min
              </Text>
              <Text style={styles.deliveryChange}>• Grátis</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#717171" />
          </View>
        </View>

        <View 
          style={styles.section}
          lightColor="rgba(0,0,0,0)"
          darkColor="rgba(0,0,0,0)"
        >
          <Text 
            style={styles.sectionTitle}
            lightColor="#000"
            darkColor="#fff"
          >
            Destaques
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsScroll}
          >
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 30,00"
              title="Metade Cenoura com Cobertura"
            />
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 52,00"
              title="Bolo Cenoura com cobertura"
            />
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 34,00"
              title="Bolo de Formigueiro"
            />
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productsScroll}
          >
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 23,00"
              title="Metade Milho com Goiabada"
            />
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 38,00"
              title="Bolo de Milho"
            />
            <ProductCard
              image={require("../../assets/images/favicon.png")}
              price="R$ 48,00"
              title="Bolo de Fubá Romeu e Julieta"
            />
          </ScrollView>

          <TouchableOpacity 
            style={styles.couponButton}
          >
            <Text style={styles.couponText}>💜 R$ 50 em cupons aqui</Text>
            <Ionicons name="chevron-forward" size={16} color="#717171" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    position: "relative",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteButton: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  restaurantInfoCard: {
    padding: 16,
    marginTop: -20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  restaurantDetails: {
    fontSize: 13,
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  ratingText: {
    fontSize: 14,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    gap: 12,
  },
  deliveryLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  deliveryTime: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  deliveryTimeText: {
    fontSize: 14,
  },
  deliveryChange: {
    fontSize: 14,
    color: "#00A862",
    fontWeight: "600",
  },
  section: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  productsScroll: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  productCard: {
    width: 140,
    marginRight: 12,
  },
  productImage: {
    width: 140,
    height: 140,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 13,
    lineHeight: 18,
  },
  couponButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  couponText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8B5CF6",
  },
});