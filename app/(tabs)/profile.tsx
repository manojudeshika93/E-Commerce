import Constants from 'expo-constants';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Gifs } from '@/assets';
import { tw } from '@/config';

export default function ProfileScreen() {
  const appVersion = Constants.expoConfig?.version ?? 'Unknown';

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-between`}>
      <View style={tw`mt-15`}>
        <Text style={tw`text-h2-bold text-primary-500`}>Thanks for visiting us</Text>
      </View>
      <View style={tw`flex-1 justify-center`}>
        <Image source={Gifs.gift} style={tw`w-100 h-100`} />
      </View>
      <View>
        <Text style={tw`text-b1-medium text-secondary-500`}>App Version: {appVersion}</Text>
      </View>
    </SafeAreaView>
  );
}
