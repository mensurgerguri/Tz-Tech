exports.orders = (req, res) => {
  let id = req.params.id;
  let Ordersqry = "SELECT `id` FROM `orders`" + 1;

  db.query(Ordersqry, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });
}


exports.getOrders = (req, res) => {
  let id = req.params.id;
  let query = "SELECT * from `orders` JOIN `order_items` ON orders.user_id =item_id JOIN `items` ON order_items.item_id = items.id WHERE user_id =" + id;
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).send(result);
  });
}
