// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.
{
    console.log(naam);
    console.log(age);
    console.log(add);


    var naam = "Janardhan"
    let age  = 23;
    const add = "Surat Gujara"

    console.log(naam);
    console.log(age);
    console.log(add);

}