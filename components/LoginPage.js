import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home', { name, email });
    };

    return (
        <View style={styles.container}>
            <View style={styles.greet}>
                <Text style={styles.title}>Jobizz</Text>
                <Text style={styles.welcomeBack}>Welcome Back 👋</Text>
                <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Or continue with</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/cib_apple.png')} style={styles.socialLogo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/google.png')} style={styles.socialLogo} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('../assets/facebook.png')} style={styles.socialLogo} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.question} onPress={() => navigation.navigate('Register')}>
                <Text>Haven't an account? <Text style={styles.registerText} >Register</Text> </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1a73e8',
        marginBottom: 16,
    },
    welcomeBack: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 32,
    },
    input: {
        width: '100%',
        height: 58,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#dee2e6',
        marginBottom: 10,
    },
    loginButton: {
        width: '100%',
        height: 58,
        backgroundColor: '#1a73e8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 30
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 66,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#dee2e6',
    },
    dividerText: {
        marginHorizontal: 8,
        fontSize: 16,
        color: '#6c757d',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 60,
    },
    socialButton: {
        width: 48,
        height: 48,
        backgroundColor: '#fff',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 8,
    },
    socialLogo: {
        width: 24,
        height: 24,
    },
    registerText: {
        fontSize: 16,
        color: '#1a73e8',
    },
    greet: {
        marginBottom: 25
    },
    question: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginPage;
