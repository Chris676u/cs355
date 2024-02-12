

const params = new URLSearchParams(location.search);
results = '';
result+= 'Name is '+params.get('Name');
console.log( params.get('name') );
console.log( params.get('age') );
console.log( params.get('gender') );