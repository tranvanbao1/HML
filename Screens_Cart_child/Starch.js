import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, Image, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
var data = [
    {
        id: 0,
        name: 'Bơ',
        photo_url: require('../assets/bo.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất đạm nè'
    },
    {
        id: 1,
        name: 'Tỏi',
        photo_url: require('../assets/toi.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất béo nè'
    },
    {
        id: 2,
        name: 'Hành tím',
        photo_url: require('../assets/hanhtim.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất siêu béo nè'
    },
    {
        id: 3,
        name: 'Đường viên',
        photo_url: require('../assets/duongvien.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất thành con heo nè'
    },
    {
        id: 4,
        name: 'Đường vàng',
        photo_url: require('../assets/duongvang.png'),
        price: '10.000 VNĐ',
        nuti: '10% chất bột nè'
    },
    {
        id: 5,
        name: 'Chanh',
        photo_url: require('../assets/chanh.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất đạm nè'
    },
    {
        id: 6,
        name: 'Đậu đỏ',
        photo_url: require('../assets/daudo.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất béo nè'
    },
    {
        id: 7,
        name: 'Dầu thực vật',
        photo_url: require('../assets/dau.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất siêu béo nè'
    },
    {
        id: 8,
        name: 'Chuối',
        photo_url: require('../assets/chuoi.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất thành con heo nè'
    },
    {
        id: 9,
        name: 'Bột ngọt',
        photo_url: require('../assets/botngot.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất bột nè'
    },
    {
        id: 10,
        name: 'Dâu tây',
        photo_url: require('../assets/dautay.png'),
        price: '10.000 VNĐ',
        nuti: '10% chất bột nè'
    },
    {
        id: 11,
        name: 'Cá khô',
        photo_url: require('../assets/cakho.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất bột nè'
    },
    {
        id: 12,
        name: 'Hành lá',
        photo_url: require('../assets/hanhla.jpg'),
        price: '10.000 VNĐ',
        nuti: '10% chất bột nè'
    },
]

class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            data_temp: data,
            search: '',
        }
    }

    _search(text) {
        let data = [];
        this.state.data_temp.map(function (value) {
            if (value.name.indexOf(text) > -1) {
                data.push(value)
            }
        });
        this.setState({
            data: data,
            search: text,
        });
    }
    render() {

        // const { names } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.section}>
                    <TextInput
                        placeholder="Search..."
                        style={{ flex: 1, marginLeft: 10 }}
                        value={this.state.search}
                        onChangeText={text => this._search(text)}
                    />
                    <TouchableOpacity onPress={() => this._search('')}>
                        <Ionicons name="ios-close" color="gray" size={20} />
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.a}>
                    {this.state.data.map((item, index) => (
                        <View>
                            <View key={item.id} style={styles.items}>
                                <View style={styles.choice}>
                                    <Image style={styles.photo} source={item.photo_url} />
                                    <Text style={styles.title}>{item.name}</Text>
                                </View>
                                <View style={styles.price_nuti}>
                                    <View style={styles.price}>
                                        <Text>Giá: {item.price}</Text>
                                    </View>
                                    <View style={styles.nuti}>
                                        <Text>Dinh dưỡng gồm:</Text>
                                        <Text>{item.nuti}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default Market

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'green',
    },
    choice: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 5,
    },
    price_nuti: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    photo: {
        width: 140,
        height: 80,
        marginTop: 5,
        marginLeft: 10,
    },
    title: {
        marginLeft: 10,
        marginTop: 5,
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: 17,
    },

    price: {
        paddingBottom: 5,
    },
    nuti: {
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#f2f2f2',
        marginTop: 10,
    },
    a: {
        marginBottom: 50,
    }
});