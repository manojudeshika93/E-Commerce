import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { Button, Switch } from '@/components';
import { Color, tw } from '@/config';
import { productDetails, SCREEN_WIDTH } from '@/constants';
import { ToastService } from '@/services';

export default function ProductDetailScreen() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(false);
  const details = productDetails[0];

  const handleAddCart = () => {
    setCount(1);
    ToastService.success({ message: 'Added into the cart' });
  };

  const onCountDecrement = () => {
    if (count < 2) {
      ToastService.warning({ message: 'Unable to reduce the item count' });
    } else {
      setCount(count - 1);
    }
  };

  const onCountIncrement = () => {
    setCount(count + 1);
  }

  return (
    <View style={tw`flex-1`}>
      <Stack.Screen options={{ title: details.name }} />
      <View style={tw`absolute z-100 right-0`}>
        <Switch value={value} onValueChange={() => setValue(!value)} />
      </View>
      <View style={tw`h-60`}>
        <Swiper height={220} width={SCREEN_WIDTH} style={tw`my-5`} paginationStyle={tw`bottom-0 items-end mx-5 overflow-hidden`} activeDotColor={Color.primary[500]}>
          {details.media_gallery.map((item, index) => {
            return <Image key={item.position + index} source={{ uri: item.url }} style={tw`w-full h-50`} contentFit='contain' />;
          })}
        </Swiper>
      </View>
      <ScrollView style={tw`mx-5`} showsVerticalScrollIndicator={false}>
        <View style={tw`my-5`}>
          <Text style={tw`text-h3-semibold`}>Brand</Text>
          <View style={tw`items-center justify-center`}>
            <Image source={{ uri: details.brand_info.img_src }} style={tw`w-20 h-20`} contentFit='contain' />
            <Text style={tw`text-b1-medium`}>{details.brand_info.title}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Title</Text>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-b1-medium`}>{details.meta_title}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Description</Text>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-b1-medium`}>{details.meta_description}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Package Dimensions</Text>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-b1-medium`}>{details.pkgdimensions}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Price</Text>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <Text style={tw`text-b1-medium`}>{details.price.regularPrice.amount.currency}</Text>
            <Text style={tw`text-b1-medium`}>{details.price.regularPrice.amount.value.toFixed(2)}</Text>
          </View>
          <View style={tw`flex-row items-center justify-center gap-2`}>
            <Text style={tw`text-b1-medium`}>{details.usd_price_range.minimum_price.final_price.currency}</Text>
            <Text style={tw`text-b1-medium`}>{details.usd_price_range.minimum_price.final_price.value}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Rating</Text>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-b1-medium`}>{details.rating_summary}</Text>
          </View>
        </View>
        <View style={tw`mb-5 gap-2`}>
          <Text style={tw`text-h3-semibold`}>Usage</Text>
          <View style={tw`items-center justify-center`}>
            <Text style={tw`text-b1-medium`}>{details.recom_age}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={tw`flex-row m-5 gap-5`}>
        <View style={tw`flex-1 flex-row items-center justify-center gap-5 border rounded-full`}>
          <Pressable style={tw`border-r-2 px-2`}>
            <Text style={tw`text-h3-semibold text-primary-500`} onPress={onCountDecrement}>-</Text>
          </Pressable>
          <Text style={tw`text-h3-medium text-custom-black`}>{count}</Text>
          <Pressable style={tw`border-l-2 px-2`}>
            <Text style={tw`text-h3-semibold text-primary-500`} onPress={onCountIncrement}>+</Text>
          </Pressable>
        </View>
        <View style={tw`flex-2`}>
          <Button title='Add to cart' disabled={details.stock_status !== 'IN_STOCK'} onPress={handleAddCart} />
        </View>
      </View>
    </View>
  );
}
