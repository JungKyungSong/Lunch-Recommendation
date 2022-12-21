import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  Button, 
  Pressable
} from 'react-native';


const Info = ({navigation}) => {
    return (
    
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto"/>
             <Text style={styles.title}>원하는 음식점 찾기</Text>           
            <View style={styles.login_container}>
            
                <Text style={styles.text}>현재 계신 건물은 어디인가요?</Text>
                <View style={styles.view_style}>

                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>공학관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>공학원</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>중앙도서관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>대우관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>학생회관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>삼성관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>과확원</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>연희관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>언더우드관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>외솔관</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>백양로</Text>
                </TouchableOpacity>
                <TouchableOpacity
                        onPress={() => Alert.alert('Simple Button pressed')}
                        style={styles.info_btn}
                    >
                    <Text style={styles.btn_text}>그 외</Text>
                </TouchableOpacity>

                </View>  
                <Text style={styles.text}>오늘의 공강시간을 알려주세요</Text>              


            

                <TouchableOpacity
                        onPress={() => navigation.navigate("Cafeteria")}
                        style={styles.login_btn}
                    >
                    <Text style={styles.text}>다음</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() => navigation.navigate("Start")}
                        style={styles.register_btn}
                    >
                    <Text style={styles.text}>이전</Text>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2B82D4",
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: "10%"
  },
  login_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
    height: "95%",
    marginTop: "7%",
    marginHorizontal: "10%",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  category_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "60%",
    flexDirection: 'row',
    marginTop: "9%",
    marginHorizontal: "1.5%",
    borderRadius: 30,
    shadowColor: "gray",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#878787",
    marginBottom: "4%"
  },
  login_btn: {
      backgroundColor: "#2B82D4",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "5%",
      marginHorizontal: "10%",
      borderRadius: 5,
      marginTop: "30%"
    },
    title_btn: {
      backgroundColor: "#2B82D4",
      alignItems: "center",
      justifyContent: "center",
      width: "95%",
      height: "5%",
      marginHorizontal: "40%",
      borderRadius: 5,
      marginTop: "-16%"
    },
    register_btn: {
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "5%",
      marginTop: "5%",
      marginHorizontal: "10%",
      borderColor: "#92BEE7",
      borderWidth: 1,
      borderRadius: 5,
    },
    info_btn: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: "52%",
        marginTop: "10%",
        marginHorizontal: "3%",
        borderColor: "#92BEE7",
        borderWidth: 1,
        borderRadius: 30,
      },
    login_text: {
      color: "#FFFFFF",
    },
    register_text: {
      color: "#2B82D4",
    }, 
    input: {
      marginTop: "1%",
      paddingHorizontal: 10,
      width: 260,
      height: 40,
      borderBottomColor: '#2B82D4',
      borderBottomWidth: 1,
  },
  text: {
      fontSize:20,
      marginTop: "1%",
      
  },
  btn_text: {
    fontSize:14,
   
},
  second_text: {
      fontSize:18,
      marginTop: "-25%"
  },
  image_text: {
      fontSize:22,
      marginTop: "10%"
  },
  view_style: {height: 80, width:100,
     flexDirection: 'row',
      marginTop: "-7%",
      marginHorizontal: "40%",
      alignItems: "flex-end",
      justifyContent: "flex-end"
    },

  user:{
      backgroundColor:'white',
      marginHorizontal:20,
  }
})

/*const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingTop:StatusBar.currentHeight,
      backgroundColor: '#FFFFFF',
  },
  scrollView:{
      backgroundColor:'white',
      marginHorizontal:20,
  },
  user:{
      backgroundColor:'white',
      marginHorizontal:20,
  },
  text: {
      fontSize:22, alignItems: "center"
  },
});*/

export default Info;