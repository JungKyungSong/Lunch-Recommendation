import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

function Login({ navigation }) {
    return (
        <SafeAreaView>
            <Text>LOGIN</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Mypage")}
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
}

export default Login;