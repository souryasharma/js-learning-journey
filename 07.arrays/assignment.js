
// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”,“Uber”, “Google” , “IBM” ,“Netflix”

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

companies.shift(); 

companies.splice(1, 1, "ola"); 

companies.push("amazon");

console.log(companies);