import { Image, Text, View } from "react-native";
import { styles } from './styles.js'
import { MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons';

export function Header(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/gatinho.jpg')} style={styles.gatinho}/>
            <FontAwesome name="twitter" size={30} color="lightblue" />
            <MaterialCommunityIcons name="star-four-points-outline" size={30} color="white" />
        </View>
    );
twitteho
}
