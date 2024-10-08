import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { memo, useMemo } from 'react';
import { FlatList, Pressable, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DetailedLogo, LoadingIndicator } from '@/components';
import { tw } from '@/config';
import { BLUR_HASH, productList } from '@/constants';
import { useProductListTest } from '@/hooks';
import { groupByCategory } from '@/utils';

interface ItemProps {
  imageUrl: string;
  onPress: () => void;
}

const Item = memo(({ imageUrl, onPress }: ItemProps) => (
  <Pressable
    style={tw`w-20 h-20 p-3 ml-3 items-center justify-center bg-secondary-200 rounded-full border border-primary-500`}
    onPress={onPress}
  >
    <Image
      style={tw`w-12 h-12`}
      source={{ uri: imageUrl }}
      placeholder={{ blurhash: BLUR_HASH }}
      transition={1000}
    />
  </Pressable>
));

export default function ProductsScreen() {
  const router = useRouter();

  const { data, isLoading } = useProductListTest();
  console.log('products', data);


  const groupedProducts = useMemo(() => groupByCategory(productList), [productList]);

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <DetailedLogo />
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <SectionList
          style={tw`my-5`}
          sections={groupedProducts}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <FlatList
              horizontal
              data={item}
              renderItem={({ item }) => (
                <Item
                  imageUrl={item.small_image.url}
                  onPress={() => router.navigate('/(tabs)/productsTab/productDetails')}
                />
              )}
              keyExtractor={(item, index) => item.uid + index}
              showsHorizontalScrollIndicator={false}
            />
          )}
          renderSectionHeader={({ section }) => (
            <View style={tw`mx-5`}>
              <Text style={tw`text-h3-bold my-2`}>{section.category}</Text>
            </View>
          )}
          renderSectionFooter={() => <View style={tw`bg-primary-500 h-0.5 mt-2 mx-5`} />}
          contentContainerStyle={tw`gap-3`}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      )}
    </SafeAreaView>
  );
}
