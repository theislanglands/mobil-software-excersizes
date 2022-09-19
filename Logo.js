import { useContext, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { FlatList } from "react-native-web";

export default function Logo() {

    return (
        <View>
            <Image
                source={require('./assets/FilmGuruLogo.png')}
                style={styles.logo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 400, 
        height: 200,
        resizeMode: 'contain',
        alignSelf: "center",
    },
});
