import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

function Home({setCategorySelected}) {
    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <Header title={'Categories'}/>
            </View>
            <View style={styles.categories}>
                <Categories setCategorySelected={setCategorySelected}/>
            </View>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    header: {
        alignItems: 'center',
        backgroundColor: colors.blue2
    },
    categories: {
        marginTop: 30,
        alignItems: "center"
    },
})