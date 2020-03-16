# やったこと

```sh
npm install 
mkdir nodetest
cd nodetest
npm init
# 適当に答える
npm install express mysql2 sequelize pug  node-sass-middleware
npm install -g sequelize-cli nodemon
sequelize init
# railsと違ってロードが早い。落ちたかと思った。
sequelize db:create
sequelize model:create --underscored --name user --attributes "name:string,login_id:string,password_crypt:string"
```
