const User = require('../models/User')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');


exports.getCategories = (req, res) => {
    // let qry = "SELECT * FROM `categories`";

    // db.query(qry, (err, result) => {
    //     if (err) {
    //         return res.status(500).send(err);
    //     }
    //     uradi(req, res, result)
    // });


    /////////////////////////////////////
    let arr = []
    let arr2 = []
    let arr3 = []

    return new Promise(function (resolve, reject) {

        var query_str = "SELECT * FROM `categories`";

        db.query(query_str, function (err, rows, fields) {
            if (err) {
                return reject(err);
            }
            rows.forEach(element => {
                arr.push(element)
            })
            resolve(rows);
        });
        console.log(11)
    })
        .then(function (rows) {

            var query_str = "SELECT * FROM `subcategories`";

            db.query(query_str, function (err, rows, fields) {
                if (err) {
                    return reject(err);
                }

                rows.forEach(element => {
                    arr2.push(element)
                });

                

                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    let subcategories = [];console.log("ddd " +arr3)

                    for (let j = 0; j < arr2.length; j++) {
                        const element2 = arr2[j];
                       
                        if (element.id === element2.category_id) {
                            subcategories.push(element2)
                        }
                    }
                    console.log(44)
                    element.subcategories = subcategories;
                    
                }
             
                console.log(55)
                return res.status(200).send(arr);
            });

            console.log(22)

        })
        
        .then(function (rows) {

            var query_str = "SELECT * FROM `cat_fields_list`";

            db.query(query_str, function (err, rows, fields) {
                if (err) {
                    return reject(err);
                }

                rows.forEach(element => {
                    arr3.push(element)
                });


                console.log( "arr3 " + JSON.stringify(arr3))
                console.log( "arr " + JSON.stringify(arr))

                for (let i = 0; i < arr.length; i++) {
                    const element = arr[i];
                    let tempArr = []

                    for (let j = 0; j < arr3.length; j++) {
                        const element3 = arr3[j];

                        if (element3.cat_sub === 1 && element3.cat_subcat_id === element.id) {
                            tempArr.push(element3)
                        }
                    }
                    element.fields = tempArr
                    console.log( "ta " + JSON.stringify(tempArr))
                    console.log(66)

                }
                console.log( "arrrrr " + JSON.stringify(arr))
                
           
            });
            console.log(33)
        })
 
        .catch((err) => setImmediate(() => { throw err; }));
    /////////////////////////////////////


}







