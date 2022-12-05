import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "./Botao";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return <>
        <View style={estilos.cesta} >
            <Texto style={estilos.nome} >{ nome }</Texto>
            <View style={estilos.IDfazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda} >{ nomeFazenda }</Texto>
            </View>
            <Texto style={estilos.descricao} >{ descricao }</Texto>
            <Texto style={estilos.preco} >{ preco }</Texto>
            <TouchableOpacity style={estilos.botao} onPress={ ()=> {} } >
                <Texto style={estilos.textoBotao} >{ botao }</Texto>
            </TouchableOpacity>
        </View>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold",
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    IDfazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
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
