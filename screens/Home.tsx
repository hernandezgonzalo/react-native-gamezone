import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const [reviews, setReviews] = useState([
    { title: "tittle 1", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "tittle 2", rating: 3, body: "lorem ipsum", key: "2" },
    { title: "tittle 3", rating: 1, body: "lorem ipsum", key: "3" }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
