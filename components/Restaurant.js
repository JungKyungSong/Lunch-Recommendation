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

function Restaurant({ navigation }) {
    return (
        <SafeAreaView>
            <Text>RESTAURANT</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Menu")}
            >
            <Text>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Restaurant;