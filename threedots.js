const ages=[20,23,22,19,21];
const ages2=[33,43,22,19,34];
const ages3=[32,33,12,43,34];
const allAges=ages.concat(ages2).concat(ages3);
const allAges2=[...ages,...ages2,5,...ages3];
console.log(allAges);
console.log(allAges2);
const business=650;
const minister=450;
const sochib=250;

const takaPoisa=[650,450,250];

//const maximum=Math.max(business,minister,sochib);
const maximum=Math.max(...takaPoisa);
console.log(maximum);