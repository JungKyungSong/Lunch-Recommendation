import React, {useState} from 'react';
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

function Detail({ navigation }) {

    const rtArr = [
        { id: "0", name: "미분당", image: cafeteria, score: "4.2", review: "16", address: "연희", category: "일식", hash: "#덮밥"},
    ];

    const [category, setCategory] = useState('diary');

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.title_container}>
                <Text style={styles.title}>가게정보</Text>
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
                                            onPress={() => navigation.navigate("Map")}
                                            style={styles.detail_btn}
                                        >
                                        <Text style={styles.detail_text}>지도보기</Text>
                                        </TouchableOpacity>
                                        
                                    </View>


                                    <View style={styles.image_container}>

                                    <ScrollView style={styles.scrollView}>
                                    <Image source={cafeteria} style={{width: 200, height: 150}}/>
                                    <Image source={cafeteria} style={{width: 200, height: 150}}/>
                                    </ScrollView>
                                    
                                    </View>
                                </View>
                                <View style={styles.info_container}>
                                    <Text>댓글 리뷰 </Text>
                                </View>                                   
                                
                                
                            </View>
                        );
                    })
                    } 
                </View>
            </View>

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
    title_container: { marginTop: "5%",
    width: "10%",
    height: "8%"
    
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
   
      marginTop: "40%",
      marginLeft: "3%"
    },
    scroll_container: {
        marginTop: "15%",
        width: "100%",
        height: "80%"
    },
    image_container: {
        marginTop: "10%",
        width: "100%",
        height: "3080%",
        marginLeft: "3%",
        justifyContent: 'space-between',
        padding: '1%',
        marginHorizontal: "35%",

        flexDirection: 'row'
    },
    info_container: {
        marginTop: "1%",
        width: "80%",
        height: "120%"
    },
    rt_each:{
        //backgroundColor: "blue",
        width: "100%",
        height: "20%",
        flexDirection: "row",
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,
        paddingTop: "-20%"
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
    },
    scrollView: {
    
        marginHorizontal: 20,
        horizontal:"true"
      }
})

export default Detail;