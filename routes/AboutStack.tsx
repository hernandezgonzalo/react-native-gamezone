import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/Header";

export type AboutStackParamList = {
  About: undefined;
};

const Stack = createStackNavigator<AboutStackParamList>();

const AboutStack = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="About"
    screenOptions={{
      headerStyle: { backgroundColor: "#f4511e" },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold" }
    }}
  >
    <Stack.Screen
      name="About"
      component={About}
      options={{
        headerTitle: () => <Header navigation={navigation} title="About" />
      }}
    />
  </Stack.Navigator>
);

export default AboutStack;
