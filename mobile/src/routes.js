import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Auth from './pages/Auth';
import Register from './pages/Register';

const AppStack = createStackNavigator();
export default function Routes(){
    return(
        <NavigationContainer>

        <AppStack.Navigator screenOptions={{}}>
            <AppStack.Screen name="SOS ANIMAL " component={Auth}/>
            <AppStack.Screen name="Register" component={Register}/>
        </AppStack.Navigator>

        </NavigationContainer>
    );
}
 