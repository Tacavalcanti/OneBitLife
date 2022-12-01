import React from "react";
import { View, StyleSheet } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus(){

    /*Status:
        100 - Máximo
        50 - Médio
        25 - Baixo
        00 - curto ( acabou o game)
    */

        return (
            <View style={style.container}>
                <Lottie
                source={require("../../../assets/education/education-100.json")}
                autoPlay
                loop
                style={style.educacaoAnimacao}
                />

            <Lottie
                source={require("../../../assets/money/money-100.json")}
                autoPlay
                loop
                style={style.financasAnimacao}
            />

            <Lottie
                source={require("../../../assets/robot/robot-100-100.json")}
                autoPlay
                loop
                style={style.roboAnimacao}
                />
            </View>
        );
}

const style = StyleSheet.create({
    container:{
        width:300,
        height:300,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position:"absolute",
    },
    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position:"absolute",
    },
})