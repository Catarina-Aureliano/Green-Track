import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Footer = ({navigation}) => {
    return (
    <View style={styles.container2}>
        <View>
            <MaterialIcons name="home" size={50} color='black' />
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('PageCodigo')}>
            <MaterialIcons name="qr-code-scanner" size={50} color='black' />
        </TouchableOpacity>
        </View>
        <View>
            <MaterialIcons name="search" size={50} color='black' />
        </View>
    </View>
    )
}

/*
<View style={styles.container}>
<Text style={styles.headerText}>{props.title}</Text>
</View>
*/

const styles = StyleSheet.create({
    container2:{
        backgroundColor: '#9AD398',
        width: 450,
        height: 80,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center'
        },
    icone:{
          width: 50,
          height: 50
        }
  });

export default Footer;