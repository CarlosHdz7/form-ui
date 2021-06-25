const strongPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/);
const isLetterOrNumber = new RegExp(/^[a-zA-Z0-9]{1}$/);
const isValidName = new RegExp(/^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/);
const onlyNumbers = new RegExp(/^[0-9]*$/);
const isPhoneNumber = new RegExp(/^[0-9]{4}-[0-9]{4}$/);
const isValidEmail = new RegExp(/[\w]+@{1}[\w]+\.[a-z]{2,3}/);
const isvalidUrl = new RegExp(/^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))|([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))$/);

export { 
  strongPassword, 
  isLetterOrNumber,
  isValidName,
  onlyNumbers,
  isPhoneNumber,
  isValidEmail,
  isvalidUrl
}