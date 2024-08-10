import { tw } from '@/config';
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductsScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <Text style={tw`text-h2-bold text-primary-500`}>Welcome to Products</Text>
      <Button title='Product' onPress={() => router.navigate('/productsTab/productDetails')}></Button>
    </SafeAreaView>
  );
}
