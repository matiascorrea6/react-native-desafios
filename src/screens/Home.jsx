import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

function Home({setCategorySelected}) {
    return (
        <View style={styles.view}>
            <View style={styles.header}>
                <Header title={'Mi tienda'}/>
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
        marginTop: 20,
    },
    header: {
        alignItems: 'center'
    },
    categories: {
        width: "100%"
    },
})