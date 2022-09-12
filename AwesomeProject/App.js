// import default components first , and spicify in {} for alternative 


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import of custom components
import CoolComponent  from "./My_Component";
import ForLoops from "./Forloop-component";
import FlatListUse from "./Flatlist-component";
import FlatListExample from "./Flatlist-example";

// import of navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen(){

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <CoolComponent input={"input text"}></CoolComponent>
      <FlatListExample></FlatListExample>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
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
