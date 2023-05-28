import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import {React, useState} from 'react';
import climateCar from '../assets/climate.png';
import { FontAwesome, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


export default function climate() {
    const router = useRouter();
    const [temp, setTemp] = useState(70);
    const [onButton, setOnButton] = useState(true);
    return (
        <View style={styles.container}>
            
            <Image source={climateCar} style={styles.image} resizeMode="stretch" />
            <Pressable onPress={()=> router.back()} style={styles.backIcon}>
                <Entypo name="chevron-left" size={24} color="white" />
            </Pressable>
            <View style={styles.footer}>
                <Text style={styles.label}>Interior 74°F - Exterior 66°F</Text>
                <View style={styles.footIconContainer}>
                    <Pressable onPress={()=> setOnButton(!onButton)} style={styles.powerIcon}>
                        <FontAwesome
                        name="power-off"
                        size={30}
                        color={onButton ? ("white") : ("gray")}
                        />
                        <Text style={styles.powerText}>{onButton ? 'On' : 'Off'}</Text>
                    </Pressable>

                    <View style={styles.TempIcon}>
                        <Ionicons onPress={()=> setTemp(temp-1)} name="md-chevron-back" size={30} color="gray" />
                        <Text style={styles.tempText}>{temp}°</Text>
                        <Ionicons onPress={()=> setTemp(temp+1)} name="chevron-forward" size={30} color="gray" />
                    </View>

                    <View style={styles.doorIcon}>
                        <MaterialCommunityIcons name="car-door" size={30} color="gray" />
                        <Text style={styles.powerText}>Vent</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161818'
    },
    backIcon: {
        position: 'absolute',
        top: 60,
        left: 25,
        backgroundColor: '#2f3030',
        borderRadius: 5,
        padding: 10
    },
    image: {
        height: "70%",
        width: '100%'
    },
    footer: {
        marginTop: 'auto'
    },
    label: {
        color: 'gray',
        fontSize: 18,
        fontWeight: "600",
        marginVertical: 20,
        textAlign: 'center'
    },
    footIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    powerIcon: {
        flexDirection: "column",
        alignItems: 'center'
    },
    TempIcon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    tempText: {
        color: 'white',
        fontSize: 50,
        fontWeight: '500',
        marginHorizontal: 20

    },
    doorIcon: {

    },
    powerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10
    }
})