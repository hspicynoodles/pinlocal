// screens/WelcomeScreen.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

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
                <Button
                    title="Log In"
                    onPress={() => navigation.navigate('Home')}
                />
                <Button
                    title="Sign Up"
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
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
