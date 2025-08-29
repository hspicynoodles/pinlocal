import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate('WelcomeScreen');
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontFamily: 'Roboto', fontSize: 24, }}>Sign up</Text>
            <View style={{ width: '80%', gap: 12, marginVertical: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>Email</Text>
                <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12 }}></TextInput>
                <Text style={{ fontWeight: 'bold' }}>Password</Text>
                <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12 }}></TextInput>
            </View>
            <Button title="Sign Up" onPress={handleSignUp}></Button>

        </View>


    );
}

export default SignUpScreen;

