import { Checkbox, Button } from "fomantic-ui-react"
// import AddUpdate from "../../../server/routes/update";

import React, { useState } from "react";
import { useNavigate } from "react-router";

import * as Realm from "realm-web";
const {
  BSON: { ObjectId },
} = Realm;

const APP_ID = 'application-0-lkkyg';
const app = new Realm.App({ id: APP_ID });
const mongo = app.currentUser.mongoClient('mongodb-atlas');
const collection = mongo.db('events').collection('geu');

async function okDone(form) {
  let theEvent = {
    eventName: form.eventName,
    imageLink: form.imageLink,
    eventLink: form.eventLink,
    forDeemed: form.forDeemed,
    forHill: form.forHill,
  }
  const result = await collection.updateOne({ eventName: form.eventName }, { $setOnInsert: theEvent }, { upsert: true });
  console.log(`Done $result`);
}

function pokDone(form) {
  let theEvent = {
    eventName: form.eventName,
    imageLink: form.imageLink,
    eventLink: form.eventLink,
    forDeemed: form.forDeemed,
    forHill: form.forHill,
  }
  console.log(theEvent);
}

export default function CreateEvent() {
  const [form, setForm] = useState({
    eventName: "",
    imageLink: "",
    eventLink: "",
    forDeemed: true,
    forHill: true,
    tnc: false,
  });

  function updateForm(value) {
    console.log(value)
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  return (
    <div className="ss">
      <h1>Create New Event</h1>
      <br />
      <form onSubmit={function (e) { e.preventDefault(); okDone(form) }} className="ui form">
        <div className="field">
          <label>Event Name</label>
          <input type="text" name="eventName" placeholder="Rogathon 2.0"
            value={form.eventName}
            onChange={(e) => updateForm({ eventName: e.target.value })} />
        </div>
        <div className="field">
          <label>Event banner link</label>
          <input type="text" name="imageLink" placeholder="https://imgur.com/wjfi933"
            value={form.imageLink}
            onChange={(e) => updateForm({ imageLink: e.target.value })} />
        </div>
        <div className="field">
          <label>Event Registration link</label>
          <input type="text" name="eventLink" placeholder="https://forms.google.com/sd3dk-43f34-er443"
            value={form.eventLink}
            onChange={(e) => updateForm({ eventLink: e.target.value })} />
        </div><br />
        <div className="field">
          <div className="inline field">
            <label>Deemed</label>
            <input
              name="forDeemed"
              checked={form.forDeemed}
              onChange={(e) => updateForm({ forDeemed: e.target.checked })}
              type='checkbox'
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Hill</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              name="forHill"
              checked={form.forHill}
              onChange={(e) => updateForm({ forHill: e.target.checked })}
              type='checkbox'
            />
            <br /><br />
          </div>
          <div className="ui toggle checkbox">
            <Checkbox readOnly checked={true} label={<div>By proceeding, you agree to our <a href="https://termsandconditions.com" target="blank">Terms and Conditions</a></div>} />
            {/* <label></label> */}
          </div>
          <br /><br />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  )
}