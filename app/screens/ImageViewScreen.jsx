import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function ImageViewScreen(props) {
  return (
    <View style={styles.Container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <View style={styles.resetIcon}></View>
      <View style={styles.fontIcon}></View>
      <View style={styles.logoContainer}>
        <ImageBackground
          resizeMode="contain"
          style={styles.Image}
          source={require("../assets/chair.jpg")}
        >
         <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
         <Text style={styles.text}>Sell What You Don't Need</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    flex: 1,
    justifyContent: "flex-end",
    
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  resetIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc8",
    position: "absolute",
    bottom: 40,
    left: 30,
  },
  fontIcon: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    position: "absolute",
    bottom: 40,
    right: 30,
  },
  
  logo: {
    width: 100,
    height: 100,
    position: "relative",
    top: 200,
    left: 130,
 },
 text: {
    position: "absolute",
    top: 300,
    left: 85,

 },
  Image: {
    width: "100%",
    height: "100%",
  },
});
export default ImageViewScreen;
