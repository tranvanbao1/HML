import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ScreenAccountLogin extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../assets/bg-account.jpg')} style={{ width: '100%', height: '100%' }}>
                <ParallaxScrollView backgroundColor="white" contentBackgroundColor="white" parallaxHeaderHeight={0}>
                    <View style={styles.container}>
                        <ImageBackground source={require('../../assets/logo3.png')} style={{ width: '100%', height: 200 }}></ImageBackground>
                        <View style={styles.text}>
                            <Text style={styles.need}>Bạn cần đăng nhập</Text>
                        </View>
                        <View style={styles.choice}>
                            <TouchableOpacity style={styles.signin}
                                onPress={() => { navigate('Đăng nhập tài khoản') }}>
                                <Text style={styles.textlog}>Đăng nhập</Text>
                            </TouchableOpacity>
                            <View style={styles.text}>
                                <Text style={styles.need}>Nếu bạn chưa có tài khoản</Text>
                            </View>
                            <TouchableOpacity style={styles.signup}
                                onPress={() => { navigate('Đăng ký') }}>
                                <Text style={styles.textlog}>Đăng ký</Text>
                            </TouchableOpacity>
                            {/* <Text style={styles.or}>Hoặc bạn có thể</Text>
                            <View style={styles.line}></View> */}
                            {/* <TouchableOpacity style={styles.signinFB}>
                                <FontAwesome name='facebook-square' size={25} color={'white'} />
                                <Text style={styles.textlog}> Đăng nhập bằng Facebook</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.signinGM}>
                                <FontAwesome name='google-plus-square' size={25} color={'white'} />
                                <Text style={styles.textlog}> Đăng nhập bằng Gmail</Text>
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </ParallaxScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 120,
        borderTopRightRadius: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignItems: 'center',
        marginTop: 20,
    },
    need: {
        color: 'green',
        fontSize: 18,
    },
    choice: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    signin: {
        backgroundColor: 'green',
        padding: 10,
        width: 280,
        marginTop: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    signup: {
        padding: 10,
        width: 280,
        alignItems: 'center',
        fontSize: 18,
        marginTop: 15,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    or: {
        fontSize: 19,
        marginTop: 8,
    },
    line: {
        borderWidth: 0.5,
        width: 200,
        marginTop: 5,
    },
    signinFB: {
        backgroundColor: '#2E64FE',
        padding: 10,
        width: 280,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
    },
    signinGM: {
        backgroundColor: '#DF3A01',
        padding: 10,
        width: 280,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textlog: {
        fontSize: 18,
        color: '#fff'
    },
})
