// format Date
const formatDate = (date) => {

  const thisDate = new Date(date);

  let dd = thisDate.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = thisDate.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = thisDate.getFullYear();

  return dd + '.' + mm + '.' + yy;
}

export default formatDate;