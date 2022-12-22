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

function Result({ navigation }) {

    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [arr3, setArr3] = useState([]);
    const [arr4, setArr4] = useState([]);
    const [arr5, setArr5] = useState([]);
    const [arr6, setArr6] = useState([]);
    const [arr7, setArr7] = useState([]);
    const [arr8, setArr8] = useState([]);
    const [arr9, setArr9] = useState([]);
    const [arr10, setArr10] = useState([]);
    const [arr11, setArr11] = useState([]);
    const [arr12, setArr12] = useState([]);
    const [arr13, setArr13] = useState([]);
    const [arr14, setArr14] = useState([]);
    const [arr15, setArr15] = useState([]);
    const [arr, setArr] = useState([]);
    const [more, setMore] = useState("")
    const [ok, setOk] = useState(false)
    const isMounted = useRef(false);

    const secondRef = useRef();

    const getResult = async () => {
        
        try {
            // const response = await fetch(
            //   "http://127.0.0.1:8080/category/result"
            // );
            //const json = await response.json();
            const json = {
                "0": {
                    "상호명": "미세기",
                    "도로명주소": "서울특별시 서대문구 성산로22길 4, (창천동)",
                    "별점": 3.8,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 35
                },
                "1": {
                    "상호명": "기꾸초밥",
                    "도로명주소": "서울특별시 서대문구 연세로5다길 35, (창천동)",
                    "별점": 3.7,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 80
                },
                "2": {
                    "상호명": "김판석초밥",
                    "도로명주소": "서울특별시 서대문구 연세로9길 37, (창천동)",
                    "별점": 3.8,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 30
                },
                "3": {
                    "상호명": "여우골초밥앤참치",
                    "도로명주소": "서울특별시 서대문구 연세로5다길 10, (창천동)",
                    "별점": 3.6,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 112
                },
                "4": {
                    "상호명": "마이도야",
                    "도로명주소": "서울특별시 서대문구 신촌로 83, (창천동)",
                    "별점": 3.8,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 2
                },
                "5": {
                    "상호명": "라임",
                    "도로명주소": "서울특별시 서대문구 연세로4길 41, (창천동)",
                    "별점": 3.9,
                    "카테고리": [
                        "일식",
                        "초밥"
                    ],
                    "리뷰개수": 39
                },
                "6": {
                    "상호명": "교토우마이",
                    "도로명주소": "서울특별시 서대문구 연세로5가길 19, (창천동)",
                    "별점": 3.9,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 3
                },
                "7": {
                    "상호명": "칼",
                    "도로명주소": "서울특별시 서대문구 연세로4길 42-3, (창천동)",
                    "별점": 4.1,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 41
                },
                "8": {
                    "상호명": "최완식참치",
                    "도로명주소": "서울특별시 서대문구 연세로5나길 6, (창천동)",
                    "별점": 3.7,
                    "카테고리": [
                        "일식",
                        "횟집"
                    ],
                    "리뷰개수": 4
                },
                "9": {
                    "상호명": "미도인",
                    "도로명주소": "서울특별시 서대문구 명물길 33, (창천동)",
                    "별점": 3.7,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 70
                },
                "10": {
                    "상호명": "긴자료코",
                    "도로명주소": "서울특별시 서대문구 연희로12길 8, (연희동, 연희그린빌라)",
                    "별점": 3,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 63
                },
                "11": {
                    "상호명": "주간",
                    "도로명주소": "서울특별시 서대문구 연세로7안길 31, (창천동)",
                    "별점": 3.9,
                    "카테고리": [
                        "일식",
                        "횟집"
                    ],
                    "리뷰개수": 14
                },
                "12": {
                    "상호명": "제스의부엌옐로서브마린점",
                    "도로명주소": "서울특별시 서대문구 연세로5다길 35, (창천동)",
                    "별점": 4,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 13
                },
                "13": {
                    "상호명": "이자카야류",
                    "도로명주소": "서울특별시 서대문구 연세로5가길 3, (창천동)",
                    "별점": 3.6,
                    "카테고리": [
                        "일식",
                        "일식종합"
                    ],
                    "리뷰개수": 10
                },
                "14": {
                    "상호명": "와사비횟집",
                    "도로명주소": "서울특별시 서대문구 연세로4길 48, (창천동)",
                    "별점": 3.8,
                    "카테고리": [
                        "일식",
                        "횟집"
                    ],
                    "리뷰개수": 1
                }
            }
            setArr1(Object.values(json["0"]))
            setArr2(Object.values(json["1"]))
            setArr3(Object.values(json["2"]))
            setArr4(Object.values(json["3"]))
            setArr5(Object.values(json["4"]))
            setArr6(Object.values(json["5"]))
            setArr7(Object.values(json["6"]))
            setArr8(Object.values(json["7"]))
            setArr9(Object.values(json["8"]))
            setArr10(Object.values(json["9"]))
            setArr11(Object.values(json["10"]))
            setArr12(Object.values(json["11"]))
            setArr13(Object.values(json["12"]))
            setArr14(Object.values(json["13"]))
            setArr15(Object.values(json["14"]))
           } catch (e) {}
       };
    
      useEffect(() => {
          getResult();
      }, [])

      const sendResult = async (more) => {
        try {
          const response = await fetch(`http://127.0.0.1:8080/category/detail?storename=${more}`, {
            method: "GET",}).then(response => console.log(response.status));
          setResult(response.status);
        } catch (e) {}
      };
    
      useEffect(() => {
        if(isMounted.current){
          sendResult(more);
          navigation.navigate("Detail");
        } else {
         isMounted.current = true;
        }
      }, [more]);

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <ImageBackground source={yonsei} style={styles.bg_image}>
            <View style={styles.title_container}>
                <Text style={styles.title}>이곳에서 식사는 어떠실까요?</Text>
            </View>
            <View>
                <ScrollView 
                    style={styles.scroll_container}
                    contentContainerStyle={{ flexGrow: 1 }}
                    contentInsetAdjustmentBehavior="automatic">
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr1[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr1[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr1[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr1[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr1[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr1[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr2[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr2[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr2[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr2[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr2[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr2[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                            
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr3[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr3[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr3[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr3[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr3[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr3[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr4[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr4[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr4[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr4[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr4[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr4[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr5[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr5[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr5[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr5[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr5[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr5[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr6[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr6[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr6[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr6[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr6[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr6[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr7[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr7[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr7[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr7[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr7[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr7[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr8[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr8[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr8[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr8[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr8[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr8[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr9[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr9[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr9[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr9[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr9[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr9[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr10[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr10[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr10[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr10[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr10[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr10[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr11[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr11[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr11[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr11[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr11[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr11[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr12[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr12[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr12[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr12[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr12[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr12[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr13[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr13[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr13[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr13[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr13[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr13[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr14[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr14[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr14[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr14[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr14[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr14[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                <View style={styles.rt_container}>

                            <View
                                    style={styles.rt_each}
                            >   
                                <View style={styles.image_container}>
                                    <Image style={styles.image} source={cafeteria}></Image>
                                </View>
                                <View style={styles.info_container}>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_name}>{arr15[0]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_score}>{arr15[2]}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.rt_review}>{arr15[4]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_address}>{arr15[1]}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line}>
                                        <View>
                                            <Text style={styles.rt_category}>{arr15[3]}</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => setMore(arr15[0])}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>더 궁금해요</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                </View>
                </ScrollView>
            </View>
            {/* <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Detail")}
                    style={styles.random_btn}
                >
                    <Text style={styles.random_text}>랜덤추천</Text>
                </TouchableOpacity>                
            </View> */}
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
        marginTop: "4%",
        width: "100%",
    },
    rt_each:{
        //backgroundColor: "blue",
        width: "100%",
        height: 110,
        flexDirection: "row",
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        paddingTop: "4%"
    },
    rt_name:{
        textAlign: "left",
        fontSize: 20,
       
        marginTop: "1%",
        marginLeft: "2%"
    },
    rt_score:{
        textAlign: "left",
        color: "#939393",
        fontSize: 16,
        marginTop: "3%",
        marginLeft: "27%",
        marginRight: "-18%"
    },
    rt_review: {
        textAlign: "left",
        color: "#939393",
        fontSize: 16,
        marginTop: "3%",
        marginLeft: "8%"
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
        marginTop: "-75%",
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
        marginLeft: "15%",
        borderRadius: 5,
        marginTop: "-22%"
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