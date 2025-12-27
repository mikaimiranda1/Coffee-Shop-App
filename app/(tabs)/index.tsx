import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>Coffee Shop ☕</Text>
      <Text>Home screen works</Text>
    </View>
  );
}
