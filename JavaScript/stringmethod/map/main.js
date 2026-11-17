// .map = accepts a callback applies that function
//        to each element of an array, then return a new array

const date = ["2024-1-10", "2023-1-12", "2004-4-23"];
const formatedDate = date.map(formatDate);

console.log(formatedDate);

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}