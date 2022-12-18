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

function Mypage({ navigation }) {
    return (
        <SafeAreaView>
            <StatusBar style="auto"/>
            <Text>MYPAGE</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Start")}
            >
            <Text>시작하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Mypage;