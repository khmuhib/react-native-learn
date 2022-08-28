import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor={'red'}/>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'red', backgroundColor: 'green'}}>App dsajda a kasjdj </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>App dsajda a kasjdj </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
        <Text>App dsajda a kasjdj </Text>
      </View>
    </View>

  )
}