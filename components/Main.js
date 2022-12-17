import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

function Main ({ navigation }) {

  return (
     <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Text style={styles.title}>대면수업, 뭐 먹지?</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
      <Text>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
      <Text>회원가입</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
  title: {
    fontSize: 20,
    color: "red",
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});

export default Main;