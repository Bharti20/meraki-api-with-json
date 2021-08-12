const fs = require('fs')
let allDatas = require('../courses.json')

module.exports.createData = (req,res) => {
    var para = req.params.id
    var i = 0
    while(i<allDatas['availableCourses'].length-1) {
        if(allDatas['availableCourses'][i]['id'] == para) {
            break;
        }i++
    };
    if(allDatas['availableCourses'][i]['id'] == para) {
        res.send('Id is already exists')
        console.log('id is already exists')
    }else{
        var data = {
            id:para,
            name:req.body.name,
            type:req.body.type,
            logo:req.body.logo,
            short_description: req.body.short_description
        }
        res.send(data)
        console.log(data)
        allDatas["availableCourses"].push(data)
        let dataInString = JSON.stringify(allDatas, null, 2)
        fs.writeFileSync('courses.json', dataInString) 
        }

};