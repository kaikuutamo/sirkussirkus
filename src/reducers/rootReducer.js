
import productsFile from '../products-data/products.json';


var temp = [];


const initState = {
    products: productsFile,
    shoppingCart: temp,
    information: {
        firstname: "Matti",
        lastname: "Meikäläinen",
        address: "Tie 70",
        zipcode: "11000",
        city: "Helsinki",
        phonenumber: "05068542",
        email: "sdfjksjd@fjskldjf.com"
    },
    text: "Voisko laittaa mukaan jotain ilmasta, vaikka yhet puujalat?"
}

const rootReducer = (state=initState, action) => {
    
    console.log(action)

    if (action.type === "add") {

        var temp = state.shoppingCart.slice();
        temp.push(action.product);

        return {
            ...state,
            shoppingCart: temp
        }
    }
    
    if (action.type === "update") {

        return {
            ...state,
            shoppingCart: action.updatedcart
        }

    }

    if (action.type === "updatetext") {
        return {
            ...state,
            text: action.thetext
        }
    }

    if (action.type === "updateinformation") {
        
        return {
            ...state,
            information: action.updatedinformation
        }
    }

    if (action.type === "remove") {

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