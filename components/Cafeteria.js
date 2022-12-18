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
import cafeteria from "../images/cafeteria.png";
import univ from "../images/univ.png";

function Cafeteria({ navigation }) {

    const cfArr = [
        { id: "0", where: "고를샘", image: cafeteria, bf: "설렁탕", lc: "오므라이스", dn: "김치찌개"},
        { id: "1", where: "맛나샘", image: cafeteria, bf: "수육국밥", lc: "치킨", dn: "피자"},
        { id: "2", where: "부를샘", image: cafeteria, bf: "순대국밥", lc: "부대찌개", dn: "뚝배기불고기"},
        { id: "3", where: "어울샘", image: cafeteria, bf: "김밥", lc: "닭볶음탕", dn: "닭갈비"},
        { id: "4", where: "청경관", image: cafeteria, bf: "감자탕", lc: "알밥", dn: "찜닭"},
    ];

    return (
        <View style={styles.container}>
            <ImageBackground source={univ} style={styles.bg_image}>
                <ScrollView 
                    style={styles.scroll_container}
                    contentContainerStyle={{ flexGrow: 1 }}
                    contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.cf_container}>
                        {cfArr.map((array, index) => {
                            return(
                                <View
                                        key={index}
                                        style={styles.cf_each}
                                >   
                                    <View style={styles.image_container}>
                                        <Image style={styles.image} source={array.image}></Image>
                                    </View>
                                    <View>
                                        <Text style={styles.cf_text}>{array.where}</Text>
                                    </View>
                                    <View style={styles.menu_container}>
                                        <View style={styles.bf_container}>
                                            <View>
                                                <Text style={styles.cf_menu}>아침</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.cf_menu_detail}>&nbsp;&nbsp;{array.bf}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.lc_container}>
                                            <View>
                                                
                                                <Text style={styles.cf_menu}>점심</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.cf_menu_detail}>&nbsp;&nbsp;{array.lc}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.dn_container}>
                                            <View>
                                                <Text style={styles.cf_menu}>저녁</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.cf_menu_detail}>&nbsp;&nbsp;{array.dn}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })
                        } 
                    </View>
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
        width: 80,
        height: 80,
        marginLeft: "20%",
        marginRight: "-10%"
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
    scroll_container: {
        marginTop: "54%",
        width: "100%",
    },
    cf_container:{
        height: 1000
    },
    cf_each:{
        //backgroundColor: "blue",
        width: "100%",
        height: "20%",
        flexDirection: "row",
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        paddingTop: "3%"
    },
    cf_text:{
        textAlign: "left",
        fontSize: 26,
        paddingTop: "8%",
        marginTop: "18%",
        marginLeft: "5%"
    },
    menu_container: {
        marginTop: "22%",
        marginLeft: "-20%"
    },
    bf_container: {
        flexDirection: "row",
        marginTop: "12%"
    },
    lc_container: {
        flexDirection: "row",
        marginTop: "12%"
    },
    dn_container: {
        flexDirection: "row",
        marginTop: "12%"
    },
    cf_menu: {
        fontSize: 18,
        fontWeight: "bold"
    },
    cf_menu_detail: {
        color: "#939393"
    }
})

export default Cafeteria;