import { combineReducers } from 'redux'

const rootReduce = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar Fatura do Cartao',
            done: true
        }, {
            _id: 2,
            description: 'Reuniao com a equipe as 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta medica',
            done: false
        }]
    })
})

export default rootReduce