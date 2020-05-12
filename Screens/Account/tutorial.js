import React from 'react';
import { Linking } from 'expo';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
// import { StackActions, NavigationActions } from 'react-navigation';
import { WebView } from 'react-native-webview';
// const resetAction = StackActions.reset({
//     index: 1,
//     actions: [
//         NavigationActions.navigate({ routeName: 'Tài khoản' }),
//         NavigationActions.navigate({ routeName: 'Lịch sử' }),
//     ],
// });

export default class Tutorial extends React.Component {
    _handleOpenWithLinking = () => {
        Linking.openURL('https://www.youtube.com/watch?v=hM7sNpgG1KQ');
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <WebView
                        ref={(ref) => { this.webview = ref; }}
                        geolocationEnabled={true}
                        source={{ uri: 'https://cookpad.com/vn/cong-thuc/853649-th%E1%BB%8Bt-ga-kho-g%E1%BB%ABng' }}
                        style={{ marginTop: 0 }}
                    />
                </ScrollView>
                <View style={styles.video}></View>
                <View style={styles.videoContent}>
                    <TouchableOpacity onPress={this._handleOpenWithLinking} style={styles.button}>
                        <Text style={styles.buttonContent}>Xem Video hướng dẫn</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        height: '100%',
        // marginLeft: '8%',
        // marginTop: 30,
    },
    text: {
        fontSize: 20,
    },
    video: {
        top: '100%',
        left: '30%',
        position: 'relative',
        height: 120
    },
    videoContent: {
        position: 'absolute',
        bottom: '10%',
        alignItems: 'center',
        width: '100%'
    },
    bottonChange: {
        paddingBottom: 30,
        marginLeft: 10,
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        alignContent: 'center',
        backgroundColor: 'green',
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
    },
    buttonContent: {
        color: '#fff',
        fontSize: 17,
    }
});