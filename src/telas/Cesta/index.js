import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./Componentes/Topo";
import Detalhes from "./Componentes/Detalhes";
import Botao from "./Componentes/Botao";

export default function Cesta({topo, detalhes}) {
    return <>
        
        <Topo {...topo} />

        <View style={estilos.cesta} >
            <Detalhes {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})
