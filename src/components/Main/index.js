import React from "react";
import { View, Text } from "react-native";
import Form from "../Form";
import Inicio from "../Inicio";
import styles from "../Estilo";
import PasswordInput from "../PasswordInput";
import Estilo from "../Estilo";
export default function Main() {
    return (
        <View >
            <Inicio />
            <Text style={Estilo.title}>Senha</Text>
            <PasswordInput />
        </View>
    );
}