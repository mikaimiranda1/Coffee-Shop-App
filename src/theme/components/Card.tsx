import React from "react";
import { View, ViewProps } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Card({ style, ...props }: ViewProps) {
  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: colors.card,
          borderRadius: 14,
          padding: spacing.md,
          borderWidth: 1,
          borderColor: colors.border,
        },
        style,
      ]}
    />
  );
}
