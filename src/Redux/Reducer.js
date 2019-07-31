const InitialState = {
    pageTitle: null
}

const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'PAGE_TITLE': {
            return { ...state, pageTitle: action.Title };
        }
        default: {
            return state;
        }
    }
}

export default reducer;