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
            <Text>DETAIL</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Map")}
            >
            <Text>지도 보기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Result;