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
    let query = "SELECT * from `orders` JOIN `order_items` ON orders.user_id = item_id JOIN `items` ON order_items.item_id = items.id WHERE user_id =" + id;
    db.query(query, (err, result) => {
    if (err) {
    return res.status(500).send(err);
    }
    return res.status(200).send(result);
    });
    }
    
    exports.getOrder = (req, res) => {
    let id = req.params.id;
    // let query = "SELECT Status_code FROM `status` JOIN `orders` ON orders.status=orders.status JOIN `order_items` ON order_items.order_id = order_items.order_id JOIN `items` ON items.id=orders.id where user_id =" + id;
    //let query = "SELECT Status_code FROM `status` JOIN `order_items` ON order_items.item_id = order_items.item_id JOIN `orders` ON status.Status_code= orders.status WHERE user_id =" + id;
    let query = "SELECT Status_code FROM `status` JOIN `orders` ON orders.status = status.id JOIN `order_items` ON orders.id = order_items.order_id WHERE orders.id = 1";
    //let query = "SELECT status FROM `orders` JOIN `status` ON orders.status=status.Status_code JOIN `items` ON items.id= orders.id where user_id =" + id;
    console.log(query);
    db.query(query, (err, result) => {
    console.log(result);
    if (err) {
    return res.status(500).send(err);
    }
    return res.status(200).send(result);
    });
    }
    
    