import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import pink from '@material-ui/core/colors/pink';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  select: {
    '&:before': {
        borderColor: pink,
    },
    '&:after': {
        borderColor: pink,
    }
},
  formControl: {
    minWidth: 450,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      
        <FormControl variant="outlined" required className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Procedure name
          </InputLabel>
          <Select
            className={classes.select}
            value={this.state.age}
            onChange={this.handleChange}
            required
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple" required 
              />
              
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Inguinal hernia</MenuItem>
          </Select>
        </FormControl>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleSelect);
