import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function LittleLemonHeader() {
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: "#EE9972" }}>
          <Image
            source={require("../img/picture 1.png")}
            style={pretty.logo}
            resizeMode="contain"
            accessbile={true}
            accessibilityText={"Picture 1"}
          />
        </View>
        <Image
          source={require("../img/picture 2.png")}
          style={pretty.logo}
          resizeMode="contain"
          accessbile={true}
          accessibilityText={"Picture 2"}
        />
        <Image
          source={require("../img/picture 3.png")}
          style={pretty.logo}
          resizeMode="contain"
          accessbile={true}
          accessibilityText={"Picture 3"}
        />
        <Image
          source={require("../img/picture 4.png")}
          style={pretty.logo}
          resizeMode="contain"
          accessbile={true}
          accessibilityText={"Picture 4"}
        />
      </ScrollView>
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
