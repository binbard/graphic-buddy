import { Checkbox } from "fomantic-ui-react"

export default function CreateEvent() {
    return (
        <div className="ss">
            <h1>Create New Event</h1>
            <br />
            <form className="ui form">
                <div className="field">
                    <label>Event Name</label>
                    <input type="text" name="first-name" placeholder="Rogathon 2.0" />
                </div>
                <div className="field">
                    <label>Event banner link</label>
                    <input type="text" name="last-name" placeholder="https://imgur.com/wjfi933" />
                </div><br />
                <div className="field">
                    <div className="inline field">
                        <div className="ui checkbox">
                            <Checkbox label='Deemed' /><br /><br />
                            <Checkbox label='Hill' />
                        </div>
                    </div>
                    <br /><br />
                    <div className="ui toggle checkbox">
                        <Checkbox toggle label={<div>I agree to the <a href="https://termsandconditions.com" target="blank">Terms and Conditions</a></div>} />
                        {/* <label></label> */}
                    </div>
                    <br /><br />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}