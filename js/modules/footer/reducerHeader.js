const DEFAULT_STATE = {
    search: {
        searchTerm: ""
    },
    booksData: []
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default rootReducer;