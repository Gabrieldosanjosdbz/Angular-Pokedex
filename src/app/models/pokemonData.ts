export type PokemonData = {
    name:string
    id:number
    sprites: {
        front_default: string
    }
    types: {
        slot: number
        type: {
            name: 'string'
            url: string
        }
    }[]         //tipei mais o type para que ele pegue as informações de nome e o slot tbm
}

//Este é um Objeto "shapado", os dados da API irão ser acoplados nesses atributos deste objeto