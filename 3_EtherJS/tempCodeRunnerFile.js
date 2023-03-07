require('dotenv').config();
const ethers = require("ethers");


// Exercise 1. Connect to Mainnet (a.k.a welcome async!).
/////////////////////////////////////////////////////////

// Whenever you interact with a blockchain you are in the "async" domain. 

// In JavaScript, you generally use "promises" to handle asynchronous   
// code execution. There are two ways of working with promises:
//
// 1. .then() notation (standard Promises)
// 2. async/await pattern (newer notation)
//
// Important! You can use promises anywhere in your code, but you can use 
// "await" only inside an "async" function. This makes things a bit more
// complicated, but not too much.
// 
// If this is new to you, you can read more about these here:
// https://javascript.info/async

// You can also check the 2_JS_Async folder for exercises on asynchronous 
// code in JavaScript.

// a. Create a JSON RPC provider and connect to the Ethereum Mainnet.  

// Hint: check EthersJS docs for the method `JsonRpcProvider` and what 
// parameters it needs (nested hint: you need something from the .env file).


// Your code here!

const providerKey = process.env.INFURA_KEY;

const mainnetInfuraUrl = `${process.env.INFURA_MAINNET}${providerKey}`;
console.log(mainnetInfuraUrl);
const mainnetProvider = new ethers.JsonRpcProvider(mainnetInfuraUrl);

// b. Verify that the network's name is "mainnet" and the chain id that theis 1.

// Hint: `getNetwork()`;

// Hint2: the value of chain id returned by Ethers JS is of type "BigInt". 
// As the name suggests, that is a very a data type capable of holding very
// large (integer) numbers. Remember to cast it to Number for a nicer display.
// https://javascript.info/bigint 

// b1. Use the async/await pattern to do the job.


// This is an asynchronous anonymous self-executing function. It is a ugly
// construct, but it allows you to use await inside its body.
(async () => {
let net = await mainnetProvider.getNetwork();
console.log('Async/Await!');
console.log('Provider\'s network name: ', net.name);
   console.log('Provider\'s network chain id: ', Number(net.chainId));
 })();


// However, the async function could also be named, and the result is:
const network = async () => {
    let net = await mainnetProvider.getNetwork();
    console.log('Async/Await!');
    console.log('Provider\'s network name: ', net.name);
    console.log('Provider\'s network chain id: ', Number(net.chainId));
    
};
