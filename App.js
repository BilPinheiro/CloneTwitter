import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Footer } from "./src/components/Footer";
import { Header } from "./src/components/Header";
import { Post1 } from "./src/posts/Post1";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
       <Header />
       <Post1 />
       <Post1 />
       <Post1 />
       <Post1 />
       <Post1 />
       <Post1 />
       <Post1 />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#16202a",

  },
  scrollView: {
    backgroundColor: '#16202a',
  },
});
