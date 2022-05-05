import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  submitBtn: document.querySelector('button'),
};

let DELAY = null;
let STEP = null;
let AMOUNT = null;


function onSubmit(e) {
  e.preventDefault();

  DELAY = refs.form.elements.delay.value;
  STEP = refs.form.elements.step.value;
  AMOUNT = refs.form.elements.amount.value;
  console.log(Number(AMOUNT))
  setTimeout(() => {
    createPromise().then(onSucces).catch(onError)
  }, DELAY);
  ;
}

function createPromise(position, delay) {

  delay = Number(DELAY) - Number(STEP);
  position = 0;
  
  let count = 0;


  return new Promise((resolve, reject) => {

    const intervalId = setInterval(() => {
 
      position += 1;
      delay += Number(STEP);

      const shouldResolve = Math.random() > 0.3;

      if (position > Number(AMOUNT)) {
      console.log(count === Number(AMOUNT));
      return clearInterval(intervalId);
      }
      
      if (shouldResolve) {
        // Fulfill
        resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        // Reject
        reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      };

    }, STEP);

    
  });
};


refs.form.addEventListener('submit', onSubmit);

function onSucces(result) {
  result;
};

function onError(error) {
  error;
};
