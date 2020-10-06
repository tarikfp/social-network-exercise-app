import React from 'react';
import {Spin} from 'antd';
const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <Spin size="large" />
    </div>
  );
};

const spinnerStyle = {
  textAlign: 'center',
  paddingTop: '50px',
};

export default Spinner;
