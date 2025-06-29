import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className='flex-1 px-4 '>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl font-works-black'>{item.title}</Text>
            <Text>{item.description}</Text>
            <View className='flex-row flex justify-between'>
              <Text className='text-2xl font-works-black'>
                ${item.price}
                </Text>
                <Link 
                  href={{
                    pathname: "/(drawer)/(tabs)/(stack)/products/[id]",
                    params: { id: item.id }
                  }}
                  className='text-primary font-works-bold'
                >
                  Ver detalles
                </Link>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen