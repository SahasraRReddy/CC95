
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Rumble from "../screens/Rumble";

const Stack = createStackNavigator();

export default class StackNavigator extends React.Component{
 render(){ return ( 
    <Stack.Navigator
        intialRouteName="HomeScreen"

    
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Rumble" component={Rumble} />
    </Stack.Navigator>
      
  );
};}
