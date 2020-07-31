import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from '../screens/testStack/Page1'
import Page2 from '../screens/testStack/Page2'
import Page3 from '../screens/testStack/Page3'
import HomePage from '../screens/testStack/homePage'
import Header from '../shared/header'

import TopStack from './testTobTab'
// import AboutStack from './aboutStack'
// import Animation from '../screens/animation'

const Stack = createStackNavigator();

export default ()=>(
    <NavigationContainer>
    <Stack.Navigator 
        initialRouteName="HomePage"
        screenOptions={{
          headerTintColor:"#444",
          headerStyle:{
              backgroundColor: '#eee',
              height: 60,
          }
        }}
      >
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{  header:(...data)=><Header title="HomePage"/> }}
        />
        <Stack.Screen 
          name="TopStack" 
          component={TopStack} 
          options={{  headerTitle:"TopStack" }}
        />
        <Stack.Screen 
          name="Page1" 
          component={Page1} 
          options={{  
            headerTitle:"page1"
            // header:(...data)=><Header title="Page1"/> 
            }}
        />
        <Stack.Screen 
          name="Page2" 
          component={Page2} 
          options={{  
            headerTitle:"page2"
            // header:(...data)=><Header title="Page2"/> 
            }}
        />
        <Stack.Screen 
          name="Page3" 
          component={Page3} 
          options={{  
            headerTitle:"page3"
            // header:(...data)=><Header title="Page3"/> 
            }}
        />
      </Stack.Navigator>
      </NavigationContainer>
)
