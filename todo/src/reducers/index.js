import { ADD_TODO, TOGGLE_TODO } from '../actions' 

const initialState = {
    todos: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO: 
        return Object.assign({}, state, {
            todos: [...state.todos, action.payload]
        });
        
        case TOGGLE_TODO:
        return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
                if(index === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        })

        default: 
            return state;
    }
}