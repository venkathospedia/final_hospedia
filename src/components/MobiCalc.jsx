import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import * as mobiscroll from '../mobiscroll';
import '../mobiscroll.react.min.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function MobiCalc(props) {
  const { marked, months, display, onClick, onDayChange, labels, value, onSet, className } = props;
  return (
    <div>
                                <label>
                                    <mobiscroll.Calendar
                                        marked={marked}
                                        labels={labels}
                                        value={value}
                                        months={months}
                                        onSet={onSet}
                                        display={display}
                                        type="hidden"
                                        yearChange={false}
                                        onClick={onClick}
                                        onDayChange={onDayChange}
                                        className={className}
                                        placeholder="Please Select..."
                                    />
                                </label>
                            </div>
  );
}



export default withStyles(styles)(MobiCalc);
