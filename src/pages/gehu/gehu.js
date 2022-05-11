import { Outlet, useNavigate } from "react-router-dom";
import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

var evs = []

export default function Gehu() {

    const mongo = app.currentUser.mongoClient('mongodb-atlas');
    const collection = mongo.db('events').collection('geu');

    async function gehuEvents() {
        const evs = await collection.find({ forHill: true, org: "ieee" })
            .then(okEvs => {
                console.log("fun", okEvs)
                return okEvs
            });
        return new Promise(resolve => setTimeout(() => resolve(evs), 0));
    }

    const getData = () =>
        gehuEvents()
            .then(ev => evs === ev)
            .then(console.log("pamo"))

    var navigate = useNavigate();

    getData()

    function makeActive(e) {

        let fc = e.currentTarget.parentNode.children;
        let afc = [...fc];
        afc.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.toggle("active");
        if (e.currentTarget.innerHTML === "IEEE") { console.log("ieee"); navigate('/gehu/ieee'); }
        else if (e.currentTarget.innerHTML === "ACM-W") { console.log("acm"); navigate('/gehu/acm-w'); }
    }

    return (
        <div className="ps">
            <div className="ui secondary pointing menu">
                <button className="item" onClick={makeActive}>
                    IEEE
                </button>
                <button className="item active" onClick={makeActive}>
                    ACM-W
                </button>
            </div>
            <div className="ui segment">
                {/* <EventCard/> */}
            </div>
            <Outlet />
        </div>

    )
}