const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/login', (req: any, res: any, next: any) => { 
  const users = readUsers();  

  const user = users.filter(
    (u: any) => u.email === req.body.email && u.password === req.body.password
  )[0];

  if (user) {
    res.send({ ...formatUser(user), token: 'user-token' });
  } else {
    res.status(401).send('Incorrect email or password');
  }
});

server.post('/register', (req: any, res: any) => {
    
  const users = readUsers() || [];
  const user = users.filter((u: any) => u.email === req.body.email)[0];  
    
  if (user === undefined || user === null) {
    res.send({
      ...req.body
    });
    
    db.users.push(req.body);
    writeUsers(db.users);
  } else {
    res.status(401).send('User already exists');
  }
});

server.use('/users', (req: any, res: any, next: any) => {
    next();
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function formatUser(user: any) {
  delete user.password;
  delete user.confirmPassword;
  return user;
}

function isAuthorized(req: any) {
  return req.headers.authorization === 'admin-token' ? true : true;
}

function readUsers() {
  const dbRaw = fs.readFileSync('./db.json');  
  const data = JSON.parse(dbRaw);
  console.log('data =>>',data);
  const users = data.users;
  return users;
}

function writeUsers(users: any){
  fs.writeFileSync('./db.json', JSON.stringify({ "users": users}));
}