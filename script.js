"use strict";

const user = {};

user['name'] = 'John';
user['username'] = 'Smith';
user['name'] = 'Pete';

delete user['name'];

console.log(user);
