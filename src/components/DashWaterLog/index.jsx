import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, theme } from 'antd';

const DashWaterLog = () => {
    const { token } = theme.useToken();
    const wrapperStyle = {
      width: 300,
      height:500,
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };

    // Define the onPanelChange function
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
        // You can add more logic here depending on what you want to do when the panel changes
    };

    return (
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
};

export default DashWaterLog;