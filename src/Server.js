const Express = require('express');
const request = require('request');
var rp = require('request-promise');
const moment = require('moment');
const Auth_Token = 'bea91b9482657b17affa3d8cd33a1cf3';
let Emp_ID = 'M703453';
let Email_ID = 'priyank.agarwal@medlife.com';
const date_format = 'dd-MMM-yyyy';
let today = moment().format('DD-MMM-YYYY');

const app = Express();

app.get('/api', (req,res) => {
    rp(`https://people.zoho.com/people/api/attendance/getAttendanceEntries?authtoken=${Auth_Token}&date=${today}&dateFormat=${date_format}&emailId=${Email_ID}&empId=${Emp_ID}`)
    .then(data => res.send(data))
});

app.listen(3002, () => console.log('Example app listening on port 3002!'))
