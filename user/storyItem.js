import React from 'react';
import {View, Text, Button, StyleSheet, Alert, Image} from 'react-native';

export default function storyItem({item}){
    return(
        <View>
            <View>
            <Image>{`${item.name}`}</Image>
            </View>
        
            <Text>{`Name: ${item.name}`}</Text>
            <Text>{`Category: ${item.category}`}</Text>
            <Text>{`Total_chapters: ${item.name}`}</Text>
            <Text>{`Active: ${data.active ? 'Yes' : 'No'}`}</Text>
        </View>
    )

}