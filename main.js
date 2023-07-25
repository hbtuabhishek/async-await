console.log('ticket 1');
console.log("ticket 2");

const promiseWifeBringingIicks = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000)
});

const getPopcorn = promiseWifeBringingIicks.then((t)=>{
    console.log('wife : i have the ticket');
    console.log('husbsnd : we should go in');
    console.log('wife : no i am hungry');
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    });
});

const getButter = getPopcorn.then((t)=>{
    console.log('husbsnd : we should go in');
    console.log('wife : I need butter on my popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    });

});
const getColdDrinks=getButter.then((t)=>{
    console.log('husbsnd : we should go in');
    console.log('wife : some colddrinks');
    return new Promise((resolve,reject)=>{
        resolve(`${t} colddrink`)
    });
})
getColdDrinks.then((t)=>console.log(t));