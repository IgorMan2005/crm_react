// format PhoneformatPhone
// https://snipp.ru/js/remove-symbols-js

const formatPhone = (phone) => {

  phone = '' + phone;
  phone = phone.replace(/[^0-9]/g,'');
  phone = '+' + phone;

  return phone;
}

export default formatPhone;