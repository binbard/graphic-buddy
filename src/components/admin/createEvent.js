import { Checkbox } from "fomantic-ui-react"
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

async function pokDone(form) {
    let theEvent = {
        eventName: form.eventName,
        imageLink: form.imageLink,
        eventLink: form.eventLink,
        deemed: form.deemed,
        hill: form.hill,
    }
    const result = await collection.updateOne({ eventName: form.eventName }, { $setOnInsert: theEvent }, { upsert: true });
    console.log("Done");
}

function okDone(form) {
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
        forDeemed: false,
        forHill: false,
    });

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    function handleChange(e) {
        let isChecked = e.target.checked;
        const { name, checked, value } = e.target
        console.log(isChecked);
        console.log(value);
        console.log(checked);
    }
    const [checked, setChecked] = React.useState(false)

    return (<div  className="ss">
        
            <Grid>
              <Grid.Column width={10}>
                <Table>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Button compact onClick={this.toggle}>
                          Toggle
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        <Checkbox
                          checked={suirChecked}
                          label='SUIR Checkbox'
                          onChange={this.handleChange}
                          onClick={this.handleClick}
                          onMouseDown={this.handleMouseDown}
                          onMouseUp={this.handleMouseUp}
                        />
                        <br />
                        <Checkbox
                          checked={suirChecked}
                          id='suir-checkbox'
                          label='SUIR Checkbox with id'
                          onChange={this.handleChange}
                          onClick={this.handleClick}
                          onMouseDown={this.handleMouseDown}
                          onMouseUp={this.handleMouseUp}
                        />
                      </Table.Cell>
                      <Table.Cell collapsing>
                        <code>{`{ checked: ${suirChecked} }`}</code>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Button compact onClick={this.toggleDOM}>
                          Toggle
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        <label>
                          <input
                            checked={domChecked}
                            onChange={this.handleDOMChange}
                            onClick={this.handleDOMClick}
                            onMouseDown={this.handleDOMMouseDown}
                            onMouseUp={this.handleDOMMouseUp}
                            type='checkbox'
                          />{' '}
                          DOM Checkbox
                        </label>
                        <br />
                        <input
                          checked={domChecked}
                          id='dom-checkbox'
                          onChange={this.handleDOMChange}
                          onClick={this.handleDOMClick}
                          onMouseDown={this.handleDOMMouseDown}
                          onMouseUp={this.handleDOMMouseUp}
                          type='checkbox'
                        />
                        <label htmlFor='dom-checkbox'> DOM Checkbox with id</label>
                      </Table.Cell>
                      <Table.Cell>
                        <code>{`{ checked: ${domChecked} }`}</code>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment.Group>
                  <Segment>
                    <Button
                      compact
                      size='small'
                      floated='right'
                      onClick={this.clearLog}
                    >
                      Clear
                    </Button>
                    Event Log
                  </Segment>
                  <Segment secondary>
                    <pre>
                      {log.map((e, i) => (
                        <div key={i}>{e}</div>
                      ))}
                    </pre>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid>
    </div>
      )
}