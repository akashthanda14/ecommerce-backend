GET     /api/products           → Get all products
GET     /api/products/:id       → Get single product by ID
POST    /api/products           → Create a new product (Admin)
PUT     /api/products/:id       → Update a product (Admin)
DELETE  /api/products/:id       → Delete a product (Admin)



GET     /api/cart               → Get current user's cart
POST    /api/cart               → Add item to cart
DELETE  /api/cart/:itemId       → Remove item from cart
PUT     /api/cart/:itemId       → Update quantity in cart



GET     /api/orders             → Get all orders for current user
GET     /api/orders/:id         → Get specific order by ID
POST    /api/orders             → Create/place a new order
PUT     /api/orders/:id         → Update order status (Admin)



POST    /api/payment/checkout   → Process payment/checkout
