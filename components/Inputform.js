// Formik x React Native example
import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Slider} from '@miblanchard/react-native-slider';
import {Formik} from 'formik';
import {navigate} from '../RouteService';
import Result from '../pages/Result';

const HandleOnSubmit = (name, params) => {
  navigate(name, params);
};

export const Inputform = props => (
  <View style={styles.mainContainer}>
    <Formik
      initialValues={{
        cnpj: '',
        tecido1: '',
        tecido2: '',
        porcentagem1: 0,
        porcentagem2: '',
        tamanho: 'PP',
      }}
      onSubmit={values => navigate('Result', values)}>
      {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => (
        <View>
          <Text style={styles.texto}>Informe o CNPJ da empresa:</Text>
          <TextInput
            style={styles.input}
            placeholder="CNPJ"
            onChangeText={handleChange('cnpj')}
            onBlur={handleBlur('cnpj')}
            value={values.cnpj}
          />
          <Text style={styles.texto}>
            Informe um tipo de tecido e sua porcentagem:
          </Text>
          <View style={styles.fabricContainer}>
            <Picker
              style={styles.inputPicker}
              selectedValue={values.tecido1}
              onValueChange={handleChange('tecido1')}
              onBlur={handleBlur('tecido1')}>
              <Picker.Item label="Poliéster" value="poliester" />
              <Picker.Item label="Algodão" value="algodao" />
            </Picker>
            <Slider
              containerStyle={styles.percentage}
              value={values.porcentagem1}
              onValueChange={value => setFieldValue('porcentagem1', value[0])}
            />
            <Text style={styles.textPct}>
              {(values.porcentagem1 * 100).toFixed(0)}%
            </Text>
          </View>
          <Text style={styles.texto}>
            Informe um tipo de tecido e sua porcentagem:
          </Text>
          <View style={styles.fabricContainer}>
            <Picker
              style={styles.inputPicker}
              placeholder="Tecido"
              selectedValue={values.tecido2}
              onValueChange={handleChange('tecido2')}
              onBlur={handleBlur('tecido2')}>
              <Picker.Item label="Nenhum" value="" />
              <Picker.Item label="Poliéster" value="poliester" />
              <Picker.Item label="Algodão" value="algodao" />
            </Picker>
            <Slider
              disabled
              containerStyle={styles.percentage}
              value={1 - values.porcentagem1}
              onValueChange={value => setFieldValue('porcentagem2', value[0])}
            />
            <Text style={styles.textPct}>
              {((1 - values.porcentagem1) * 100).toFixed(0)}%
            </Text>
          </View>
          <Text style={styles.texto}>Informe o tamanho da peça:</Text>
          <Picker
            style={styles.input}
            selectedValue={values.tamanho}
            onValueChange={handleChange('tamanho')}
            onBlur={handleBlur('tamanho')}>
            <Picker.Item label="PP" value="PP" />
            <Picker.Item label="P" value="P" />
            <Picker.Item label="M" value="M" />
            <Picker.Item label="G" value="G" />
            <Picker.Item label="GG" value="GG" />
          </Picker>
          {/* <Button onPress={handleSubmit} title="Search" color='#085D23'/> */}
          <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    marginBottom: 8,
    padding: 10,
    fontSize: 16,
    width: 400,
  },
  texto: {
    fontSize: 16,
    color: '#085D23',
    fontWeight: 'bold',
    fontFamily: 'tahoma',
  },
  botao: {
    width: 320,
    height: 50,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: '#9CD497',
    marginLeft: 40,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  fabricContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputPicker: {
    flex: 2,
  },
  percentage: {
    flex: 4,
  },
  textPct: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
  },
  mainContainer: {
    padding: 8,
  },
});
