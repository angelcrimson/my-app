import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../components/styles";

export default function Index() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);



  return (
    <View style={styles.homeView}>
      <Text style={styles.homepage}>Homepage</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity  onPress={onPress} style={styles.imagebutton} >
          <Image source={require('../assets/images/lolggg.png')} style= {styles.imagebutton} />
          </TouchableOpacity>
    </View>
  );
}