// countNew

const countNew = (students) => {
    const countNew = students.filter((student) => student.status == 'new').lenght;
    console.log('countNew:' , countNew);
    return countNew;
}

export default countNew;