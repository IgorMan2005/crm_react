// get count new in DB (jsonServer)

const getCountNew = (students) => {
    const statusNew = students.filter(function(s) { return s.status === 'new' }).length;
    return statusNew;
}

export default getCountNew;