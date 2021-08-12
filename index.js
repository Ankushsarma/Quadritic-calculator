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
    const squarerootofDiscriminant=(Math.sqrt(discriminant));
  
    var sq = (Math.floor(squarerootofDiscriminant))
    console.log(sq);
    //  perfect square 
    if(sq *sq == discriminant ){
        const numerator1 = (-1 * b) + squarerootofDiscriminant;
        const numerator2 = -b - squarerootofDiscriminant;
        const denominator = 2 * a;

        const NdidD01 = numerator1 / denominator;

        const NdidD02 = numerator2 / denominator;

        //  divisable 
        if(NdidD01 * denominator == numerator1 & NdidD02 * denominator == numerator2 ){
            
            if(discriminant > 0 ) {
                // res.send("<h1> a1 the roots of the given equation is " + NdidD01 + " and " + NdidD02 +  " 1");
                res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + NdidD01 + " and " + NdidD02  })
            
            }else if ( discriminant == 0) {
                // res.send("<h1> a2 the roots of the given equation is " + NdidD01 + " and " + NdidD02 + " 2");
                res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + NdidD01 + " and " + NdidD02   })
            } 
            else if( discriminant < 0){
                // res.send("no real value")
                const numerator1 =  -b + " + " +  squarerootofDiscriminant + "i";
                const numerator2 =  -b + " - " +  squarerootofDiscriminant + "i";

                const denominator = 2*a

                const root01 = numerator1 + " / " +denominator;
                const root02 = numerator2 + " / " +denominator;



                // res.send("no real value")
               res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + root01 + " and " + root02   })
            }

        //  not divisable  
        }else{
            const numerator1 =  -b +  squarerootofDiscriminant;
            const numerator2 =  -b -  squarerootofDiscriminant;

            const denominator = 2*a

            const root01 = numerator1 + " / " +denominator;
            const root02 = numerator2 + " / " +denominator;

            if(discriminant > 0 ) {
                // res.send("<h1> a1 the roots of the given equation is " + NdidD01 + " and " + NdidD02 +  " 1");
                res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + root01 + " and " + root02  })
            
            }else if ( discriminant == 0) {
                // res.send("<h1> a2 the roots of the given equation is " + NdidD01 + " and " + NdidD02 + " 2");
                res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + root01 + " and " + root02   })
            } else {
                const numerator1 =  -b + " + " +  squarerootofDiscriminant + "i";
                const numerator2 =  -b + " - " +  squarerootofDiscriminant + "i";

                const denominator = 2*a

                const root01 = numerator1 + " / " +denominator;
                const root02 = numerator2 + " / " +denominator;



                // res.send("no real value")
               res.render(__dirname + '/answer', {  answer: "The roots of the given equation is " + root01 + " and " + root02   })
            }

            // res.send("<h1> a3 The root of the given equation is " + root01 +" & " + root02 );
            // res.render(__dirname + '/answer', {  answer: "  The root of the given equation is " + root01 +" & " + root02  });
        }

        

        
 
    //   not perfect square 
    }else {
        if(discriminant > 0){
            const numerator1 = "( "+ -b + " + √" + discriminant +" ) ";
            const denominator = 2*a

            const numerator2 = "( "+ -b + " - √" + discriminant +" ) ";
        

            const root01 = numerator1 + " / "+ denominator;
            const root02 = numerator2 + " / "+ denominator;

        // res.send("<h1> a4 The root of the equation is " + root01 +" and " + root02 +"</h1>" )
        res.render(__dirname + '/answer', {  answer:  "The root of the equation is " + root01 +" and " + root02  });

        }else if(discriminant == 0) {
            const numerator1 = "( "+ -b + " + √" + discriminant +" ) ";
            const denominator = 2*a

            const numerator2 = "( "+ -b + " - √" + discriminant +" ) ";
        

          const root01 = numerator1 + " / "+ denominator;
          const root02 = numerator1 + " / "+ denominator;

        // res.send("<h1> a5 The root of the equation is " + root01 +" and " + root02 +"</h1>" )
        res.render(__dirname + '/answer', {  answer:  "The root of the equation is " + root01 +" and " + root02   });
        }else{
            // res.send("<h1>a6  no real value </h1>");
            // res.render(__dirname + '/answer', {  answer:  "  no real value "  });
            const numerator1 = "( "+ -b + " + √" + (discriminant * -1) +"i ) ";
            const numerator2 = "( "+ -b + " - √" + (discriminant * -1) +"i ) ";
            const denominator = 2*a

            const root01 = numerator1 + " / "+ denominator;
            const root02 = numerator2 + " / "+ denominator;
            res.render(__dirname + '/answer', {  answer:  "The root of the equation is " + root01 +" and " + root02  });
        }

        
      
    }



})


app.post("/failure" , function(req,res){
    res.redirect("/");
  })

app.listen(process.env.PORT ||  port , function(){
    console.log("server is onilne on port 3000");
})

