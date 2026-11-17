// function createParagraph() {
//   let para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll('button');

// for(const button of buttons) {
//     button.addEventListener("click", createParagraph);
// }



let MyArray = [1,2,3,4,5,6,7,8,9,10];
let target = 7;


binarySearch(MyArray, target);

function binarySearch(array, target) {

  let start = 0;
  let end = array.length -1 ;
  
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    if(target === array[mid]) {
      console.log(`Target was found: index ${mid}`);
      return mid;
    }

    if(array[mid] < target){
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(`Target was not found in this array`);
  return -1;
}

