import * as React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export interface ReviewDetailsProps {}

const ReviewDetails: React.SFC<ReviewDetailsProps> = () => {
  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails screen</Text>
    </View>
  );
};

export default ReviewDetails;
