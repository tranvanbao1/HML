import React from 'react'
import { Ionicons, AntDesign, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native';

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Đăng nhập' }),
    ],
});

export default class AccountScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.account_container}>
                    <ImageBackground source={require('../../assets/bg8.jpg')} style={{ width: '100%', height: 180 }}>
                        <View style={styles.name_avt}>
                            <View style={styles.account_avt}>
                                <Image style={styles.img} source={require('../../assets/avatar1.png')} />
                                <MaterialCommunityIcons name='check-decagram' size={23} style={styles.iconimg} />
                                <View style={styles.iconname}>
                                    <Text style={styles.name}>Your Name</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.b}>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Thống kê dinh dưỡng')}>
                                <View style={styles.iconleft}>
                                    <Ionicons name='ios-stats' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Thống kê dinh dưỡng</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Lịch sử')}>
                                <View style={styles.iconleft}>
                                    <Octicons name='history' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Lịch sử</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Liên hệ')}>
                                <View style={styles.iconleft}>
                                    <AntDesign name='contacts' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Liên hệ</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Góp ý')}>
                                <View style={styles.iconleft}>
                                    <AntDesign name='mail' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Góp ý</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Cài đặt')}>
                                <View style={styles.iconleft}>
                                    <AntDesign name='setting' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Cài đặt</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.btnlogout}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.dispatch(resetAction)}>
                            <Text style={styles.textlogout}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    account_container: {
        width: '100%',
        height: '100%',
    },
    name_avt: {
        alignItems: 'center',
        marginBottom: 40,
    },
    account_avt: {
        marginTop: 35,
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
    },
    img: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: 'green',
        marginLeft: 15,
    },
    iconname: {
        fontSize: 22,
        marginTop: 5,
        marginLeft: 15,
        flexDirection: 'row'
    },
    name: {
        fontSize: 22,
    },
    iconimg: {
        color: 'green',
        top: 72,
        left: 78,
        position: 'absolute',
    },
    b: {
        flexDirection: 'column',
    },
    choices: {
        marginTop: 5,
        backgroundColor: '#fff',
    },
    choice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 8,
    },
    iconleft: {
        flexDirection: 'row',
    },
    name_item: {
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 15,
        marginTop: 13,
    },
    icon_item_left: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 16,
        marginLeft: 15,
        color: 'green',
    },
    icon_item: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 15,
        marginRight: 15,
        color: 'green',
    },
    line: {
        borderWidth: 0.2,
        width: '90%',
        alignItems: 'center',
        marginTop: 15,
        borderColor: 'green',
    },
    btnlogout: {
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    textlogout: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 63,
    }

})
