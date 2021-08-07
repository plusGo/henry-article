const {writeFile} = require('fs');

const fileContent = `
ENABLE_PURGE =false
`;

writeFile('./.env', fileContent, (err) => {
  console.error(err);
});
