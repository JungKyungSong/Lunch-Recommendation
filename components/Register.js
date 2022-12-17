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
  TextInput
} from 'react-native';
import login_register from "../images/login_register.png"

function Register({ navigation }) {
    return (
         <SafeAreaView style={styles.container}>
            <ImageBackground source={login_register} style={styles.image}>
                <View>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.register_container}>
                    <View>
                        <Text style={styles.container_title}>Register</Text>
                    </View>
                    <View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="아이디"
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호"
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호 확인"
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="닉네임"
                            >
                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => Alert.alert(
                            '회원가입',
                            '회원가입 하시겠습니까?',
                            [
                              {text: '네', onPress:() => navigation.navigate("Login")},
                              {
                                text: '아니요',
                                style: 'cancel'
                              },
                            ]
                          )}
                        style={styles.register_btn}
                    >
                    <Text style= {styles.register_text}>회원가입</Text>
                    </TouchableOpacity>
                </View>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2B82D4",
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: "30%"
  },
  register_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "88%",
    height: "45%",
    marginTop: "5%",
    marginHorizontal: "6%",
    borderRadius: 12,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#878787",
    marginBottom: "4%"
  },
  register_btn: {
      backgroundColor: "#2B82D4",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "15%",
      marginHorizontal: "10%",
      borderRadius: 5,
      marginTop: "7%"
    },
    register_text: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    input: {
      marginTop: "1%",
      paddingHorizontal: 10,
      width: 260,
      height: 40,
      borderBottomColor: '#2B82D4',
      borderBottomWidth: 1,
    }
})

export default Register;