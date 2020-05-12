import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dropdown } from 'react-native-material-dropdown';
import { Ionicons } from "@expo/vector-icons";

// let data2 = [
//     {
//         value: '50.000',
//     },
//     {
//         value: '100.000',
//     },
//     {
//         value: '150.000',
//     },
//     {
//         value: '200.000',
//     },
//     {
//         value: '250.000',
//     },
//     {
//         value: '300.000',
//     },
//     {
//         value: '350.000',
//     },
//     {
//         value: '400.000',
//     },
//     {
//         value: '450.000',
//     },
//     {
//         value: '500.000',
//     },
// ];

export default class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: data,
            isLoading: true,
            dataSource: [],
            data: [],
            data_temp: [],
            search: "",
        };
    }

    async componentDidMount() {
        const response = await fetch('https://hml-project.herokuapp.com/api/foods/menu?page=1');
        const result = await response.json();
        console.log(result["data"])
        this.setState({
            isLoading: false,
            dataSource: result["data"],
        })
            .catch((error) => {
                console.error('loi')
            })
    }

    _search(text) {
        this.setState({ search: text });
    }

    _filterItems() {
        if (this.state.search)
            return this.state.dataSource.filter((ele) =>
                ele.name.toLowerCase().includes(this.state.search.toLowerCase())
            );
        return this.state.dataSource;
    }

    renderItem = ({ item }) => {
        const { navigate } = this.props.navigation;
        if(item.isSpecial === false) {
            return (
                <LinearGradient
                    colors={['#009245', '#Bcc631']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.item}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigate('Món ăn', {
                                image: item.img,
                                price: item.price,
                                name: item.name,
                                key: item?.key
                            })
                        }}>
                        <View key={item.key} style={styles.image_container}>
                            <Image source={{ uri: item.img }} style={styles.image} />
                            <View style={styles.content}>
                                <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={styles.price_container}>
                                <View style={styles.price}>
                                    <Text style={styles.textPrice}> Giá: {item.price}.000 VNĐ </Text>
                                </View>
                                {/* <View style={styles.rating}>
                                    <Text style={styles.counter}> {item.view} lượt nấu</Text>
                                </View> */}
                            </View>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            );
        }
    };

    render() {
        let { dataSource, isLoading } = this.state
        if (isLoading) {
            return (
                <View>
                    <ActivityIndicator size='large' animating />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    {/* <View style={styles.input}>
                        <View style={styles.choose2}>
                            <Dropdown label="Chi phí cho bữa ăn" data={data2} />
                        </View>
                    </View> */}
                    <View style={styles.section}>
                        <TextInput
                            placeholder="Tìm thực phẩm..."
                            style={{ flex: 1, marginLeft: 10 }}
                            value={this.state.search}
                            onChangeText={(text) => this._search(text)}
                        />
                        <TouchableOpacity onPress={() => this._search("")}>
                            <Ionicons name="ios-close" color="gray" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flatList}>
                        <FlatList
                            data={this._filterItems()}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={this.ItemSeparatorComponent}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        // width: '95%',
    },
    flatList: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'column',
        borderRadius: 10,
        width: '96%',
        marginLeft: '2%',
        marginBottom: 10,
    },
    image_container: {
        width: '100%',
        height: 250,
    },
    image: {
        width: '100%',
        height: '60%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 10,
        margin: 'auto'
    },
    content: {
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
    rating: {
        marginTop: 8,
        marginLeft: 10,
        flexDirection: 'row',
    },
    counter: {
        color: 'white',
        textDecorationLine: 'underline',
        // marginLeft: '50%',
        marginRight: 5,
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 34,
        right: 20,
        position: 'absolute'
    },
    price_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    price: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 50,
        marginLeft: 10,
    },
    textPrice: {
        color: 'green',
        fontWeight: 'bold'
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
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: -10,
    },
    choose: {
        width: 120,
        height: 50,
        marginLeft: 20,
    },
    choose2: {
        width: 170,
        height: 50,
        marginRight: 20,
    },
});