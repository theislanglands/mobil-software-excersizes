import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from "react-native-web";

export default function MovieScreen({ route, navigation }) {

    const [moviedata, setmovieData] = useState([]);
    const {genreId, name} = route.params;

    // Fetch movie list when component is mounted
    useEffect(() => {
        getMovies();
    }, []);

    // Function to fetch movie list
    function getMovies() {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=c91afe4096b39d47ada91b74ed374b93&with_genres=${genreId}`
        )
            .then((response) => response.json())
            .then((data) => setmovieData(data.results));
    }


    // Render function that returns the Item component
    const renderItem = ({ item }) => (
        <Item navigation={navigation} movieId={item.id} title={item.title} />
    );

    return (
        <View>
            <Image
                source={require('./assets/FilmGuruLogo.png')}
                style={{ width: 600, height: 400 }}
            />

            <Text>Popular {name} movies right now</Text>
            <FlatList
                data={moviedata}
                renderItem={renderItem}
                scrollEnabled={true}
                keyExtractor={(item) => item.id}
            />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Movie Details')} />
            <StatusBar style="auto" />
        </View>
    );
}

const Item = ({ navigation, title, movieId }) => (
    <View style={styles.item}>
        <Text
            onPress={() =>
                navigation.navigate("Movie Details", {
                    movieId,
                })
            }
            style={styles.title}
        >
            {title}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    item: {
      backgroundColor: "#EEE",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
    },
  });
