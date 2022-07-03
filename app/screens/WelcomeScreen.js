import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <AppButton
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AppButton>
      <AppButton
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
        color="secondary"
      >
        Register
      </AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 180,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    paddingTop: 30,
    fontSize: 18,
  },
  button: {
    marginVertical: 10,
  }
});

export default WelcomeScreen;
