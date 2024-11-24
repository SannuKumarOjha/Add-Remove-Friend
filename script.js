let chengeElement = document.querySelector('#chengeClick');
let btn = document.querySelector('#addFriend');
let check = 0 ;
btn.innerHTML = "Add Friend" ; // By Defults

btn.addEventListener('click',()=>{
    if(check==0){
        chengeElement.innerHTML="Friends" ;
        chengeElement.style.color = 'green' ;
        btn.innerHTML="Remove" ;
        btn.style.backgroundColor = 'rgb(199, 197, 197)';
        btn.style.color = '#000';
        check = 1 ;
    }else{
        chengeElement.innerHTML="Stranger" ;
        chengeElement.style.color = 'red' ;
        btn.innerHTML="Add Friend" ;
        btn.style.backgroundColor = 'blue';
        btn.style.color = '#fff';
        check=0 ;
    }
})


