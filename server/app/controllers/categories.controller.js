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

    let newCategory = req.body.newCategory;

    let qry = "INSERT INTO categories (name) VALUES('" + newCategory + "')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}

exports.deleteCategory = (req, res) => {

    let id = req.params.id;
    let qry = "DELETE from `categories` WHERE `id` = " + id;
    
    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result);
    });
}

exports.saveNewSubcategory = (req, res) => {

    let subcategoryObj = req.body.subcategoryObj;

    let qry = "INSERT INTO subcategories (cat_id, name) VALUES('" + subcategoryObj.categoryID + "', '" + subcategoryObj.subcategoryName + "')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}

exports.deleteSubcategory = (req, res) => {

    let id = req.params.id;
    let qry = "DELETE from `subcategories` WHERE `subcat_id` = " + id;
    
    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result);
    });
}

exports.getAllFields = (req, res) => {

    let qry = "SELECT * FROM `category_fields`";

    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result)
    });
}

exports.saveNewCategoryField = (req, res) => {

    let fieldObj = req.body.fieldObj;

    let qry = "INSERT INTO cat_fields_list (cat_sub, cat_subcat_id, field_id) VALUES('" + fieldObj.identifier + "', '" + fieldObj.categoryID + "', '" + fieldObj.fieldID + "')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}

exports.deleteCategoryField = (req, res) => {

    let tempObj = req.body.tempObj;

    let qry = "DELETE from `cat_fields_list` WHERE `cat_sub` = 1 AND `cat_subcat_id` = " + tempObj.categoryID + " AND `field_id` = " + tempObj.fieldID;

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record deleted" });
    });
}

exports.saveNewSubcategoryField = (req, res) => {

    let fieldObj = req.body.fieldObj;

    let qry = "INSERT INTO cat_fields_list (cat_sub, cat_subcat_id, field_id) VALUES('" + fieldObj.identifier + "', '" + fieldObj.subcategoryID + "', '" + fieldObj.fieldID + "')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}

exports.deleteSubcategoryField = (req, res) => {

    let tempObj = req.body.tempObj;

    let qry = "DELETE from `cat_fields_list` WHERE `cat_sub` = 2 AND `cat_subcat_id` = " + tempObj.subcategoryID + " AND `field_id` = " + tempObj.fieldID;

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record deleted" });
    });
}

exports.saveNewField = (req, res) => {

    let fieldObj = req.body.fieldObj;

    let qry = "INSERT INTO category_fields (name) VALUES('" + fieldObj.newField + "')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}

exports.deleteField = (req, res) => {

    let id = req.params.id;
    let qry = "DELETE from `category_fields` WHERE `field_id` = " + id;
    
    db.query(qry, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(result);
    });
}
