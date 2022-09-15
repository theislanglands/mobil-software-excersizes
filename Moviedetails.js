import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';



export default function MovieDetails({ route }) {


 // State holding movie detailData.
 const [detailData, setdetailData] = useState({});

 // Get movieID from navigate function
 const { movieId } = route.params;
 console.log(movieId)

 // When this component is mounted then fire the getDetails function
 useEffect(() => {
   getDetails();
 }, []);

 // Function to fetch details about the movie
 function getDetails() {
   fetch(
     `https://api.themoviedb.org/3/movie/${movieId}?api_key=c91afe4096b39d47ada91b74ed374b93`
   )
     .then((response) => response.json())
     .then((data) => setdetailData(data));
 }

 console.log(detailData);



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{detailData.title}</Text>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/original${detailData.poster_path}`,
            }}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 28,
      marginBottom: 10,
    },
    image: {
      width: "100%",
      height: "300px",
    },
  });
  