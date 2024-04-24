import { Stack } from 'expo-router';

export const AuthStack = () => (
  <Stack>
    <Stack.Screen name="sign-in" options={{ title: 'Sign In' }} />
    <Stack.Screen name="sign-up" options={{ title: 'Sign Up' }} />
  </Stack>
);
