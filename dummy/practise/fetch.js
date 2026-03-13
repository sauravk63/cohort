function main(){
    fetch("https://my-app.nobodyhasitall.workers.dev/")
    .then(async (resp)=>{
        const json = await resp.json()
        console.log(json);
    })
}

main()