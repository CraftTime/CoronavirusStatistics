import React, {Component} from 'react';
import Style from './HomeScene.less';
import {Navbar, Nav, NavDropdown, Col, Row, Table} from 'react-bootstrap';
import {getData} from './services/Coronavirus'


class HomeScene extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statistics: {
				"death": "205",
				"recovered": "121",
				"active": "13924",
				"confirmed": "14250",
				data: [{
					"OBJECTID": 233,
					"Province_State": "New York",
					"Country_Region": "US",
					"Last_Update": 1584670439000,
					"Lat": 42.165726,
					"Long_": -74.948051,
					"Confirmed": 5711,
					"Recovered": 0,
					"Deaths": 38,
					"Active": 5673
				}, {
					"OBJECTID": 27,
					"Province_State": "Washington",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 47.400902,
					"Long_": -121.490494,
					"Confirmed": 1376,
					"Recovered": 0,
					"Deaths": 74,
					"Active": 1302
				}, {
					"OBJECTID": 217,
					"Province_State": "California",
					"Country_Region": "US",
					"Last_Update": 1584670439000,
					"Lat": 36.116203,
					"Long_": -119.681564,
					"Confirmed": 1030,
					"Recovered": 0,
					"Deaths": 18,
					"Active": 1012
				}, {
					"OBJECTID": 277,
					"Province_State": "New Jersey",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 40.298904,
					"Long_": -74.521011,
					"Confirmed": 742,
					"Recovered": 0,
					"Deaths": 9,
					"Active": 733
				}, {
					"OBJECTID": 182,
					"Province_State": "Florida",
					"Country_Region": "US",
					"Last_Update": 1584670439000,
					"Lat": 27.766279,
					"Long_": -81.686783,
					"Confirmed": 432,
					"Recovered": 0,
					"Deaths": 9,
					"Active": 423
				}, {
					"OBJECTID": 88,
					"Province_State": "Illinois",
					"Country_Region": "US",
					"Last_Update": 1584652420000,
					"Lat": 40.349457,
					"Long_": -88.986137,
					"Confirmed": 422,
					"Recovered": 0,
					"Deaths": 4,
					"Active": 418
				}, {
					"OBJECTID": 220,
					"Province_State": "Louisiana",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 31.169546,
					"Long_": -91.867805,
					"Confirmed": 392,
					"Recovered": 0,
					"Deaths": 10,
					"Active": 382
				}, {
					"OBJECTID": 236,
					"Province_State": "Michigan",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 43.326618,
					"Long_": -84.536095,
					"Confirmed": 334,
					"Recovered": 0,
					"Deaths": 3,
					"Active": 331
				}, {
					"OBJECTID": 26,
					"Province_State": "Massachusetts",
					"Country_Region": "US",
					"Last_Update": 1584652415000,
					"Lat": 42.230171,
					"Long_": -71.530106,
					"Confirmed": 328,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 328
				}, {
					"OBJECTID": 31,
					"Province_State": "Texas",
					"Country_Region": "US",
					"Last_Update": 1584670436000,
					"Lat": 31.054487,
					"Long_": -97.563461,
					"Confirmed": 307,
					"Recovered": 0,
					"Deaths": 5,
					"Active": 302
				}, {
					"OBJECTID": 35,
					"Province_State": "Georgia",
					"Country_Region": "US",
					"Last_Update": 1584652415000,
					"Lat": 33.040619,
					"Long_": -83.643074,
					"Confirmed": 287,
					"Recovered": 0,
					"Deaths": 10,
					"Active": 277
				}, {
					"OBJECTID": 186,
					"Province_State": "Colorado",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 39.059811,
					"Long_": -105.311104,
					"Confirmed": 277,
					"Recovered": 0,
					"Deaths": 4,
					"Active": 273
				}, {
					"OBJECTID": 33,
					"Province_State": "Pennsylvania",
					"Country_Region": "US",
					"Last_Update": 1584652415000,
					"Lat": 40.590752,
					"Long_": -77.209755,
					"Confirmed": 206,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 205
				}, {
					"OBJECTID": 89,
					"Province_State": "Wisconsin",
					"Country_Region": "US",
					"Last_Update": 1584670436000,
					"Lat": 44.268543,
					"Long_": -89.616508,
					"Confirmed": 160,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 160
				}, {
					"OBJECTID": 84,
					"Province_State": "Connecticut",
					"Country_Region": "US",
					"Last_Update": 1584670436000,
					"Lat": 41.597782,
					"Long_": -72.755371,
					"Confirmed": 159,
					"Recovered": 0,
					"Deaths": 3,
					"Active": 156
				}, {
					"OBJECTID": 225,
					"Province_State": "Tennessee",
					"Country_Region": "US",
					"Last_Update": 1584652420000,
					"Lat": 35.747845,
					"Long_": -86.692345,
					"Confirmed": 154,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 154
				}, {
					"OBJECTID": 266,
					"Province_State": "North Carolina",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 35.630066,
					"Long_": -79.806419,
					"Confirmed": 123,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 123
				}, {
					"OBJECTID": 275,
					"Province_State": "Ohio",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 40.388783,
					"Long_": -82.764915,
					"Confirmed": 119,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 119
				}, {
					"OBJECTID": 109,
					"Province_State": "Maryland",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 39.063946,
					"Long_": -76.802101,
					"Confirmed": 107,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 106
				}, {
					"OBJECTID": 76,
					"Province_State": "Virginia",
					"Country_Region": "US",
					"Last_Update": 1584670436000,
					"Lat": 37.769337,
					"Long_": -78.169968,
					"Confirmed": 105,
					"Recovered": 0,
					"Deaths": 2,
					"Active": 103
				}, {
					"OBJECTID": 11,
					"Province_State": "Nevada",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 38.313515,
					"Long_": -117.055374,
					"Confirmed": 95,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 94
				}, {
					"OBJECTID": 276,
					"Province_State": "Minnesota",
					"Country_Region": "US",
					"Last_Update": 1584643383000,
					"Lat": 45.694454,
					"Long_": -93.900192,
					"Confirmed": 89,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 89
				}, {
					"OBJECTID": 124,
					"Province_State": "Oregon",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 44.572021,
					"Long_": -122.070938,
					"Confirmed": 88,
					"Recovered": 0,
					"Deaths": 3,
					"Active": 85
				}, {
					"OBJECTID": 66,
					"Province_State": "South Carolina",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 33.856892,
					"Long_": -80.945007,
					"Confirmed": 81,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 80
				}, {
					"OBJECTID": 271,
					"Province_State": "Utah",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 40.150032,
					"Long_": -111.862434,
					"Confirmed": 80,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 80
				}, {
					"OBJECTID": 239,
					"Province_State": "Alabama",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 32.3182,
					"Long_": -86.9023,
					"Confirmed": 78,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 78
				}, {
					"OBJECTID": 85,
					"Province_State": "District of Columbia",
					"Country_Region": "US",
					"Last_Update": 1584670436000,
					"Lat": 38.897438,
					"Long_": -77.026817,
					"Confirmed": 71,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 71
				}, {
					"OBJECTID": 14,
					"Province_State": "Arkansas",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 34.969704,
					"Long_": -92.373123,
					"Confirmed": 62,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 62
				}, {
					"OBJECTID": 176,
					"Province_State": "Indiana",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 39.849426,
					"Long_": -86.258278,
					"Confirmed": 60,
					"Recovered": 0,
					"Deaths": 2,
					"Active": 58
				}, {
					"OBJECTID": 250,
					"Province_State": "Maine",
					"Country_Region": "US",
					"Last_Update": 1584643383000,
					"Lat": 44.693947,
					"Long_": -69.381927,
					"Confirmed": 52,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 52
				}, {
					"OBJECTID": 10,
					"Province_State": "Kentucky",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 37.66814,
					"Long_": -84.670067,
					"Confirmed": 50,
					"Recovered": 0,
					"Deaths": 2,
					"Active": 48
				}, {
					"OBJECTID": 8,
					"Province_State": "Mississippi",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 32.741646,
					"Long_": -89.678696,
					"Confirmed": 50,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 49
				}, {
					"OBJECTID": 244,
					"Province_State": "Diamond Princess",
					"Country_Region": "US",
					"Last_Update": 1584377586000,
					"Lat": 35.4437,
					"Long_": 139.638,
					"Confirmed": 47,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 47
				}, {
					"OBJECTID": 215,
					"Province_State": "Arizona",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 33.729759,
					"Long_": -111.431221,
					"Confirmed": 45,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 45
				}, {
					"OBJECTID": 72,
					"Province_State": "Iowa",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 42.011539,
					"Long_": -93.210526,
					"Confirmed": 44,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 44
				}, {
					"OBJECTID": 205,
					"Province_State": "New Hampshire",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 43.452492,
					"Long_": -71.563896,
					"Confirmed": 44,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 44
				}, {
					"OBJECTID": 13,
					"Province_State": "Oklahoma",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 35.565342,
					"Long_": -96.928917,
					"Confirmed": 44,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 43
				}, {
					"OBJECTID": 171,
					"Province_State": "Rhode Island",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 41.680893,
					"Long_": -71.51178,
					"Confirmed": 44,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 44
				}, {
					"OBJECTID": 147,
					"Province_State": "Missouri",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 38.456085,
					"Long_": -92.288368,
					"Confirmed": 39,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 38
				}, {
					"OBJECTID": 164,
					"Province_State": "Kansas",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 38.5266,
					"Long_": -96.726486,
					"Confirmed": 35,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 34
				}, {
					"OBJECTID": 245,
					"Province_State": "New Mexico",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 34.840515,
					"Long_": -106.248482,
					"Confirmed": 35,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 35
				}, {
					"OBJECTID": 136,
					"Province_State": "Delaware",
					"Country_Region": "US",
					"Last_Update": 1584661384000,
					"Lat": 39.318523,
					"Long_": -75.507141,
					"Confirmed": 30,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 30
				}, {
					"OBJECTID": 208,
					"Province_State": "Nebraska",
					"Country_Region": "US",
					"Last_Update": 1584585189000,
					"Lat": 41.12537,
					"Long_": -98.268082,
					"Confirmed": 29,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 29
				}, {
					"OBJECTID": 40,
					"Province_State": "Hawaii",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 21.094318,
					"Long_": -157.498337,
					"Confirmed": 26,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 26
				}, {
					"OBJECTID": 103,
					"Province_State": "Idaho",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 44.240459,
					"Long_": -114.478828,
					"Confirmed": 23,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 23
				}, {
					"OBJECTID": 235,
					"Province_State": "Grand Princess",
					"Country_Region": "US",
					"Last_Update": 1584645198000,
					"Lat": 37.64894,
					"Long_": -122.665479,
					"Confirmed": 22,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 22
				}, {
					"OBJECTID": 228,
					"Province_State": "Vermont",
					"Country_Region": "US",
					"Last_Update": 1584654183000,
					"Lat": 44.045876,
					"Long_": -72.710686,
					"Confirmed": 22,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 22
				}, {
					"OBJECTID": 111,
					"Province_State": "North Dakota",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 47.528912,
					"Long_": -99.784012,
					"Confirmed": 19,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 19
				}, {
					"OBJECTID": 274,
					"Province_State": "Wyoming",
					"Country_Region": "US",
					"Last_Update": 1584592398000,
					"Lat": 42.755966,
					"Long_": -107.30249,
					"Confirmed": 18,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 18
				}, {
					"OBJECTID": 177,
					"Province_State": "South Dakota",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 44.299782,
					"Long_": -99.438828,
					"Confirmed": 14,
					"Recovered": 0,
					"Deaths": 1,
					"Active": 13
				}, {
					"OBJECTID": 243,
					"Province_State": "Guam",
					"Country_Region": "US",
					"Last_Update": 1584634418000,
					"Lat": 13.4443,
					"Long_": 144.7937,
					"Confirmed": 12,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 12
				}, {
					"OBJECTID": 116,
					"Province_State": "Montana",
					"Country_Region": "US",
					"Last_Update": 1584559983000,
					"Lat": 46.921925,
					"Long_": -110.454353,
					"Confirmed": 11,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 11
				}, {
					"OBJECTID": 247,
					"Province_State": "Alaska",
					"Country_Region": "US",
					"Last_Update": 1584585189000,
					"Lat": 61.370716,
					"Long_": -152.404419,
					"Confirmed": 9,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 9
				}, {
					"OBJECTID": 38,
					"Province_State": "Puerto Rico",
					"Country_Region": "US",
					"Last_Update": 1584318131000,
					"Lat": 18.2208,
					"Long_": -66.5901,
					"Confirmed": 5,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 5
				}, {
					"OBJECTID": 219,
					"Province_State": "United States Virgin Islands",
					"Country_Region": "US",
					"Last_Update": 1584664982000,
					"Lat": 18.3358,
					"Long_": -64.8963,
					"Confirmed": 3,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 3
				}, {
					"OBJECTID": 63,
					"Province_State": "West Virginia",
					"Country_Region": "US",
					"Last_Update": 1584585189000,
					"Lat": 38.491226,
					"Long_": -80.954453,
					"Confirmed": 2,
					"Recovered": 0,
					"Deaths": 0,
					"Active": 2
				}, {
					"OBJECTID": 184,
					"Province_State": "US",
					"Country_Region": "US",
					"Last_Update": 1584672190000,
					"Lat": 37.0902,
					"Long_": -95.7129,
					"Confirmed": 1,
					"Recovered": 121,
					"Deaths": 0,
					"Active": -120
				}]
			}
		}

	}

	componentWillMount() {
		getData((resp) => {
			alert("success: " + JSON.stringify(resp));
			this.setState({
				// statistics: resp
			})
		}, (error) => {
			alert("failed: " + JSON.stringify(error));
		})
	}

	render() {
		let {statistics} = this.state;
		let valueRows = [];

		for (let i in statistics.data) {
			let data = statistics.data[i];
			let row = (
				<tr style={{backgroundColor: '#455774'}}>
					<td>{data["Province_State"]}</td>
					<td className={Style.dataC}>{data.Confirmed}</td>
					<td className={Style.dataD}>{data.Deaths}</td>
					<td className={Style.dataA}>{data.Active}</td>
					<td className={Style.dataR}>{data.Recovered}</td>
				</tr>
			);
			valueRows.push(row);
		}

		return (
			<div className={Style.root}>
				{/* 导航栏*/}
				<Navbar bg="dark" expand="lg" style={{width: '100%'}}>
					<Navbar.Brand href="#home">
						<text style={{color: 'white'}}>Coronavirus</text>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#about" style={{color: 'white'}}>About The Crafttime</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>

				{/*	内容*/}

				<section id="home" className={Style.summary}>
					<center>
						<Row>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text className={Style.dataC}>
										{statistics.confirmed}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Confirmed
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text className={Style.dataD}>
										{statistics.death}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Death
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text className={Style.dataA}>
										{statistics.active}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Active
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text className={Style.dataR}>
										{statistics.recovered}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Recovered
									</text>
								</div>
							</Col>
						</Row>
					</center>
				</section>

				{/*	数据列表 */}
				<section className={Style.dataTable}>
					<Table striped hover size="sm" variant="dark">
						<thead>
						<tr>
							<th>State</th>
							<th>Confirmed</th>
							<th>Death</th>
							<th>Active</th>
							<th>Recovered</th>
						</tr>
						</thead>

						<tbody>
						{valueRows}
						</tbody>
					</Table>
				</section>

			</div>
		)
	}
}

export default HomeScene;
