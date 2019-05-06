const express = require('express');


const app = express();

app.use(express.static(process.cwd()+"/appui/"));

const port = 3070;

const settings = {
    settings:"settings from server", 
    title: "APP_UI", 
    fullName: "Bhargav Bachina", 
    pageWidth: "60%", 
    text:"This settings coming from the server",
    headerColor: "gray",
    footerColor: "red"
};

app.get('/api/app/settings', (req,res) => {
    console.log('--settings---');
    res.json(settings)
})

app.get('/users', (req,res) => {
  console.log('--users---');
  res.json({users:[]})
})

app.get('/test', (req,res) => {
  res.send("API works!!!");
})

app.get('/', (req, res) => {
  res.sendFile(process.cwd()+"/appui/index.html")
});


app.listen(port, (err) => {
  if (err) {
    logger.error('Error::', err);
  }
  console.log(`running server on from port:::::::${port}`);
});