const { http } = require("../plugins");


const getPokemonById = async ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    /*return fetch(url)
        .then( (resp) => resp.json())
        .then( (pokemon) => pokemon.name);*/
    const resp = await http.get( url );
    // const pokemon = await resp.json();
    return resp.name;
};

module.exports = getPokemonById;