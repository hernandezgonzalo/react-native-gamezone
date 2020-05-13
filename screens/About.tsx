import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
  return (
    <View>
      <Text style={styles.container}>About screen</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
