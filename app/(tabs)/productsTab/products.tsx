import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { memo, useMemo } from 'react';
import { FlatList, Pressable, SectionList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DetailedLogo } from '@/components';
import { tw } from '@/config';
import { BLUR_HASH, productList } from '@/constants';
import { groupByCategory } from '@/utils';

export default function ProductsScreen() {
  const router = useRouter();

  const groupedProducts = useMemo(() => groupByCategory(productList), [productList]);


  const Item = memo(({ imageUrl }: { imageUrl: string }) => (
    <Pressable
      style={tw`w-20 h-20 p-3 ml-3 items-center justify-center bg-secondary-200 rounded-full border border-primary-500`}
      onPress={() => router.navigate('/(tabs)/productsTab/productDetails')}>
      <Image
        style={tw`w-12 h-12`}
        source={imageUrl}
        placeholder={{ blurhash: BLUR_HASH }}
        transition={1000}
      />
    </Pressable>
  ));

  return (
    <SafeAreaView style={tw`flex-1 items-center`}>
      <DetailedLogo />
      <SectionList
        style={tw`my-5`}
        sections={groupedProducts}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => (
          <FlatList
            horizontal
            data={item}
            renderItem={({ item }) => <Item imageUrl={item.small_image.url} />}
            keyExtractor={(item, index) => item.uid + index}
            showsHorizontalScrollIndicator={false}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View style={tw`mx-5`}>
            <Text style={tw`text-h3-bold my-2`}>{section.category}</Text>
          </View>
        )}
        renderSectionFooter={() => (<View style={tw`bg-primary-500 h-0.5 mt-2 mx-5`} />)}
        contentContainerStyle={tw`gap-3`}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
}
