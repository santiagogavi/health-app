import { useEffect, useState } from "react";
import { View, Image,StyleSheet } from "react-native";
import LoginScreen from "./loginScreen";
import { useNavigation } from "expo-router";

export default function SplashScreen(){
    const navigation = useNavigation();
      useEffect(() => {
        navigation.setOptions({ headerShown: false });
      }, [navigation]);
    const [showLogin , setShowLogin]= useState(false);
    useEffect(() => {

        const timer = setTimeout (() => {
            setShowLogin(true);

        }, 3000); // 3 second 

        return () => clearTimeout(timer);
    }, []);
    if (showLogin){
        return <LoginScreen/>;
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <Image
          source={require('../assets/healthcare.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>
    )
        

        
    

}