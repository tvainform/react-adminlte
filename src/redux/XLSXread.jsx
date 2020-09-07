import React from 'react';

const XLSXread = () => {

    return (
    if(typeof require !== 'undefined') {
        XLSX = require('xlsx');
    }
    /* output format determined by filename */
    XLSX.writeFile(workbook, 'out.xlsb');
    /* at this point, out.xlsb is a file that you can distribute */
);
};
export default XLSXread;