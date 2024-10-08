import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import { CarouseImage } from "./CarouseImage";

export const CarouselComponent = ({ images }: { images: string[] }) => {
    const scrollX = useSharedValue(0);
    const onScrollHandler = useAnimatedScrollHandler((event) => {
      scrollX.value = event.contentOffset.x;
    });

  const items = images.map((image, index) => {
   return { id: index.toString(), img: { uri: image } };
  });


  return (
    <View style={styles.container}>
     <StatusBar style="auto" />
      <Animated.FlatList
        horizontal
        onScroll={onScrollHandler}
        data={items}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
            return <CarouseImage item={item} index={index} scrollX={scrollX} />;
          }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Adjust to fit your needs
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Hide overflow to only show one image at a time
  },
  imageContainer: {
    width: 200, // Keep the specified width
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
});
