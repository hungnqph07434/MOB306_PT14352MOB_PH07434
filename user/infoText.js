import { Text, StyleSheet, View, Image,ImageBackground } from 'react-native';
import React, { useState, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

export default function infoText({ route, navigation }) {
    const { name } = route.params;
    const { avatar } = route.params;
    const { category } = route.params;
    const { total_chapters } = route.params;
    const { active } = route.params;
    const uriImage=avatar;


    return (
        <ImageBackground source={{uri: 'https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg'}} style={{width: '100%', height: '100%'}}>
        <ScrollView  style={styles.container}>
            <View >
            <View >
            <Image style={styles.image}   source={{ uri:avatar }} />
            </View>
            <Text  style={styles.name_story}>Name: {name}</Text>
            <Text  style={styles.category}>Category: {category}</Text>
            <Text  style={styles.category}>Total Chapters:  {total_chapters}</Text>
            <Text  style={styles.category}>Active: {active?'Done': 'Update'}</Text>
        </View>

        </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        marginBottom:20
    },
    image:{  
        marginTop:'20%', 
        width: '100%',
    
        flex: 1,
        aspectRatio: 1.5, 
        resizeMode: 'contain',

    },
    container_image:{
        width:'10%',
        

    },
    container_content:{
        justifyContent: 'center',
        flexDirection:'row',
        textAlign: 'center',
        fontSize: 30,
        margin:'8%'
    },
    container_button:{
      
        width:'20%',
        flexDirection:'row',
        alignContent:'center',
        alignItems: 'center',
    },
    detail_content:{
        width:'95%',
        height:20
    },
    image_button:{
        padding:'25%',
        width:30,
        height:30
    },
    title_content: {
        color:'#808080'
    },
    container_content_title:{
        marginTop:'10%',
        flexDirection:'row',
        marginLeft:'20%',
        margin:'2%',
       
    },
    title_content_name_story:{
        color:'rgba(255,255,255,0.5)',
        fontSize:20
    },
    name_story:{
        fontSize:20,
        color:'#fff',
        marginLeft: 65,
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    container_content_category:{
        flexDirection:'row',
        marginLeft:'20%',
        marginRight:'20%',
        margin:'2%',
        
    },
    title_content_category:{
        color:'rgba(255,255,255,0.5)',
        fontSize:15
    },
    category:{
        fontSize:25,
        marginLeft:65,
        color:'#fff'
    },
    category_full:{
        color:'#00FF00'
    },
    category_not_full:{
        color:'#fff'
    }




   
});