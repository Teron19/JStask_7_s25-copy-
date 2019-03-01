'use strict'
const setLogAndPass = {
    login: 'free@icloud.com',
    password: 'freesubmit'
};


const singIn = document.querySelector('#singIn');



function CreateModuleFrom(setLogAndPass) {

    const myAlert = document.querySelector('#alert');
    const inputEmail = document.querySelector('#inputEmail');
    const inputPassword = document.querySelector('#inputPassword');

    const emailAddress = document.querySelector('#emailAddress');
    const passwordField = document.querySelector('#passwordField');

    //записал данние в Local Storage
    localStorage.setItem('login', setLogAndPass.login);
    localStorage.setItem('password', setLogAndPass.password);

    this.cheackData = function () {
        let email = inputEmail.value; // присваимаем в переменную данние введеніе пользователем
        let pass = inputPassword.value; // присваимаем в переменную данние введеніе пользователем
        
        //to-do валидировать поля 
        let validatorStatus = this.validate(email, pass);

        if (!validatorStatus.status) {
            this.showValidatorError(validatorStatus.msg);
        } else {
            this.singIn(email, pass); //передаю введенные данные пользователем для проверки верны ли ети данные
        }
    }

    this.validate = (login, pass) => {
        let emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        login = login.trim();
        pass = pass.trim();
        if (!login && !pass) return {
            status: false,
            msg: 'polya pustye'
        };
    
        if (!emailRegEx.test(login)) return {
            status: false,
            msg: 'format email'
        }

        if (pass < 8)  { //проверка на длинну пароля
            if (pass.length == 0) return {
                status: false,
                msg:'password error'
            }
          }
        
        if (pass < 8 && pass === setLoadPass) return {
            status: false,
            msg: 'Password must have more than 8 characters',
            log: console.log('foo')
        }
      
        // ... dopisat` proverki
        // proverit` dlinu parolia ne men`she 8 simvolov

        return {
            status: true
        } 
    };
    
    this.showValidatorError = (err) => {
        myAlert.innerHTML = `<b>${err}</b>`;
        myAlert.style.visibility = 'visible';
        setTimeout(() => {
            myAlert.innerHTML = '';
            myAlert.style.visibility = 'hidden';
        }, 2*1000);
    }

    this.singIn = (email, pass) => {
        // dopisat` funkciyu singIn
        // необходимо сверить значение введенных пользователем данных с данными сохраненными в localStorage.


        if(email === setLogAndPass.login && pass === setLoadAndPass.password) {
            console.log('foo');
            return true;
        } else {
            return false;
        }
        
        console.info('singIn');

    }
}

let myconstructor = new CreateModuleFrom(setLogAndPass);



/*function logf() {
    return console.log('fee');
}*/

function initStartListeners() {
    singIn.addEventListener('click', event => {
        // event.preventDefault();
        myconstructor.cheackData();
        //logf();
    });
}

initStartListeners();