import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/Header";
import { DrawerScreenProps } from "@react-navigation/drawer";

export type AboutStackParamList = {
  About: undefined;
};

type Props = DrawerScreenProps<AboutStackParamList>;

const Stack = createStackNavigator<AboutStackParamList>();

const AboutStack = ({ navigation }: Props) => (
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
