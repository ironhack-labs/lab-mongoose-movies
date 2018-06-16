const express = require('express');
const router  = express.Router();
const Truck = require('../models/Truck.js');
const Driver = require('../models/Driver.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


/* TRUCKS ROUTE*/
/* GET trucks list*/
router.get('/trucks', (req, res, next) => {
  Truck.find()
    .then(trucks => {
      res.render('trucks', { trucks });
    })
    .catch(error => {
      console.log("Welcome to the dark side!")
    })

});

/* GET truck details*/
router.get('/truck/:id', (req, res, next) => {
  let truckId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(truckId)) { 
    return res.status(404).render('not-found');
  }
  Truck.findOne({'_id': truckId})
  .then( truck =>{
    res.render("truck-detail", truck)
  })
  .catch(error => {
    console.log("Welcome to the dark side!")
  })
}); 

/* GET add a truck*/
 router.get('/trucks/add', (req, res, next) => {
   res.render('truck-add');
 });

/* POST add a truck*/
  router.post('/trucks/add', (req, res, next) => {
    let truckName = req.body.name;
    let truckDriver = req.body.driver;
    let truckImage = req.body.image;
    let truckYear = req.body.year;
    let truckBody = req.body.body;
    let truckEngine = req.body.engine;
    let truckTransmission = req.body.transmission;
    Truck.create({ name: truckName, driver: truckDriver, image: truckImage, year: truckYear, body: truckBody, engine: truckEngine, transmission: truckTransmission})
      .then( truck => {
        res.redirect('/trucks')
      })
      .catch( error => {
        console.log("Welcome to the dark side!")
      })
  })

  /* GET edit a truck*/
  router.get('/trucks/edit', (req, res, next) => {
    Truck.findOne({_id: req.query.truck_id})
    .then( truck => {
      res.render("truck-edit", {truck})
      
    })
    .catch( error => {
      console.log("Welcome to the dark side!")
    })
  });

  /* POST edit a truck*/
  router.post('/trucks/edit', (req, res, next) => {
    let truckId = req.query.truck_id;
    let truckName = req.body.name;
    let truckDriver = req.body.driver;
    let truckImage = req.body.image;
    let truckYear = req.body.year;
    let truckBody = req.body.body;
    let truckEngine = req.body.engine;
    let truckTransmission = req.body.transmission;
    Truck.updateOne({_id: truckId},{ name: truckName, driver: truckDriver, image: truckImage, year: truckYear, body: truckBody, engine: truckEngine, transmission: truckTransmission},{new:true})
      .then( truck => {
        res.redirect('/trucks')
      })
      .catch( error => {
        console.log("Welcome to the dark side!")
      })
  })


/* DRIVER ROUTES*/
router.get('/drivers', (req, res, next) => {
  Driver.find()
    .then(drivers => {
      res.render('drivers', { drivers });
    })
    .catch(error => {
      console.log("Welcome to the dark side!")
    })

});

/* GET driver details*/
router.get('/driver/:id', (req, res, next) => {
  let driverId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(driverId)) { 
    return res.status(404).render('not-found');
  }
  Driver.findOne({'_id': driverId})
  .then( driver =>{
    res.render("driver-detail", driver)
  })
  .catch(error => {
    console.log("Welcome to the dark side!")
  })
}); 

/* GET Add a driver*/
  router.get('/drivers/add', (req, res, next) => {
    res.render('driver-add');
  });
 
  /* POST Add a driver*/
   router.post('/drivers/add', (req, res, next) => {
     let driversFirstName = req.body.firstName;
     let driversLastName = req.body.lastName;
     let drivers_truck = req.body._truck;
     let driversBirthday = req.body.birthday;
     let driverImage = req.body.image;
     Driver.create({ firstName: driversFirstName, lastName: driversLastName, _truck: drivers_truck, birthday: driversBirthday, image: driverImage})
       .then(() => {
         res.redirect('/drivers')
       })
       .catch((error) => {
         console.log("Welcome to the dark side!")
       })
   })

   /* GET edit a truck*/
  router.get('/drivers/edit', (req, res, next) => {
    Driver.findOne({_id: req.query.driver_id})
    .then( driver => {
      res.render("driver-edit", {driver})
      
    })
    .catch( error => {
      console.log("Welcome to the dark side!")
    })
  });

  /* POST edit a truck*/
  router.post('/drivers/edit', (req, res, next) => {
    let driversFirstName = req.body.firstName;
    let driversLastName = req.body.lastName;
    let drivers_truck = req.body._truck;
    let driversBirthday = req.body.birthday;
    let driverImage = req.body.image;
    Driver.updateOne({_id: driverId},{firstName: driversFirstName, lastName: driversLastName, _truck: drivers_truck, birthday: driversBirthday, image: driverImage},{new:true})
      .then( driver => {
        res.redirect('/drivers')
      })
      .catch( error => {
        console.log("Welcome to the dark side!")
      })
  })


//router.listen(3000, () => console.log('Skadi Solutions is listening to you on port 3000! I would not visit porn websites'))


module.exports = router;
