import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const PageCodigo = ({navigation}) => {

  return(
    <View  style={styles.container}>
      
      <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.image}>

      <View  style={styles.primeiraParte}>
      <Image source={require('../src/logo.jpg')} style={styles.img}/>

      <TouchableOpacity style={styles.qrcode}>
            <MaterialIcons name="control-point" size={200} color='black' />
        </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Result')}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Search</Text>
        </View> 
      </TouchableOpacity>
      </View>

      </ImageBackground>
  
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex: 1
},
image: {
  flex: 1,
  justifyContent: "center"
},
img:{
  width: 450,
  height: 90,
  marginTop: 70
},
primeiraParte:{
  flex: 1,
  alignItems: 'center',
},
botao:{
  width: 320,
  height: 50,
  borderColor: 'white',
  borderRadius: 20,
  backgroundColor: '#9CD497',
  marginTop: 60
},
btnArea:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
btnTexto:{
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
},
qrcode:{
  marginTop: 70
}
});

export default PageCodigo;