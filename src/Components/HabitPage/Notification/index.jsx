import React, {useEffect, useRef, useState} from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
//import { Switch } from "react-native-gesture-handler";
import { Switch } from "react-native-paper";


export default function Notification ({
    notificationToogle,
    setNotificationToogle,
}) {
    const toogleSwitch=()=>{
        setNotificationToogle((previousState)=>!previousState);
    };
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Notificação</Text>
            <Switch
                trackColor={{false:"#FF0044", true:"#2DBE56"}}
                thumbColor={"#FFFFFF"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toogleSwitch}
                value={notificationToogle}
            />
        </View>
        </>
    );
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom: 20,
    },
    titleDisabled:{
        color:"#BBBB",
        fontSize:20,
        marginRight:10,
    },
    title:{
        color:"white",
        fontSize:20,
        marginRight:10,
    },
})