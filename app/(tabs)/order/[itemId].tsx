import Button from "@/src/theme/components/Button";
import { cartStore } from "@/src/theme/store/cartStore";
import { spacing } from "@/src/theme/theme/spacing";
import { typography } from "@/src/theme/theme/typography";
import { router, useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

// Temporary mock menu lookup (we’ll replace with Firebase later)
const MENU: Record<string, { id: string; name: string; basePrice: number }> = {
  latte: { id: "latte", name: "Latte", basePrice: 4.5 },
  coldbrew: { id: "coldbrew", name: "Cold Brew", basePrice: 4.0 },
  matcha: { id: "matcha", name: "Matcha Latte", basePrice: 5.0 },
};

export default function ItemScreen() {
  const { itemId } = useLocalSearchParams<{ itemId: string }>();
  const item = useMemo(() => (itemId ? MENU[itemId] : undefined), [itemId]);
  const [qty, setQty] = useState(1);

  if (!item) {
    return (
      <View style={{ flex: 1, padding: spacing.md }}>
        <Text style={typography.h1}>Item not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: spacing.md }}>
      <Text style={typography.h1}>{item.name}</Text>
      <Text style={{ marginTop: spacing.sm }}>${item.basePrice.toFixed(2)}</Text>

      <View style={{ flexDirection: "row", gap: 10, marginTop: spacing.lg }}>
        <Button title="-" variant="outline" onPress={() => setQty(Math.max(1, qty - 1))} />
        <View style={{ justifyContent: "center" }}>
          <Text style={typography.h2}>Qty: {qty}</Text>
        </View>
        <Button title="+" variant="outline" onPress={() => setQty(qty + 1)} />
      </View>

      {/* Modifiers UI comes next */}
      <Text style={{ marginTop: spacing.lg }}>
        Next: Size / Milk / Syrups / Shots / Temp UI
      </Text>

      <Button
        title="Add to Cart"
        onPress={() => {
          cartStore.addItem({
            itemId: item.id,
            name: item.name,
            basePrice: item.basePrice,
            quantity: qty,
            modifiers: [], // next step
          });
          router.push("./cart");
        }}
        style={{ marginTop: spacing.lg }}
      />
    </View>
  );
}
