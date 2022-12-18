import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
  Button
} from 'react-native';


const Category = ({navigation}) => {
    return (
    
        <SafeAreaView style={styles.container}>
             <Text style={styles.title}>수정 전</Text>           
            <View style={styles.login_container}>
                <Text style={styles.second_text}>수정 전</Text>
                

                <View style={{height: 220, flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: "center"}}>

                        <View>
                        <Text style={styles.image_text}>다이어트</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, alignItems: "center"}}>

                        <View>
                        <Text style={styles.image_text}>데이트</Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 220, flexDirection: 'row'}}>
                    <View style={{flex: 1, alignItems: "center"}}>

                        <View>
                        <Text style={styles.image_text}>공부</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, alignItems: "center"}}>

                        <View>
                        <Text style={styles.image_text}>찐맛집</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                        onPress={() => navigation.navigate("Restaurant")}
                        style={styles.login_btn}
                    >
                    <Text style={styles.text}>다음</Text>
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() => navigation.navigate("Cafeteria")}
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
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: "95%",
      marginTop: "8%",
      marginHorizontal: "8%",
      borderRadius: 10,
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 2,
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
        marginTop: "5%"
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
        fontSize:22,
        marginTop: "1%"
    },
    second_text: {
        fontSize:18,
        marginTop: "-25%"
    },
    image_text: {
        fontSize:22,
        marginTop: "10%"
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

export default Category;

