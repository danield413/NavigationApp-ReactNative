import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#4c00ff', tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites Screen',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="heart-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout