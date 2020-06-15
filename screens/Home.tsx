import * as React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../routes/HomeStack";
import Card from "../components/Card";
import { dummyData } from "../dummyData";
import ModalWindow from "../components/ModalWindow";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const Home = ({ navigation }: Props) => {
  const [reviews, setReviews] = useState(dummyData);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <ModalWindow {...{ modalOpen, setModalOpen }}>
        <ReviewForm />
      </ModalWindow>

      <MaterialIcons
        name="add"
        size={24}
        style={globalStyles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
