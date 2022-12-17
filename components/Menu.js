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

function Menu({ navigation }) {
    return (
        <SafeAreaView>
            <Text>MENU</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Result")}
            >
            <Text>결과확인</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Menu;