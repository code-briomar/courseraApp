import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // SCREEN DIMENSIONS
  const window = useWindowDimensions();
  return (
    <>
      <View style={pretty.container}>
        <Image
          source={require("../img/littleLemonLogo.png")}
          resizeMode="contain"
          style={pretty.logo}
          accessibility={true}
          accessibilityLabel={"Little Lemon Logo"}
        />

        <Text style={pretty.bodyText}>
          Little Lemon is your friendly neighbourhood bistro that serves you
          refreshments alongside entertainment
        </Text>

        <Pressable
          style={pretty.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={pretty.buttonText}>LogIn</Text>
        </Pressable>
      </View>
    </>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "50%",
  },
  logo: {
    width: window.width,
    height: 100,
    margin: 10,
  },
  bodyText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
    color: "#333",
  },
  button: {
    padding: 5,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#457b9d",
    borderColor: "#457b9d",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fefae0",
    textAlign: "center",
    fontSize: 18,
  },
});
export default WelcomeScreen;
