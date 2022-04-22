import React from 'react';
import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

function UserDetail({ user }) {
    return (
        <div>
            <h1>Logged in with anonymous id: {user.id}</h1>
        </div>
    );
}
function Login({ setUser }) {

    const loginAnonymous = async () => {
        const user = await app.logIn(Realm.Credentials.anonymous());
        setUser(user);
    };

    const loginUser = async () => {
        const email = "goonhacker0@gmail.com";
        const password = "pahgal123";
        const user = await app.logIn(Realm.Credentials.emailPassword(email, password));
        setUser(user);
        window.location.reload();
    };

    return <button onClick={loginUser}>Log In</button>;
}


function Glogin() {
    const [user, setUser] = React.useState(app.currentUser);
    return (
        <div class="ps">
            {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
        </div>
    )
}

export default Glogin;