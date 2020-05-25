enum Gender{
    Male = "男",
    Female = "女"
}

let gender:Gender;

gender = Gender.Male;
gender = Gender.Female
// console.log(gender);

function printGenders(){
    const vals = Object.values(Gender);
    vals.forEach(v => console.log(v));
}
printGenders();
// function searchUsers(g:Gender) {

// }