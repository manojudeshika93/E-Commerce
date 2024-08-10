import { Color } from "@/config";
import { Stack } from "expo-router";

export default function ProductsStack() {
  return (
    <Stack screenOptions={{ headerTintColor: Color.primary[500], headerBackTitleVisible: false, headerTitle: '' }}>
      <Stack.Screen name="products" options={{ headerShown: false }} />
      <Stack.Screen name="productDetails" />
    </Stack>
  );
}
