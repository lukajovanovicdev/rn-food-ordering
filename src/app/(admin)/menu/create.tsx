import { View, Text, TextInput, Image, Alert } from 'react-native';
import React from 'react';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const CreateProductScreen = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [errors, setErrors] = React.useState<string[]>([]);
  const [image, setImage] = React.useState<string | null>(null);

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

  const resetFields = () => {
    setName('');
    setPrice('');
  };

  const validateInput = () => {
    const errors = [];
    if (!name) errors.push('Name is required');
    if (!price) errors.push('Price is required');
    if (isNaN(+price)) errors.push('Price must be a number');
    setErrors(errors);
    return errors.length === 0;
  };

  const onDelete = () => {
    console.warn('Deleting product');
  };

  const confirmDelete = () => {
    Alert.alert('Delete product', 'Are you sure you want to delete this product?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: onDelete },
    ]);
  };

  const onSubmit = () => {
    if (isUpdating) onUpdate();
    else onCreate();
  };

  const onCreate = () => {
    if (!validateInput()) return;
    resetFields();
  };

  const onUpdate = () => {
    if (!validateInput()) return;
    console.warn('Updating product');
    resetFields();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="flex-1 justify-center p-2">
      <Stack.Screen options={{ title: isUpdating ? 'Update product' : 'Create product' }} />
      <Image
        source={{ uri: image || 'https://picsum.photos/200' }}
        className="w-1/2 aspect-auto h-24 rounded-full mx-auto"
      />
      <Text className="text-center pt-3 font-bold color-blue-500" onPress={pickImage}>
        Select image
      </Text>

      <Text className="text-gray-400 text-lg">Name</Text>
      <TextInput
        className="bg-white p-2 rounded-lg mt-1 mb-4"
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text className="text-gray-400 text-lg">Price ($)</Text>
      <TextInput
        className="bg-white p-2 rounded-lg mt-1 mb-4"
        placeholder="9.99"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Text className="text-red-500 text-md py-2">{errors.join(', ')}</Text>
      <Button onPress={onSubmit} text={isUpdating ? 'Update Product' : 'Create product'} />
      {isUpdating && (
        <Text
          onPress={confirmDelete}
          className="text-red-600 text-lg font-bold underline cursor-pointer mx-auto"
        >
          Delete
        </Text>
      )}
    </View>
  );
};

export default CreateProductScreen;
