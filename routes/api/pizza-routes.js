const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
  } = require('../../controllers/pizza-controller');



// this is setting up for Express.js
// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
// /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

  // /api/pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);

module.exports = router;


// can combine routes for individual HTTP methods
    // // this code
    // router.route('/').get(getCallbackFunction).post(postCallbackFunction);

    // // is this same as this
    // router.get('/', getCallbackFunction);
    // router.post('/' postCallbackFunction);