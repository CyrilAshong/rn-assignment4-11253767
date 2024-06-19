import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import JobCard from '../components/JobCard';
import MoreJobCards from './MoreJobCards';

const HomeScreen = ({ route }) => {
    const { name, email } = route.params;

    const featuredJobs = [
        { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
        { id: '2', title: 'Product Manager', company: 'Beats', salary: '$160,000', location: 'Kumasi, Ghana' },
        { id: '3', title: 'AI Developer', company: 'Google', salary: '$260,000', location: 'Koforidua, Ghana' },
        { id: '4', title: 'Database Administrator', company: 'Google', salary: '$150,000', location: 'Tamale, Ghana' },
        { id: '5', title: 'IT Personel', company: 'Beats', salary: '$100,000', location: 'Wa, Ghana' },
        { id: '6', title: 'Hardware Specialist', company: 'Google', salary: '$130,000', location: 'Accra, Ghana' },
        { id: '7', title: 'Product Manager', company: 'Facebook', salary: '$165,000', location: 'Tamale, Ghana' },


    ];

    const popularJobs = [
        { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
        { id: '2', title: ' Jr Executive', company: 'Beats', salary: '$74,000/y', location: 'Florida, US' },
        { id: '3', title: ' Jr Executive', company: 'Facebook', salary: '$88,000/y', location: 'Florida, US' },
        { id: '4', title: 'Product Manager', company: 'Burger King', salary: '$66,000/y', location: 'Florida, US' },
        { id: '5', title: 'Product Manager', company: 'Beats', salary: '$100,000/y', location: 'Florida, US' },
        { id: '6', title: 'Product Manager', company: 'Facebook', salary: '$90,000/y', location: 'Florida, US' },
        { id: '7', title: ' Software Engineer', company: 'Burger King', salary: '$72,000/y', location: 'Florida, US' },

    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
                <TouchableOpacity style={styles.notificationButton}>
                    <Image style={styles.profileImage} source={require('../assets/Ellipse.png')} />
                    <Image source={require('../assets/red-dot.png')} style={styles.notificationIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchArea}>
                <TextInput style={styles.searchInput} placeholder="Search a job or position" />

                <Image style={styles.filterIcon} source={require('../assets/filter.5.png')} />
            </View>

            <View style={styles.featuredList}>
                <Text style={styles.sectionTitle}>Featured Jobs</Text>
                <FlatList
                    data={featuredJobs}
                    horizontal
                    renderItem={({ item }) => <JobCard job={item} />}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <Text style={styles.sectionTitle}>Popular Jobs</Text>
            <FlatList
                data={popularJobs}
                renderItem={({ item }) => <MoreJobCards style={styles.list} job={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#6c757d',
    },
    notificationButton: {
        marginLeft: 'auto',
    },
    notificationIcon: {
        width: 10,
        height: 10,
        position: 'absolute',
        top: 5,
        right: 15
    },
    searchInput: {
        width: '80%',
        height: 42,
        backgroundColor: '#f1f3f5',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20
    },
    searchArea: {
        flexDirection: 'row',
    },
    filterIcon: {
        marginLeft: 20,
        width: 26,
        height: 26,
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 13
    },
    list: {
        flexDirection: 'row'
    }
});

export default HomeScreen;
