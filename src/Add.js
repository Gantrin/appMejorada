import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import React, {useState, useEffect} from 'react'
import firebase from '../config.js';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const todoRef =     firebase.firestore().collection('newData')
    const [addData, setAddData] = useState('')

    const addField = () => {
        if(addData && addData.length > 0){
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                heading: addData,
                createdAt: timestamp
            };
            todoRef
                .add(data)
                .then(() => {
                    setAddData('');
                    Keyboard.dismiss
                })
                .catch((error) => {
                    alert(error)
                })
        }
    }
    
    return(
        
    )
}