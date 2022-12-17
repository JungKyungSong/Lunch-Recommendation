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
            <Text>START</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Cafeteria")}
            >
            <Text>시작하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Mypage;