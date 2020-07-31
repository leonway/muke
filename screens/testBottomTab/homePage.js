import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function home({navigation}) {
  const goToPage = (routeName,params)=>{
    navigation.navigate(routeName,params)
  }
  return (
    <View style={s.container}>
      <Text>Home page</Text>
      <Button title='Go to Page1' onPress={()=>goToPage('Page1')} />
      <Button title='Go to Page2' onPress={()=>goToPage('Page2')} />
      <Button title='Go to Page3' onPress={()=>goToPage('Page3',{headerTitle:"page3 from Home"})} />
    </View>
  )
}

const s = StyleSheet.create({
  container:{
    flex: 1,
  }
})
