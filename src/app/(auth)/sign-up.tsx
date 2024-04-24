import Button from '@/components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function SignUpScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-center items-center p-2">
      <TextInput
        className="bg-white p-2 rounded-lg mt-1 mb-4 w-full"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        className="bg-white p-2 rounded-lg mt-1 mb-4 w-full"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button text="Create Account" onPress={() => {}} />
      <Text
        className="text-blue-500 mt-2 text-center underline font-bold"
        onPress={() => router.push('/(auth)/sign-in')}
      >
        Sign In
      </Text>
    </View>
  );
}
