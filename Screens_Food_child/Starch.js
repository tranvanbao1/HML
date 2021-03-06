import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, TextInput, NativeModules } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

let liked = [];
class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
      isSnackbarVisible: false,
      dataSource: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://hml-project.herokuapp.com/api/foods?page=...?&type=glucid');
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

  handleLike = (id) => {
    liked[id] = !liked[id]
  }

  sendVisibleStatus = ({item, price}) => {
    this.setState({
      isSnackbarVisible: true,
      totalPrice: this.state.totalPrice + item.price,
    });
    console.log(this.state);
  };

  renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={['#009245', '#Bcc631']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.item}
      >
        <TouchableOpacity style={styles.content} onPress={() => { this.handleLike(item._id), this.props.sendVisibleStatus(liked[item._id]?1:-1, item._id) }}>
          <View style={styles.left}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
          <View style={styles.icon}>
            {liked[item._id] ? <FontAwesome name="check" size={35} color="#009432" /> : <View />}
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 10,
        }}
      />
    );
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

export default withNavigation(All);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  flatList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  icon: {
    // flex: 1,
    // marginLeft: 130,
  },
  left: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 7
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    // alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 10,
    // marginLeft: 5,
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  price_container: {
    flexDirection: 'row',
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  textPrice: {
    color: 'green',
    fontWeight: 'bold',
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
  inputSpinner: {
    flex: 1,
    marginTop: 13,
    height: 30,
    alignItems: 'center',
  },
});
