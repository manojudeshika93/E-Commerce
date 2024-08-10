import { tw } from '@/config';
import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={tw`flex-1 items-center justify-center p-5`}>
        <Text style={tw`text-h2-bold`}>This screen doesn't exist.</Text>
        <Link href="/" style={tw`mt-4 py-4`}>
          <Text style={tw`text-h3-semibold underline text-primary-500`}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
