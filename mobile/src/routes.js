import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Auth from './pages/Auth';

const AppStack = createStackNavigator();

export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Auth" component={ Auth }/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}