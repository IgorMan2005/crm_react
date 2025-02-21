// getArrayData - возвращает name по его id из массива объектов типа   {id: "new", name: "Новый"}

function getArrayData(array, id) { 

    return array.find(array => array.id === id).name;

}
export default getArrayData;