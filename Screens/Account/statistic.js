import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import StatisticWeek from "./statisticWeek";
import StatisticMonth from "./statisticMonth";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <ScrollableTabView
                        initialPage={0}
                        tabBarActiveTextColor="green"
                        renderTabBar={() => <DefaultTabBar
                            underlineStyle={{
                                backgroundColor: 'green'
                            }} />}
                    >
                        <StatisticWeek tabLabel="Theo tuần" props={this.props} />
                        <StatisticMonth tabLabel="Theo tháng" props={this.props} />

                    </ScrollableTabView>
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
    tabbar: {
        flex: 1,
        paddingHorizontal: 10,
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
        width: 180,
        height: 50,
        marginLeft: 20,
    },
    choose2: {
        width: 180,
        height: 50,
        marginRight: 10,
        marginLeft: 35
    },
});