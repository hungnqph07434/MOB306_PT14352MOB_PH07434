
import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity,Alert, Modal,TextInput, Button } from 'react-native';
import * as Progress from 'react-native-progress';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { OutlinedTextField } from 'react-native-material-textfield';

export default function truyenTranh({ item, handlDelete,handlUpdate,navigation }) {

    const [showModal, setShowModal] = useState(false);
  
    const alertDelete=(id, handleDelete)=>{
        return Alert.alert(
            'Xóa truyện',
            `Bạn có muốn xóa ${item.name} không?`,
            [
                {
                    text:'Có',
                    onPress:()=>{handleDelete(id)}
                },
                {
                    text:"Không",
                    onPress:()=>{}
                }
            ],
            {cancleable: false} 
        )
    };
    const handleCancle=()=>{
        setShowModal(false);
    }

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

           
            <View>
                <TouchableOpacity onPress={() => {handlUpdate(item.id) }} >
                    <Image
                       source={require('../image/refresh1.png')}

                    />
                </TouchableOpacity>
            </View>

            <View style={styles.right1}>
                <TouchableOpacity onPress={() => { alertDelete(item.id,handlDelete)}} >
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
        marginBottom: 20,
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
    buttonTextAdd: {
        fontSize: 20,
        fontWeight: '500',
        color: '#9966CC',
        textAlign: 'center'
      },

    textbtn: {
        fontSize: 10,
        color: '#FF0000',
        textAlign: 'center'
    },
    conteiner_add:{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
      },
    add: {
        marginTop: 60,
        margin: 20
      },

      button_add: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 20,
        width: 300,
        opacity: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFCCFF',
        borderRadius: 25,
      }


});