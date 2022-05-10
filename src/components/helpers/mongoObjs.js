import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

const mongo = app.currentUser.mongoClient('mongodb-atlas');
const collection = mongo.db('events').collection('geu');

export default collection

