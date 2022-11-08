import {View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
    return (
        <View style={{ 
            alignItems:'center',
            justifyContent:'center',
            marginLeft:15}}
        >
            <Text style={{fontWeight:'bold',fontSize:25}}>
                {props.name}
            </Text>
        </View>
    )
}

export default Header