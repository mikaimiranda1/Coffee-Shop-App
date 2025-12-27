import React from "react";
import {
    Pressable,
    PressableProps,
    StyleProp,
    Text,
    ViewStyle,
} from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

type Props = Omit<PressableProps, "style"> & {
  title: string;
  variant?: "primary" | "outline";
  style?: StyleProp<ViewStyle>; // only static styles
};

export default function Button({
  title,
  variant = "primary",
  style,
  ...props
}: Props) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isPrimary ? colors.brand : "transparent",
          borderWidth: 1,
          borderColor: colors.brand,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <Text
        style={{
          color: isPrimary ? colors.brandText : colors.brand,
          fontWeight: "700",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}
