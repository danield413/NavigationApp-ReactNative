import { products } from '@/store/products.store';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ProductScreen = () => {

    const params = useLocalSearchParams();
    const { id } = params as { id: string };

    const product = products.find((product) => product.id === id);

    return (
        <View>
            {product ? (
                <View
                    className='p-4'
                >
                    <Text
                        className='text-2xl font-works-black mb-2'
                    >{product.title}</Text>
                    <Text
                        className='text-base font-works-regular'
                    >{product.description}</Text>
                    <Text
                        className='text-2xl font-works-black mt-4'
                    >${product.price}</Text>
                </View>
            ) : (
                <Text>Product not found</Text>
            )}
        </View>
    )
}

export default ProductScreen