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
  Styled
} from 'react-native';
import main from "../images/main.png"

import cafeteria from "../images/cafeteria.png";
import yonsei from "../images/yonsei.png";
import everytime from "../images/everytime.png";



function Mypage({ navigation }) {

    const rtArr = [
        { id: "0", name: "박유찬님", image: everytime, prefer1:"공학관", prefer2:"언더우드관"},
    ];

    const [category, setCategory] = useState('diary');
 
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.title_container}>
                <Text style={styles.title}>마이페이지</Text>
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
                                            <Text style={styles.rt_name}>🧑🏻‍💻{array.name}</Text>
                                        </View>
                                    </View>

                                </View>
                            

                                <View style={styles.info_container}>
                                    <Text style={styles.star}> ▶️ </Text>
                                </View>     
                            </View>



                         
                        );
                    })
                    } 
                </View>
                
                <View style={styles.image_container}>
                    <Text style={styles.image_text}>내 시간표</Text>
                    <Image source={everytime} style={styles.image}/>

                </View>



                            

            </View>




            <View style={styles.lecture_container}>

            <View style={styles.container2}>
            <Text style={styles.text}>즐겨찾는 강의실</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Classroom")}>    
                    <Text style={styles.star}> ⚙️ </Text>
                </TouchableOpacity>
            </View>
            </View>
                
            <View style={styles.container3}>
                    {rtArr.map((array, index) => {
                        return(        
                <TouchableOpacity 
                    style={styles.info_btn}
                    onPress={() => navigation.navigate("Start")}>
                    
                    <Text style={styles.btn_text}>{array.prefer1}</Text>
                    <Text style={styles.star}>⭐️</Text>
                    
                </TouchableOpacity>)

                                    })
                                } 


            </View>

        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      //justifyContent: "center",
    },
    container2: {
        height: 23,
        flexDirection: 'row',
        justifyContent:"space-between",
        width:363,
    
      },
      
    bg_image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
      },
    image:{
        marginTop:"30%",
        width: 370,
        height: 400,
        marginLeft: "2%",
        marginRight: "10%",
        padding: '20%',
        resizeMode:"stretch",
        borderWidth: 2,
        borderColor: "#92BEE7"
        
    },
    title_container: { marginTop: "-5%",
    width: "30%",
    height: "20%"
    
    },
    title: {
      fontSize: 23,
      fontWeight: "bold",
   
      marginTop: "40%",
      marginLeft: "3%"
    },
    star: {
        marginRight:"5%",
        fontSize:20,
        alignItems: "center"

      },
    text: {
        fontSize: 17,
        fontWeight: "bold",
        alignItems: "flex-start"
      },
    image_text: {
        fontSize: 23,
        fontWeight: "bold",
     
        marginTop: "40%",
        marginLeft: "3%"
      },
    scroll_container: {
        marginTop: "-20%",
        width: "100%",
        height: "80%"
    },
    map_container: {
        marginTop: "-50%",
        width: "100%",
        height: "80%"
    },
    image_container: {
        marginTop: "-30%",
        marginBottom: "6%",
        width: 100,
        height: 100,
        marginLeft: "3%",
        justifyContent: 'space-between',
        marginHorizontal: "3%",
    },
    lecture_container: {
        marginTop: "-15%",
        width: 90,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    info_container: {
        marginTop: "1%",
        marginRight:"4%",
        marginLeft:"2%",
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
        width: 300,
        height: 500,
        marginTop: "5%",
        marginHorizontal: 10,

        justifyContent: 'space-between'
        
       
      },
      info_btn: {
        alignItems: "center",
        justifyContent: "center",
        width: "400%",
        height: "52%",
        marginTop: "10%",
        marginRight: "10%",
        marginHorizontal: "13%",
        marginLeft: "10%",
        borderColor: "#92BEE7",
        borderWidth: 4,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      btn_text: {
        fontSize:16,
        marginLeft: "7%"
       
    }
})

export default Mypage;


