import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import univ from "../images/univ.png"
import cafeteria from "../images/cafeteria.png"

function Cafeteria({ navigation }) {

    const cfArr = [
        { id: "0", where: "고를샘", image: {cafeteria}},
        { id: "1", where: "맛나샘", image: {cafeteria}},
        { id: "2", where: "부를샘", image: {cafeteria}},
        { id: "3", where: "어울샘", image: {cafeteria}},
        { id: "4", where: "청경관", image: {cafeteria}},
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={univ}
                style={styles.image}
            >
            </Image>
            <Text
                style={styles.title}
            >
                오늘의 연세대 학식
            </Text>
            <Text
                style={styles.subtitle}
            >
                신촌캠퍼스
            </Text>
            <ScrollView 
                style={styles.cf_container}
                contentInsetAdjustmentBehavior="automatic">
                {cfArr.map((array, index) => {
                    return(
                        <View
                                key={index}
                                style={styles.cf_each}
                            >
                                <Text style={styles.cf_text}>{array.where}</Text>
                        </View>
                    );
                })
                } 
            </ScrollView>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      //justifyContent: "center",
    },
    image:{
        width: "100%"
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FFFFFF",
        position: "absolute",
        top: 190,
        //bottom:0,
        left: 20,
        //right:0,
    },
    subtitle: {
        fontSize: 20,
        color: "#FFFFFF",
        position: "absolute",
        top: 203,
        //bottom:0,
        left: 240,
        //right:0,
    },
    cf_each:{
        backgroundColor: "blue",
        width: "100%",
        height: "40%",
    },
    cf_text:{
        textAlign: "left",
        fontSize: 27,
        paddingTop: "15%"
    },
    cf_image:{

    }
})

export default Cafeteria;