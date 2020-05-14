import * as React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text>About screen</Text>
    </View>
  );
};

export default About;
