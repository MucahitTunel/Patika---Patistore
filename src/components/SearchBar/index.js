import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'

const SearchBar = () => {
  return (
    <TextInput style={styles.input} placeholder="Ara..." />
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        padding: 10,
        height: 40,
        backgroundColor: "#e1e6ed",
        borderRadius: 8
    }
})

export default SearchBar