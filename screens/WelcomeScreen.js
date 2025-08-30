// screens/WelcomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Pinlocal 🧷</Text>
            <View style={styles.buttons}>
                <View style={{ width: '100%', gap: 12, marginVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Email</Text>
                    <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12 }}></TextInput>
                    <Text style={{ fontWeight: 'bold' }}>Password</Text>
                    <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 12 }}></TextInput>
                </View>
                <TouchableOpacity style={{
                    backgroundColor: '#4a7bb0ff', padding: 12, borderRadius: 4, alignItems: 'center', height: 60
                }}>
                    <Button
                        title="Log In"
                        color="#fff"
                        onPress={() => navigation.navigate('Profile')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#4a7bb0ff', padding: 12, borderRadius: 4, alignItems: 'center', height: 60 }}>
                    <Button
                        title="Sign Up"
                        color="#fff"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 40,
    },
    buttons: {
        width: '100%',
        gap: 12,
    },
});
