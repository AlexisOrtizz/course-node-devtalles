// const { emailTemplate } = require('./js-foundation/01-template');

//const { getUserById } = require('./js-foundation/03-callbacks');

// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callbacks');
//require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promise');
const { buildLogger } = require('./plugins')

const id = 1;

/*getUserById( id, (error, user) => {
  if ( error ) {
    throw new Error( error );
  }

  console.log( user );
});*/


// getPokemonById( id )
//   .then( pokemon => console.log( pokemon ))
//   .catch( err => console.log( err ))
//   .finally( () => console.log('Finally') );


const logger = buildLogger();
logger.log('Hola mundo...');
logger.error('Ha ocurrido un error inesperado...');