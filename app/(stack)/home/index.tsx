import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="mt-10 px-5">
      <View>
        <Text className="text-3xl font-works-medium mb-5">Menú</Text>

        <Link href="/profile" asChild>
          <CustomButton color="secondary" textColor="white" className="mb-2">
            Perfil
          </CustomButton>
        </Link>

        <CustomButton
          className="mb-2"
          color="primary"
          textColor="white"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          textColor="white"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Configuración
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
