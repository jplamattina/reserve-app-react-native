import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { FontAwesome5 } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { searchComponentsColors } from "../constants/colors"
import { Feather  } from '@expo/vector-icons';

const Search = ({ onSearch = () => {}, error = ""}) => {
  const [keyword, setKeyword] = useState("")

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Your Clay"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={handleSearch}>
      <Feather name="search" size={24} color={searchComponentsColors.teal600} />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: searchComponentsColors.teal400,
    backgroundColor: 'transparent',

  },
  input: {
    width: '90%',
    height: 40,
    margin: 5,
    padding: 0,
    fontSize: 18,
  },
})