import * as React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export interface AddGameProps {
  modalOpen: boolean;
  setModalOpen: any;
}

const AddGame: React.SFC<AddGameProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <Modal visible={modalOpen} animationType="slide">
      <View style={globalStyles.container}>
        <MaterialIcons
          name="close"
          size={24}
          style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
          onPress={() => setModalOpen(false)}
        />
        <Text>Hola!!!</Text>
      </View>
    </Modal>
  );
};

export default AddGame;

const styles = StyleSheet.create({
  modalContent: {
    paddingTop: 40
  }
});
