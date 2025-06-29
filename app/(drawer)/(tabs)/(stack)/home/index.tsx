import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer() );
  }

  return (
    <SafeAreaView className="mt-10 px-5">
      <View>
        <Text className="text-3xl font-works-medium mb-5">Menú</Text>

        <Link href="/(drawer)/(tabs)/(stack)/profile" asChild>
          <CustomButton color="secondary" textColor="white" className="mb-2">
            Perfil
          </CustomButton>
        </Link>

        <CustomButton
          className="mb-2"
          color="primary"
          textColor="white"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          textColor="white"
          color="tertiary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/settings")}
        >
          Configuración
        </CustomButton>

        <CustomButton
          onPress={onToggleDrawer}
        >
          Abrir Menú
        </CustomButton>

        {/* <Link href="/products" className='mb-5'>
        Productos
      </Link>

      <Link href="/profile" className='mb-5'>
        Perfil
      </Link>

      <Link href="/settings" className='mb-5'>
        Configuración
      </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
