import React from 'react'
import { MaterialCommunityIcons, AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native'

export default class AccountScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.account_container}>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 17, color: 'gray' }}>CÀI ĐẶT TÀI KHOẢN</Text>
                    <View style={styles.b}>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Thay đổi ảnh đại diện')}>
                                <View style={styles.iconleft}>
                                    <Ionicons name='ios-contact' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Hình đại diện</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Thông tin & liên hệ')}>
                                <View style={styles.iconleft}>
                                    <Ionicons name='ios-information-circle-outline' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Thông tin & liên hệ</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.choices}>
                            <TouchableOpacity style={styles.choice} onPress={() => navigate('Thay đổi mật khẩu')}>
                                <View style={styles.iconleft}>
                                    <MaterialCommunityIcons name='lock-reset' style={styles.icon_item_left} />
                                    <Text style={styles.name_item}>Mật khẩu</Text>
                                </View>
                                <AntDesign name='right' style={styles.icon_item} />
                            </TouchableOpacity>
                        </View>
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
        marginTop: 16,
    },
    icon_item_left: {
        fontSize: 28,
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
