import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export interface ReviewDetailsProps {}

const ReviewDetails: React.SFC<ReviewDetailsProps> = () => {
  return (
    <View>
      <Text style={styles.container}>ReviewDetails screen</Text>
    </View>
  );
};

export default ReviewDetails;

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});
