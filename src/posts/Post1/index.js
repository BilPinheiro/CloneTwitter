import { Image, View, Text } from "react-native";
import { styles } from "./styles";
import { Entypo, Feather, FontAwesome5, AntDesign } from "@expo/vector-icons";

export function Post1() {
  return (
    <View style={styles.container}>
      <View style={styles.fotoUsuario}>
        <Image
          source={require("../../../assets/gatinho.jpg")}
          style={styles.gatinho}
        />
      </View>
      <View style={styles.post}>
        <View style={styles.headerPost}>
          <View style={styles.nomeUsuario}>
            <Text style={styles.nome}>O Gato que ri!</Text>
            <Text style={styles.usuario}>@KittyGatinho</Text>
          </View>
          <Entypo name="dots-three-vertical" size={18} color="gray" />
        </View>
        <View style={styles.textoPost}>
          <Text style={styles.texto}>
            Miau, miau miau miau miau miau, grrrrrrrr, miau miau miau miau miau,
            miau miau miau miau miau, miau miau miau miau miau, miau, miau,
            miau, grgrgrgrgr, miau miau miau miau miau, miau miau miau miau
            miau, miau, miau, miau miau.
          </Text>
          <View style={styles.containerInteracoes}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="message-circle" size={20} color="grey" />
              <Text style={styles.textInt}>30</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="retweet" size={20} color="grey" />
              <Text style={styles.textInt}>467</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="heart-outlined" size={20} color="grey" />
              <Text style={styles.textInt}>2345</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="sharealt" size={20} color="grey" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
