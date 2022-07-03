import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import colors from "../config/colors"
import styles from "./AppButton.style"

export default function AppButton({ children, color = "primary", style = {}, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}
