// import of navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import of custom components
import HomeScreen from "./Homescreen";
import MovieDetailsScreen from "./Moviedetails";
import MoviesScreen from "./MoviesScreen";
pusimport KeyProvider from "./context/Key";

// NAVIGATION
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <KeyProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
          <Stack.Screen name="Movies" component={MoviesScreen} />
        </Stack.Navigator>
      </KeyProvider>
    </NavigationContainer>
  )
}