import React, { Component } from "React";
import axios from "axios";
import { Card, Header, Form, Input, Icon } from "semantic-ui-react";

let endpoint = "http://localhost:9000";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      items: [],
    };
  }
  componentDidMount() {
    this.getTask();
  }

  render() {
    return (
      <div>
        <div>
          <Header> TO DO LIST</Header>
        </div>
        <div>
          <Form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="task"
              onChange={this.onChange}
              value={this.state.task}
              fluid
              placeholder="Create Task"
            />
          </Form>
        </div>
      </div>
    );
  }
}
