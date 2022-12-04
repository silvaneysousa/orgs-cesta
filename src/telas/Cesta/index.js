import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./Componentes/Topo";
import Detalhes from "./Componentes/Detalhes";


export default function Cesta() {
    return <>
        
        <Topo />
        
        <View style={estilos.cesta} >
            <Detalhes />
        </View>
    </>
}


const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})