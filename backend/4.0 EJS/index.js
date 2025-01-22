import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port =3000;

app.get('/',(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    let type = 'Weekday';
    let adv = 'Work hard';
    if(day===0 || day===6){
        type = 'The weekend';
        adv = 'Relax';
    }
    res.render('index.ejs',
        {
            dayType: type,
            advice: adv,
        }
    );
})


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})