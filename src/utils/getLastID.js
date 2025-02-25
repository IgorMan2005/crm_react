// get Last ID in DB (jsonServer)

const getLastID = (students) => {
    const id = students.length > 0 ? students[students.length - 1]['id'] + 1 : 1;
    return id;
}

export default getLastID;