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

function Cafeteria({ navigation }) {
    return (
        <SafeAreaView>
            <Text>CAFETERIA</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Category")}
            >
            <Text>학식은 지겨워요(질문 추천 버전)</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Random")}
            >
            <Text>학식은 지겨워요(이미지 추천 버전)</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Cafeteria;