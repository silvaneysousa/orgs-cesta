import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";



export default function Botao({ texto, onPress, style }) {
    return <TouchableOpacity style={[estilos.botao, style]} onPress={ ()=> {} } >
        <Texto style={estilos.textoBotao} >{ texto }</Texto>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 7,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
});

