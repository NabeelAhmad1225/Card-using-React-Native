import React from "react";
import { Image, ImageBackground, StyleSheet,Text,View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/Background.jpg")}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Text style={styles.tagLine}>
        Sell What You Don't Need
      </Text>

      </View>
      <View style={styles.buttonContainer}>
      <AppButton title="login" onPress={() => console.log("Login")}/>
      <AppButton title="register" color="#4ecdc4" onPress={() => console.log("Reigister")}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: "center",
    
  },
  buttonContainer: {
    padding: 20,
    width: "100%",

  },
  tagLine: {
    fontSize: 22,
    fontWeight: "600",
    paddingVertical: 20,
  },
  
});

export default WelcomeScreen;
