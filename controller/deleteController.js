const fs = require('fs')
const jsonFileData = require('../courses.json')

module.exports.dataDelete = (req,res) => {
    let para = req.params.id
    let i = 0
    while(i<jsonFileData["availableCourses"].length){
        if(jsonFileData["availableCourses"][i]['id'] == para) {
            jsonFileData["availableCourses"].splice(i,1)
            res.send('Particular id data has deleted')
            console.log(para, 'This id data has deleted')
            break;
        }i++
    };
    let stringData = JSON.stringify(jsonFileData, null, 2)
    fs.writeFileSync('courses.json', stringData)

};