const dbConnectionn = require("../database");

module.exports.updatereq = async (req, res, next) => {    
    try{
        var bungkublenget = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN event on event.ID_event=request.ID_event
            INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
            where Status_req != "4" and Detail_type_E='กิจกรรมบังคับ'`,
            function (error, results, fields) {
                if (error) throw error; 
                resolve(results.length)
        });
     })
    var bungkublengetpassed = await new Promise((resolve,reject) => {
        dbConnectionn.query(`SELECT * FROM request 
        INNER JOIN event on event.ID_event=request.ID_event
        INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
        where Status_req = "4" and Detail_type_E='กิจกรรมบังคับ'`,
        function (error, results, fields) {
            resolve(results.length)
    });
        })
    
    var leuakLeng = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN event on event.ID_event=request.ID_event
            INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
            where Status_req != "4" and Detail_type_E='กิจกรรมเลือก'`,
            function (error, results, fields) {
                resolve(results.length)
        });
    })
    
    
    var leuakLengpasss = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN event on event.ID_event=request.ID_event
                INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                where Status_req = "4" and Detail_type_E='กิจกรรมเลือก'`,
                function (error, results, fields) {
                    resolve(results.length)
            });
    })
    
    
    var bampen = await new Promise((resolve,reject) => {
                    dbConnectionn.query(`SELECT * FROM request 
                    INNER JOIN event on event.ID_event=request.ID_event
                    INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                    where Status_req != "4" and Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์'`,
                    function (error, results, fields) {
                        resolve(results.length)
                });
    })
    
    
    var bampenpass = await new Promise((resolve,reject) => {
                        dbConnectionn.query(`SELECT * FROM request 
                        INNER JOIN event on event.ID_event=request.ID_event
                        INNER JOIN type_event ON type_event.idType_Event=event.idType_Event
                        where Status_req = "4" and Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์'`,
                        function (error, results, fields) {
                            resolve(results.length)
                    });
    })
    
    var allrequest = bungkublenget+leuakLeng+bampen
    var dataset = {bungkublenget,bungkublengetpassed,leuakLeng,leuakLengpasss,bampen,bampenpass,allrequest}
    const savecookie = await res.cookie('amrq', dataset, { httpOnly: true, domain : '' , maxAge: 365*24*60*60})
    // console.log(dataset,"update req cookie test")
    return next()
      
    }catch (err) {
        console.log(`Something went wrong with : checkforstudentonly ` ,error);
    }
    
 
  }