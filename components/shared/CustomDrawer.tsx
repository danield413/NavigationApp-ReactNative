import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Text, View } from 'react-native'

const CustomDrawer = ( props: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
    >
      <View className='flex justify-center items-center mb-10 p-10 h-[150px] rounded-xl bg-mypurple'>
        <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'>
            <Text className='text-3xl font-works-black text-mypurple'>DD</Text>
        </View>
      </View>

      {/* Drawer Items */}

      <DrawerItemList {...props} />

      {/* Footer */}
    </DrawerContentScrollView>
  )
}

export default CustomDrawer