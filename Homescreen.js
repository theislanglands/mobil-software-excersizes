import { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from "react-native-web";

export default function HomeScreen({ navigation }) {

    const [moviedata, setmovieData] = useState([]);

    // Fetch movie list when component is mounted
    useEffect(() => {
        console.log("use effect");
        getMovies();
    }, []);

    // Function to fetch movie list
    function getMovies() {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=c91afe4096b39d47ada91b74ed374b93&page=1`
        )
            .then((response) => response.json())
            .then((data) => setmovieData(data.genres));
    }

    // Render function that returns the Item component
    const renderItem = ({ item }) => (
        <Item navigation={navigation} movieId={item.id} name={item.name} />
    );

    return (
        <View>
            <Image
                source={require('./assets/FilmGuruLogo.png')}
                style={{ width: 600, height: 400 }}
            />

            <Text>Your companion in finding whats most popular right now</Text>

            <FlatList
                data={moviedata}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={5}

            />
            <StatusBar style="auto" />
        </View>
    );
}

const Item = ({ navigation, name, movieId }) => (
    <View style={styles.item}>
        <Text
            onPress={() =>
                navigation.navigate("Movies", {
                    movieId,
                })
            }
            style={styles.title}
        >
            {name}
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
      fontSize: 12,
    },
  });
