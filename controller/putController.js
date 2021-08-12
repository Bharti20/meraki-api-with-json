const fs = require('fs');
const { allowedNodeEnvironmentFlags } = require('process');
const allData = require('../courses.json');
module.exports.updateData = (req, res) => {
    let para = req.params.id
    let i = 0
    while(i<allData["availableCourses"].length) {
        if(allData["availableCourses"][i]['id'] == para) {
            allData["availableCourses"][i]['name'] = req.body.name
            allData["availableCourses"][i]['logo'] = req.body.logo
            break;
        }i++
    };
    let stringD = JSON.stringify(allData, null, 2)
    fs.writeFileSync('courses.json', stringD)
    res.send('Data updated')
    console.log('Data updated')

};