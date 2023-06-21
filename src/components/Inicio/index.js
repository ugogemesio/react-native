import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput
} from 'react-native';
import Estilo from "../Estilo";
import PasswordInput from "../PasswordInput";

export default function Inicio() {
    return (
        <View >
            
            <Text style={Estilo.title}>Nome de usuário</Text>
            <TextInput style ={Estilo.title}
                placeholder="Gigante"
                keyboardType="default"
            />
        </View>
    )
}