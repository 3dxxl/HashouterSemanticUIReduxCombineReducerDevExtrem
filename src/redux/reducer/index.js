
const initialState = {
    einfaerben:"green",
};

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "DASISTEINEACTION":

        return {
              einfaerben: 'blue',
            test:console.log("test Erfolgreich"),

        };

        default:
        return state
    }
}

