import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TestDrawer from './testDrawer'
import TabBar from '../shared/tabBar'
// import AboutStack from './aboutStack'
// import Animation from '../screens/animation'

const Tab = createBottomTabNavigator();

export default ()=>(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Test"
        // screenOptions={{
        //   header:(...data)=><Header title="GameZone"/>,
        //   // headerStyle:{
        //   //     backgroundColor: '#eee',
        //   //     height: 60,
        //   // }
        // }}
        tabBar={props => <TabBar {...props} />}
      >
        <Tab.Screen 
          name="Test" 
          component={TestDrawer} 
          // options={{ headerTitle: 'GameZone' }}
        />
        {/* <Tab.Screen 
          name="About" 
          component={TestStack} 
          // options={{ headerTitle: 'Review Details' }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
)
