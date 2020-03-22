import React, {Component} from 'react';
import Style from './HomeScene.less';
import {Navbar, Nav, NavDropdown, Col, Row, Table} from 'react-bootstrap';
import {getData} from './services/Coronavirus'
import COVIDMap from "./widget/echart/map";
import {getData} from './services/Coronavirus';
import ClassNames from "classnames";


class HomeScene extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statistics: {
				"death": "",
				"recovered": "",
				"active": "",
				"confirmed": "",
				data: []
			}
		}

	}

	componentWillMount() {
		getData((resp) => {
			// alert("success: " + JSON.stringify(resp));
			this.setState({
				statistics: resp
			})
		}, (error) => {
			alert("failed: " + JSON.stringify(error));
		})
	}

	render() {
		let {statistics} = this.state;
		let mapInfo=[];
		let valueRows = [];

		for (let i in statistics.data) {
			let data = statistics.data[i];
			let row = (
				<div className={ClassNames(Style.th)}>
					<text className={ClassNames(Style.dataCell, Style.stateTd, Style.stateCell)}>{data.state}</text>
					<text className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.confirmDataCell)}>{data.confirmed}</text>
					<text className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.deathDataCell)}>{data.deceased}</text>
					<text className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.activeDataCell)}>{data.active}</text>
					<text className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.recoveredDataCell)}>{data.recovered}</text>
				</div>
			);
			valueRows.push(row);
			let mapItem={
				name:data.state,
				value:Number.parseFloat(data.confirmed),
			};
			mapInfo.push(mapItem);
		}

		return (
			<div className={Style.root}>
				<div className={Style.appIntroduction}>
					ddd
				</div>
				{/*	内容*/}
				<section id="home" className={Style.summary}>
					<text className={Style.updateTime}>Data update to {statistics["updated_at"]}</text>
					<center>
						<div className={Style.summaryRoot}>
							<Row>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataC}
										title="Total Confirmed"
										value={statistics.confirmed}
										icon={require('./assets/main_icon Confirmed@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataD}
										title="Total Death"
										value={statistics.death}
										icon={require('./assets/main_icon_Death@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataA}
										title="Total Active"
										value={statistics.active}
										icon={require('./assets/main_icon_Active@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataR}
										title="Total Recovered"
										value={statistics.recovered}
										icon={require('./assets/main_icon_Recovered@3x.png')}
									/>
								</Col>
							</Row>
						</div>
					</center>
				</section>

				<COVIDMap mapinfo={mapInfo}/>

				{/*	数据列表 */}
				<section className={Style.dataTable}>
					<div className={Style.dataRoot}>
						{/*头部*/}
						<div className={Style.th}>
							<text className={ClassNames(Style.headerCell, Style.stateCell)}>State</text>
							<text className={ClassNames(Style.headerCell, Style.confirmHeaderCell)}>Confirmed</text>
							<text className={ClassNames(Style.headerCell)}>Death</text>
							<text className={ClassNames(Style.headerCell)}>Active</text>
							<text className={ClassNames(Style.headerCell)}>Recovered</text>
						</div>

						{/*数据体*/}
						{valueRows}

					</div>

				</section>

			</div>
		)
	}
}

class SummaryItem extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		let iconBg = {
			backgroundImage: `url(${this.props.icon})`
		};

		return (
			<div className={Style.summaryItem}>
				<div className={Style.summaryItemTop}>
					<div
						style={iconBg}
						className={Style.summaryItemIcon}
					/>
					<text className={this.props.valueStyle}>
						{this.props.value}
					</text>
				</div>

				<text className={Style.summaryItemTitle}>
					{this.props.title}
				</text>
			</div>
		);
	}
}


export default HomeScene;
