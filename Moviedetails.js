import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MovieDetails({ route }) {

    const [detailData, setDetailsData] = useState({});
    
    // getting selected movieId
    const {movieId} = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>New Details Screen with movie id {movieId}</Text>
        </View>
      );
}