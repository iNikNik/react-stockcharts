"use strict";

import React from "react";

function getDisplayName(ChartComponent) {
	var name = ChartComponent.displayName || ChartComponent.name || "ChartComponent";
	return name;
}

export default function infiniteLoadingWrapper(ChartComponent) {
	const LENGTH = 180;

	class InfiniteComponentHOC extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				length: LENGTH,
				data: this.props.data.slice(-1 * LENGTH),
			}
			this.handleLoadMoreData = this.handleLoadMoreData.bind(this)
		}

		setData(length) {
			this.setState({
				length,
				data: this.props.data.slice(-1 * length),
			})
		}

		handleLoadMoreData() {
			console.log('LOAD MORE DATA');
			this.setData(this.state.length + LENGTH)
		}

		render() {
			var { type } = this.props;
			var { data } = this.state;

			return <ChartComponent
				ref="component"
				data={data}
				type={type}
				onLoadMoreData={this.handleLoadMoreData}
			/>;
		}
	}
	InfiniteComponentHOC.defaultProps = {
		type: "svg",
	};
	InfiniteComponentHOC.displayName = `infiniteLoadingWrapper(${ getDisplayName(ChartComponent) })`;

	return InfiniteComponentHOC
}