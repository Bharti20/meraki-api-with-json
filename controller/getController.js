const axioss = require('axios')
const fs = require('fs')

var merakiApi = 'https://saral.navgurukul.org/api/courses'
module.exports.availableCourses = (req, res) => {
    axioss.get(merakiApi).then((result) => {
        let allData = result.data
        console.log(allData)
        res.send(allData)
        let stringData = JSON.stringify(allData, null, 2)
        fs.writeFileSync('courses.json', stringData)
    }).catch((err) => {
        console.log(err)
    });
};
