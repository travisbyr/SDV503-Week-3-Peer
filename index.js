    console.log( +true);
    console.log( +false);
    console.log( +"");

    console.log(1+2, 3+4);
    console.log(5+6, 7+8);
    console.log(8+9, 10+11);

    console.log("Comma operator in a variable");
    let a =(1+2, 3+4);
    console.log(a);

    let x = 10;
    console.log(x);
    let y = 20;
    console.log(y);

    x = y;
    console.log (x);

    x+= y;
    console.log(x);

    x -= y;
    console.log(x);

    x *= y;
    console.log(x);

    x /= y;
    console.log(x);

    x %= y
    console.log(x)


    x == y;
    console.log (x);

    x===y;
    console.log(x);


    let c =10;
    let d =20;


    if (c==d) {
    console.log('same-numbers')
    }

    console.log(10 == 5); //equal too
    console.log(10!= 5) //not equal too
    console.log(10 < 5); //less than
    console.log(10>5); //greater than
    console.log(10 <= 5) //less than or equal too
    console.log(10 >= 5)//Greater than or equal too


    console.log(10 == "10");//evaluate two different data types and coverts them too the same value
    console.log(10 === "10");//Triple = is a strict equality. This means they need to be the same data type. This means both have to be a string etc

    console.log(10 == "5"); //equal to
    console.log(10 == "10");
    console.log(10 != "5"); //not equal to
    console.log(10 != "10");
    console.log(10 < "5"); //less than
    console.log(10 < "10");
    console.log(10 > "5"); //greater than
    console.log(10 > "10");
    console.log(10 <= "5"); //less than or equal to
    console.log(10 <= "10");
    console.log(10 >= "5"); //greater than or equal to
    console.log(10 >= "10");

//----------------------------------------

    console.log(true == 1); //equal to
    console.log(true == "1");
    console.log(true == 0);
    console.log(false == 1); //equal to
    console.log(false == 0);
    console.log(false == "0");

    console.log(" ");

    console.log(true != 1); //not equal to
    console.log(true != "1");
    console.log(true != 0);
    console.log(false != 1); //not equal to
    console.log(false != 0);
    console.log(false != "0");

//--------------------------------------------

    console.log("A" == "A");
    console.log("a" == "a");

    console.log(" ");
    console.log("z" > "A");

    console.log(" ");
    console.log("Raise" > "Race");
    console.log("Break" > "Brake");
    console.log("Lose" < "Loose");

//-----------------------------------------

    console.log("A" == "a");
    console.log("a" > "A");

    console.log(" ");
    console.log("book" > "Book");

//------------------------------------------

    console.log(1 == "1");
    console.log(1 == true);

    console.log(" ");
    console.log(0 == false);
    console.log("" == false);

    //----------------------------------

    console.log(1 == "1");
    console.log(1 === "1");
    console.log(" ");

    console.log(1 == true);
    console.log(1 === true);

    console.log(0 == false);
    console.log(0 === false);

    //-------------------------------------------

    console.log(1 == "1");
    console.log(1 === "1");
    console.log(" ");

    console.log(1 == true);
    console.log(1 === true);

    console.log(0 == false);
    console.log(0 === false);

    // -----------------------------------------------

    console.log(1 != "1");
    console.log(1 !== "1");
    console.log(" ");

    console.log(1 != true);
    console.log(1 !== true);

    console.log(0 != false);
    console.log(0 !== false);

    //---------------------------------------

    console.log(null == 0); //doesnt convert null
    console.log(null === 0);
    console.log(null > 0);
    console.log(null < 0);
    console.log(null >= 0);

    console.log(" ");

    console.log(undefined == null);
    console.log(undefined === null);
    
    console.log(" ");

    console.log(undefined == 0);
    console.log(undefined === 0);
    console.log(undefined > 0);
    console.log(undefined >= 0);

//-----------------------------------------------

    console.log(null + 1); //null is equal to zero, so 0 + 1 = 1
    console.log(undefined > 0); //undefined is not a number so it cant be compared
    console.log(undefined + 1); // undefined is converted to not a 
    
//------------------------------------------------
