import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import PieChart from 'react-native-pie-chart';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class StatisticWeek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Tên', 'Hàm lượng'],
            tableTitle: ['Protein', 'Tinh bột', 'Chất béo', 'Rau quả'],
            tableData: [
                ['20000g'],
                ['10000g'],
                ['800g'],
                ['15000g'],
            ]
        }
    }

    render() {
        const state = this.state;
        const chart_wh = 200
        const series = [123, 321, 123, 789]
        const sliceColor = ['#FF9800', '#2196F3', '#FFEB3B', '#4CAF50']
        return (
            <ParallaxScrollView
                backgroundColor="white"
                contentBackgroundColor="white"
                parallaxHeaderHeight={0}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <Text style={{ marginBottom: 20, fontSize: 18 }}>Thống kê dinh dưỡng của những thực phẩm bạn và gia đình tiêu thụ trong tuần.</Text>
                    <Table borderStyle={{ borderWidth: 1 }}>
                        <Row data={state.tableHead} flexArr={[2, 4, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text} />
                            <Rows data={state.tableData} flexArr={[1, 1,]} style={styles.row} textStyle={styles.text} />
                        </TableWrapper>
                    </Table>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 18 }}>Biểu đồ thống kê dinh dưỡng của bạn.</Text>
                    </View>
                    <View style={styles.chart}>
                        <PieChart
                            chart_wh={chart_wh}
                            series={series}
                            sliceColor={sliceColor}
                        />
                        <View style={{ flexDirection: 'column', marginTop: 30 }}>
                            <View style={styles.symbol}>
                                <View style={styles.colorProtein} />
                                <Text>Protein</Text>
                            </View>
                            <View style={styles.symbol}>
                                <View style={styles.colorStarch} />
                                <Text>Tinh bột</Text>
                            </View>
                            <View style={styles.symbol}>
                                <View style={styles.colorFat} />
                                <Text>Chất béo</Text>
                            </View>
                            <View style={styles.symbol}>
                                <View style={styles.colorVegetable} />
                                <Text>Rau quả</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ParallaxScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    head: {
        height: 40,
        backgroundColor: '#f1f8ff'
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        backgroundColor: '#f6f8fa'
    },
    row: {
        height: 28
    },
    text: {
        textAlign: 'center'
    },
    chart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 20,
    },
    symbol: {
        flexDirection: 'row',
        margin: 5,
    },
    colorProtein: {
        width: 12,
        height: 12,
        backgroundColor: '#FF9800',
        margin: 5,
    },
    colorStarch: {
        width: 12,
        height: 12,
        backgroundColor: '#2196F3',
        margin: 5,
    },
    colorFat: {
        width: 12,
        height: 12,
        backgroundColor: '#FFEB3B',
        margin: 5,
    },
    colorVegetable: {
        width: 12,
        height: 12,
        backgroundColor: '#4CAF50',
        margin: 5,
    },
});