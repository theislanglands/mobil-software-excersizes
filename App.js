// import default components first , and spicify in {} for alternative 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// import of custom components
import CoolComponent  from "./My_Component";
import ForLoops from "./Forloop-component";
import FlatListUse from "./Flatlist-component";
import FlatListExample from "./Flatlist-example";
import HomeScreen from "./Homescreen";
import MovieDetailsScreen from "./Moviedetails";
import MoviesScreen from "./MoviesScreen";

// import of navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// NAVIGATION
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Movie Details" component={MovieDetailsScreen} />
            <Stack.Screen name="Movies" component={MoviesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
