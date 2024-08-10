import { tw } from '@/config';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProductsScreen() {
  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <Text style={tw`text-h2-bold text-primary-500`}>Welcome to Products</Text>
    </SafeAreaView>
  );
}
