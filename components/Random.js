import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Image,
  TouchableOpacity,
  Navigation,
  Icon,
  Alert,
  navigation
} from 'react-native';

import { NavigationScreenProps } from "react-navigation";

import spoon from "../images/ex_images.png";
import cafeteria from "../images/cafeteria.png";


const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = ({item, removeCard, swipedDirection}) => {
  // let xPosition = new Animated.Value(0);
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  const cfArr = [
    { id: "0", where: "고를샘", image: spoon, bf: "설렁탕", lc: "오므라이스", dn: "김치찌개"},
    { id: "1", where: "맛나샘", image: cafeteria, bf: "수육국밥", lc: "치킨", dn: "피자"},
    { id: "2", where: "부를샘", image: spoon, bf: "순대국밥", lc: "부대찌개", dn: "뚝배기불고기"},
    { id: "3", where: "어울샘", image: cafeteria, bf: "김밥", lc: "닭볶음탕", dn: "닭갈비"},
    { id: "4", where: "청경관", image: cafeteria, bf: "감자탕", lc: "알밥", dn: "찜닭"},
    ];

  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder:
      (evt, gestureState) => false,
    onMoveShouldSetPanResponder:
      (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: 
      (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (evt, gestureState) => true,
    onPanResponderMove:
      (evt, gestureState) => {
        xPosition.setValue(gestureState.dx);
        if (gestureState.dx > SCREEN_WIDTH - 250) {
          swipeDirection = 'Right';
        } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
          swipeDirection = 'Left';
        }
      },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard()
          Alert.alert('좋아요');;
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard()
          Alert.alert('싫어요');
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {
          backgroundColor: item.backgroundColor,
          opacity: cardOpacity,
          transform: [{translateX: xPosition}, {rotate: rotateCard}],
        },
      ]}>
    <Image source = {(cfArr.image)} style={{width: 293, height: 304}}/>
    </Animated.View>
  );
};

const Random = ({navigation}) => {
  const [noMoreCard, setNoMoreCard] = useState(false);
  const [
    sampleCardArray,
    setSampleCardArray
  ] = useState(DEMO_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');

  const removeCard = (id) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1,
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        랜덤 추천기
      </Text>
      <Text style={styles.swipeText}>
        마음에 든다면 오른쪽으로 넘기거나 {'\n'}하단 버튼을 눌러주세요!
      
      </Text>
      <View style={styles.container}>
        {sampleCardArray.map((item, key) => (
          <SwipeableCard
            key={key}
            item={item}
            removeCard={() => removeCard(item.id)}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreCard ? (
          <View>
          <Text style={{fontSize: 20, color: '#000'}}>
            이제 음식점 추천을 해드릴게요!{'\n'}
            아래 버튼을 눌러주세요
          </Text>

          <TouchableOpacity
                        onPress={() => navigation.navigate("Result")}
                        style={styles.random_btn}
                    >
                    <Text style={styles.text}>랜덤 추천 결과보기</Text>
                
            </TouchableOpacity>
            </View>
          
          
        ) : null}
      </View>
      <TouchableOpacity
                        onPress={() => removeCard()}
                        style={styles.login_btn}
                    >
                    <Text style={styles.text}>그냥 이거 바로 먹을래요!</Text>
                
            </TouchableOpacity>
            <TouchableOpacity
                        onPress={() => navigation.navigate('Result')}
                        style={styles.register_btn}
                    >
                    <Text style={styles.text}>이전</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Random;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  cardStyle: {
    width: '75%',
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 7,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
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
  random_btn: {
    backgroundColor: "#2B82D4",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "30%",
    marginHorizontal: "10%",
    borderRadius: 15,
    marginTop: "15%"
  },
  text: {
    fontSize:20,
    marginTop: "1%"
}
});

const DEMO_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    backgroundColor: '#FFC107',
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
  },
].reverse();