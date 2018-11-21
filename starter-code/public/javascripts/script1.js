console.log("hello")




$('#users').click(function(){
    axios.get('/api/users')
    .then((response)=>{
        console.log(response.data)
        response.data.forEach((something)=>{
            $('#list').append(`<div> ${something.username} </div>`)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})


