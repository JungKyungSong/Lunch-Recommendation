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
  ScrollView
} from 'react-native';


const Menu = ({navigation, route}) => {
  const [select, setselect] = useState(0);

  const label = route.params.label;
  const Mcategory = route.params.Mcategory;
  const Scategory = 3;

  let label_result = ""
  let Mcategory_result = ""
  let Scategory_result = "초밥"

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
  console.log(Scategory_result)
  
  const [result, setResult] = useState();
  const [ok, setOk] = useState(false);
  const isMounted = useRef(false);
  const secondRef = useRef();

  const setclick1 = () => setselect(1);
  const setclick2 = () => setselect(2);
  const setclick3 = () => setselect(3);
  const setclick4 = () => setselect(4);
  
  const cfArr = [
    { id: "0", where: "횟집", image: '../images/carrot.png', bf: "설렁탕", lc: "오므라이스", dn: "김치찌개"},
    { id: "1", where: "초밥", image: '../images/ex_images.png', bf: "수육국밥", lc: "치킨", dn: "피자"},
    { id: "2", where: "돈부리", image: '../images/ex_images.png', bf: "순대국밥", lc: "부대찌개", dn: "뚝배기불고기"},
    { id: "3", where: "라멘", image: '../images/ex_images.png', bf: "김밥", lc: "닭볶음탕", dn: "닭갈비"},
    { id: "4", where: "돈까스", image: '../images/ex_images.png', bf: "감자탕", lc: "알밥", dn: "찜닭"},
];

const sendResult = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8080/category/result", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: label_result,
        Mcategory: Mcategory_result,
        Scategory: Scategory_result
      }), 
    }).then(response => console.log(response.status));
    setResult(response.status);
  } catch (e) {}
};

useEffect(() => {
    if(isMounted.current){
      sendResult();
      navigation.navigate("Result")
    } else {
     isMounted.current = true;
    }
  }, [ok]);


    return (
    
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto"/>
            <Text style={styles.title}>원하는 음식점 찾기</Text>           
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
                                    <Image style={styles.image} source= {require('../images/ex_images.png')}/>
                                    </View>
                                    <View>
                                        <Text style={styles.cf_text}>{array.where}</Text>
                                    </View>

                                </View>
                            );
                        })
                        } 
                    </View>
                </ScrollView>
                <TouchableOpacity
                        onPress={() => setOk(true)}
                        style={styles.login_btn}
                    >
                    <Text style={styles.text}>다음</Text>
              </TouchableOpacity>
              <TouchableOpacity
                        onPress={() => navigation.navigate("Restaurant")}
                        style={styles.register_btn}
                    >
                    <Text style={styles.text}>이전</Text>
              </TouchableOpacity>
            

        </SafeAreaView>
    );
};



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
  title_container: {
      flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#2B82D4",
    textAlignVertical: 'center',
    textAlign: 'center',
    marginTop: "10%"
  },
  subtitle: {
      fontSize: 20,
      color: "#E6E6E6",
      marginTop: "160%",
      marginLeft: "4%"
  },
  scroll_container: {
      marginTop: "10%",
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
  text: {
    fontSize:22,
    marginTop: "1%"
}
})

export default Menu;