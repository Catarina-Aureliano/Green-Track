import React  from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { calculateMaterialCarbon, calculateMaterialWater, caulculateMaterialWeight } from '../api/calculateCarbon';

function Result( props ){

console.log(props.route)

if (props.route.params!==undefined){
  function setInformation(params){
    const weight = caulculateMaterialWeight(params.porcentagem1, params.tamanho)
    const water = calculateMaterialWater(weight, params.tecido1)
    const carbon = calculateMaterialCarbon(weight, params.tecido1)
  
    const weight2 = caulculateMaterialWeight(params.porcentagem2, params.tamanho)
    const water2 = calculateMaterialWater(weight, params.tecido2)
    const carbon2 = calculateMaterialCarbon(weight, params.tecido2)
  
    return [
      {name: params.tecido1, weight: weight, water: water, carbon: carbon},
      {name: params.tecido2, weight: weight2, water: water2, carbon: carbon2}
     ]
  }
   
    const data = setInformation(props.route.params) || [
      {name: '', weight: '', water: '', carbon: ''},
      {name: '', weight: '', water: '', carbon: ''}
     ]

     return(
      <View  style={styles.container}>
        
        <ImageBackground source={require('../src/kraft.jpg')} resizeMode="cover" style={styles.cover}>
  
        <View  style={styles.areaImage}>
        <Image source={require('../src/logo.jpg')} style={styles.img}/>
        </View>
  
  
        <ScrollView>
          <View style={styles.areaResultado}>
          <Text style={styles.resultado}>Esta peça utilizou {data[0].water + data[1].water} litros de água em sua produção</Text>
          </View>
          <View style={styles.areaResultado}>
          <Text style={styles.resultado}>Eu emito {data[0].carbon + data[1].carbon}kg de carbono</Text>
          </View>  
          <View style={styles.areaResultado}>
          <Text style={styles.resultado}>Eu fui fabricada pela empresa Osklen</Text>
          </View>
          <View style={styles.areaResultado}>
          <Text style={styles.resultado}>O custo do meu reparo é {props.route.params.tamanho}</Text>
          </View>    
           <View style={styles.areaResultado}>
          <Text style={styles.resultado}>Eu fui fabricada no Brasil</Text>
          </View>    
        </ScrollView>
   
        </ImageBackground>
  
  
    
      </View>
    );
  }
  return (
    <View>
      <Text>
CARREGANDO
      </Text>
    </View>
  )

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
  fontSize: 20,
  color: 'black',
  fontWeight: 'bold',
},
});

export default Result;