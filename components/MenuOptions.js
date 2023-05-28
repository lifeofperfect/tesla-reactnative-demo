import { Text, View, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const MenuOptions = ({ item }) => {
    return (
        <Link href={item.href} asChild>
            <Pressable style={styles.optionRow}>
                {item.icon ? (
                    <item.icon />
                ) : (
                    <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
                )}

                {/* <Text style={styles.optionText}>{item.name}</Text> */}
                <Text href={item.href} style={styles.optionText}>{item.name}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: 'auto' }} />
            </Pressable>
        </Link>
        //   <View style={styles.optionRow}>
        //     {item.icon ? (
        //         <item.icon />
        //     ) : (
        //         <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
        //     )}

        //     {/* <Text style={styles.optionText}>{item.name}</Text> */}
        //     <Link href={item.href} style={styles.optionText}>{item.name}</Link>
        //     <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: 'auto' }} />
        //   </View>
    )
}

export default MenuOptions;

const styles = StyleSheet.create({
    optionRow: {
        flexDirection: "row",
        marginVertical: 30,
        alignItems: "center"

    },
    optionText: {
        color: "#eee",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    }
});