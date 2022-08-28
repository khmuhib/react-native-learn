import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { customStyle } from './style'

export default class App extends Component {
  render() {
    return (
      <>
        <View style={customStyle.container}>
          <View style={customStyle.square}></View>
        </View>
      </>

    )
  }
}


