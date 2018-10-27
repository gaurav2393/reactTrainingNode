const DEFAULT_STATE = {
    noTerm: {
        noIdea: ""
    },
    gamesData: []
};

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

export default rootReducer;