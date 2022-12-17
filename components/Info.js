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

function Info({ navigation }) {
    return (
        <SafeAreaView>
            <Text>INFO</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Cafeteria")}
            >
            <Text>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Info;