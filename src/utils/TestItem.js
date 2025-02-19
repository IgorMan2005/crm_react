class TestItem {
    constructor (name, phone, email, product){
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
    }
}

// https://randomus.ru/name
// https://www.calc.ru/generator-sluchaynykh-nomerov-telefona.html
// https://texttools.ru/random-email-generator
const testData = [
    new TestItem('Капустина Стефания', parseInt('+79269160466'), 'sewohod-ini63@inbox.ru', 'course-js'),
    new TestItem('Николаев Фёдор', parseInt('+79269160467'), 'jidesun_aha10@aol.com', 'course-wordpress'),
    new TestItem('Иванова Альбина', parseInt('+79269160468'), 'jocase-dexu13@yandex.ru', 'course-php'),
    new TestItem('Калинина Полина', parseInt('+79269160469'), 'nise-hosebe3@inbox.ru', 'course-vue'),
    new TestItem('Филиппова Елизавета', parseInt('+79269160470'), 'megufu_jezi71@yahoo.com', 'course-html'),
    new TestItem('Волков Степан', parseInt('+79269160471'), 'nuwo-jutaba33@inbox.ru', 'course-php'),
    new TestItem('Федотова Василиса', parseInt('+79269160472'), 'ral-ewazala93@bk.ru', 'course-js'),
    new TestItem('Попов Иван', parseInt('+79269160473'), 'popov@gmail.com', 'course-html'),
]

function getTestIndex(max) {
    return Math.floor(Math.random() * max)
}

export default function getTestData () {
    const index = getTestIndex(testData.length)
    return testData[index]
}
