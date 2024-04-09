import Button from '@/components/Button';
import CartListItem from '@/components/CartListItem';
import { useCart } from '@/providers/CartProvider';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { View, Text, Platform, FlatList } from 'react-native';

const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Total: ${total}</Text>
      <Button text="Checkout" onPress={() => console.log('Checkout')} />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;
