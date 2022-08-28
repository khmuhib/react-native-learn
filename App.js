import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1)
  }
  const decrement = () => {
    setCounter(counter-1)
  }

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={increment}>
        <View style={style.customButton}>
          <Text style={style.buttonText}>+</Text>
        </View>
      </TouchableOpacity>

      <Text style={style.counterText}>{counter}</Text>
      <TouchableOpacity onPress={decrement}>
        <View style={style.customButton}>
          <Text style={style.buttonText}>-</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  customButton: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center'
  },
  counterText: {
    fontSize: 32,
  }
}) 