const randomData = {
    names: ['Szymon', 'Zbigniew', 'Tomek', 'Agnieszka', 'Damian', 'Marta', 'Bora'],
    future: ['today', 'tommorow', 'in close future'],
    fortune: ['you will be lucky', 'you will have bad luck', 'you will get another fortune cookie', 'you will go for a walk into forrest']
}
// this objesct keeps data for our code

function getRandomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const string = arr[randomIndex];
    return string;
}
//console.log(getRandomString(randomData.names))
const randomName = getRandomString(randomData.names);

const randomFuture = getRandomString(randomData.future);

const randomFortune = getRandomString(randomData.fortune);

const fortuneCookieParty = `${randomName} ${randomFuture} ${randomFortune}.`
console.log(fortuneCookieParty)