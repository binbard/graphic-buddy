import React from "react";
import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });


// const evs = [
//     { _id: 1, name: "foo", contact: "abc", age: 20 },
//     { _id: 2, name: "bar", contact: "efg", age: 30 },
//     { _id: 3, name: "baz", contact: "hij", age: 40 }
// ];

async function okGet() {
    
    // let theEvent = {
    //     eventName: form.eventName,
    //     imageLink: form.imageLink,
    //     eventLink: form.eventLink,
    //     forDeemed: form.forDeemed,
    //     forHill: form.forHill,
    // }
    
    const mongo = app.currentUser.mongoClient('mongodb-atlas');
    const collection = mongo.db('events').collection('geu');
    const evs = await collection.find({ forDeemed: true, org:"ieee"})
        .then(okEvs => {
            console.log(okEvs)
            return okEvs
        });
    return new Promise(resolve => setTimeout(() => resolve(evs), 0));
}


export default class GeuIeee extends React.Component {

    state = {
        evs: [],
    }

    getData = () =>
        okGet()
            .then(evs => this.setState({ evs }))

    componentDidMount() {
        okGet().then(evs => this.setState({ evs }));
    }

    render() {
        const events = this.state.evs.map(evs => (

            <div className="card ecard">
                <div className="blurring dimmable image">
                    <div className="ui dimmer">
                        <div className="content">
                            <div className="center">
                                <div className="ui inverted button">Add Friend</div>
                            </div>
                        </div>
                    </div>
                    <img src={evs.imageLink} />
                </div>
                <div className="content">
                    <a className="header">{evs.eventName}</a>
                    <div className="meta">
                        <span className="date">Created in Sep 2014</span>
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="users icon"></i>
                        2 Members
                    </a>
                </div>
            </div>
        ));

        return (
            <div>
                <div className="ui special cards">

                    {events}

                    {/* <div className="card ecard" onClick={function(e){e.preventDefault();window.location.href="https://example.com"}}>
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Add Friend</div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg" />
                        </div>
                        <div className="content">
                            <a className="header" id="ecard_title">OK</a>
                            <div className="meta">
                                <span className="date">Created in Sep 2014</span>
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="users icon"></i>
                                2 Members
                            </a>
                        </div>
                    </div> */}

                    {/* {[...Array(10)].map((e, i) => <div className="card ecard">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Add Friend</div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg" />
                        </div>
                        <div className="content">
                            <a className="header">Jumbo Treasure</a>
                            <div className="meta">
                                <span className="date">Created in Sep 2014</span>
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="users icon"></i>
                                2 Members
                            </a>
                        </div>
                    </div>)} */}


                    {/* <div className="card ecard">
                        <div className="blurring dimmable image">
                            <div className="ui inverted dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui primary button">Add Friend</div>
                                    </div>
                                </div>
                            </div>
                            <img src="https://images.shiksha.com/mediadata/images/articles/1583747992phpzaxKKK.jpeg" />
                        </div>
                        <div className="content">
                            <a className="header">Tech Jam</a>
                            <div className="meta">
                                <span className="date">Created in Aug 2014</span>
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="users icon"></i>
                                2 Members
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}