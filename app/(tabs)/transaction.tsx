import { Platform, StyleSheet, SafeAreaView } from 'react-native'
import { Text, View } from '../../components/Themed'
import { Circle } from '../../components/Circles'

export default function TransactionScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.totalsContainer}>
                <Text style={styles.title}>Totals</Text>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.row}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.row}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.section}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalsContainer: {
        width: '100%',
        backgroundColor: '#909090',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 16,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
        flexWrap: 'wrap',
    },
})
