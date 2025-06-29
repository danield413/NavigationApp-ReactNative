import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { Stack, useNavigation, useRouter } from 'expo-router';
import React from 'react';

const StackLayout = () => {

    const navigation = useNavigation();

    const router = useRouter();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            // navigation.dispatch(StackActions.pop()); // <-- BUG
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer());
    }

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
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons name={canGoBack ? "arrow-back-outline" : "grid-outline"} size={20} className="mr-5" color={tintColor} onPress={() => onHeaderLeftClick(canGoBack!)} />
                )
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