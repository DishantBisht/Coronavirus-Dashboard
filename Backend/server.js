const express = require('express');
const axios  = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/getCountries' , async (req , res) => {

  let data = [];
  try{
     await axios.get('https://disease.sh/v3/covid-19/countries').then(response => {
        data = response.data;
    });
    res.status(201).send(data);
   }catch(error){
       res.status(400).send('bad request');
   }
})

app.get('/worldwide' , async (req , res) => {
    let data = [];
    try{
    await axios.get('https://disease.sh/v3/covid-19/all').then(response => {
        data = response.data;
    })
    res.status(201).send(data);
    } catch(error){
        res.status(400).send('bad request')
    }  
    
})

app.get('/country/:countryCode' , async (req , res) => {
    let data = [];
    try{
    await axios.get(`https://disease.sh/v3/covid-19/countries/${req.params.countryCode}`).then(response => {
        data = response.data;
    })
    res.status(201).send(data);
    } catch(error){
        res.status(400).send('Bad request');
    }
   
})


app.listen(4005 , () => {
    console.log('server listening to port 4005');
})

