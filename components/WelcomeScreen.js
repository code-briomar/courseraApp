import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  SectionList,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

//Data to be displayed -> MENU
const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

// CUSTOM ITEM COMPONENT
const Item = (props) => (
  <View style={pretty.innerContainer}>
    <Text style={pretty.itemText}>{props.name}</Text>
  </View>
);
const WelcomeScreen = () => {
  const [showMenu, setShowMenu] = useState(false);

  // RENDER ITEMS OF THE MENU
  const renderItem = ({ item }) => <Item name={item} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={pretty.sectionHeader}>{title}</Text>
  );
  return (
    <>
      {/* HEADER SECTION -> Displayed when showMenu state is false */}
      {!showMenu && (
        <ImageBackground
          source={require("../img/LittleLemonBackground.png")}
          resizeMode="center"
          style={pretty.imgBackground}
        >
          <Text style={pretty.infoSection}>
            {/* Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. View
            our menu to explore our cuisine with daily specials! */}
            Welcome to Little Lemon
          </Text>
        </ImageBackground>
      )}
      {/* BUTTON -> Displayed Always. Pressable Component */}
      <TouchableOpacity>
        <Pressable style={pretty.button} onPress={() => setShowMenu(!showMenu)}>
          <Text style={pretty.buttonText}>
            {showMenu ? "Home" : "View Menu"}
          </Text>
        </Pressable>
      </TouchableOpacity>
      {/* MENU -> Data to be displayed using a section list */}
      {showMenu && (
        <SectionList
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      )}
    </>
  );
};

const pretty = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  button: {
    fontSize: 22,
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
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  imgBackground: {
    width: 300,
    height: 400,
    justifyContent: "center",
  },
});

export default WelcomeScreen;
