import {Text, StyleSheet, SafeAreaView, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import firebase from '../config.js';
import { useNavigation } from '@react-navigation/native'
import DATA from './data.js'
import { FlatList } from 'react-native-gesture-handler';

const List = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')

//change password
const changePassword = () => {
    firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
    .then(() => {
        alert("Password reset email sent")
    }).catch((error) => {
        alert(error)
    })
}

    useEffect(() => {
            firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                    if(snapshot.exists){
                        setName(snapshot.data())
                    }
                    else{
                        console.log('User does not exist')
                    }
            })
        }, [])
        return (

            <SafeAreaView style={styles.container}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>
                    Hola {name.firstName}
                </Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Dashboard')}
                    style={styles.button}
                >
                    <Text style={{fontSize:22,fontWeight:'bold'}}>
                        Dashboard?
                    </Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                    data={DATA}
                    numColumns={1}
                    horizontal={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={{marginTop:20}}>
                        <View style={styles.box}>
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                            <Text style={styles.text}>
                                {item.message}
                            </Text>                        
                        </View>                    
                        </TouchableOpacity>

                    )}
                    >
                    </FlatList>
                </View>

            </SafeAreaView>

        )
    }

export default List


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        marginTop: 100,
    },
    button:{
        marginTop:50,
        height:70,
        width:250,
        backgroundColor:'#026efd',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    box:{
        backgroundColor:'#c0c0c0',
        elevation:7,
        shadowColor:'#026efd',
        alignItems:'center',
        height:100,
        width:100,
        justifyContent:'center'
    }

})