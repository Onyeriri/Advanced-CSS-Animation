let user = {
    name: 'John'
};

let admin = user;

user['name'] = null;

console.log(admin);