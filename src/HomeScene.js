import React, {Component} from 'react';
import Style from './HomeScene.less';
import {Navbar, Nav, NavDropdown, Col, Row, Table} from 'react-bootstrap';
import {getData} from './services/Coronavirus'


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
		let valueRows = [];

		for (let i in statistics.data) {
			let data = statistics.data[i];
			let row = (
				<tr style={{backgroundColor: '#455774'}}>
					<td>{data.state}</td>
					<td className={Style.dataC}>{data.confirmed}</td>
					<td className={Style.dataD}>{data.deceased}</td>
					<td className={Style.dataA}>{data.active}</td>
					<td className={Style.dataR}>{data.recovered}</td>
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