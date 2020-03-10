import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity, ImageBackground, FlatList, Keyboard, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import * as Progress from 'react-native-progress';


import TruyenTranhItem from './story-index';
import { OutlinedTextField } from 'react-native-material-textfield';

export default function Story({ navigation }) {
  const [story1, setStory1] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [story, setStory] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorAge, setErrorAge] = useState('');
  const [showloding, setShowLoding] = useState(true)
  const [name, setName] =useState('');
  const [category, setCategory] =useState('');
  const [total, setTotal] =useState('');
  const [active, setActive] =useState('');
  const [avatarUrl, setAvatarUrl] =useState('');
  const API = 'https://5e66495b2aea440016afbc48.mockapi.io/api/vr1/storys/'
  const fetchStorys = () => {
    return fetch(
      API,
      {}
    ).then((response) => response.json())
      .then((responseJson) => setStory1(responseJson))
      .catch((error) => console.log(error));
  };

  useEffect(
    () => {
      fetchStorys();
  }
  , []
  )

  fetchStorys();
  



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





  const deleteStory = (id) => {
    const newStory = story1.filter((story1) => story1.id != id);
    setStory(newStory);
  }
  const handlDelete = (id) => {
    deleteStory(id)
    fetch(
      `${API}/${id}`,
      { method: 'DELETE' }
    ).then(() => { setShowLoding(false) })
      .catch((error) => console.log(error));

  }
  const handleAddSubject = (responseJson) => {
    const newStory = [...story1]; // clone subjects, neu clone object -> {...subject}

    return newStory.push(responseJson); // return de gan gia tri duoi phan then
}

  const setModalData = (data) => {
    setAvatarUrl(data.avatar);
    setName(data.name);
    setCategory(data.category);
    setTotal(data.total_chapters);
    setActive(data.active);

    setIsUpdate(data.id); // set isUpdate = id -> neu co id thi se hieu la true, con k co id thi se la undefined -> hieu la false
}
  const handleSubmit= ()=>{
    const story= {
      avatar: avatarUrl,
      name: name,
      category: category,
      total_chapters: total,
      active: active
    };

    const newStory= story1.push(story);
    setStory1(newStory);

    fetch(
      API,
      {
        method: isUpdate ? 'PUT' : 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(story)
      }
    ).then((response)=> response.json())
    .then((responseJson) => {
      const newSubject=[...story1]
     story1.push(responseJson);
      setStory1(newSubject);
      setShowModalAdd(false);
    })
      .catch((error)=>console.log(`ERROR: ${error}`))
  }

  const handleCancle = () => {
    setShowModal(false);
  }
  var radio_props = [
    {label: 'Update', value: true },
    {label: 'Done', value: false }
  ];


  return (

    <View style={styles.container}>

      <Text>Xin Chào: {inputName}, Chúc bạn may mắn!</Text>
      <View>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => { setShowModalAdd(true) }}>
          <Text style={styles.buttonTextAdd}>Add New Story</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showModalAdd} >
        <View style={styles.add}>
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Đường dẫn ảnh'
            error={errorName}
            backgroundColor="#f5f6f5"
            borderRadius='30'
            keyboardType='default' 
             onChangeText={(avatarurl) => {setAvatarUrl(avatarurl)}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Tên truyện'
            error={errorName}
            backgroundColor="#f5f6f5"
            borderRadius='30'
            keyboardType='default' 
             onChangeText={(nameStory) => {setName(nameStory)}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Thể loại'
            error={errorName}
            backgroundColor="#f5f6f5"
            borderRadius='30'
            keyboardType='default' 
           onChangeText={(category) => {setCategory(category)}} />
          <OutlinedTextField
            errorColor="#FF0000"
            baseColor="#9966CC"
            borderWidth='2'
            backgroundColor="EEE8AA"
            textColor='#000000'
            placeholderTextColor="#fff"
            label='Số tập'
            error={errorName}
            keyboardType='number-pad' 
            backgroundColor="#f5f6f5"
            borderRadius='30'
            
           onChangeText={(total) => {setTotal(total)}} />

      <View>
        <RadioForm
          radio_props={radio_props}
          initial={true}
          value= {active}
          onPress={(value) => {}}
        />
        
      </View>

    <View>
        <TouchableOpacity style={styles.button_add} onPress={() => {handleSubmit()}}>
          <Text style={styles.buttonTextAdd}>Thêm Truyện</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_add } onPress={() => { setShowModalAdd(false)}}>
          <Text style={styles.buttonTextAdd}>Thoát</Text>
        </TouchableOpacity>
    </View>
       

        </View>
      </Modal>

      {/* {
          showloding
          ?
         <Text>----------------</Text>
          :null
        } */}
      <FlatList
        data={story1}
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
                  borderWidth='2'
                  backgroundColor="EEE8AA"
                  textColor='#fff'
                  placeholderTextColor="#fff"
                  label='User'
                  error={errorName}
                  backgroundColor="#f5f6f5"
                  borderRadius='30'
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
  allbox: {
    width: '100%'
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
    height: '100%',
    alignItems: 'center'
  },
  inputBox: {

    borderColor: '#ffffff',
    borderWidth: 1,
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

  buttonAdd: {
    margin: 30,
    marginLeft: 60,
    height: 50,
    width: 300,
    opacity: 1,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCCFF',
    borderRadius: 25,
  },
  buttonTextAdd: {
    fontSize: 20,
    fontWeight: '500',
    color: '#9966CC',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderRadius: 20

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


