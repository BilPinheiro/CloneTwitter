import { Text, View } from "react-native";
import { styles } from './styles.js'
import { FontAwesome, Ionicons, FontAwesome5  } from '@expo/vector-icons';

export function Footer(){
    return (
        <View style={styles.container}>
            <Ionicons name="home-sharp" size={30} color="white" />
            <FontAwesome name="search" size={30} color="white" />
            <FontAwesome5 name="bell" size={30} color="white" />
            <Ionicons name="ios-mail-outline" size={30} color="white" />
        </View>
    );

}