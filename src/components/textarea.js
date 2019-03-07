import React, { Component } from 'react';

class Textarea extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
    const { value } = this.props;
    this.setValue(value);
  }

  onChange = ({ target: { value } }) => {
    const { onChange, id, name } = this.props;

    this.setValue(value, () => (
      onChange({ id, name, value })
    ));
  }

  setValue = (value, callback) => {
    this.setState({ value }, callback);
  }

  render() {
    const { value } = this.state;
    const { name, id, onBlur, maxLength, className } = this.props;
    return (
      <textarea
        className={className}
        value={value}
        id={id}
        name={name}
        onBlur={onBlur}
        maxLength={maxLength}
        onChange={this.onChange}
      />
    );
  }
}

export default Textarea;
