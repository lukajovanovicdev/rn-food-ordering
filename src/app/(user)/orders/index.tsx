import { OrderCard } from '@/components/OrderListItem';
import { FlatList, View } from 'react-native';
import orders from '../../../../assets/data/orders';

export default function OrdersScreen() {
  return (
    <View className="flex flex-col justify-between p-3">
      <FlatList
        className="flex mt-4"
        data={orders}
        ItemSeparatorComponent={() => <View className="p-2" />}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
    </View>
  );
}
