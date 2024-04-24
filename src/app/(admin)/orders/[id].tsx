import { useLocalSearchParams } from 'expo-router';
import { Stack } from 'expo-router';
import { Order } from '../../../../src/types';
import orders from '../../../../assets/data/orders';
import { OrderItemListItem } from '@/components/OrderItemListItem';
import { FlatList, Text } from 'react-native';

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id === Number(id)) as Order;

  if (!order) {
    return <Text>Order not found!</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </>
  );
}
