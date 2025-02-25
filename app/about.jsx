import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
const expage = () => {
  return (
    <ScrollView contentContainerStyle = {Style.container}>
      <Text style = {Style.title}>About Us</Text>
      <Text style = {Style.description}>Welcome to our app! We're committed to providing the best user experience.
        Our app is designed to help you stay productive, informed, and entertained.
        Whether you're at home, work, or on the go, we've got you covered. Thank you for using our app!</Text>
    </ScrollView>
  )
}

export default expage

const Style = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10,


  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: 'white',
    lineHeight: 24,
  }
})