import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function LittleLemonHeader() {
  return (
    <>
      <View style={{ backgroundColor: "#EE9972" }}>
        <Image
          source={require("../img/littleLemonLogo.png")}
          resizeMode="contain"
          style={pretty.logo}
          accessbile={true}
          accessibilityLabel={"Little Lemon Logo"}
        />
      </View>
    </>
  );
}

const pretty = StyleSheet.create({
  logo: {
    left: "10%",
    top: 20,
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
});
