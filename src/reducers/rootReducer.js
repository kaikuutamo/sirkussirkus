
import productsFile from '../products-data/products.json';

var status;

function testLocal () {

    localStorage.setItem("test", "testing");

    if (localStorage.getItem("test") !== "testing") {
        status = "no"
        return null
    }

    localStorage.clear();

    

}

console.log(status, testLocal)

var temp = [];

var initState;

if (typeof localStorage.shopstate !== 'string') {

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

else {initState = JSON.parse(localStorage.shopstate)}



var localS;


const rootReducer = (state=initState, action) => {
    
    //console.log(action)

    if (action.type === "add") {

        var temp = state.shoppingCart.slice();
        temp.push(action.product);

        localS = {
            ...state,
            shoppingCart: temp
        }

        localS = JSON.stringify(localS);
        localStorage.clear();
        localStorage.setItem('shopstate', localS)

        return {
            ...state,
            shoppingCart: temp
        }
    }
    
    if (action.type === "update") {


        localS = {
            ...state,
            shoppingCart: action.updatedcart
        }

        localS = JSON.stringify(localS);
        localStorage.clear();
        localStorage.setItem('shopstate', localS)
    
        return {
            ...state,
            shoppingCart: action.updatedcart
        }

    }

    if (action.type === "updatetext") {

        localS = {
            ...state,
            text: action.thetext
        }

        localS = JSON.stringify(localS);
        localStorage.clear();
        localStorage.setItem('shopstate', localS)


        return {
            ...state,
            text: action.thetext
        }
    }

    if (action.type === "updateinformation") {
        
        localS = {
            ...state,
            information: action.updatedinformation
        }

        localS = JSON.stringify(localS);
        localStorage.clear();
        localStorage.setItem('shopstate', localS)

        return {
            ...state,
            information: action.updatedinformation
        }
    }

    if (action.type === "remove") {


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