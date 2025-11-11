import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../components/styles";

export default function Index() {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);



  return (
    <View style={styles.mainView}>
     
      <View style= {styles.subView1}>
      
        <Image source={require('../assets/images/logo.png')} style= {styles.logo} />
      </View>
    
    <View style={styles.subView2}>
      <Text style={styles.homepage}>Press the CD! </Text>
    </View>

      <View style= {styles.subView3}>
      
        <Text style={styles.homepage}>Count: {count}</Text>
        
        <TouchableOpacity  onPress={onPress} style={styles.imagebutton} >
            <Image source={require('../assets/images/lolggg.png')} style= {styles.imagebutton} />
            </TouchableOpacity>
          </View>


    </View>
  );
}