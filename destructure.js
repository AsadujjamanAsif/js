const person={name: 'Asif',age:23, job:'facebook',gfName:'mim',adders:'rajshahi',phone:'01315141301',friends:['asif','anin','ashdf']};
// const gfName=person.gfName;
// const phone=person.phone;
//const {phone,gfName}=person;
//const gfName=person.gfName;

//console.log(gfName);
//console.log(phone);

const complexObject={
    name: 'abc',
    info:{
        adders:'rajshahi';
        leader:'Tiger'
    }
}
const {leader}=complexObject.info;
const friends=['asif','arman','amir','salman'];
const [chotoFriend,...olderF]=friends;
console.log(olderF);
