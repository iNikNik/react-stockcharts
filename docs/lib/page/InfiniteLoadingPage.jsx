'use strict';

import React from "react";
import ReStock from "react-stockcharts";

import ContentSection from "lib/content-section";
import Row from "lib/row";
import Section from "lib/section";

import CandleStickChartWithInfiniteLoading from "lib/charts/CandleStickChartWithInfiniteLoading";
import KagiWithUpdatingData from "lib/charts/KagiWithUpdatingData";
import PointAndFigureWithUpdatingData from "lib/charts/PointAndFigureWithUpdatingData";
import RenkoWithUpdatingData from "lib/charts/RenkoWithUpdatingData";

var { helper: { TypeChooser } } = ReStock;


var InfiniteLoadingPage = React.createClass({
	statics: {
		title: 'Infinity loading'
	},
	render() {
		return (
			<ContentSection title={InfiniteLoadingPage.title}>
				<Row>
					<Section colSpan={2}>
						<aside dangerouslySetInnerHTML={{__html: require('md/UPDATING-DATA')}}></aside>
					</Section>
				</Row>
				<Row>
					<Section colSpan={2}>
						<TypeChooser>
							{(type) => <CandleStickChartWithInfiniteLoading data={this.props.someData} type={type} />}
						</TypeChooser>
					</Section>
				</Row>
			</ContentSection>
		);
	}
});

export default InfiniteLoadingPage;
