import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

function Result(){

  return(
    <View  style={styles.container}>
      
      <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.cover}>

      <View  style={styles.areaImage}>
      <Image source={require('../src/logo.jpg')} style={styles.img}/>
      </View>


      <ScrollView>
        <View style={styles.areaResultado}>
        <Text style={styles.resultado}>Aqui será o resultado da pesquisa</Text>
        </View>
        <View style={styles.areaResultado}>
        <Text style={styles.resultado}>Aqui será o resultado da pesquisa</Text>
        </View>
        <View style={styles.areaResultado}>
        <Text style={styles.resultado}>Aqui será o resultado da pesquisa</Text>
        </View>    
      </ScrollView>
 
      </ImageBackground>


  
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  alignItems: 'center',
  justifyContent: 'center'
},
cover:{
  alignItems: 'center',
  justifyContent: 'center'
},

areaImage:{
  alignItems: 'center',
},
img:{
    width: 450,
    height: 90,
    marginTop: 40,
    marginBottom: 40
  },
areaResultado:{
  width: 350,
  borderColor: '#0C9D3A',
  borderWidth: 2,
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 9,
  marginBottom: 20,
  alignItems: 'center', 
  opacity: 0.6,
  backgroundColor: 'white',
  
},

resultado:{
  fontSize: 16,
  color: 'black',
  fontWeight: 'bold',
}
});

export default Result;