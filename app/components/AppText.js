import { Text } from "react-native"

import styles from "./AppText.styls"

export default function AppText({children, style = {}, ...otherProps}) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
