
import productsFile from '../products-data/products.json';


var temp = [];


const initState = {
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