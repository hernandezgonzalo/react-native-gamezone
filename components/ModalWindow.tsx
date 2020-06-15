import * as React from "react";
import { Modal, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

export interface ModalWindowProps {
  modalOpen: boolean;
  setModalOpen: any;
}

const ModalWindow: React.SFC<ModalWindowProps> = ({
  modalOpen,
  setModalOpen,
  children
}) => {
  return (
    <Modal visible={modalOpen} animationType="slide">
      <View style={globalStyles.container}>
        <MaterialIcons
          name="close"
          size={24}
          style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }}
          onPress={() => setModalOpen(false)}
        />
        {children}
      </View>
    </Modal>
  );
};

export default ModalWindow;
