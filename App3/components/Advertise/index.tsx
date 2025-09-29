import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Text, View } from "../Themed";
import { Ionicons } from "@expo/vector-icons";

export default function Advertise({ imageSource }: { imageSource: ImageSourcePropType }){
    return (
        <View
            style={styles.advertise}
            darkColor="rgba(255,255,255,0.05)"
            lightColor="rgba(0,0,0,0.05)"
        >
            <Image source={imageSource} style={styles.image} />
            <View
            style={styles.advertiseTextContainer}
            darkColor="rgba(0,0,0,0)"
            lightColor="rgba(0,0,0,0)"
            >
            <Text style={styles.advertiseTextTitle}>Entrega mais segura!</Text>
            <Text 
                style={styles.advertiseTextContent} 
                darkColor="rgba(255, 255, 255, 0.8)"
                lightColor="#6e6e6eff"
            >
                Agora dá pra alterar o código de entrega. Vem ver!
            </Text>
            </View>
            <View 
                style={styles.advertiseExtra} 
                darkColor="rgba(255, 255, 255, 0.89)"
                lightColor="#ff0000ff"
            >
            <Text 
                style={styles.advertiseExtraText}
                darkColor="rgba(0, 0, 0, 0.8)"
                lightColor="#ffffffff"
            >
                NOVO!
            </Text>
            </View>
            <Ionicons name="chevron-forward" color="#717171"/>
        </View>
    )
    
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 100
  },
  advertise: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 12,
    gap: 15,
  },
  advertiseTextContainer: {
    flex: 1,
  },
  advertiseTextTitle: {
    fontSize: 14,
    fontWeight: "600",
  },
  advertiseTextContent: {
    fontSize: 12,
  },
  advertiseExtra: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 40,
  },
  advertiseExtraText: {
    textAlign: 'center',
    fontSize: 8,
    fontWeight: '600'
  }
});
