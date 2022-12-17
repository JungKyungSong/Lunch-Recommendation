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

function Map({ navigation }) {
    return (
        <SafeAreaView>
            <Text>MAP</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Main")}
            >
            <Text>메인페이지로 이동</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Map;