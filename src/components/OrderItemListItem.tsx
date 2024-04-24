import { OrderItem } from '@/types';
import { View, Image, Text } from 'react-native';

export function OrderItemListItem({ orderItem }: { orderItem: OrderItem }) {
  return (
    <View className="flex items-center justify-between p-4 space-x-4">
      <View className="flex items-center space-x-4">
        {orderItem.products.image && (
          <Image source={{ uri: orderItem.products.image }} className="w-20 h-20 rounded-md" />
        )}
        <View className="flex flex-col">
          <Text className="text-lg font-bold">{orderItem.products.name}</Text>
          <Text className="text-gray-500">{orderItem.size}</Text>
        </View>
      </View>
      <View>
        <Text className="text-lg font-bold">{`${
          orderItem.quantity
        } x ${orderItem.products.price.toFixed(2)}`}</Text>
      </View>
    </View>
  );
}
