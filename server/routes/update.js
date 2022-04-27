import * as Realm from "realm-web";
const {
    BSON: { ObjectId },
} = Realm;

export default async function AddUpdate() {
    const APP_ID = 'application-0-lkkyg';
    const app = new Realm.App({ id: APP_ID });

    const mongo = app.currentUser.mongoClient('mongodb-atlas');
    const collection = mongo.db().collection('employees');

    const result = await collection.insertOne({
        name: "lily of the valley",
        sunlight: "full",
        color: "white",
        type: "perennial",
        _partition: "Store 47",
    });
    alert(result);

}