const express = require('express')
const router = express.Router();

const { 
    allHotels,
    allRest,
    Faqs,
    allTour,
    allTransfer
} = require("../controllers/controller")


router.get('/allhotels', allHotels);
router.get('/allrest', allRest);
router.get('/faqs', Faqs);
router.get('/alltour', allTour);
router.get('/alltransfer', allTransfer);



module.exports = router;
    