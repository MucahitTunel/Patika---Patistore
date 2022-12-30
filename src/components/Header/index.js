import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#741ba1"
    }
})

export default Header