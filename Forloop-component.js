import React from 'react';

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const items = [
    {
        name: 'First item'
    }, 
    {
        name: 'Second item'
    }, 
    {
        name: 'third item'
    },     
];

export default function ForLoops() {
    console.log("in for loops fkt") // WORKS
    return (
        <View>
            {
                items.map((item) => (
                    <Text>
                        {item.name}
                    </Text>
                ))
            }
        </View>
    );
}