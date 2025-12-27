import { router } from "expo-router";
import { Text, View } from "react-native";
import Button from "../../../src/theme/components/Button";
import { spacing } from "../../../src/theme/theme/spacing";
import { typography } from "../../../src/theme/theme/typography";

export default function CartScreen() {
  return (
    <View style={{ flex: 1, padding: spacing.md }}>
      <Text style={typography.h1}>Cart</Text>

      <Text style={{ marginTop: spacing.sm }}>
        Next: show selected items + subtotal.
      </Text>

      <Button
        title="Go to Checkout"
        onPress={() => router.push("./checkout")}
        style={{ marginTop: spacing.lg }}
      />
    </View>
  );
}
