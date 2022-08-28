import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [list, setlist] = useState([
    { id: 1, name: 'Kh Muhib' },
    { id: 2, name: 'Asraf' },
    { id: 3, name: 'Sifat' },
    { id: 4, name: 'foysal' },
    { id: 5, name: 'Shifa' },
    { id: 6, name: 'Shakib' },
    { id: 4, name: 'foysal' },
    { id: 5, name: 'Shifa' },
    { id: 6, name: 'Shakib' },
    { id: 4, name: 'foysal' },
    { id: 5, name: 'Shifa' },
    { id: 6, name: 'Shakib' },
  ])
  return (
    <View style={style.container}>
      <ScrollView>
        
      {list.map((listData, index) => {
        return (
          <View key={listData.index}>
            <Text style={style.customText}>{listData.id}: {listData.name}</Text>
          </View>
        )

      })}
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 10,
    flex: 1,
  },
  customText: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    textAlign: 'center',
  }
})