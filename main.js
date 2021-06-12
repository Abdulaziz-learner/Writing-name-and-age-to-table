let array = [];


    function btn(){
        let ism = prompt('Ismingizni Kiriting'),
            yosh = Number(prompt('Yoshingizni kiriting'));
            array.push({name: ism,age: yosh});
            document.getElementById('tb').innerHTML = '';
            
        for(let i = 0; i < array.length; i++){
            document.getElementById('tb').innerHTML += '<tr><td>' + array[i].name + '</td><td>' + array[i].age + '</td></tr>';
        }    
    }