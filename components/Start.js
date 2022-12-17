import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import start from "../images/start.png"

function Start({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={start} style={styles.image}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Info")}
                    style={styles.start_btn}
                >
                <Text style={styles.start_text}>시작하기</Text>
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image:{
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    start_btn: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        width: "86%",
        height: "7%",
        marginTop: "160%",
        marginHorizontal: "7%",
        borderRadius: 5,
    },
    start_text: {
        color: "#2B82D4",
        fontWeight: "bold"
    }
})

export default Start;