var bool = true;
var name='jack';
var num=1;
// if statement
// multiline statement
// if(!num){
//   //dosomething
//   console.log('if condition is true');

//single line statement
// if( !num ) console.log('the condition is true');

// if/else statement
// if(bool){
//   //do something if true
//   console.log('condition is truthy');
// } else{'condition is falsey'};

// if / else if statement

if (num==='1') {
  //do something if first condition is truthy
  console.log('truthy');
} else if(num=='1') {
  // do someing if the condiroin is a different value
  console.log('num === 1');
}else{
  // do something is no condition is met
  console.log('num is not equal to any of the conditions');
}

// logical operators
// or || - only one statement to be true for the code block to run
if (num==='1'|| bool=== false) {
  //do something if first condition is truthy
  console.log('condition 1');
} else if(num===1 && bool===false) {
  // do someing if the condiroin is a different value
  console.log('condition 2');
}else{
  // do something is no condition is met
  console.log('num is not equal to any of the conditions');
}
// switch statement
switch(name){
  case'Tim':
  console.log('name is Tim');
  break;
  
  case'neil':
  console.log('name is neil');
  break;

  case'carl':
  console.log('name is carl');
  break;
  default:
  console.log('no match');
}
