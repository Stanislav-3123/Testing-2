for(let i = 10; i < 52; i = i + 2) {
    console.log(i);
}


const myInfo = {
    firstname : 'Stanislav',
    surname : 'Pshedzial',
    age : 29,
    pet : true
};
console.log(myInfo);

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]
console.log(array);
let result = array[3] + ' ' 
    + array[7] + ' ' 
    + array[0] + ' ' 
    + array[8] + ' ' 
    + array[11] + ' ' 
    + array[5] + ' ' 
    + array[9] + ' ' 
    + array[6] + ' ' 
    + array[4] + ' ' 
    + array[1] + ' ' 
    + array[12] + ' ' 
    + array[2] + ' ' 
    + array[10];
    console.log(result);



const fullName = (firstName, lastName) => {
    
        console.log(firstName + ' ' + lastName)
}

fullName('Stanislav', 'Pshedzial');


let i = 21;
while (i <= 67) {
    console.log(i);
    i = i + 2;
}