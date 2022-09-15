import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MovieDetails({ route }) {


 // State holding movie detailData.
 const [detailData, setdetailData] = useState({});

 // Get movieID from navigate function
 const { movieId } = route.params;

 // When this component is mounted then fire the getDetails function
 useEffect(() => {
   getDetails();
 }, []);

 // Function to fetch details about the movie
 function getDetails() {
   fetch(
     `https://api.themoviedb.org/3/movie/550?api_key=c91afe4096b39d47ada91b74ed374b93`
   )
     .then((response) => response.json())
     .then((data) => setdetailData(data));
 }

 console.log(detailData);



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>New Details Screen with movie id {movieId}</Text>
        </View>
    );
}