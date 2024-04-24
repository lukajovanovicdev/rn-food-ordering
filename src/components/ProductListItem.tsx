import { Product } from '@/types';
import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';
import { Link, useSegments } from 'expo-router';

export const ProductListItem = ({ product }: { product: Product }) => {
  const segments = useSegments();

  if (!segments[0]) return null;

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} style={{ marginTop: 10 }} asChild>
      <Pressable style={styles.container}>
        {product.image && (
          <Image style={styles.image} source={{ uri: product.image }} resizeMode="contain" />
        )}
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontSize: 18,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
