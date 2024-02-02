import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { auth } from '../../config/firebase'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'


const Account = () => {
  const navigation = useNavigation();
  const handleLogout = async() => {
    try {
      await signOut(auth);
      console.log("Logout Scuucessfully");
      navigation.navigate("Signup");
    } catch (error) {
      console.error("Logout Falied", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Home Page - </Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  logoutButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
