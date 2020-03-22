import React, {Component} from 'react';
import Style from './HomeScene.less';
import {Navbar, Nav, NavDropdown, Col, Row, Table} from 'react-bootstrap';
import COVIDMap from "./widget/echart/map";
import {getData, getVisitorNumber} from './services/Coronavirus';
import ClassNames from "classnames";
import Switch from 'react-bootstrap-switch';
import * as AppTitle from './data/AppTitle';
import {isEmpty} from './utils/utils';


const TOP_IMG_SIZE = {
	width: 375,
	height: 170
};


class HomeScene extends Component {
	constructor(props) {
		super(props);
		let prevLanguage = localStorage.getItem("isZh");
		this.state = {
			isZh: isEmpty(prevLanguage) ? true : eval(prevLanguage.toLowerCase()),
			statistics: {
				"death": "",
				"recovered": "",
				"active": "",
				"confirmed": "",
				data: []
			},
			visitorsNumber: ""
		}

	}

	componentWillMount() {
		getData((resp) => {
			// alert("success: " + JSON.stringify(resp));
			this.setState({
				statistics: resp
			})
		}, (error) => {
			alert(" getData failed: " + JSON.stringify(error));
		});

		getVisitorNumber((resp) => {
			// alert("success: " + JSON.stringify(resp));
			this.setState({
				visitorsNumber: resp.visits
			})
		}, (error) => {
			alert(" getVisitorNumber failed: " + JSON.stringify(error));
		});
	}

	render() {
		let mapInfo=[];
		let {statistics, visitorsNumber, isZh} = this.state;
		let appTitles = isZh ? AppTitle.ZH : AppTitle.EN;
		// alert(' isZh11: ' + isZh  + " value: " + isZh? '1' : '2');
		let valueRows = [];
		let clientWidth = document.documentElement.clientWidth;
		let clientHeight = document.documentElement.clientHeight;
		let realHeight = TOP_IMG_SIZE.height / TOP_IMG_SIZE.width * clientWidth;
		let topBgStyle = {
			height: realHeight + 'px'
		};

		for (let i in statistics.data) {
			let data = statistics.data[i];
			let row = (
				<div className={ClassNames(Style.th)}>
					<text className={ClassNames(Style.dataCell, Style.stateTd, Style.stateCell)}>{data.state}</text>
					<text
						className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.confirmDataCell)}>{data.confirmed}</text>
					<text
						className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.deathDataCell)}>{data.deceased}</text>
					<text
						className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.activeDataCell)}>{data.active}</text>
					<text
						className={ClassNames(Style.dataCell, Style.dateCellBgColor, Style.recoveredDataCell)}>{data.recovered}</text>
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
				<div className={Style.appIntroduction} style={topBgStyle}>
					<div className={Style.logo}/>
					<text className={Style.virus}>{appTitles.virus}</text>
					<text className={Style.virus_usa}>{appTitles.virus_usa}</text>

					<div className={Style.topLayoutBottom}>
						<text className={Style.visitorNumber}>
							{appTitles.visitorNumber} {visitorsNumber}
						</text>

						<div className={Style.switchLayout}
							onClick={
								()=> {
									let isZh = !this.state.isZh;
									localStorage.setItem("isZh", isZh + "");
									this.setState({
										isZh
									});
								}
							}
						>
							<div className={Style.switchBtn}/>
							{appTitles.switchBtn}
						</div>
					</div>


				</div>
				{/*	内容2*/}
				<div id="home" className={Style.summary}>
					<text className={Style.updateTime}>
						{isZh ? '截止至' + statistics["updated_at"] + '全美国数据统计' : 'Data update to ' + statistics["updated_at"]}
					</text>
					<center>
						<div className={Style.summaryRoot}>
							<Row>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataC}
										title={appTitles.totalConfirm}
										value={statistics.confirmed}
										icon={require('./assets/main_icon Confirmed@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataD}
										title={appTitles.totalDeath}
										value={statistics.death}
										icon={require('./assets/main_icon_Death@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataA}
										title={appTitles.totalActive}
										value={statistics.active}
										icon={require('./assets/main_icon_Active@3x.png')}
									/>
								</Col>
								<Col md={3} xs={6}>
									<SummaryItem
										valueStyle={Style.dataR}
										title={appTitles.totalRecovered}
										value={statistics.recovered}
										icon={require('./assets/main_icon_Recovered@3x.png')}
									/>
								</Col>
							</Row>
						</div>
					</center>
				</div>

				<COVIDMap mapinfo={mapInfo}/>

				{/*	数据列表 */}
				<section className={Style.dataTable}>
					<div className={Style.dataRoot}>
						{/*头部*/}
						<div className={Style.th}>
							<text className={ClassNames(Style.headerCell, Style.stateCell)}>{appTitles.state}</text>
							<text className={ClassNames(Style.headerCell, Style.confirmHeaderCell)}>{appTitles.confirmed}</text>
							<text className={ClassNames(Style.headerCell)}>{appTitles.death}</text>
							<text className={ClassNames(Style.headerCell)}>{appTitles.active}</text>
							<text className={ClassNames(Style.headerCell)}>{appTitles.recovered}</text>
						</div>

						{/*数据体*/}
						{valueRows}

					</div>

				</section>

				<section className={Style.declare}>
					<text className={Style.declareTip}>*{appTitles.sourceBy}</text>

					<div className={Style.contact}>{appTitles.contact}:
						<a className={Style.contactMail}
						   href={"mailto:Li_xiang1991@hotmail.com?subject=" + appTitles.emailTitle + "&body=" + appTitles.emailValue}>
							Li_xiang1991@hotmail.com
						</a>
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
