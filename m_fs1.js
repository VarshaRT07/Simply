//async pattern
const {readFile,writeFile}= require('fs')
console.log('start')
readFile('./content/subfolder/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    const first=res
    readFile('./content/subfolder/third.txt','utf-8',(err,res)=>{
        if(err){
            console.log(err)
            return
        }
        const third=res
        writeFile( 
            './content/subfolder/second.txt',
            `here is the result :${first},${third}`,
            (err,res) =>{
                if(err){
                    console.log(err)
                    return
                }
                // console.log(res);
                console.log('done with this')
            }
         
        )



        
    })

})
console.log('starting nxt task')

//if we dont give encoding it gives buffer values