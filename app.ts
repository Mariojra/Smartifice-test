

const myFunction = (message, duration) => {
    return new Promise((resolve) => {
        
        setTimeout(() => resolve(message), duration);
        
    })
};


let execute = async() =>{
    
    try {
        const hello = await myFunction("Hello", 3000);
        const world = await myFunction("World", 2000);
        return `${hello} ${world}`;
    } catch (error) {
        throw new Error('There was an error in the file execution.');
    }

}

execute()
    .then(msj=>console.log(msj))
    .catch(err=>console.log(err))