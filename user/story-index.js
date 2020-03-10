
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

    var radio_props = [
        {label: 'Update', value: 0 },
        {label: 'Done', value: 1 }
      ];

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

            <Modal visible={showModal} >
        <View style={styles.add}>
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Đường dẫn ảnh'
            backgroundColor="#f5f6f5"
            borderRadius='30'
            value= {item.avatar}
            keyboardType='default'  onChangeText={(value) => {}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Tên truyện'
            backgroundColor="#f5f6f5"
            borderRadius='30'
            value={item.name}
            keyboardType='default'  onChangeText={(value) => {}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Thể loại'
            backgroundColor="#f5f6f5"
            borderRadius='30'
            value={item.category}
            keyboardType='default' onChangeText={(value) => {}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Số tập'
            keyboardType='number-pad' 
            value={item.total_chapters}
            backgroundColor="#f5f6f5"
            borderRadius='30'
           onChangeText={(value) => {}} />

      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {}}
        />
        
      </View>

    <View>
        <TouchableOpacity style={styles.button_add} onPress={() => {}}>
          <Text style={styles.buttonTextAdd}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_add } onPress={() => { setShowModal(false)}}>
          <Text style={styles.buttonTextAdd}>Thoát</Text>
        </TouchableOpacity>
    </View>
       

        </View>
      </Modal>

            <View>
                <TouchableOpacity onPress={() => {setShowModal(true) }} >
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