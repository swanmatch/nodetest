# node Expressのお勉強

## やったこと

```sh
npm install
mkdir nodetest
cd nodetest
npm init
# 適当に答える
npm install express mysql2 sequelize pug node-sass-middleware sequelize-paginate express-validator
npm install -g sequelize-cli nodemon
sequelize init
sequelize db:create
sequelize model:create --underscored --name user --attributes "name:string,login_id:string,password_crypt:string"
```

## 起動

```sh
nodemon app.js
```

## 感じたこと

* ソースが透明
  * module.exportで呼び元(app.js)にすべて持っていかれる
  * 暗黙の規約が少ない(Rails比)
  * 逆に書くこと、決めることが多い(良し悪し)
  * RailsよりむしろSinatraに近い
* Model.sql().then()の記述にハマった
  * ~~ネストが深くなりそう？~~
  * await
    * よくわからん
* sequelizeはRails(ActiveRecord)ライクでとてもよい
  * ORマッパーとしてはActiveRecordのが強そう(良し悪し)
* pug楽しい
  * 今度railsやるときはHAML使う
    * AppTemplate書き換えなきゃ…
* routeは1ファイルにして見通しよくしようと無理くり1ファイルにまとめたけど多分違う
* ControllerやModelの共通処理を外出ししたい(requireを毎回書きたくない)
  * includeか継承
* FormBuilderないのかなー
* セキュリティ関連
  * CSRF対策
  * 排他制御
* express-validatorのcheckSchemaがいい感じだが…
  * 必須チェックは`checkSchema({id: isEmpty: {negative: true}})`となる。((参考)[https://github.com/express-validator/express-validator/issues/476#issuecomment-541264068])
    * 結局どっち!?!?
* 多言語化
* ちょっと違うvalidateをいい感じにしたい
* deleteリンクで貼りたい

## 今度やる

```sh
npm install -g express-generator
express --view=pug --css=sass --git APPNAME
# sequelizeもデフォで入れたい
```

## TODO

* ~~CRUD一通り~~
  * ~~index~~
  * ~~show~~
  * ~~new~~
  * ~~create~~
  * ~~edit~~
  * ~~update~~
  * ~~destroy~~
* コンテナ化
* TypeScript化

## Bockmarks

* https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
* https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
