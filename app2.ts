

const my3SecondsFunction = () => {
    return new Promise((resolve)=>{
        setTimeout(() => resolve("This process will take 3 seconds"), 3000);
    })
}

const my4SecondsFunction = () => {
    return new Promise((resolve)=>{
        setTimeout(() => resolve("This process will take 6 seconds"), 6000);
    })
}

Promise.all([my3SecondsFunction(),my4SecondsFunction()])
    .then(res=>console.log(res))
