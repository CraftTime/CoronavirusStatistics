import React, {Component} from 'react';
import Media from 'react-media';
import './style.css'

class App extends Component {

	render() {
		return (
			<div className="root">
				我是测试页面
				<Media
					query={{minWidth: '1200px'}}
				>
					{matches => matches ? (
						<p>PC.</p>
					) : (
						<p>Phone.</p>
					)}
				</Media>
			</div>
		);
	}

}

export default App;