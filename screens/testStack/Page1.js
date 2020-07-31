import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function home({navigation}) {
  const goToPage = (routeName)=>{
    navigation.push(routeName)
  }
  return (
    <View style={s.container}>
      <Text>Page 1</Text>
      {/* <Button title='Go to Page1' onPress={()=>goToPage('Page1')} />
      <Button title='Go to Page2' onPress={()=>goToPage('Page2')} />
      <Button title='Go to Page3' onPress={()=>goToPage('Page3')} /> */}
    </View>
  )
}

const s = StyleSheet.create({
  container:{
    flex: 1,
  }
})
