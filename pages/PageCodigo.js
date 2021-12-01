import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera'

const PageCodigo = ({navigation}) => {

  return(
    <View  style={styles.container}>
      
      <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.image}>

      <View  style={styles.primeiraParte}>
      <Image source={require('../src/logo.jpg')} style={styles.img}/>

      <RNCamera
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.auto}
      androidCameraPermissionOptions={{
        title: 'Permissão para usar a câmera',
        message: 'Aceita que o App utilize sua câmera?',
        buttonPositive: 'OK',
        buttonNegative: 'Cancelar'
      }}
      >
      </RNCamera>

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
  marginTop: 50,
  marginBottom: 40
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
preview:{
  flex:1,
  justifyContent: 'flex-end',
  width: '30%',
  marginTop: 50,
  alignItems: 'center'
}
});

export default PageCodigo;