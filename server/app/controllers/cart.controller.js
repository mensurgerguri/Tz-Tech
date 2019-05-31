    exports.getItems = (req, res) => {
    // let orderID = req.params.id;
    let query = "SELECT * from `cart_wishlist` JOIN `items` ON `cart_wishlist`.`item_id`= `items`.`id`";
    console.log(query);
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    })
}

exports.cancelItem = (req, res) => {
    let item_id = req.params.id;
  let removeQuery = "DELETE FROM `cart_wishlist` WHERE `id` and `item_id` = " + item_id;
    console.log(removeQuery);
    db.query(removeQuery, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    })
}