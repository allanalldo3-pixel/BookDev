const fs = require('fs');
const filePath = 'postman/collections/DevBooks API/2. Criar um Livro.request.yaml';
const content = [
  "$kind: http-request",
  'description: ""',
  "url: 'http://localhost:3333/books'",
  "method: POST",
  "body:",
  "  type: json",
  "  content: |-",
  "    {",
  '        "title": "Harry Potter e a Pedra Filosofal",',
  '        "release_year": 1997,',
  '        "author_id": "ee93d2ed-7510-4c45-8c07-3e985e1552df"',
  "      }",
  "scripts:",
  "  - type: afterResponse",
  "    language: text/javascript",
  "    code: |-",
  "      if (pm.response.code === 201) {",
  "        const book = pm.response.json();",
  "        pm.collectionVariables.set('bookId', book.id);",
  "        console.log('bookId captured:', book.id);",
  "      }",
  "order: 1432592503379200",
  ""
].join('\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('File written successfully');
