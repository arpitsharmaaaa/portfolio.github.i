/* ======== typing animation ======= */

var typed = new Typed(".typing",{
    strings:["","seo","web developer","node developer","web digigner","good learner","backend developer","good team maker"],
    typespeed: 2,
    backspeed:0,
    loop:true
})

/* ========= aside ======= */
const nav = document.querySelector(".nav"),
       navlist = nav.querySelectorAll("li"),
       totalNavList = navlist.length;
       for (let i=0; i<totalNavList; i++)
       {
            const a = navlist[i].querySelector("a");
            a.addEventListener("click", function()
            {
                for(let j=0; j<totalNavList; j++)
                {
                    navlist[j].querySelector("a").classList.remove("active");
                } 
                this.classList.add("active")
                showSection(this)
            })
    }      


    // form validation

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');
    var submitError = document.getElementById('submit-error');

    function validatename() {
        var name = document.getElementById('contact-name').value;

        
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>'
            return false;
        }
        
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateemail(){
        var email = document.getElementById('contact-email').value;


        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            emailError.innerHTML= '<i class="fa-solid fa-circle-xmark"></i>'
            return false;
        }
        

        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validatemessage(){
        var message = document.getElementById('contact-message').value;
        var required = 300;
        var left = required - message.length;

        if(left>0){
            messageError.innerHTML = left + ' more characters required';
            return false;
        }

        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;
    }

    function validateForm(){
        if(!validatename() || !validateemail || !validatemessage){
            submitError.style.display = 'block';
            submitError.innerHTML = 'PLEASE FIX ERROR TO SUBMIT'
            setTimeout(function(){  submitError.style.display = 'none';}, 3000);
            return false;
        }
    }