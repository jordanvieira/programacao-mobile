import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabelaCursos from '@react-native-async-storage/async-storage';

export default function App() {
    const [curso, setCurso] = useState(null);

    const Armazenar = (chave, valor) => {
        TabelaCursos.setItem(chave, valor);
    };

    const Buscar = async (chave) => {
        const valor = await TabelaCursos.getItem(chave);
        setCurso(valor);
    };

    Armazenar('01', 'Eng. de Software');
    Armazenar('02', 'Eng. de Computação');
    Armazenar('03', 'Eng. de Produção');
    Armazenar('04', 'Eng. de Controle e Automação');
    //TabelaCursos.removeItem('04');
    Buscar('04');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Amazenamento Local / Async Storage</Text>
            <Text style={styles.text}>Curso: {curso}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    },
});