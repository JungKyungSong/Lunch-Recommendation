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

function Category({ navigation }) {
    return (
        <SafeAreaView>
            <Text>CATEGORY</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Restaurant")}
            >
            <Text>다음</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Category;