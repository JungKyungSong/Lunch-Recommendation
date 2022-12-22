import {useState, useEffect,useRef} from 'react';
import {Button} from 'react-native';
import React from 'react';
import axios from 'axios';
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
import { launchCamera, launchImageLibrary } from "react-native-image-picker";


import cafeteria from "../images/cafeteria.png";
import yonsei from "../images/yonsei.png";
import everytime from "../images/everytime.png";



function Mypage({ navigation }) {

  const [imageFile, setImageFile] = useState();
  const isMounted = useRef(false);

  const secondRef = useRef();

  const registerImage = () => {
        uploadImage();
    };
    
   const uploadImage = () => {
        launchImageLibrary({                                               // 갤러리에서 가져오기
          mediaType: "photo",                                              // 사진만 가져온다
          quality: 1
        }, (res) => {
          if (res.didCancel) {
            Alert.alert("등록이 취소되었습니다");                           // 취소 시
          } else {
            const { uri } = res.assets[0];
            console.log(res.assets[0])
            setImageFile(uri);                                            // useState에 저장한다.
          }
        })
      }


//   const sendResult = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8080/time/upload", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           image: imageFile
//         }), 
//       }).then(response => console.log(response.status));
//       setResult(response.status);
//     } catch (e) {}
//     };
const sendResult = async () => {
    const formData = new FormData();
    const name = imageFile.filename;
    //const [, type] = name.split(".");
    formData.append("file", {
      name,
      type: "image/jpeg",
      uri: imageFile.uri
    });
    try {
      const {
        data: { path }
      } = await axios.post("http://127.0.0.1:8080/time/upload", formData, {
        headers: {
          "content-type": "multipart/form-data"
        }
      });
    } catch (e) {
      Alert.alert("Cant upload", "Try later");
    }
  };
    

    useEffect(() => {
            if(isMounted.current){
            sendResult();
            } else {
            isMounted.current = true;
            }
    }, [imageFile]);

      return (
        <SafeAreaView>
            <StatusBar style="auto"/>
            <Text>MYPAGE</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Start")}
            >
            <Text>시작하기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => registerImage()}>
          {
            imageFile === " " ?
              (<Icons name="meh" size={100} style={{ marginRight: 20 }} />)
              :
              (<Image
                style={{ width : 100, height: 100}}
                source={{
                    uri: imageFile
                  }}/>)
          }
          <Text>hiString</Text>
        </TouchableOpacity>
        </SafeAreaView>
        
    );
}

export default Mypage;
