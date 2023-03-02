

const initialState = [{
    id:1,
    toDo: 'carrear bobos',
    done:false
}]



const toDoReducer = (state = initialState, action={} ) =>{

    if(action.type==='[TODO] add new toDo'){
        return[...state, action.payload]
    }
        return state;
}

const newTodo = {
    id:2,
    toDo: 'perder partidas',
    done:false
}

let toDos = toDoReducer();

const addToDoAction = {
    type: '[TODO] add new toDo',
    payload: newTodo
}

toDos = toDoReducer(toDos,addToDoAction);

console.log(toDos)