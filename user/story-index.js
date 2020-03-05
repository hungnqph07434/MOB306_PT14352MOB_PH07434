import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity,Alert } from 'react-native';

export default function truyenTranh({ item, handlDelete, navigation }) {

    const alertDelete=(name, handleDelete)=>{
        return Alert.alert(
            'Xóa truyện',
            `Bạn có muốn xóa ${item.name} không?`,
            [
                {
                    text:'Có',
                    onPress:()=>{handleDelete(name)}
                },
                {
                    text:"Không",
                    onPress:()=>{}
                }
            ],
            {cancleable: false} 
        )
    };

    return (
        <View style={styles.container} >
            <View >
                <Image source={{ uri: `${item.avatar}` }} style={styles.image}></Image>
            </View>
            <View style={styles.right}>
                <Text style={styles.textName}  >{` ${item.name}`}</Text>
                <Text style={styles.text}>{` ${item.category}`}</Text>
                <Text style={styles.text}>{` ${item.total_chapters}`}</Text>
                <Text style={styles.text}>{` ${item.active ? 'Done':'Update'}`}</Text>
            </View>

            <View style={styles.right1}>
                <TouchableOpacity onPress={() => {alertDelete(item.id,handlDelete) }} >
                    <Image
                        source={require('../image/delete.png')}

                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: "#ccc",
        padding: 8,
        margin: 4,
        backgroundColor: '#FFFFFF'
    },
    image: {

        borderRadius: 50,
        width: 100,
        height: 100,
    },
    right1: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        marginLeft: 20
    },
    right: {
        width: 160,
        margin: 10,
        marginLeft: 20
    },
    text: {
        color: 'black',
        fontSize: 15
    },
    textName: {
        color: 'red',
        fontSize: 20
    },


    textbtn: {
        fontSize: 10,
        color: '#FF0000',
        textAlign: 'center'
    },




});