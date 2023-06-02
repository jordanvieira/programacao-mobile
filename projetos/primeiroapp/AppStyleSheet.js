import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={style.pagina}>
      <Text style={style.texto}>Olá mundo</Text>
      <Text style={style.texto}>2º Olá mundo</Text>
      <Text style={[style.texto, {fontSize:10}]}>3º Olá mundo</Text>
    </View>
  );
}

// criando a constante style
// que vai receber o objeto stylesheet
const style = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor:'#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 50,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 24
  },

  texto: {
    color: '#FFFFFF', 
    fontSize:25
  }

})
