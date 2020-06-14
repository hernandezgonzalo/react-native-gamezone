import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Props = {
  navigation: DrawerNavigationProp<any, any>;
  title: String;
};

export default function Header({ navigation, title }: Props) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
    >
      <MaterialIcons
        style={styles.icon}
        name="menu"
        size={28}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    fontWeight: "bold",
    color: "#333",
    letterSpacing: 1
  },
  headerImage: {
    width: 26,
    height: 26,
    marginRight: 10
  },
  icon: {
    position: "absolute",
    left: 16,
    color: "#333"
  }
});
