import { useContext, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from "react-native-web";
import Logo from "./Logo";


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
            <Logo></Logo>

            <Text style={styles.header}>Most popular {name} movies right now</Text>
            <Text style={styles.choice}>Click on title for details</Text>
            <FlatList
                data={moviedata}
                renderItem={renderItem}
                scrollEnabled={true}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const Item = ({ navigation, title, movieId }) => (
    <View style={styles.itembox}>
        <Text
            onPress={() =>
                navigation.navigate("Movie Details", {
                    movieId,
                })
            }
            style={styles.itemtext}
        >
            {title}
        </Text>
    </View>
);



  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
    },
    itembox: {
        backgroundColor: "#cc6600",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6
    },
    itemtext: {
        fontSize: 26,
        color: "#FFFFFF"
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 20,
    },
    choice: {
        fontSize: 20,
        textAlign: 'center',
    },
});