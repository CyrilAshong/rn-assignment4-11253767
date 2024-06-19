import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MoreJobCards = ({ job }) => {
    const getLogo = (company) => {
        switch (company) {
            case 'Facebook':
                return require('../assets/facebook.png');
            case 'Google':
                return require('../assets/google.png');
              case 'Burger King':
                return require('../assets/burger-king.png');
              case 'Beats':
                return require('../assets/image 8.png');
            default:
            // return require('../assets/default-logo.png');
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.upper}>
                <View style={styles.logoCont}>
                    <Image source={getLogo(job.company)} style={styles.logo} />
                </View>
                <View>
                    <Text style={styles.title}>{job.title}</Text>
                    <Text style={styles.company}>{job.company}</Text>
                </View>
            </View>
            <View style={styles.lower}>
                <Text style={styles.salary}>{job.salary}</Text>
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 10,
        borderColor: '#dee2e6',
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width: 40,
        height: 40,
        marginBottom: 8,
        backgroundColor: '#fff',
        marginRight: 10,
        borderRadius: 15
    },
    logoCont: {
        padding: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    company: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 8,
    },
    salary: {
        fontSize: 16,
        color: '#28a745',
        marginBottom: 8,
    },
    location: {
        fontSize: 16,
        color: '#6c757d',
    },
    upper: {
        flexDirection: 'row',
    },
    lower: {
        alignItems: 'flex-end'
    }
});

export default MoreJobCards;
