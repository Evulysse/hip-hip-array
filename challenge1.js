// // ---------------------challenge1-------------------------------------------------------

const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

for(let i=0; i<students.length; i++) {
    const value = students [i]
    console.log('i', i, 'value', value);

}
//   // ---------------------------Challenge2------------------------------------
  
  console.log ('challenge2');

const grades =[100, 80, 110, 75, 83, 64];

for(let i =grades.length-1; i>=0; i=i-1) {
    const value = grades[i];
    console.log('i', i, 'value', value);

}
// // ----------------challenge3--------------------------------
console.log('challenge3')
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

for (let i = 0; i <= positiveNumbers.length - 1; i++) {
  if (positiveNumbers[i]% 2===0){
  console.log(positiveNumbers[i]);
  }
}

// // -------challenge4------------------------------------------
console.log('challenge4')

const mixedSignNumbers =[3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i <= mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2===0) {
    console.log( mixedSignNumbers[i]);
  }
}

// // ===========challenge5=====================
console.log('challenge5')

const symmetricalCapitals = ['I','M','O', 'T', 'U', 'X'];

for (let i = 0; i < symmetricalCapitals.length; i++) {
  console.log(symmetricalCapitals[i]);
}

// // ===========challenge6========================
console.log('challenge6')

const fibonacciNumbers =[12,1,1,2,3,5,8,13,11, 12]

for (const number of fibonacciNumbers) {
  console.log(number);
}
//  --------------challenge7----------------------------------
console.log('challenge7')

const array = [12,112,8,4,5]
for (let i = 0;i< array.length;i++) {
  const value = array[i];
  console.log(value)
}

// // ============challenge8========================================
console.log('challenge8')

const challenge8 = []

challenge8.push(112);
challenge8.push(11);
challenge8.push(8);
challenge8.unshift(6);
challenge8.unshift(11);

for (let i = 0;i< challenge8.length;i++) {
  const value = challenge8[i];
  console.log(value)
}
// ====================challlenge9=========================================
console.log('challenge9')

for(let i = 3; i <= 11; i++) {
   console.log(students[i]);
 }

// =============challenge10==============================================
console.log('challenge10')

const studentsCopy = []

for (let i = 3; i <= 11; i++) {
  studentsCopy.push(students[i])
}

for (let j of studentsCopy) {
  console.log(j);

}
// ============challenge11========================================
console.log('challenge11')

const studentsSlice = students.slice(3, 11);
console.log(studentsSlice);
console.log(students);

// ------------challenge12----------------------------------------
console.log('challenge12')

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

const splicedValues = dinosaurs.splice(4, 3);

console.log('spliced version');
for (const value of splicedValues) { 
    console.log(value);
} 

console.log('original version');
for (const value of dinosaurs) {
    console.log(value);
}

// --------------challenge13------------------------------------------------------
console.log('challenge13')

const dinoString = dinosaurs.join('*');
console.log(dinoString);

//=================challenge14=============================== 
console.log('challenge14')

dinosaurs.reverse();
console.log(dinosaurs);
// challenge15---------------------------------
console.log('challenge15')

const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange','green', 'purple'];

const third = primaries.concat(secondaries);

for (let i = 0; i < third.length; i++) {
  const value = third[i];
  console.log(value);
}
console.log(primaries);
console.log(secondaries);
