import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native'

const Page = styled.SafeAreaView`
    flex:1;
    align-items:center;
`;

const HeaderText = styled.Text`
    font-size:25px;
    margin-top:30px;
`;

const Input = styled.TextInput`
    width:90%;
    height:50px;
    font-size:18px;
    background-color:#EEE;
    margin-top:20px;
    border-radius:10px;
    padding:10px;
`;

export default () => {
    return (
        <Page>
            <HeaderText>Calculadora de Gorjeta</HeaderText>
            <Input placeholder="Quanto deu a conta?" />
        </Page>
    );
}