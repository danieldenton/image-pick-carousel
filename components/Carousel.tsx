import React, { useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export const CarouselComponent = ({ images }: { images: string[] }) => {
  const carouselRef = useRef(null);

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={images}  
      renderItem={renderItem}
      sliderWidth={200}  
      itemWidth={200}    
      autoplay={true}    
      loop={true}        
      autoplayInterval={3000} 
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,  
    height: 200,  
    resizeMode: "cover",
  },
});
