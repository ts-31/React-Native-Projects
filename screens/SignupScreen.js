import {Button,StyleSheet,Text,View,SafeAreaView,TextInput,KeyboardAvoidingView,Pressable, Alert} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
// import {createUserWithEmailAndPassword} from '@react-native-firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/firebase'
// import { firebase } from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleSubmit = async () => {
    if(email && password) {
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully');
        // console.log(userCredentials.user.uid);
        try {
          await AsyncStorage.setItem('uid', userCredentials.user.uid);
        } catch (error) {
          console.error(error);
        }
      } catch (err) {
        console.log('got error', err.message);
      }
    }
  }
  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 10 }}>
        <KeyboardAvoidingView>
          <View style={{ justifyContent: "center", alignItems: "center", marginTop: 100 }}>
            <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>Register</Text>
            <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>Create a new Account</Text>
          </View>
          <View style={{ marginTop: 50 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons name="email-outline" size={24} color="black" />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="black"
                style={{ fontSize: 18, borderBottomWidth: 1, borderBottomColor: "gray", marginLeft: 13, width: 300, marginVertical: 10 }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="key-outline" size={24} color="black" />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                style={{ fontSize: 18, borderBottomWidth: 1, borderBottomColor: "gray", marginLeft: 13, width: 300, marginVertical: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="phone" size={24} color="black" />
              <TextInput
                value={phone}
                onChangeText={(text) => setPhone(text)}
                placeholder="Phone No"
                placeholderTextColor="black"
                style={{ fontSize: 18, borderBottomWidth: 1, borderBottomColor: "gray", marginLeft: 13, width: 300, marginVertical: 10 }}
              />
            </View>
            <Pressable onPress={handleSubmit} style={{ width: 200, backgroundColor: "#318CE7", padding: 15, borderRadius: 7, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
              <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>Register</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
              <Text style={{ textAlign: "center", fontSize: 17, color: "gray", fontWeight: "500" }}>Already have a account? Sign in</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;






 