import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

function App(){
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function pesquisar(){
    setInput(nome);
}

  function pegaCodigo(texto){
    if(input === ''){
      alert('Digite o código!');
      return;
    }
    if(texto.length > 0){
      setNome('Você digitou ' + texto);
    }else{
      setNome('');
    }
  }

  return(
    <View  style={styles.container}>

      <View  style={styles.primeiraParte}>
      <Image
      source={require('./src/logo.jpg')}
      style={styles.img}
      />
      </View>

      <View style={styles.segundaParte}>
      <Text style={styles.texto}>Informe o código do produto</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite aqui"
      onChangeText={ (text) => pegaCodigo(text) }
      />

      <TouchableOpacity style={styles.botao} onPress={ pesquisar }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Pesquisar</Text>
        </View> 
      </TouchableOpacity>

      <Text style={styles.texto}> {input} </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
  flex: 1,

  backgroundColor: '#7E8E65'
},
  input:{
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 15,
    width: 400
},
  texto:{
    textAlign: 'center',
    fontSize: 25,
    margin: 15,
    color: '#8FA3B4',
    fontWeight: 'bold'
},
img:{
  width: 450,
  height: 90
},
botao:{
  width: 230,
  height: 50,
  borderColor: 'white',
  borderWidth: 2,
  borderRadius: 25,
  backgroundColor: 'white'
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
primeiraParte:{
  flex: 1,
  alignItems: 'center'
},
segundaParte:{
  flex: 3,
  justifyContent: 'center',
  alignItems: 'center',

}
});

export default App;