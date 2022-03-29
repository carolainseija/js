/* const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counterReducer);

//console.log(store)
// Obtengo un objeto con 4 métodos y un método que desconozco su sintaxis:
// 1 - .dispatch: [Function: dispatch],
// 2 - .subscribe: [Function: subscribe],
// 3 - .getState: [Function: getState],
// 4 - .replaceReducer: [Function: replaceReducer],
// 5 - '@@observable' : [Function: observable]

//console.log(store.getState())
// En la primera ejecución obtengo { counter: 1 } ¿Por qué 1 y no 0?
// Además, la función reducer requiere que su parámetro state, el primer
// parámetro, tenga un defaultValue de state = {count: algo}, pues sino, 
// al ejecutarse por primera vez, no dispondrá de state.count

const counterSuscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

//counterSuscriber(); // ¿Por qué esto aún funciona? o, ¿por qué para ejecutar
// este código hacemos antes store.subscribe(counterSubscriber)
store.subscribe(counterSuscriber);
// ¿Por qué a su vez, la primera vez que se ejecuta el console.log obtengo 1 y
// no 0? Porque, a mi entender, hago la dispatchFn luego del console.log();
// RESPUESTA: porque en la línea de código 9, al inicializar const store, ejecuto
// por primera vez la función

store.dispatch({type: 'increment'});
//Al ejecutar la línea de código anterior, con el método dispatch
// Ejecuto la función counterReducer */


/* Segundo intento para no perder lo anterior */

/* const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
};

const store = redux.createStore(counterReducer);

//console.log(store)

//console.log(store.getState())

const counterSuscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSuscriber);

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
 */

/* Tercer intento */

const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
}

const store = redux.createStore(counterReducer);

const showState = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(showState);

store.dispatch({type: 'increment'})