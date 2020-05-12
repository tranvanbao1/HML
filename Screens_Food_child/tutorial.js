import React from 'react';
import { Linking } from 'expo';
import { StyleSheet, View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
    index: 1,
    actions: [
        NavigationActions.navigate({ routeName: 'Thực phẩm' }),
        NavigationActions.navigate({ routeName: 'Món ăn' }),
    ],
});
export default class Tutorial extends React.Component {
    _handleOpenWithLinking = () => {
        Linking.openURL('https://www.youtube.com/watch?v=hM7sNpgG1KQ');
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg-4.jpg')} style={{ height: '100%', width: '100%', }}>
                    <ScrollView style={styles.content}>
                        <View >
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốtt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                            <Text style={styles.text}>
                                Thái lát ớt chuông Lươn làm sạch, cắt khúc. Ướp lươn với 5g tiêu và 1 gói xốtt Gia Vị
                                Hoàn Chỉnh Barona - Xào sả ớt 80g trong vòng 30 phút
							</Text>
                        </View>
                    </ScrollView>
                    <View style={styles.video}></View>
                    <View style={styles.videoContent}>
                        <TouchableOpacity onPress={this._handleOpenWithLinking} style={styles.button}>
                            <Text style={styles.buttonContent}>Xem Video hướng dẫn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.dispatch(resetAction)} style={styles.bottonChange}>
                            <Text style={{ color: 'green', fontSize: 18 }}>Món tiếp theo >></Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
        width: '85%',
        height: '85%',
        marginLeft: '8%',
        marginTop: 30,
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
        top: '82%',
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