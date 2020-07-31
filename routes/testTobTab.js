import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import Page1 from '../screens/testBottomTab/Page1'
import Page2 from '../screens/testBottomTab/Page2'
import Page3 from '../screens/testBottomTab/Page3'
import HomePage from '../screens/testBottomTab/homePage'
// import Header from '../shared/header'
// import AboutStack from './aboutStack'
// import Animation from '../screens/animation'

const Tab = createMaterialTopTabNavigator();

export default ()=>(
    <Tab.Navigator 
        initialRouteName="HomePage"
        tabBarOptions={{
            inactiveTintColor:'orange',
            activeTintColor:'red',
            tabStyle:{
              minWidth:50,
              upperCaseLabel:false
            }

          }}
      >
        <Tab.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{  
            tabBarLabel:"HomePage",
            tabBarIcon:({color,focused,size})=>(
              <Ionicons
                name="ios-home"
                size={size}
                style={{color:color}}
              />
            )
          }}
        />
        <Tab.Screen 
          name="Page1" 
          component={Page1} 
          options={{  
            tabBarBadge:"13",
            tabBarLabel:"page1",
            tabBarIcon:({color,focused,size})=>(
              <Ionicons
                name="business"
                size={size}
                style={{color:color}}
              />
            )
            // header:(...data)=><Header title="Page1"/> 
            }}
        />
        <Tab.Screen 
          name="Page2" 
          component={Page2} 
          options={{  
            tabBarLabel:"page2",
            tabBarIcon:({color,focused,size})=>(
              <Ionicons
                name="bus"
                size={size}
                style={{color:color}}
              />
            )
            // header:(...data)=><Header title="Page2"/> 
            }}
        />
        <Tab.Screen 
          name="Page3" 
          component={Page3} 
          options={{  
            tabBarLabel:"page3",
            tabBarIcon:({color,focused,size})=>(
              <Ionicons
                name="cart-sharp"
                size={size}
                style={{color:color}}
              />
            )
            // header:(...data)=><Header title="Page3"/> 
            }}
        />
      </Tab.Navigator>
)
