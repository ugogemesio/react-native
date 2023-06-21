import React from "react";
import Estilo from "../Estilo";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput
} from 'react-native';


export default function Form() {
    return (

        //style={{
        // flexDirection: 'row',
        // height: 100,
        // padding: 20,
        /// }};

        <View>
            
            <Text>Nome</Text>
            <TextInput
                placeholder="Seu primeiro nome"
                keyboardType="default"
            />

            <Text>Sobrenome</Text>
            <TextInput
                placeholder="Último nome"
                keyboardType="default"
            />

            <Text>Data de Nascimento</Text>
            <TextInput
                placeholder="ddmmaaaa ou (dd/mm/aaaa)"
                keyboardType="numeric"
            />

            <Text>E-mail</Text>
            <TextInput
                placeholder="exemplo@ugo.com"
                keyboardType="email-address"
            />
            
            <Button
                title="Registrar"
                onPress={() => Alert.alert('Registrado com Sucesso')}


            />


        </View>



    );

}
