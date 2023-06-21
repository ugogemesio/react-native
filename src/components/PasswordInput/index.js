import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Estilo from '../Estilo';

const PasswordInput = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            <TextInput style={Estilo.title}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter password"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
                <Text style={Estilo.title}>Show/Hide Password</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PasswordInput;
