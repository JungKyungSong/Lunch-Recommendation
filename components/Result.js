import React, {useState, useEffect, useRef} from 'react';
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
import cafeteria from "../images/cafeteria.png";
import yonsei from "../images/yonsei.png";

function Result({ navigation, route }) {

    const list =
    [["고기구이", "국밥/해장국", "국수/만두/칼국수", "냉면집", "족발/보쌈", "찌개/국물", "찜닭/닭갈비", "한식/백반/한정식"],
    ["스테이크/폭립", "양식종합", "정통양식/경양식", "파스타/스파게티"],
    ["마라탕", "양꼬치", "중국집"],
    ["돈가스", "돈부리/덮밥", "라멘", "샤브샤브", "우동/소바/오뎅", "일식종합", "초밥", "횟집"],
    ["라면/김밥/어묵", "떡볶이"],
    ["기타", "도시락", "토스트/샌드위치", "피자", "햄버거"],
    ["삼계탕", "찜닭/닭갈비", "후라이드/양념치킨"],
    ["동남아음식", "죽전문점", "타코", "퓨전음식"]]

    const rtArr = [
        { id: "0", name: "미분당", image: cafeteria, score: "4.2", review: "16", address: "연희", category: "일식", hash: "#덮밥"},
        { id: "1", name: "효계", image: cafeteria, score: "4.2", review: "16", address: "신촌", category: "일식", hash: "#덮밥"},
        { id: "2", name: "대포찜닭", image: cafeteria, score: "4.2", review: "16", address: "연남", category: "일식", hash: "#덮밥"},
        { id: "3", name: "홍대개미", image: cafeteria, score: "4.2", review: "16", address: "창천", category: "일식", hash: "#덮밥"},
        { id: "4", name: "BHC", image: cafeteria, score: "4.2", review: "16", address: "대현", category: "일식", hash: "#덮밥"},
    ];

    
    const label = route.params.label;
    const Mcategory = route.params.Mcategory;
    const temp_Scategory = route.params.Scategory;
    const Scategory = list[Mcategory-1][temp_Scategory-1]
  
    let label_result = ""
    let Mcategory_result = ""
    let Scategory_result = ""
  
    if (label===1) {
        label_result = "다이어트"
    }
    else if (label===2) {
        label_result = "데이트"
    }
    else if (label===3) {
        label_result = "공부"
    }
    else if (label===4) {
        label_result = "찐맛집"
    }
    else if (label===5) {
        label_result = "모임"
    }
    else if (label===6) {
        label_result = "번개추천"
    }
  
    if (Mcategory===1) {
        Mcategory_result = "한식"
    }
    else if (Mcategory===2) {
        Mcategory_result = "양식"
    }
    else if (Mcategory===3) {
        Mcategory_result = "중식"
    }
    else if (Mcategory===4) {
        Mcategory_result = "일식"
    }
    else if (Mcategory===5) {
        Mcategory_result = "분식"
    }
    else if (Mcategory===6) {
        Mcategory_result = "패스트푸드"
    }
    else if (Mcategory===7) {
        Mcategory_result = "닭요리"
    }
    else if (Mcategory===8) {
        Mcategory_result = "별식/퓨전요리"
    }
  
    console.log(label_result)
    console.log(Mcategory_result)
    console.log(Scategory)

    const sendResult = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8080/category/result", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              label: label_result,
              Mcategory: Mcategory_result,
              Scategory: Scategory
            }), 
          }).then(response => console.log(response.status));
          setResult(response.status);
        } catch (e) {}
      };
      
      useEffect(() => {
            sendResult();
        }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <ImageBackground source={yonsei} style={styles.bg_image}>
            <View style={styles.title_container}>
                <Text style={styles.title}>이곳에서 식사는 어떠실까요?</Text>
            </View>
            <View 
                style={styles.scroll_container}>
                <View style={styles.rt_container}>
                    {rtArr.map((array, index) => {
                        return(
                            <View
                                    key={index}
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={array.image}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{array.name}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{array.score}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{array.review}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{array.address}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{array.category}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_hash}>{array.hash}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("Detail")}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                    } 
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={styles.random_btn}
                >
                    <Text style={styles.random_text}>랜덤추천</Text>
                </TouchableOpacity>                
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      //justifyContent: "center",
    },
    bg_image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
    image:{
        width: 75,
        height: 75,
        marginLeft: "20%",
        marginRight: "-10%"
    },
    title_container: {
    
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginTop: "40%",
      marginLeft: "3%"
    },
    scroll_container: {
        marginTop: "6%",
        width: "100%",
        height: "65%"
    },
    rt_each:{
        //backgroundColor: "blue",
        width: "100%",
        height: "20%",
        flexDirection: "row",
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        paddingTop: "3%"
    },
    rt_name:{
        textAlign: "left",
        fontSize: 20,
       
        marginTop: "1%",
        marginLeft: "5%"
    },
    rt_score:{
        textAlign: "left",
        color: "#939393",
        fontSize: 16,
        marginTop: "3%",
        marginLeft: "5%"
    },
    rt_review: {
        textAlign: "left",
        color: "#939393",
        fontSize: 16,
        marginTop: "3%",
        marginLeft: "5%"
    },
    rt_address: {
        textAlign: "left",
        fontSize: 18,
        marginTop: "30%",
        marginLeft: "5%"
    },
    rt_category: {
        color: "#939393",
        textAlign: "left",
        fontSize: 17,
        marginTop: "20%",
        marginLeft: "5%"
    },
    rt_hash: {
        color: "#2B82D4",
        textAlign: "left",
        fontSize: 17,
        marginTop: "12%",
        marginLeft: "5%"
    },
    line: {
        flexDirection: "row"
    },
    detail_btn: {
        backgroundColor: "#D3E5F5",
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 30,
        marginLeft: "25%",
        borderRadius: 5,
    },
    detail_text: {
        color: "#2B82D4",
        fontWeight: "bold"
    },
    random_btn: {
        backgroundColor: "#D3E5F5",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        height: "23%",
        borderRadius: 20,
        marginHorizontal: "35%",
        marginTop: "3%"
    },
    random_text: {
        color: "#2B82D4",
        fontWeight: "bold"
    }
})

export default Result;