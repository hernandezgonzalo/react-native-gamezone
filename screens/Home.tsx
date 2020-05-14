import * as React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
    </View>
  );
};

export default Home;
