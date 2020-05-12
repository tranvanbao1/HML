import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";

export default class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {
                        type: 'Yêu thích',
                        color: '#eb2f06',
                        data: [
                            {
                                name: 'Nấm xào',
                                image: require("../assets/namkho.jpg"),
                            },
                            {
                                name: 'Mít xào',
                                image: require("../assets/mitkho.jpg"),
                            },
                            {
                                name: 'Hủ tiếu',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                        ]
                    },

                    {
                        type: 'Món canh',
                        color: '#34495e',
                        data: [
                            {
                                name: 'Hủ tiếu',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                            {
                                name: 'Bún',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                        ]   
                    },

                    {
                        type: 'Món thịt',
                        color: '#9b59b6',
                        data: [
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                            {
                                name: 'Mít trộn',
                                image: require("../assets/mitkho.jpg"),
                            },
                            {
                                name: 'Hủ tiếu',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                                rating: 2,
                                price: "$12"
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                        ]
                    },

                    {
                        type: 'Món cá',
                        color: '#2980b9',
                        data: [
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                            {
                                name: 'Mít trộn',
                                image: require("../assets/mitkho.jpg"),
                            },
                            {
                                name: 'Hủ tiếu',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                                rating: 2,
                                price: "$12"
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                        ]
                    },

                    {
                        type: 'Đặc biệt',
                        color: '#b71540',
                        data: [
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                            {
                                name: 'Mít trộn',
                                image: require("../assets/mitkho.jpg"),
                            },
                            {
                                name: 'Hủ tiếu',
                                image: require("../assets/hutieu.jpg"),
                            },
                            {
                                name: 'Thịt bò',
                                image: require("../assets/cuonlalot.jpg"),
                                rating: 2,
                                price: "$12"
                            },
                            {
                                name: 'Salad',
                                image: require("../assets/cuondiep.jpg"),
                            },
                        ]
                    },
                ]
            }
        }

    renderItem_type = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.props.navigation.navigate('Thành phần', {
                    image: item.image,
                    // price: item.price,
                    name: item.name
                })}
                style={styles.item_type}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text style={[styles.type, {
                    color: item.color
                }]}>
                    {item.type}
                </Text>
                <View style={[styles.item, {
                    backgroundColor: item.color
                }]}>
                    <FlatList
                        data={item.data}
                        renderItem={this.renderItem_type}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={this.ItemSeparatorComponent_type}
                    />
                </View>
            </View>
        )
    }

    ItemSeparatorComponent_type = () => {
        return (
            <View
                style={{ width: 10 }}
            />
        )
    }

    ItemSeparatorComponent = () => {
        return (
            <View
                style={{ height: 20 }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item: {
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    item_type: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'white',
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontSize: 15
    }
});