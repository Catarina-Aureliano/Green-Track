import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { Inputform } from '../components/Inputform';

const PageCodigo = ({navigation}) => {

  return(
    <View  style={styles.container}>
      
      <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.image}>

      <View  style={styles.primeiraParte}>
      <Image source={require('../src/logo.jpg')} style={styles.img}/>

      <ScrollView>
        <Inputform/>
      </ScrollView>

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
  marginTop: 40,
  marginBottom: 10,
},
primeiraParte:{
  flex: 1,
  alignItems: 'center',
}
});

export default PageCodigo;