import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

const MOCK_MENU = [
  { id: "latte", name: "Latte", price: 4.5 },
  { id: "coldbrew", name: "Cold Brew", price: 4.0 },
  { id: "matcha", name: "Matcha Latte", price: 5.0 },
];

export default function MenuScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {MOCK_MENU.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => {
            router.push({
              pathname: "./[itemId]",
              params: { itemId: item.id },
            });
          }}
          style={{ paddingVertical: 14, borderBottomWidth: 1 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name}</Text>
          <Text>${item.price.toFixed(2)}</Text>
        </Pressable>
      ))}
    </View>
  );
}
