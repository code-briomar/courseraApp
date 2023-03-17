import * as React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginPage from "./components/LoginPage";

export default function App() {
  // COLOR SCHEME BINDING
  const colorScheme = useColorScheme();

  return (
    <>
      <View
        style={[
          pretty.container,
          colorScheme === "dark" ? pretty.darkBG : pretty.lightBG,
        ]}
      >
        <LittleLemonHeader />
        <Text>Color Scheme is : {colorScheme}</Text>
        {/* <WelcomeScreen /> */}
        {/* <LoginPage /> */}
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const pretty = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBG: {
    backgroundColor: "#264653",
  },
  lightBG: {
    backgroundColor: "#f6f4d2",
  },
});
