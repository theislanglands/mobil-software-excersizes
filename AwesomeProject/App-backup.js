import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CoolComponent  from "./My_Component";
import ForLoops from "./Forloop-component";
import FlatListUse from "./Flatlist-component";
import FlatListExample from "./Flatlist-example";


// import default components first , and spicify in {} for alternative 


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <CoolComponent input={"input text"}></CoolComponent>
      <FlatListExample></FlatListExample>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
