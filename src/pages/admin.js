import React from 'react';
import Glogin from '../components/glogin';
import AsNavbar from '../components/admin/asnavbar';
import * as Realm from "realm-web";
import About from './about'
import { BrowserRouter } from 'react-router-dom';

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

function Admin() {
    const [user, setUser] = React.useState(app.currentUser);
    return (
        user? <AsNavbar user={user}/> : <Glogin app={app}/>
    );
}

export default Admin;