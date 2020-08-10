var sql = require('mysql');

var con = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "spaceblink"
    
});



// All Hotels Details
exports.allHotels = (req, res) => {
    console.log("db connected")
    let sql = "SELECT * FROM hotelslist"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}

// All Rest Details
exports.allRest = (req, res) => {
    console.log("db connected")
    let sql = "SELECT * FROM resturantlist"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}

// All Transfer Details
exports.allTransfer = (req, res) => {
    console.log("db connected")
    let sql = "SELECT * FROM transferlist"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}


// All Tours Details
exports.allTour = (req, res) => {
    console.log("db connected")
    let sql = "SELECT * FROM tourlist"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}

// Faqs Details
exports.Faqs = (req, res) => {
    console.log("db connected")
    let sql = "SELECT * FROM faqs"
    con.query(sql , (err , result)=>{
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        res.json(result)
    })
}


