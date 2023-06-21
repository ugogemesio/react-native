import React from 'react';
import { StyleSheet } from 'react-native';

const Estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    navItem: {
        marginRight: 15,
    },
    navText: {
        fontSize: 18,
        fontWeight: 'bold',
    },


});
export default Estilo;