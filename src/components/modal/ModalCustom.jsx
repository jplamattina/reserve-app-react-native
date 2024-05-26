import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native"
import React from "react"
import { colors } from "../../constants/colors"

const ModalCustom = ({
  modalVisible,
  handleCancelModal,
  secondTextcontent,
  textContent,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalStyles}>
            <View style={styles.modalContainer}>
                <Text>{textContent}</Text>
                <Text>{secondTextcontent}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={handleCancelModal}>
                        <Text styles={styles.textsButton}>ACEPTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ModalCustom

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: colors.purple,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: colors.teal200,
    width: "80%",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 7,
    borderColor: colors.black,
    borderWidth: 2,
  },

  btnContainer: {
    width: 200,
    height: 40,
    flexDirection: "row",
    backgroundColor: colors.teal600,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent:'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  textModal: {
    fontWeight: "bold",
    color: colors.teal200
  },
  textsButton: {
    fontSize: 20,
  },
  textContainer: {},
})