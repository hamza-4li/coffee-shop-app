import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import reactLogo from "@/assets/images/partial-react-logo.png";

const app = () => {
  return (
    <View style={Style.container}>
      <ImageBackground
        source={reactLogo}
        resizeMode="cover"
        style={Style.image}
      >
        <Text style={Style.title}>Coffee Shop</Text>
        <Link href={"/about"} style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={Style.button}>
            <Text style={Style.buttonText}>About Page</Text>
          </Pressable>
        </Link>
        <Link href={"/menu"} style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={Style.button}>
            <Text style={Style.buttonText}>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default app;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 120,
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 4,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: 'center',
  },
  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});
