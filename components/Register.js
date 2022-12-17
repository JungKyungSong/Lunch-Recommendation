import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Register({ navigation }) {
    return (
        <SafeAreaView>
            <Text>REGISTER</Text>
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
            >
            <Text>회원가입</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Register;