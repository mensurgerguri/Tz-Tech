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
  let WishID = req.params.id;
  let deleteWishQuery = "DELETE  from `cart_wishlist` WHERE `id` = " + WishID;
  console.log(deleteWishQuery);
  db.query(deleteWishQuery, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });

}
