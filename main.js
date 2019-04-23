import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/index.js';
import { ConfigProvider } from 'antd';
ReactDOM.render(<ConfigProvider >
    <App />
  </ConfigProvider>, document.getElementById('app'));