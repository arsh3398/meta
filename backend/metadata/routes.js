const express = require("express");
const router = express.Router();
let contactModel = require('./contactUsModel');
let careerModel = require('./careerModel');
let textModel = require('./textModel');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: xyz ,
        pass: abc
    } //add username and password
});
//this is to post queries added in contact us form
router.post('/addquery', async (req, res) => {
    let contactadd = new contactModel(req.body);
    try {
        await contactadd.save();
        const { firstName, email, wantAs } = req.body;

        // Process form data and prepare the email
        const mailOptions = {
            from: 'aarshkumarr41@gmail.com',
            to: 'karsh3306@gmail.com',
            subject: 'Form Submission',
            text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${wantAs}`
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).send(
            {
                "status": true,
                "message": "Doubt added"
            });
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//this is to view queries added in contact us form
router.get('/viewquery', async (req, res) => {
    try {
        let contacted = await contactModel.find({});
        res.status(200).send(contacted);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

//this is to post form submitted in careers

router.post('/add/jobrequest', async (req, res) => {
    let jobapplication = new careerModel(req.body);
    try {
        await jobapplication.save();
        res.status(200).send(
            {
                "status": true,
                "message": "Job application submitted"
            }
        );
    }
    catch (err) {
        res.status(400).send(err);
    }
})

//this is to get form submitted in careers

router.get('/view/jobrequest', async (req, res) => {
    try {
        let applications = await careerModel.find({});
        res.status(200).send(applications);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

//this is to post text data on database

router.post('/put/textData', async (req, res) => {
    let textToAdd = new textModel(req.body);
    try {
        await textToAdd.save();
        res.status(200).send(
            {
                "status": true,
                "message": "text added"
            }
        )
    }
    catch (err) {
        res.status(400).send(err);
    }
});

//this is to get text data from database

router.get('/view/textData/:id', async (req, res) => {
    const textContentId = req.params.id;
    try {
        let getText = await textModel.findById(textContentId);
        res.status(200).send(getText);
    }
    catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;