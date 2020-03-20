import React, {Component} from 'react';
import Style from './HomeScene.less';
import {Navbar, Nav, NavDropdown, Col, Row, Table} from 'react-bootstrap';
import {getData} from './services/Coronavirus'


class HomeScene extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statistics: {}
		}

	}


	componentWillMount() {
		getData((resp) => {
			alert("success: " + JSON.stringify(resp));
			this.setState({
				statistics: resp
			})
		}, (error) => {
			alert("failed: " + JSON.stringify(error));
		})
	}

	render() {
		let {statistics} = this.state;
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
									<text style={{color: '#6adc9d'}}>
										{statistics.confirmed}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Confirmed
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text style={{color: '#6adc9d'}}>
										{statistics.death}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Death
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text style={{color: '#6adc9d'}}>
										{statistics.active}
									</text>
									<text className={Style.summaryItemTitle}>
										Total Active
									</text>
								</div>
							</Col>
							<Col md={3} xs={6}>
								<div className={Style.summaryItem}>
									<text style={{color: '#6adc9d'}}>
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
					<Table striped hover size="sm">
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
						<tr>
							<td>1</td>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<td>3</td>
							<td colSpan="2">Larry the Bird</td>
							<td>@twitter</td>
						</tr>
						</tbody>
					</Table>
				</section>

			</div>
		)
	}
}

export default HomeScene;