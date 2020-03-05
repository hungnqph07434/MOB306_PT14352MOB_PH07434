import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, ImageBackground, FlatList, Keyboard } from 'react-native';

import TruyenTranhItem from './story-index';
import { OutlinedTextField } from 'react-native-material-textfield';

export default function Story({ navigation }) {

  const users = {
    storys: [
      {
        avatar: 'https://salt.tikicdn.com/cache/550x550/ts/product/25/59/6a/33eb6c33290c8134177c4ac2ad781139.jpg',
        id: '1',
        name: 'Shinnosuke',
        category: 'Hài Hước',
        total_chapters: 200,
        active: true
      },
      {
        avatar: 'https://adcbook.net.vn/images/products/2019/05/22/original/9786042120081_1558505252.jpg',
        id: '2',
        name: 'Naturo',
        category: 'Phiêu Lưu',
        total_chapters: 1000,
        active: false
      },
      {
        avatar: 'https://vcdn.tikicdn.com/cache/550x550/media/catalog/product/i/m/img688_2.jpg',
        id: '3',
        name: 'Pokemon',
        category: 'Viễn tưởng',
        total_chapters: 1000,
        active: true
      },
      {
        avatar: 'https://vcdn.tikicdn.com/cache/550x550/media/catalog/product/d/o/doaremon-tap-30.jpg',
        id: '4',
        name: 'NoName',
        category: 'Lãng mạn',
        total_chapters: 60,
        active: true
      },
      {
        avatar: 'https://tienthobook.vn/wp-content/uploads/2019/07/3ea7a9cfc1c618cc4292659d9320826b.jpg',
        id: '5',
        name: 'Nozaki',
        category: 'Action',
        total_chapters: 50,
        active: false
      },
      {
        avatar: 'https://vcdn.tikicdn.com/cache/550x550/media/catalog/product/c/o/conan55_1.jpg',
        id: '6',
        name: 'Conan',
        category: 'Action',
        total_chapters: 50,
        active: true
      },
      {
        avatar: 'https://cf.shopee.vn/file/62ff15a817e80d88bdb78c60e47dc9ba',
        id: '7',
        name: 'One Piece',
        category: 'Action',
        total_chapters: 1000,
        active: false
      },
    ]
  }

  const [showModal, setShowModal] = useState(true);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [story, setStory] = useState(users);
  const [errorName, setErrorName] = useState('');
  const [errorAge, setErrorAge] = useState('');


  const checkValiDate = () => {
    if (inputName.toString() == "") {
      setErrorName("It null=> Please!! Enter Your Name")
      return;
    }
    else {
      setErrorName("")
    } if (inputAge.toString() == "") {
      setErrorAge("It null=> Please Enter Your Age")
      return;
    }
    if (parseInt(inputAge.toString()) < 18) {
      setErrorAge("You are not old enough")
      return;
    }
    else {
      setErrorAge("")
    }
    setShowModal(false)
  }





  const handlDelete = (id) => {
    let newStory = users.storys;

    newStory = newStory.filter((story1) => story1.id != id);
    users.storys = newStory;
    setStory(users);
  }



  return (




    <View style={styles.container}>

      <Text>Xin Chào: {inputName}, Chúc bạn may mắn!</Text>


      <FlatList
        data={story.storys}
        renderItem={({ item }) => <View>
          <TouchableOpacity onPress={() => {
            navigation.navigate('infoText', {
              name: item.name, avatar: item.avatar, id: item.id,
              category: item.category, total_chapters: item.total_chapters, active: item.active
            })
          }}>
            <TruyenTranhItem item={item} handlDelete={handlDelete} />
          </TouchableOpacity>

        </View>}
        keyExtractor={(item, index) => index} />
      <View>
        <Modal visible={showModal}>
          <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/95/86/30/9586307741f484ab3480914f8218e3cd.jpg' }} style={styles.imgbg}>
          
            <View style={styles.full}>
            <Text style={[styles.text]}>WELLCOME</Text>
            <View style={styles.allbox}>
            
              <OutlinedTextField 
                errorColor="#FF0000"
                baseColor="#9966CC"
                borderWidth= '2'
                backgroundColor="EEE8AA"
                textColor='#fff'
                placeholderTextColor="#fff"
                label='User'
                error={errorName}
                backgroundColor="#f5f6f5"
                borderRadius= '30'
                keyboardType='default' value={inputName} onChangeText={(value) => setInputName(value)} />

              <OutlinedTextField
                 errorColor="#FF0000"
                 baseColor="#9966CC"
                 textColor='#fff'
                 placeholderTextColor="#fff"
                label='Age'
                error={errorAge}
                keyboardType='number-pad' value={inputAge} onChangeText={(value) => setInputAge(value)} />
                </View>
              <TouchableOpacity style={styles.button} onPress={() => { checkValiDate() }}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
      </View>


    </View>

  );
}





const styles = StyleSheet.create({
  container: {

  },
  tx: {
    fontStyle: 'italic',
    fontSize: 25,
    color: 'black'
  },
  imgbg: {
    width: '100%',
    height: '100%'
  },
  allbox:{
    width:'100%'
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    opacity: 5,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#9966CC',
    marginBottom: 30
  },
  full: {
    justifyContent: 'center',
    width: '100%',
    height:'100%',
    alignItems:'center'
  },
  inputBox: {

    borderColor:'#ffffff',
    borderWidth:1,
    color: '#ffffff',
    height: '100%'  
  },
  button: {
    marginLeft: 80,
    marginRight: 80,
    height: 60,
    width: 200,
    opacity: 1,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCFF',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#9966CC',
    textAlign: 'center'
  },
  input: {
   borderWidth: 1, 
   borderRadius: 20

  }

});


