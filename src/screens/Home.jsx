import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

function Home({setCategorySelected}) {
    return (
        <View style={styles.view}>
            <Header title={'Header'}/>
            <Categories setCategorySelected={setCategorySelected}/>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    view: {
        fontSize: 30,
    },
    text: {
        backgroundColor: colors.blue2,
        fontSize: 30,
        color: colors.grey1,
    },
})