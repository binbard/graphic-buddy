import React from "react";
import * as Realm from "realm-web";

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });

async function okGet() {
    const mongo = app.currentUser.mongoClient('mongodb-atlas');
    const collection = mongo.db('events').collection('geu');
    // let theEvent = {
    //     eventName: form.eventName,
    //     imageLink: form.imageLink,
    //     eventLink: form.eventLink,
    //     forDeemed: form.forDeemed,
    //     forHill: form.forHill,
    // }
    const evs = await collection.find({ forHill: true })
        .then( okEvs => {
            // console.log("evs type", typeof(okEvs));
            return [...okEvs]
        } );
    console.log("evs", evs.length);
}

export default class GeuIeee extends React.Component {
    // let evs=okGet();
    // console.log("evs", evs.length);

    constructor(props){
        super(props);
        this.state = {
            evs: [19,11,10]
        }
    }

    componentWillMount() {
        var evs = okGet()
            .then(tv=>
                this.setState({evs:tv})
            )
    }

    // componentDidMount() {
    //     var okEvs = okGet();

    //     fetch(okEvs)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ evs: data })
    //         })
    // }

    render() {
        return (
            <div>
                <div className="ui special cards">
                    <div className="card">
                        <div className="blurring dimmable image">
                            <div className="ui dimmer">
                                <div className="content">
                                    <div className="center">
                                        <div className="ui inverted button">Add Friend</div>
                                    </div>
                                </div>
                            </div>
                            <img onClick={okGet} src="https://miro.medium.com/max/1400/1*ydhn1QPAKsrbt6UWfn3YnA.jpeg" />
                        </div>
                        <div className="content">
                            <a className="header">{this.state.evs}</a>
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

                    {[...Array(10)].map((e, i) => <div className="card">
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
                    </div>)}


                    <div className="card">
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
                    </div>
                </div>
            </div>
        )
    }
}