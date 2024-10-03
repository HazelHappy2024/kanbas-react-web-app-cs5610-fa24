// src/Labs/Lab2/ForegroundColors.tsx

import React from 'react';
import './index.css'; // 确保引入 CSS 文件

const ForegroundColors = () => {
    return (
        <div id="wd-css-colors">
            <h2>Colors</h2>
            <h3 className="wd-fg-color-blue">Foreground color</h3>
            <p className="wd-fg-color-red">
                The text in this paragraph is red but
                <span className="wd-fg-color-green">this text is green</span>
            </p>
        </div>
    );
};

export default ForegroundColors;
