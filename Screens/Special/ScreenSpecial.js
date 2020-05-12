import React from "react";
import {
    View,
    StyleSheet,
    Dimensions
} from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import Baking from "../../Screens_Special_child/Baking";
import HotPot from "../../Screens_Special_child/Hotpot";
import Other from "../../Screens_Special_child/Other";

export default class Special extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <View style={styles.tabbar}>
                        <ScrollableTabView
                            initialPage={0}
                            tabBarActiveTextColor="green"
                            renderTabBar={() => <DefaultTabBar
                                underlineStyle={{
                                    backgroundColor: 'green'
                                }} />}
                        >
                            <Baking tabLabel="Đồ nướng" props={this.props} />
                            <HotPot tabLabel="Lẩu" props={this.props} />
                            <Other tabLabel="Khác" props={this.props} />

                        </ScrollableTabView>
                    </View>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tabbar: {
        flex: 1,
        width: '95%',
        marginTop: 15
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    },
    choose: {
        width: 150,
        height: 50,
        marginLeft: 20,
    },
    choose2: {
        width: 150,
        height: 50,
        marginRight: 20,
    },
});