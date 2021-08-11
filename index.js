const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const { connected } = require("process");
const port =3000;

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("css"));
app.set('view engine', 'pug')

app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/" , function(req,res){
    const a = Number(req.body.a);
    const b =Number(req.body.b);
    const c =Number(req.body.c);

    const bb = b*b
    const Fourac= 4*a*c;

    const discriminant = bb - Fourac;
    const squarerootofDiscriminant=Number(Math.sqrt(discriminant));
  
    var sq = Number(Math.floor(Math.sqrt(squarerootofDiscriminant)))

    if(sq *sq == discriminant ){
        console.log("ps");
        const numerator1 = Number(-1 * b) + squarerootofDiscriminant;
        const numerator2 = -b - squarerootofDiscriminant;
        const denominator = 2 * a;

        const NdidD01 = numerator1 / denominator;

        const NdidD02 = numerator2 / denominator;

        if(NdidD01 * denominator == numerator1 & NdidD02 * denominator == numerator2 ){
            
            if(discriminant > 0 ) {
                // res.send("<h1> a1 the roots of the given equation is " + NdidD01 + " and " + NdidD02 +  " 1");
                res.render(__dirname + '/answer', {  answer: " a1 the roots of the given equation is " + NdidD01 + " and " + NdidD02 +  " 1"  })
            
            }else if ( discriminant == 0) {
                // res.send("<h1> a2 the roots of the given equation is " + NdidD01 + " and " + NdidD02 + " 2");
                res.render(__dirname + '/answer', {  answer: " a1 the roots of the given equation is " + NdidD01 + " and " + NdidD02 +  " 1"  })
            } 
            else if( discriminant < 0){
                // res.send("no real value")
                res.render(__dirname + '/answer', {  answer: "no real value"  });
            }
        }else{
            const numerator1 =  -b +  squarerootofDiscriminant;
            const numerator2 =  -b -  squarerootofDiscriminant;

            const denominator = 2*a

            const root01 = numerator1 + " / " +denominator;
            const root02 = numerator2 + " / " +denominator;

            // res.send("<h1> a3 The root of the given equation is " + root01 +" & " + root02 );
            res.render(__dirname + '/answer', {  answer: " a3 The root of the given equation is " + root01 +" & " + root02  });
        }

        

        
 
      
    }else {
        if(discriminant > 0){
            const numerator1 = "( "+ -b + " + √" + discriminant +" ) ";
        const denominator = 2*a

        const numerator2 = "( "+ -b + " - √" + discriminant +" ) ";
        

        const root01 = numerator1 + " / "+ denominator;
        const root02 = numerator2 + " / "+ denominator;

        // res.send("<h1> a4 The root of the equation is " + root01 +" and " + root02 +"</h1>" )
        res.render(__dirname + '/answer', {  answer:  " The root of the equation is " + root01 +" and " + root02  });

        }else if(discriminant == 0) {
            const numerator1 = "( "+ -b + " + √" + discriminant +" ) ";
        const denominator = 2*a

        const numerator2 = "( "+ -b + " - √" + discriminant +" ) ";
        

        const root01 = numerator1 + " / "+ denominator;
        const root02 = numerator2 + " / "+ denominator;

        // res.send("<h1> a5 The root of the equation is " + root01 +" and " + root02 +"</h1>" )
        res.render(__dirname + '/answer', {  answer:  " a5 The root of the equation is " + root01 +" and " + root02   });
        }else{
            // res.send("<h1>a6  no real value </h1>");
            res.render(__dirname + '/answer', {  answer:  "a6  no real value "  });
        }

        
      
    }

  

  
    // 

    // var no1 = numerator1 / denominator;
    // var no2 = numerator2 / denominator;

    // var result01 = Math.floor(no1);
    // var result02 = Math.floor(no2);


    // if(result01 * denominator == numerator1){
    //     var root01 = no1
    // }else {
    //     var root01 = numerator1 + " / " + denominator
        
    // }

    // if(result02 * denominator == numerator2){
    //     var root02 = no2
    // }else {
    //     var root02 = numerator2 + " / " + denominator
        
    // }

    // console.log(root01 );
    // console.log(root02 );
    

 
    // if(discriminant > 0){
    //     console.log("real and different roots");
    //     const root1 = String((-bb - squarerootofDiscriminant)/ (2 * a)) ;
    //     const root2 =String( (-bb + squarerootofDiscriminant)/ (2 * a) );
    //     // console.log(root1, root2);
    //     res.send("the root of the qiven equation is" + root1+ " and " + root2)
       
    // }else{
    //     console.log("no real value");
    //     res.send("no real value")
    // }


})

app.listen(process.env.PORT ||  port , function(){
    console.log("server is onilne on port 3000");
})

