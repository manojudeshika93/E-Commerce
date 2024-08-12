# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

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
yarn run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Run Tests

To run the tests for your project, use:

```bash
yarn test
```

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Development Enhancements

- **React Query for Data Management**: We’ve transitioned from Redux to using React Query for caching and continuous data refresh. This allows for more efficient data management and better performance in handling asynchronous data.

- **Optimization with React.memo and useMemo**: To prevent unnecessary re-renders and computations, we've incorporated React's `memo` and `useMemo` hooks. This improves the app's efficiency by memoizing components and values, reducing redundant operations.

- **SVG Usage**: We've utilized SVGs instead of raster images to minimize app size and enhance performance. SVGs offer a scalable and optimized solution for icons and graphics, contributing to a leaner app build.

- **Simplified UI**: The app's UI has been designed with simplicity in mind, adhering to the principle that most users prefer straightforward, easy-to-use interfaces. This approach ensures a smoother user experience with intuitive navigation.

- **Interactive Flash Messages**: To enhance user interaction, we’ve integrated flash messages throughout the app. These messages provide immediate feedback and keep users informed of important actions or updates.

- **Design Consistency**: We’ve maintained a consistent design language with eye-catching color palettes and a cohesive theme. This attention to design ensures that the app is visually appealing and aligns with our branding.

## API Call Improvements

- **Optimized Product Categories**: We now return only 5-7 of the most trending items per category, rather than the entire product list. Users can request more items if desired, which helps in reducing data load and improving performance.

- **Reduced Data Payload**: For product categories, we return only the essential data needed, minimizing the amount of data sent. This reduces load times and processing overhead, resulting in a faster and more responsive app.

- **Focused Product Details**: On the product details page, we provide only the necessary information to ensure clarity and readability. This approach enhances the user experience by presenting information in a more organized and digestible manner.
