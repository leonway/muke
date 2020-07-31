import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FlatList from '../screens/testDrawer/flatList'
import SectionList from '../screens/testDrawer/sectionList'
// import AboutStack from './aboutStack'
// import Animation from '../screens/animation'

const Drawer = createDrawerNavigator();

export default ()=>(
    <Drawer.Navigator 
        initialRouteName="Home"
        // screenOptions={{
        //   headerTintColor:"#444",
        //   headerStyle:{
        //       backgroundColor: '#eee',
        //       height: 60,
        //   }
        // }}
      >
        <Drawer.Screen 
          name="FlatList" 
          component={FlatList} 
          options={{ headerTitle: 'FlatList' }}
        />
        <Drawer.Screen 
          name="SectionList" 
          component={SectionList} 
          options={{ headerTitle: 'SectionList' }}
        />
      </Drawer.Navigator>
)
