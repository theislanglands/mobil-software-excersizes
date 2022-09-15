import React from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
    {
        name: 'First flatlist item',
        info: 'Exciting info on item 1'
    }, 
    {
        name: 'Second flatlist item',
        info: 'Exciting info on item 2'
    }, 
    {
        name: 'third flatlist item',
        info: 'Exciting info on item 3'
    },     
];

const Item = ({name}) => (
    <View>
        <Text>{name}</Text>
    </View>
)


export default function useFlatList() {
    console.log("in flatlist component");

    const renderItem = ({ item }) => <Item name = {item.name} />;

    return (
        <SafeAreaView>
            <FlatList
                data = {DATA}
                renderItems = {renderItem}
                keyExtractor = {item => item.info}>
            </FlatList>
        </SafeAreaView>
    );
}
