import { Image, Linking, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Gifs } from '@/assets';
import { Button } from '@/components';
import { tw } from '@/config';
import { SITE_URL } from '@/constants';
import { ToastService } from '@/services';
import { useEffect } from 'react';

export default function HomeScreen() {

  useEffect(() => {
    ToastService.success({ message: 'Have a nica day!!!' });
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 items-center justify-between`}>
      <View style={tw`mt-15`}>
        <Text style={tw`text-h2-bold text-primary-500`}>Welcome to Mumzworld</Text>
      </View>
      <View style={tw`flex-1 justify-center`}>
        <Image source={Gifs.logo} style={tw`w-50 h-50`} />
      </View>
      <Button isLink title="Visit Us" onPress={() => Linking.openURL(SITE_URL)} />
      {/* <Pressable onPress={() => {
        Linking.openURL(SITE_URL);
      }}>
        <Text style={tw`text-b1-medium underline text-secondary-500`}>Visit Us</Text>
      </Pressable> */}
    </SafeAreaView>
  );
}
