import React from "react";
import { View, Text, TextInput,TouchableOpacity } from "react-native";
import Estilo from "../Estilo";
export default function Navbar() {
    return (
        <View style={Estilo.navbar}>
            <TouchableOpacity style={Estilo.navItem}>
                <Text style={Estilo.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.navItem}>
                <Text style={Estilo.navText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilo.navItem}>
                <Text style={Estilo.navText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );
}