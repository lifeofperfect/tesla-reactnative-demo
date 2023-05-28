import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import car from '../assets/car.png';
import menuOptions from '../assets/menuOptions';
import MenuOptions from "../components/MenuOptions";
import Controls from "../components/Control";


export default function Page() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>This is the first page of your</Text>
        </View>
        <FontAwesome name="user-circle-o" size={30} color="gray" />
      </View>

      <Image source={car} style={styles.image} resizeMode="contain" />

      {/* <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View> */}

      <Controls />

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOptions}
        // ListHeaderComponent={Controls}
      />

      {/* <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.optionRow}>
            <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
            <Text style={styles.optionText}>{item.name}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" style={{ marginLeft: 'auto' }} />
          </View>
        )}
      /> */}


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818'
  },
  header: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  title: {
    fontSize: 24,
    color: '#eee',
    fontWeight: "bold",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    color: "#38434D",
  },
  image: {
    width: '100%',
    height: 300,
  }
});
