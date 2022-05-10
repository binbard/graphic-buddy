import React from "react";
import collection from "../../components/helpers/mongoObjs"

async function okGet() {
    const evs = await collection.find({ forDeemed: true, org: "acm" })
        .then(okEvs => {
            console.log(okEvs)
            return okEvs
        });
    return new Promise(resolve => setTimeout(() => resolve(evs), 0));
}


export default class GeuAcm extends React.Component {

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

                    
                </div>
            </div>
        )
    }
}