import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function Header({title,navigation}) {
  // const navigation = useNavigation();
  // const openMenu = () => {
  //   navigation.openDrawer()
  // }

  return (
    <ImageBackground style={s.header} source={require('../assets/game_bg.png')}>
        {/* <Ionicons name="heart-half-outline" size={24} style={s.icon}  /> */}
        <View style={s.content}>
            <Image source={require('../assets/heart_logo.png')} style={s.headerImage} />
            <Text style={s.headerText}>
              {title}
            </Text>
        </View>
    </ImageBackground>
  )
}

const s = StyleSheet.create({
  header:{
    // flex: 1,
    width:"100%",
    height: 60,
    // margin:0,
    // padding:0,
    // borderColor:'green',
    // borderWidth: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  icon:{
    // width:40,
    // height: 40,
    marginLeft: 10,
  },
  content:{
    flex:1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerImage:{
    marginHorizontal: 10,
    width:26,
    height: 26,
  }
})
