//info about current user
const os=require('os');
const user=os.userInfo();
console.log(user);

//uptime --> time during which a piece of equipment (such as a computer) is functioning or able to function.
// method returns the system uptime
console.log(`the system update is ${os.uptime} `);

const curr={
    name: os.type(),
    release: os.release(),
    tot: os.totalmem(),
    free: os.freemem()
    

}
console.log(curr);