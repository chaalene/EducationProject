//import express module
const express = require('express');

// DB configuration

//import mongoose module
const mongoose = require('mongoose');
//connecter l'application à la base de donné qui s'appelle turtleDB
mongoose.connect('mongodb://localhost:27017/turtleDB');

//import le module bcrypt 
const axios = require('axios');

//import le module bcrypt 
const bcrypt = require('bcrypt');

//create express application
const app = express();


//********************************* */
//*******DB models**********/
//import le model course 
const Course = require('./models/course');
//import le model user 
const User = require('./models/user');
//import le model course 
const Trainer = require('./models/trainer');


//********************************* */
//*******IMAGE**********/
//import multer module
const multer = require('multer');
const path = require('path');

app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


//********************************* */
//*******Body parser configuration**********/
// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

//************************************************** */
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

const course = require('./models/course');
const user = require('./models/user');


//*************************************
//app.action('adress',(req,res)=>{
//traitement logic
//});
// win nal9aw http://localhost:3000/ => '/
//njibo e request 
//**************************************

//business logic GET ALL COURSES
app.get('/courses', (req, res) => {
    console.log('here into Get all courses');
    course.find((err, docs) => {
        if (err) {
            console.log('Error into bd', err);
        } else {
            res.status(200).json({
                findedCourses: docs
            });
        }
    })
});

//business logic ADD COURSE (addCourse) 
app.post('/courses', (req, res) => {
    console.log('here into add course');
    console.log('here object from FE', req.body);
    const courseObject = new Course({
        name: req.body.name,
        price: req.body.price,
        trainer: req.body.trainer,
        duration: req.body.duration,
        capacity: req.body.capacity
    });
    courseObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Save with succes'

                });
            }
        }
    ); //save dans la db
});

//business logic GET COURSE by ID
app.get('/courses/:id', (req, res) => {
    console.log('here into get course by id', req.params.id);
    Course.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json({
                findedCourses: result
            });
        })

});
//business logic DELETE COURSES by id
app.delete('/courses/:id', (req, res) => {
    console.log('here into delete course by id', req.params.id);
    Course.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({ message: 'Deleted with success' })
            }
        }
    )

});
//business logic EDIT COURSE BY id
app.put('/courses/:id', (req, res) => {
    console.log('here into edit course by id', req.params.id);
    console.log('here edited course', req.body);
    Course.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Edited with success'
                });
            }
        }
    )

});

//business logic Search trainer by name
app.post('/courses/search/trainerName', (req, res) => {
    console.log('here into trainer name', req.body);
    Course.find({ trainer: req.body.name }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    findedCourses: result
                })
            }
        }
    )
});

app.post('/courses/signup', (req, res) => {
    console.log('here into user signup', req.body);
    const userObject = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: req.body.pwd,
        tel: req.body.tel
    })
    userObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'signup with succes'
                })
            }
        })
});


//*************************** Trainers***********************

//business logic GET ALL TRAINERS
app.get('/trainers', (req, res) => {
    console.log('here into Get all trainers');
    Trainer.find((err, docs) => {
        if (err) {
            console.log('Error into bd', err)
        } else {
            res.status(200).json({
                findedTrainer: docs
            });
        }
    })
});

//business logic ADD TRAINER
app.post('/trainers', multer({ storage: storage }).single('img'), (req, res) => {
    console.log('here into trainer added', req.body);
    let url = req.protocol + '://' + req.get('host'); //   =>   http://localhost:3000
    const trainerObject = new Trainer({
        name: req.body.name,
        speciality: req.body.speciality,
        experience: req.body.experience,
        img: url + '/images/' + req.file.filename
    })
    trainerObject.save().then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'trainer added with succes'
                })
            }
        }
    )
});
//business logic GET TRAINER by ID
app.get('/trainers/:id', (req, res) => {
    console.log('here into get trainers by id', req.params.id);
    Trainer.findOne({ _id: req.params.id }).then(
        (result) => {
            res.status(200).json({
                findedTrainers: result
            });
        })

});
//business logic EDIT Trainer BY id
app.put('/trainers/:id', (req, res) => {
    console.log('here into edit course by id', req.params.id);
    console.log('here edited Trainer', req.body);
    Trainer.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    message: 'Edited Trainer with success'
                });
            }
        }
    )

});
//business logic DELETE COURSES by id
app.delete('/trainers/:id', (req, res) => {
    console.log('here into delete trainer by id', req.params.id);
    Trainer.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({ message: 'Trainer Deleted with success' })
            }
        }
    )

});
//*************************** Users***********************

//business logic GET ALL USERS
app.get('/users', (req, res) => {
    console.log('here into Get all users');
    User.find((err, docs) => {
        if (err) {
            console.log('Error into bd', err)
        } else {
            res.status(200).json({
                findedUsers: docs
            });
        }
    })

});
//business logic SIGNUP (ADD USERS)
app.post('/users/signup', (req, res) => {
    console.log('here into SIGNUP (add users)', req.body);
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            const userObj = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                tel: req.body.tel,
            })
            userObj.save().then(
                (result) => {
                    if (result) {
                        res.status(200).json({
                            message: 'singup succeded'
                        });
                    }
                }
            )
        }
    )



});
//business logic DELETE USER by id
app.delete('/users/:id', (req, res) => {
    console.log('here into delete trainer by id', req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({ message: 'User Deleted with success' })
            }
        }
    )

});
//business login
app.post('/users/login', (req, res) => {
    console.log('here into login', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Result after find by email', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                });
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd)
        }
    ).then(
        (pwdResult) => {
            if (!pwdResult) {
                res.status(200).json({
                    message: '1'
                });
            }

            User.findOne({ email: req.body.email }).then(
                (user) => {
                    let userToSend = {
                        fName: user.firstName,
                        lName: user.lastName
                    }
                    res.status(200).json({
                        user: userToSend,
                        message: '2'
                    });
                });
        });

});

//***************weather*****************
app.post('/users/weather', (req, res) => {
    console.log('here into weather', req.body);
    const country = req.body.cityName;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        country +
        "&appid=" +
        apiKey + "&units=metric";
    axios
        .get(apiUrl)
        .then((response) => { //retour API
            console.log('Here response', response);
            const weather = response.data.main;
            console.log('Here weather main', weather);
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity
            }
            res.status(200).json({
                result: result
            })
        });
});



//app is exportable
module.exports = app;