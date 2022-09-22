import { useContext, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from "react-native-web";
import { KeyProvider } from "./context/Key";
import Logo from "./Logo";

export default function HomeScreen({ navigation }) {

    const [genredata, setgenredata] = useState([]);
    const {key, setKey} = useContext(KeyProvider)
    console.log(key);

    // Fetch movie list when component is mounted
    useEffect(() => {
        getMovies();
    }, []);

    // Function to fetch movie list
    function getMovies() {
        fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=c91afe4096b39d47ada91b74ed374b93&page=1`
        )
            .then((response) => response.json())
            .then((data) => setgenredata(data.genres));
    }

    // Render function that returns the Item component
    const renderItem = ({ item }) => (
        <Item navigation={navigation} genreId={item.id} name={item.name} />
    );

    return (
        <View style={styles.container}>
            <Logo></Logo>

            <Text style={styles.header}>Your most popular movie navigator</Text>
            <Text style={styles.choice}>Choose your favorite genre</Text>

            <FlatList
                data={genredata}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={5}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const Item = ({ navigation, name, genreId }) => (
    <View style={styles.itembox}>
        <Text
            onPress={() =>
                navigation.navigate("Movies", {
                    genreId, name,
                })
            }
            style={styles.itemtext}
        >
            {name}
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
        fontSize: 14,
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
