import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8f5fff",
        tabBarInactiveTintColor: "#979797",
        // quitar texto
        tabBarShowLabel: false,
        //quitar sombra y bordes
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: "#000000",
          borderTopWidth: 0,
          shadowColor: "transparent",
          elevation: 0,
        },

        
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="heart-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-add-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
