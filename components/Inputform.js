// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { navigate } from '../RouteService';
import Result from '../pages/Result';

const HandleOnSubmit = (name, params) => {
    navigate(name, params)
}

export const Inputform = props => (
  <Formik
    initialValues={{ cnpj: '', tecido1: '', tecido2:'', porcentagem1: '', porcentagem2: '', tamanho:'' }}
    onSubmit={values => navigate( "Result", values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <Text style={styles.texto}>Informe o CNPJ da empresa:</Text>
        <TextInput
          style={styles.input}
          placeholder="CNPJ"
          onChangeText={handleChange('cnpj')}
          onBlur={handleBlur('cnpj')}
          value={values.cnpj}
        />
        <Text style={styles.texto}>Informe um tipo de tecido e sua porcentagem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecido"
          onChangeText={handleChange('tecido1')}
          onBlur={handleBlur('tecido1')}
          value={values.tecido1}
        />

        <TextInput
          style={styles.input}
          placeholder="Porcentagem"
          onChangeText={handleChange('porcentagem1')}
          onBlur={handleBlur('porcentagem1')}
          value={values.porcentagem1}
        />      
        <Text style={styles.texto}>Informe um tipo de tecido e sua porcentagem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecido"
          onChangeText={handleChange('tecido2')}
          onBlur={handleBlur('tecido2')}
          value={values.tecido2}
        />

        <TextInput
          style={styles.input}
          placeholder="Porcentagem"
          onChangeText={handleChange('porcentagem2')}
          onBlur={handleBlur('porcentagem2')}
          value={values.porcentagem2}
        />  
        <Text style={styles.texto}>Informe o tamanho da peça:</Text>
        <TextInput
          style={styles.input}
          placeholder="Tamanho"
          onChangeText={handleChange('tamanho')}
          onBlur={handleBlur('tamanho')}
          value={values.tamanho}
        />
       {/* <Button onPress={handleSubmit} title="Search" color='#085D23'/> */}
      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Search</Text>
        </View> 
      </TouchableOpacity>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({

    input:{
      height: 45,
      borderWidth: 1,
      marginBottom: 8,
      padding: 10,
      fontSize: 16,
      width: 400,
    },
    texto:{
        fontSize: 16,
        color: '#085D23',
        fontWeight: 'bold',
        fontFamily: 'tahoma',
      },
      botao:{
        width: 320,
        height: 50,
        borderColor: 'white',
        borderRadius: 20,
        backgroundColor: '#9CD497',
        marginLeft: 40
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
      }
    });