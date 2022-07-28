// import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';



export default function HomeScreen() {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30
  }
});