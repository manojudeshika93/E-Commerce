import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import 'intl-pluralrules';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { ToastHost } from '@/components';
import { Color, tw } from '@/config';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular: require('../assets/fonts/Inter-Regular.ttf'),
    Inter_500Medium: require('../assets/fonts/Inter-Medium.ttf'),
    Inter_600SemiBold: require('../assets/fonts/Inter-SemiBold.ttf'),
    Inter_700Bold: require('../assets/fonts/Inter-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <QueryClientProvider client={queryClient}>
        <ToastHost />
        <Stack screenOptions={{ headerBackTitleVisible: false, headerTintColor: Color.primary[500] }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
