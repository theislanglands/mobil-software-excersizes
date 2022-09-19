import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-web';
import Logo from "./Logo";


export default function MovieDetails({ route }) {


    // State holding movie detailData.
    const [detailData, setdetailData] = useState({});
    var [year, setYear] = useState();
    /* 
    const [crew, setCrew] = useState({});
    const [cast, setCast] = useState({});
    // var [instructor, setInstructor] = useState();
 */

    // Get movieID from navigate function
    const { movieId } = route.params;

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
            .then((data) => {
                setdetailData(data);
                setYear(data.release_date.substring(0, 4));
            });
    }
/* 
    function getCrew() {
        fetch(
            `https://api.themoviedb.org/3//movie/${movieId}/credits?api_key=c91afe4096b39d47ada91b74ed374b93`
        )
            .then((response) => response.json())
            .then((data) => {
                setCrew(data.crew);
                setCast(data.cast);
            });
    }
 */

    return (
        <View style={styles.container}>
            <ScrollView>
            <Logo></Logo>

            <Text style={styles.header}>{detailData.title} - {year}</Text>
            <Image
                style={styles.image}
                source={{
                    uri: `https://image.tmdb.org/t/p/original${detailData.poster_path}`,
                }} />
            <Text style={styles.detailheader}>Plot: 
               <Text style={styles.detailtext}> {detailData.overview}</Text>
            </Text>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        marginBottom: 10,
    },
    header: {
        fontSize: 45,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        alignSelf: "center",
    },
    header: {
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 20,
    },
    detailtext: {
        fontSize: 20,
        marginVertical: 20,
        textAlign: 'left',
        fontWeight: 'normal'
    },
    detailheader: {
        fontSize: 22,
        marginTop: 15,
        marginLeft: 20,
        textAlign: 'left',
        fontWeight: 'bold',
    },
});