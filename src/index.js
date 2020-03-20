import dva from 'dva';
import '@babel/polyfill';
import createHistory from 'history/createHashHistory';

const history = require('history');

// 1. Initialize
const app = dva({
	history: createHistory(),
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/listData').default);
// app.model(require('./models/article').default);
// app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
export default app._store;  // eslint-disable-line
