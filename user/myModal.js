import {
  View,
  Text,
  TextInput,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Picker,
  MDBInput,
  Button,
  TextInputLayout,
  ImageBackground
} from 'react-native'
import React, { useState } from 'react';
import ageValidate from './ageValidate';
import InfoText from './info-story';
import StoryItem from './storyItem';

const INITIAL_STATE = {
  age: ""
}

export default function User({ navigation }) {
  //ageValidate(INITIAL_STATE);
  const user = {
    info: {
      username: "NgoHung",
      age: 18
    },
    storys: [
      {
        identity: 0,
        avatar: 'https://sachvui.com/cover/2018/tham-tu-lung-danh-conan.jpg',
        name: 'Nguyen Van A',
        category: 'a@gmail.com',
        total_chapters: 55,
        is_full: true,

      },

      {
        identity: 1,
        avatar: 'https://sachvui.com/cover/2018/tham-tu-lung-danh-conan.jpg',
        name: 'Nguyen Van A',
        category: 'a@gmail.com',
        total_chapters: 33,
        is_full: true,

      },

      {
        identity: 2,
        avatar: 'https://sachvui.com/cover/2018/tham-tu-lung-danh-conan.jpg',
        name: 'Nguyen Van A',
        category: 'a@gmail.com',
        total_chapters: 20,
        is_full: true,

      },

      {
        identity: 3,
        avatar: 'https://sachvui.com/cover/2018/tham-tu-lung-danh-conan.jpg',
        name: 'Nguyen Van A',
        category: 'a@gmail.com',
        total_chapters: 44,
        is_full: true,

      },

    ]
  };

  const [users, setUser] = useState(true);
  const [check, checkValidate] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [story, setStory] = useState(user.storys);


  console.log(story);
  return (
    <View >


      <FlatList
        data={story}
        renderItem={({ item }) => <View>
          <StoryItem item={item} />
        </View>}
        keyExtractor={(item) => item.identity}
      />

    

      <Text>Xin Chào: {name}, Chúc bạn may mắn!</Text>


      <View style={{ backgroundColor: '#CCFF33' }} >
        <Modal visible={showModal} >

          <View>
            {/*             
          <ImageBackground source={{uri:'https://i.pinimg.com/originals/95/86/30/9586307741f484ab3480914f8218e3cd.jpg'}}
               style={[styles.backgroudContainer]}> */}

            <View style={{ alignItems: 'center', marginBottom: 30 }}>
              <Text style={[styles.text]}>WELLCOME</Text>
            </View>

            <TextInput placeholder="Enter Your Name " style={[styles.textInput]}
              onChangeText={(valueName) => setName(valueName)} />



            <TextInput placeholder="Enter Your Age"
              style={[styles.textInput]} keyboardType='numeric'
              onChangeText={(valueAge) => setAge(valueAge)} />


            <TouchableOpacity onPress={() => { setShowModal(false) }} style={[styles.button]}>
              <Text style={[styles.btntext]}>COMFIRM</Text>
            </TouchableOpacity>
            {/* </ImageBackground> */}
          </View>

        </Modal>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 200,
    backgroundColor: '#FFFFCC',

  },
  backgroudContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20, height: 60,
    marginBottom: 20,
    marginVertical: 10,
    paddingHorizontal: 16,
    borderStartWidth: 2,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: '#97FFFF'
  },
  inputLayout: {
    marginTop: 16,
    marginHorizontal: 36
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    opacity: 0.5,
    color: '#220000',
  },
  btntext: {
    fontSize: 20,
    fontWeight: '500',
    opacity: 0.5,
    textTransform: 'uppercase',
    color: '#220000',
  },

  inputBox: {
    width: 400,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    marginLeft: 80,
    marginRight: 80,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97FFFF',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
});