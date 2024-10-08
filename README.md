# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. From node_modules/react-native-snap-carousel/src/carousel/Carousel.js comment out the following:
   46. // containerCustomStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   47. // contentContainerCustomStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   64. // slideStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,

   From node_modules/react-native-snap-carousel/src/pagination/PaginationDot.js comment out the following:
   15. // containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   17. // inactiveStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   19. // style: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,

   From node_modules/react-native-snap-carousel/src/pagination/Pagination.js comment out the following:
   17. // containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   19. // dotContainerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   21. // dotStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
   26. // inactiveDotStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,

    From node_modules/react-native-snap-carousel/src/parallaximage/ParallaxImage.js comment out the following:
    19.  // containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,


3. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
