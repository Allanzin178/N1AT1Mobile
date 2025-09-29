import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import { Ionicons } from "@expo/vector-icons";

type MenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  badge?: string | number;
  badgeColor?: string;
  onPress?: () => void;
};

export default function MenuItem({
  icon,
  title,
  subtitle,
  badge,
  badgeColor = "#EA1D2C",
  onPress,
}: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View 
        style={styles.menuLeft}
        darkColor="rgba(0,0,0,0)"
        lightColor="rgba(0,0,0,0)"
      >
        <Ionicons name={icon} size={24} color="#717171" />
        <View 
          style={styles.menuText}
          darkColor="rgba(0,0,0,0)"
          lightColor="rgba(0,0,0,0)"
        >
          <Text style={styles.menuTitle}>{title}</Text>
          <Text 
            style={styles.menuSubtitle}
            darkColor="rgba(255,255,255,0.6)"
            lightColor="#717171"
          >
            {subtitle}
          </Text>
        </View>
      </View>
      <View 
        style={styles.menuRight}
        darkColor="rgba(0,0,0,0)"
        lightColor="rgba(0,0,0,0)"
      >
        {badge && (
          <View
            style={styles.badge}
            darkColor={badgeColor}
            lightColor={badgeColor}
          >
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={20} color="#717171" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  menuText: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 13,
  },
  menuRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },
});