import User from "./User.js";
import renderUser from "./User";

("user strict");

const contener = document.querySelector("#results");

async function getUser() {
    let res;
    try{
        res = await fetch(
            "https://randomuser.me/api/?results=20"
       );
        //console.log(Promise.resolve(res));
    } catch(e){
        console.error(e.message);
    }
    const data = await res.json();
    return data;
}

async function getCleanData() {
    const data = await getUser();
    data["results"].forEach((user) => {
        new User(user).display(contener);
    });
}
getCleanData();

export default data;