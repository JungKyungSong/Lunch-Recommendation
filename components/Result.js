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

function Result({ navigation }) {
    return (
        <SafeAreaView>
            <Text>RESULT</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Detail")}
            >
            <Text>자세히 알아보기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Result;