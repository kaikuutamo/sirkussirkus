
import productsFile from '../products-data/products.json';

var status;

function testLocal () {

    try {

        localStorage.setItem("test", "testing");

        if (localStorage.getItem("test") !== "testing") {
            status = "no"
            return null
        }
    
        localStorage.removeItem("test");

    }

    catch(e) {
        status = "no";
        return null;
      }

    status = "yes;"

}

testLocal();


var temp = [];

var initState;

if (status === "no") {

    initState = {
        products: productsFile,
        shoppingCart: temp,
        information: {
            firstname: "",
            lastname: "",
            address: "",
            zipcode: "",
            city: "",
            phonenumber: "",
            email: ""
        },
        text: ""
    }

}

else if (typeof localStorage.getItem("sirkussirkus_state") !== "string") {

    initState = {
        products: productsFile,
        shoppingCart: temp,
        information: {
            firstname: "",
            lastname: "",
            address: "",
            zipcode: "",
            city: "",
            phonenumber: "",
            email: ""
        },
        text: ""
    }

}

else {initState = JSON.parse(localStorage.sirkussirkus_state)}



var localS;


const rootReducer = (state=initState, action) => {
    
    //console.log(action)

    if (action.type === "add") {

        var temp = state.shoppingCart.slice();
        temp.push(action.product);

        if (status !== "no") {

            localS = {
                ...state,
                shoppingCart: temp
            }
    
            localS = JSON.stringify(localS);
            localStorage.clear();
            localStorage.setItem('sirkussirkus_state', localS)

        }


        return {
            ...state,
            shoppingCart: temp
        }
    }
    
    if (action.type === "update") {


        if (status !== "no") {

            localS = {
                ...state,
                shoppingCart: action.updatedcart
            }
    
            localS = JSON.stringify(localS);
            localStorage.clear();
            localStorage.setItem('sirkussirkus_state', localS)

        }


    
        return {
            ...state,
            shoppingCart: action.updatedcart
        }

    }

    if (action.type === "updatetext") {

        if (status !== "no") {

            localS = {
                ...state,
                text: action.thetext
            }
    
            localS = JSON.stringify(localS);
            localStorage.clear();
            localStorage.setItem('sirkussirkus_state', localS)

        }


        return {
            ...state,
            text: action.thetext
        }
    }

    if (action.type === "updateinformation") {
        
        if (status !==  "no") {

        
            localS = {
                ...state,
                information: action.updatedinformation
            }
    
            localS = JSON.stringify(localS);
            localStorage.clear();
            localStorage.setItem('sirkussirkus_state', localS)

        }


        return {
            ...state,
            information: action.updatedinformation
        }
    }

    if (action.type === "remove") {

        if (status !== "no") {

            localS = {
                ...state,
                shoppingCart: [],
                information: {
                    firstname: "",
                    lastname: "",
                    address: "",
                    zipcode: "",
                    city: "",
                    phonenumber: "",
                    email: ""
                },
                text: ""
            }
    
            localS = JSON.stringify(localS);
            localStorage.clear();
            localStorage.setItem('shopstate', localS)

        }




        return {
            ...state,
            shoppingCart: [],
            information: {
                firstname: "",
                lastname: "",
                address: "",
                zipcode: "",
                city: "",
                phonenumber: "",
                email: ""
            },
            text: ""
        }


           
    }

    
    
    return state;

}



export default rootReducer;