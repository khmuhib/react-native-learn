import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [text, setText] = useState('sadsa')

  return (
    <>
      <View>
        <Text>App dsadas</Text>
        <TextInput style={style.inputBox} placeholder="Name" onChangeText={ value =>{
          console.log(value)
          setText(value)
        }}/>
        <TextInput style={style.inputBox} placeholder="Age"/>
        <TextInput style={style.inputBox} placeholder="Phone"/>
      </View>
      <View>
        <Text>{text}</Text>
      </View>
    </>

  )
}

const style = StyleSheet.create({
  inputBox: {
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    paddingStart: 20,
    borderRadius: 50,

  }
})