import { throttle } from "lodash";

const formRef = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

formRef.addEventListener("input", throttle((onInput), 500));
formRef.addEventListener("submit", onSubmit);

populateForm();


function onInput (event){
  let formData = localStorage.getItem(STORAGE_KEY);
  if(!formData ){
  formData={};
  formData[event.target.name] = event.target.value;
}
  else{
  formData = JSON.parse(formData);  
  formData[event.target.name] = event.target.value;}
  localStorage.setItem(STORAGE_KEY,JSON.stringify(formData))

};
function onSubmit(event) {
    event.preventDefault(); 

    if ( !formRef.elements.email.value  || !formRef.elements.message.value  )
    {
          return alert ( "Please fill in the form fields" );
           
    }
     const valueData =JSON.parse(localStorage.getItem(STORAGE_KEY));
    
   console.log(valueData);

  localStorage.removeItem(STORAGE_KEY);  
   
    event.target.reset();
  }


function populateForm(){
 let formData = localStorage.getItem(STORAGE_KEY);
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(
          ([name, value]) => (formRef.elements[name].value = value),
        );
      }
}