import React from 'react';

export class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label for={this.props.for}>{this.props.title}</label>
    );
  }
}

