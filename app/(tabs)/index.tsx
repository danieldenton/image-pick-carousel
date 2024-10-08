import { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CarouselComponent } from "@/components/Carousel";

export default function HomeScreen() {
  const [images, setImages] = useState<string[]>([]);
  const title = images.length
    ? "Pick some more images to add to the carousel"
    : "Pick images from camera roll for the carousel";

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: true,
        quality: 1,
      });

      // @ts-ignore
      if (!result.canceled) { 
        // @ts-ignore
        const uris = result.assets.map((asset: any) => asset.uri.toString());
        setImages([...images, ...uris]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={title} onPress={pickImage} />
      {images ? <CarouselComponent images={images} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
