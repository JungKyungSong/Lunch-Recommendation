import React, {useState, useEffect, useRef} from 'react';
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
  const [select, setselect] = useState(0);
  const [timeselect, settimeselect] = useState(0);
  const [result, setResult] = useState();
  const isMounted = useRef(false);
  const secondRef = useRef();
  const [ok, setOk] = useState(false);
  const [myTime, setMyTime] = useState("");
  const [nickname, SetNickname] = useState("");

  const setclick1 = () => setselect(1);
  const setclick2 = () => setselect(2);
  const setclick3 = () => setselect(3);
  const setclick4 = () => setselect(4);
  const setclick5 = () => setselect(5);
  const setclick6 = () => setselect(6);
  const setclick7 = () => setselect(7);
  const setclick8 = () => setselect(8);
  const setclick9 = () => setselect(9);
  const setclick10 = () => setselect(10);
  const setclick11 = () => setselect(11);
  const setclick12 = () => setselect(12);

  const settimeclick1 = () => settimeselect(1);
  const settimeclick2 = () => settimeselect(2);
  const settimeclick3 = () => settimeselect(3);
  const settimeclick4 = () => settimeselect(4);

  const sendResult = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/time", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          emptyTime: timeselect,
          startpoint: select
        }), 
      }).then(response => console.log(response.status));
      setResult(response.status);
    } catch (e) {}
  };

  useEffect(() => {
    if(isMounted.current){
      sendResult();
      navigation.navigate("Cafeteria");
    } else {
     isMounted.current = true;
    }
  }, [ok]);

  const getResult = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/time"
      );
         const json = await response.json();
         setMyTime(Object.values(json["time"]))
     } catch (e) {}
   };

   const getResult2 = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8080/login/nickname"
      );
         const json = await response.json();
         setNickname(Object.values(json["nickname"]))
     } catch (e) {}
   };
 
    useEffect(() => {
        getResult();
        getResult2();
    }, []);

    return (
    
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto"/>
             <Text style={styles.title}>원하는 음식점 찾기</Text>           
            <View style={styles.login_container}>
                <View style={styles.subtitle}>
                <Text style={styles.text}>🏫현재 계신 건물은 어디인가요?</Text>
                </View>
                <View style={styles.view_style}>

                <TouchableOpacity onPress={setclick1}
                    style={[styles.info_btn,{opacity: (select===1 || select===0)? 1 : 0.2}]}>                    
                    <Text style={styles.btn_text}>공학관</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick2}
                    style={[styles.info_btn,{opacity: (select===2 || select===0)? 1 : 0.2}]}>
                    <Text style={styles.btn_text}>공학원</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick3}
                    style={[styles.info_btn,{opacity: (select===3 || select===0)? 1 : 0.2}]}>
                    <Text style={styles.btn_text}>중앙도서관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity onPress={setclick4}
                    style={[styles.info_btn,{opacity: (select===4 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>대우관</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick5}
                    style={[styles.info_btn,{opacity: (select===5 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>학생회관</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick6}
                    style={[styles.info_btn,{opacity: (select===6 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>삼성관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity onPress={setclick7}
                    style={[styles.info_btn,{opacity: (select===7 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>과확원</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick8}
                    style={[styles.info_btn,{opacity: (select===8 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text2}>연희관</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick9}
                    style={[styles.info_btn,{opacity: (select===9 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>언더우드관</Text>
                </TouchableOpacity>

                </View>
                <View style={styles.view_style}>

                <TouchableOpacity onPress={setclick10}
                    style={[styles.info_btn,{opacity: (select===10 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>외솔관</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick11}
                    style={[styles.info_btn,{opacity: (select===11 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>백양로</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={setclick12}
                    style={[styles.info_btn,{opacity: (select===12 || select===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>정문</Text>
                </TouchableOpacity>

                </View>  
                <View style={styles.subtitle}>
                <Text style={styles.subtext}>
                  {{myTime} === "0시간" ?  
                  <Text style={styles.subtext}>{nickname}님 수업 중 아니신가요?</Text>
                  :<Text style={styles.subtext}>{nickname}님의 현재 공강시간은 {myTime}이네요!{"\n"}⏰식사에 쓸 수 있는 시간을 알려주세요</Text>}
                  </Text>
                </View>  
                <View style={styles.view_style2}>

                <TouchableOpacity onPress={settimeclick1}
                    style={[styles.time_btn,{opacity: (timeselect===1 || timeselect===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>1시간</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={settimeclick2}
                    style={[styles.time_btn,{opacity: (timeselect===2 || timeselect===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>2시간</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={settimeclick3}
                    style={[styles.time_btn,{opacity: (timeselect===3 || timeselect===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>3시간</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={settimeclick4}
                    style={[styles.time_btn,{opacity: (timeselect===4 || timeselect===0)? 1 : 0.2}]}>
                    
                    <Text style={styles.btn_text}>4시간</Text>
                </TouchableOpacity>

                </View>             


            

                <TouchableOpacity
                        onPress={() => setOk(true)}
                        style={styles.login_btn}
                    >
                    <Text style={styles.nexttext}>다음</Text>
                
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
  subtitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: "7%",
    marginLeft:"5%"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
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
  subtext: {
    fontSize: 18,
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
    time_btn: {
        alignItems: "center",
        justifyContent: "center",
        width: "23%",
        height: "44%",
        marginTop: "10%",
        marginHorizontal: "3%",
        borderColor: "#92BEE7",
        borderWidth: 4,
        borderRadius: 50,
        hitSlop:{ top: 60, bottom: 400000, left: 60, right: 60 },
      },
    info_btn: {
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        height: "52%",
        marginTop: "10%",
        marginHorizontal: "3%",
        borderColor: "#92BEE7",
        borderWidth: 4,
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
  nexttext: {
    fontSize:20,
    color:"white",
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
  view_style: {height: 100, width:100,
     flexDirection: 'row',
      marginTop: "-7%",
      marginHorizontal: "40%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    view_style2: {height: 100, width:300,
      flexDirection: 'row',
       marginTop: "4%",
      
       alignItems: "flex-start",
       justifyContent: "flex-start",
       marginBottom:"-17%"
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