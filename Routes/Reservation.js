var express = require('express');
const fs = require('fs');




module.exports = (function() {
    var api = express.Router();
    api.route("/Reservation").post(function(req, res) { 

                                                //Recuperation d'un fichier Json 
                                                
                                                fs.readFile('Data/Reservation.json', 'utf8', (err, jsonString) => {
                                                    if (err) {
                                                        console.log("File read failed:", err)
                                                        return
                                                    }
                                                data =JSON.parse(jsonString) ;





                                                //Get parameters
                                                data.push(req.body);
                                                //update file data Reservation.json
                                                dataUpdated=JSON.stringify(data);
                                                fs.writeFileSync('Data/Reservation.json', dataUpdated);
                                                //Response to clients
                                                res.send({request:true,data});
                                                res.end();



                                            }) 
    });
    return api;
})();