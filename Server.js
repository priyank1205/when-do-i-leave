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

const path = require('path')
// Serve static files from the React frontend app
app.use(Express.static(path.join(__dirname, '/build')))
// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.get('/api', (req,res) => {
    rp(`people.zoho.com/people/api/attendance/getAttendanceEntries?authtoken=${Auth_Token}&date=${today}&dateFormat=${date_format}&emailId=${Email_ID}&empId=${Emp_ID}`)
    .then(data => res.send(data))
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
