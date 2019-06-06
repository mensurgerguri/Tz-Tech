exports.listItems = (req, res) => {
    // let orderID = req.params.id;
    let query = "SELECT * from `items`";
    console.log(query);
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    })
}

// exports.cancelItem = (req, res) => {
//     let item_id = req.params.id;
//   let removeQuery = "DELETE FROM `cart_wishlist` WHERE `id` = " + item_id;
//     console.log(removeQuery);
//     db.query(removeQuery, (err, result) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       return res.status(200).send(result);
//     })
// }

exports.addToCart = (req, res) => {

    let cartItemObj = req.body.cartItemObj;

    let qry = "INSERT INTO cart_wishlist (user_id, item_id, location) VALUES('" + cartItemObj.userID + "', '" + cartItemObj.itemID + "', '" +  cartItemObj.location +"')";

    db.query(qry, function (err, result) {
        if (err) throw err;
        return res.status(200).send({ "success": "1 record inserted" });
    });
}