const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
  .find()
  .then(dronesFromApi => {
    console.log(dronesFromApi)
    res.render("../views/drones/list.hbs", { dronesFromApi });
  })
  .catch(error => console.log(error));

});

router.get('/drones/create', (req, res, next) => {
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
const {name, propellers, maxSpeed} = req.body
Drone.create({ name, propellers, maxSpeed })
    /*.then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.` */
    .then(() => res.redirect('/drones'))
    .catch(error => res.redirect('/drones/create'));
});



router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  // console.log('The ID from the URL is: ', id);
  Drone.findById(id)
  .then((response) => {
    res.render("drones/update-form.hbs", {response});
  })
  .catch((err) => {
    console.log(err)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
    const { id } = req.params;
    const { name, propellers, maxSpeed} = req.body;
 
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed}, { new: true })
    .then(updatedDrone => res.redirect(`/drones`)) // go to the details page to see the updates
    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  console.log("Llego aquí desde formulario");
  console.log(req.params);
  Drone
    .deleteOne({id:req.params.id})
    .then(response=>{
      console.log("Eliminado correctamente")
      res.redirect("/drones")
    })
    .catch(e=>console.log(e))
});


module.exports = router;
