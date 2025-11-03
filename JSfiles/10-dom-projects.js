/*String(25)
        console.log('25'-5); //20
        console.log('25'+5); //255 Not recommended to use*/ 

        /*window.document
        window.console.log();
        window.alert();*/

        function handleCostKeyDown(){
            //console.log(event.key);
            if(event.key === 'Enter'){
            calculateTotal();
        }
        }
        function calculateTotal(){
            /*const inputElement = document.querySelector('.js-cost-input');
            let cost = Number(inputElement.value);*/
            let cost = Number(document.querySelector('.js-cost-input').value);
            if(cost < 40) {
                //cost += 10;
                cost = cost +10; 
            }
            document.querySelector('.js-total-cost').innerHTML = `Total cost: $${cost}`;
        }

        function fun1(){
            const buttonElement = document.querySelector('.js-subcribe-button');
            if(buttonElement.innerText === 'Subscribe'){
                buttonElement.innerHTML = 'Subscribed';
                buttonElement.classList.add('is-subscribed'); //add new class. In result will be 2 classes on button
            } else {buttonElement.innerText = 'Subscribe';
                buttonElement.classList.remove('is-subscribed');
            }
        }