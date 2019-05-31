//const Wish = require('../models/Wish');


exports.addwish = (req, res) => {

  let id = req.body.id;
  let user_id = req.body.user_id;
  let item_id = req.body.item_id;

  //this query will be changed after we create Categories and Items component.
  let AddWishQuery = "INSERT INTO cart_wishlist (id, user_id, item_id) VALUES ('2', '2', '2')";


  db.query(AddWishQuery, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);

  });
}

exports.deleteWish = (req, res) => {
  let id = req.params.id;
  let deleteWishQuery = "DELETE FROM `cart_wishlist` WHERE `item_id` = " + id;
  console.log(deleteWishQuery);
  db.query(deleteWishQuery, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });

}

exports.getWishes = (req, res) => {
    let id = req.params.id;
    let query = "SELECT * FROM `cart_wishlist` JOIN `items` ON cart_wishlist.item_id = items.id WHERE user_id =" + id;
    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    });
}
