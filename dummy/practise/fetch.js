const axios = require('axios');


// function main(){
//     fetch("https://www.postb.in/1773428751486-2838960215449",{
//         Method: "POST"
//     })
//     .then(async (resp)=>{
//         const json = await resp.text()
//         console.log(json);
//     })
// }

// async function main(){
//     const resp = await axios.get("https://my-app.nobodyhasitall.workers.dev/")
//     const data = resp.data;
//     console.log(data);
// }

async function main(){
    const resp = await axios("https://httpdump.app/dumps/1aacc22b-4987-4fa1-8d0f-9be35aae79f7",
    {
        method:"OPTIONS",
        headers:{
            Authorization : "Token123$%^"
        },
        data:{
            username:"SAURAV",
            password:"UGFG&%^GH"
        }
    })
    const data = resp.data;
    console.log(data);
}

main()