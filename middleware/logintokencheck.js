const dbConnectionn = require("../database");
var session = require("express-session");

module.exports.checklogin = async (req, res, next) => {    
        try{
            if (!session.isLoggedIn){
               throw 'login'
            }else if (session.status != "student") {
                throw 'std'
            } 
            dbConnectionn.query('SELECT * FROM user INNER JOIN Major ON user.Major=Major.idMajor INNER JOIN submajor ON user.secMaj=submajor.idsubMajor INNER JOIN permission ON user.Permission=permission.idPermission INNER JOIN gender ON user.gender_id=gender.gender_id WHERE ID_Student = ? '
            ,[session.studentID],
            function (error, results, fields) {
              // console.log(results[0]);
              if (results.length > 0) { // check qurey has value
                // in case has value
                session.isLoggedIn = true;
                // session.username = req.body.swuID;
                session.firstname = results[0].Firstname;
                session.lastname = results[0].Lastname;
                session.studentID = results[0].ID_Student;
                session.Major = results[0].name_maj;
                session.subMajor = results[0].name_submaj;
                session.Year = results[0].Year;
                session.status = results[0].Detail_per;
                session.img = results[0].img_user;
                session.gender = results[0].detail_gen;
                return next()
                
              } else {
                // in case no account
                console.log("HAS NO ACCOUNT")
                res.redirect("/login");
              }
            });
        }
        catch (error) {
            // res.send(error)
            res.redirect('/logout')
            console.log(`Something went wrong with : logintokencheck ` ,error);
        }
        // res.status(response.status).send(response)
    
}