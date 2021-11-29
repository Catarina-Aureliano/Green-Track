import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

function Home(){

  return(
    <View  style={styles.container}>
      
      <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.image}>

      <View  style={styles.primeiraParte}>
      <Image source={require('../src/logo.jpg')} style={styles.img}/>
      <Text style={styles.texto}>Your sustainable search engine</Text>
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
texto:{
    textAlign: 'center',
    fontSize: 20,
    margin: 15,
    color: '#637050',
    fontWeight: 'bold',
    fontFamily: 'tahoma',
    fontStyle: 'italic'    
},
img:{
  width: 450,
  height: 90
},
primeiraParte:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
});

export default Home;
