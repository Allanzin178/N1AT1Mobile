import { Image } from "react-native";

export default function ImageEx() {
  return (
    <Image
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      style={{ width: 80, height: 80 }}
    />
  );
}
