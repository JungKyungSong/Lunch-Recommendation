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
  TextInput
} from 'react-native';
import login_register from "../images/login_register.png"

function Register({ navigation }) {

  const [result, setResult] = useState();
  const [ok, setOk] = useState(false);
  const secondRef = useRef();
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
    pwc: '',
    nn: ''
  });
  
  const { id, pw, pwc, nn } = inputs;

  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent
    setInputs({
      ...inputs, 
      [keyvalue]: text 
    });
  };

  const onReset = () => {
    setInputs({
      id: '',
      pw: '',
      pwc: '',
      nn: ''
    })
  };

  const sendResult = async () => {
    try {
      console.log(`http://127.0.0.1:8080/register?username=${id}&password=${pw}&nickname=${nn}&`);
      const response = await fetch("http://127.0.0.1:8080/register", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: id,
          password: pw,
          nickname: nn,
        }), 
      }).then(response => console.log(response.status));
      setResult(response.status);
    } catch (e) {}
  };


  useEffect(() => {
    sendResult();
  }, [ok]);

    return (
         <View style={styles.container}>
          <StatusBar style="auto"/>
            <ImageBackground source={login_register} style={styles.image}>
                <View>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.register_container}>
                    <View>
                        <Text style={styles.container_title}>Register</Text>
                    </View>
                    <View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="아이디"
                                onChange={(e) => onChange("id", e)}
                                value={id}
                                onSubmitEditing={() => secondRef.current.focus()}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호"
                                onChange={(e) => onChange("pw", e)}
                                value={pw}
                                onSubmitEditing={() => secondRef.current.focus()}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호 확인"
                                onChange={(e) => onChange("pwc", e)}
                                value={pwc}
                                onSubmitEditing={() => secondRef.current.focus()}
                            >
                            </TextInput>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="닉네임"
                                onChange={(e) => onChange("nn", e)}
                                value={nn}
                                onSubmitEditing={() => secondRef.current.focus()}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <Text>id: {id}, pw: {pw}, pwc: {pwc}, nn: {nn}</Text>
                    <TouchableOpacity
                        onPress={() => Alert.alert(
                            '회원가입',
                            '회원가입 하시겠습니까?',
                            [
                              {text: '네', onPress:() => setOk(true)},
                              {
                                text: '아니요',
                                style: 'cancel'
                              },
                            ]
                          )}
                        style={styles.register_btn}
                    >
                    <Text style= {styles.register_text}>회원가입</Text>
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
    marginTop: "33%"
  },
  register_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "88%",
    height: "45%",
    marginTop: "5%",
    marginHorizontal: "6%",
    borderRadius: 12,
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
  register_btn: {
      backgroundColor: "#2B82D4",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
      height: "15%",
      marginHorizontal: "10%",
      borderRadius: 5,
      marginTop: "7%"
    },
    register_text: {
      color: "#FFFFFF",
      fontWeight: "bold"
    },
    input: {
      marginTop: "1%",
      paddingHorizontal: 10,
      width: 260,
      height: 40,
      borderBottomColor: '#2B82D4',
      borderBottomWidth: 1,
    }
})

export default Register;