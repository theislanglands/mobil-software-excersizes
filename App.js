// import default components first , and spicify in {} for alternative 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// import of custom components
import CoolComponent  from "./My_Component";
import ForLoops from "./Forloop-component";
import FlatListUse from "./Flatlist-component";
import FlatListExample from "./Flatlist-example";
import HomeScreen from "./Homescreen";

// import of navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
function HomeScreenOld(){

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <CoolComponent input={"input text"}></CoolComponent>
      <FlatListExample></FlatListExample>
      <StatusBar style="auto" />
    </View>
  );
}
*/
/*
function HomeScreen({ navigation }) {
  
  console.log(process.env);

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>API key {process.env.API_KEY}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
*/

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


// NAVIGATION
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
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
