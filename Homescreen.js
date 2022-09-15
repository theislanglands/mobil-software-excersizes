import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// import of custom components
import CoolComponent from "./My_Component";
import ForLoops from "./Forloop-component";
import FlatListUse from "./Flatlist-component";
import FlatListExample from "./Flatlist-example";

// import of navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {

    console.log(process.env);

    return (
        <View>
            <Text>Home Screen component</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}/>
            <StatusBar style="auto" />
        </View>
    );

    /*
    Component to control the app's status bar. 
    The status bar is the zone, typically at the top of the screen, 
    that displays the current time, Wi-Fi and cellular network information, 
    battery level and/or other status icons.
    */
}