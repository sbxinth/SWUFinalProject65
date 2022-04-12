const dbConnectionn = require("../database");

module.exports.updatereq = async (req, res, next) => {    
    try{
            
        var bungkublenget = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN type_req on request.idType_req=type_req.idType_Req
            inner join event on event.ID_event=request.ID_event
            inner join type_event on type_event.idType_Event=event.idType_Event
            where Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='บันทึกกิจกรรม'`,
            function (error, results, fields) {
                if (error) throw error; 
                resolve(results.length)
        });
     })
    var bungkublengetpassed = await new Promise((resolve,reject) => {
        dbConnectionn.query(`SELECT * FROM request 
        INNER JOIN type_req on request.idType_req=type_req.idType_Req
        inner join event on event.ID_event=request.ID_event
        inner join type_event on type_event.idType_Event=event.idType_Event
        where Detail_type_E='กิจกรรมบังคับ' and Detail_Type_R='ตกหล่น'`,
        function (error, results, fields) {
            resolve(results.length)
    });
        })

    var leuakLeng = await new Promise((resolve,reject) => {
            dbConnectionn.query(`SELECT * FROM request 
            INNER JOIN type_req on request.idType_req=type_req.idType_Req
            inner join event on event.ID_event=request.ID_event
            inner join type_event on type_event.idType_Event=event.idType_Event
            where Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='บันทึกกิจกรรม'`,
            function (error, results, fields) {
                resolve(results.length)
        });
    })


    var leuakLengpasss = await new Promise((resolve,reject) => {
                dbConnectionn.query(`SELECT * FROM request 
                INNER JOIN type_req on request.idType_req=type_req.idType_Req
                inner join event on event.ID_event=request.ID_event
                inner join type_event on type_event.idType_Event=event.idType_Event
                where Detail_type_E='กิจกรรมเลือก' and Detail_Type_R='ตกหล่น'`,
                function (error, results, fields) {
                    resolve(results.length)
            });
    })


    var bampen = await new Promise((resolve,reject) => {
                    dbConnectionn.query(`SELECT * FROM request 
                    INNER JOIN type_req on request.idType_req=type_req.idType_Req
                    inner join event on event.ID_event=request.ID_event
                    inner join type_event on type_event.idType_Event=event.idType_Event
                    where Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='บันทึกกิจกรรม'`,
                    function (error, results, fields) {
                        resolve(results.length)
                });
    })


    var bampenpass = await new Promise((resolve,reject) => {
                        dbConnectionn.query(`SELECT * FROM request 
                        INNER JOIN type_req on request.idType_req=type_req.idType_Req
                        inner join event on event.ID_event=request.ID_event
                        inner join type_event on type_event.idType_Event=event.idType_Event
                        where Detail_type_E='กิจกรรมบําเพ็ญสาธารณะประโยชน์' and Detail_Type_R='ตกหล่น'`,
                        function (error, results, fields) {
                            resolve(results.length)
                    });
    })


    var eventnow = await new Promise((resolve,reject) => {
                        dbConnectionn.query(`SELECT * FROM event;`,
                        function (error, results, fields) {
                            resolve(results.length)
                    });
    })

       var allrequest = bungkublenget+leuakLeng+bampen
       var tokloan = bungkublengetpassed+leuakLengpasss+bampenpass
       var dataset = {bungkublenget,bungkublengetpassed,leuakLeng,leuakLengpasss,bampen,bampenpass,allrequest,tokloan,eventnow}
       const savecookie = await res.cookie('amrq', dataset, { httpOnly: true, domain : '' , maxAge: 365*24*60*60})
    // console.log(dataset,"update req cookie test")
    return next()
      
    }catch (err) {
        console.log(`Something went wrong with : updatereq ` ,error);
    }
    
 
  }

