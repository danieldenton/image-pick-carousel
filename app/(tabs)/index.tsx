import { useState } from "react";
import { Button, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CarouselComponent } from "@/components/Carousel";

export default function HomeScreen() {
  const [images, setImages] = useState<string[]>([]);
  const title = images.length
    ? "Pick another image to add to the carousel"
    : "Pick an image from camera roll for the carousel";

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      // @ts-ignore
      if (!result.canceled) { // @ts-ignore
        setImages([...images, result.assets[0].uri.toString()]);
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
