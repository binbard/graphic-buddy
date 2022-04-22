import React from 'react';
import Alogin from '../components/admin/login'
import Glogin from '../components/glogin';
import AsNavbar from '../components/admin/asnavbar';
import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

function Admin() {
    const [user, setUser] = React.useState(app.currentUser);
    return (
        <div class="ps">
            {user ? <AsNavbar id={user.id} /> : <Glogin />}
        </div>
    );
}

export default Admin;