import { Stack } from 'expo-router'
import React from 'react'

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTintColor: '#ffffff', // <-- Color del texto e íconos del header
                headerShadowVisible: false,
                animation: 'ios_from_right',
                contentStyle: {
                    backgroundColor: '#ffffff',
                },
                headerStyle: {
                    backgroundColor: '#4c00ff',
                },
            }}

        >
            <Stack.Screen
                name='home/index'
                options={{
                    // headerShown: false,
                    title: 'Inicio',
                    headerTitleAlign: 'center',
                    
                    // headerTintColor: '#333',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    // headerShown: false,
                    title: 'Productos',
                    headerTitleAlign: 'center',
                    animation: 'ios_from_right',
                   
                    // headerTintColor: '#333',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    // headerShown: false,
                    title: 'Configuración',
                    headerTitleAlign: 'center',
                   
                    // headerTintColor: '#333',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    // headerShown: false,
                    title: 'Perfil',
                    headerTitleAlign: 'center',
                   
                    // headerTintColor: '#333',
                }}
            />



        </Stack>
    )
}

export default StackLayout