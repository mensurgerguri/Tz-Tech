const User = require('../models/User')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');


exports.getCategories = (req, res) => {

    let qry = "SELECT * FROM `categories`";

    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
}

exports.getSubCategories = (req, res) => {

    id = req.params.id;

    let qry = "SELECT * FROM `subcategories` WHERE `cat_id` = " + id;

    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
}

exports.getSubCategoryFields = (req, res) => {

    id = req.params.id;

    let qry = "SELECT * FROM `cat_fields_list` JOIN `category_fields` ON `cat_fields_list`.`field_id` = `category_fields`.`field_id` WHERE `cat_sub` = 2 AND `cat_subcat_id` = " + id;

    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
}

exports.getCategoryFields = (req, res) => {

    id = req.params.id;

    let qry = "SELECT * FROM `cat_fields_list` JOIN `category_fields` ON `cat_fields_list`.`field_id` = `category_fields`.`field_id` WHERE `cat_sub` = 1 AND `cat_subcat_id` = " + id;

    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
}

exports.saveNewCategory = (req, res) => {

    newCategory = req.body.newCategory;

    let qry = "INSERT INTO categories (name) VALUES('" + newCategory + "')";
    
    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({"success": "1 record inserted"});
      });
}








