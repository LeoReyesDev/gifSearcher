import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Import Screens
import Home from './screens/Home';
// import Conference from './screens/Conference';
// import Story from './screens/Story';

const Stack = createStackNavigator();

function App() {
  return (
    <Home />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Conference" component={Conference} />
    //     <Stack.Screen name="Story" component={Story} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
