import { ProductListItem } from '@/components/ProductListItem';
import { View } from '@/components/Themed';
import { FlatList } from 'react-native';
import products from '../../../../assets/data/products';

export default function MainScreen() {
  return (
    <View style={{ backgroundColor: 'grey' }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}
