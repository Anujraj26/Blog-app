




console.log("ss")
function login(){
    var username = document.getElementById('loginUsername').value
    console.log(username)
    var password = document.getElementById('loginPassword').value
    console.log(password)
    var csrf = document.getElementById('csrf').value
    if(username =='' && password == ''){
        alert('You must enter both')
    }

    var data={

        'username' : username,
        'password' :password

    }

    fetch('/api/login/' , {
        method : 'POSt',
        headers:{
            'Content-Type' : 'application/json',
            'X-CSRFToken' : csrf,
        },
        
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        console.log(response)
        if(response.status == 200){
            window.location.href=('/')
          
        }
        else{
            alert(response.message)
        }
    })


}

function register(){
    var username = document.getElementById('loginUsername').value
    console.log(username)
    var password = document.getElementById('loginPassword').value
    console.log(password)
    var csrf = document.getElementById('csrf').value
    if(username =='' && password == ''){
        alert('You must enter both')
    }

    var data={

        'username' : username,
        'password' :password

    }

    fetch('/api/register/' , {
        method : 'POSt',
        headers:{
            'Content-Type' : 'application/json',
            'X-CSRFToken' : csrf,
        },
        
        body : JSON.stringify(data)
    }).then(result => result.json())
    .then(response => {
        console.log(response)
        if(response.status == 200){
          
        }
        else{
            alert(response.message)
        }
    })


}