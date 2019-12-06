import React from 'react';


class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { labels, checked, onClick } = this.props;

    return (
     
        
          
          <label className="labelColor">{labels}
            <input type="radio" name="months" checked={checked} onClick={onClick} value={labels} required/>
            </label>
            
      
    );
  }
}

export default RadioButtonsGroup;
