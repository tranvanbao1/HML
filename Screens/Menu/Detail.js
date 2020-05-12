import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        };
    }

    async componentDidMount() {
        const { navigation } = this.props;
        const key = navigation.getParam('key', 'default');
        const response = await fetch(`https://hml-project.herokuapp.com/api/foods/menu/${key}`);
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

    renderItem = ({ item }) => {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity
                onPress={() => {
                    navigate('Thành phần', {
                        id: item._id,
                        image: item.img,
                        name: item.name,
                        ingredient: item.ingredient,
                        url: item.url,
                    })
                }}>
                <LinearGradient
                    colors={['#009245', '#Bcc631']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.item}
                >
                    <View style={styles.image_container}>
                        <Image source={{ uri: item.img }} style={styles.image} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.textPrice}> {item.price}</Text>
                        <Text style={styles.view}>{item.view} lượt nấu</Text>
                    </View>
                    <AntDesign name='rightcircle' color='white' size={35} />
                </LinearGradient>
            </TouchableOpacity>
        );
    };

    ItemSeparatorComponent = () => {
        return (
            <View
                style={{
                    height: 10
                }}
            />
        )
    }

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
                    <View style={styles.flatList}>
                        <FlatList
                            data={dataSource}
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
export default withNavigation(Detail);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    flatList: {
        flex: 1,
        margin: 20,
    },
    item: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 20,
    },
    image_container: {
        width: 90,
        height: 90,
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 50,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 4,
    },
    textPrice: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 15,
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
    view: {
        color: 'white',
        textDecorationLine: 'underline',
        // marginLeft: '50%',
        marginLeft: 5,
    }
});
// tách qua file riêng
// cùng thư mục 
// Detail > Detail.js (render) + Detail.styles.js (style) + index.js (exportu)
// Best practice là vậy đó
// Phần nào làm nhiệm vụ phần đó
