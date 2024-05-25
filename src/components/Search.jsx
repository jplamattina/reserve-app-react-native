import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { searchComponentsColors } from "../constants/colors"
import { FontAwesome6 } from '@expo/vector-icons';

const Search = ({ onSearch = () => {}, error = ""}) => {
  const [keyword, setKeyword] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Place"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome6 name="searchengin" size={24} color={searchComponentsColors.teal600}/>
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    borderBottomWidth: 1,
    borderColor: searchComponentsColors.teal600,
    backgroundColor: 'transparent',
    width: '80%',
  },
  input: {
    width: 200,
    height: 40,
    margin: 5,
    padding: 8,
    fontSize: 18,
  },
})