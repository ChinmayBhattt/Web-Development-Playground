// bed, this is a call back hell
fs.writeFile("chinmay1.txt","hello world", () =>{ // used this
    console.log(fs)
    fs.readFile("chinmay.txt", (error, data) =>{
        console.log(error, data.toString)
        fs.writeFile("chinmay1.txt","hello world", () =>{ // used this
            console.log(fs)
            fs.readFile("chinmay.txt", (error, data) =>{
                console.log(error, data.toString)
                fs.writeFile("chinmay1.txt","hello world", () =>{ // used this
                    console.log(fs)
                    fs.readFile("chinmay.txt", (error, data) =>{
                        console.log(error, data.toString)
                        fs.writeFile("chinmay1.txt","hello world", () =>{ // used this
                            console.log(fs)
                            fs.readFile("chinmay.txt", (error, data) =>{
                                console.log(error, data.toString)
                            })
                        })
                        
                    })
                })
                
            })
        })
        
    })
})
