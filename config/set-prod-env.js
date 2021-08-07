const {writeFile} = require('fs');

const fileContent = `
ENABLE_PURGE =true
`;

writeFile('./.env', fileContent, (err) => {
  console.error(err);
});
