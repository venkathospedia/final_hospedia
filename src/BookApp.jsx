import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


import CustomizedInputs from './components/TextField';
import RadioButtonsGroup from './components/RadioButtonsGroup';
import ContainButtons from './components/ContainedButtons';
import MobiCalc from './components/MobiCalc';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import * as mobiscroll from './mobiscroll';


mobiscroll.settings = {
    theme: 'ios'
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }


class BookApp extends Component {
    
    constructor(props) {
        super(props);              
        this.state = {
             Procedure : [ 
                 { p : "Inguinal hernia"},
                 { p : "Mastectomy for breast cancer", },
                 { p : "Facelift sugery"},
                 { p : "Breast implant"},
                 { p : "Breast reconstruction after mastectomy"},
                 { p : "Liposuction"},
                 { p : "LASIK-laser eye surgery"},
                 { p : "Tonsillectomy"},
                 { p : "Total hip replacement"},
                 { p : "Total knee replacement"},                 
                 { p : "Vasectomy" }
                ],
                marked : [],
                labels : [],
            disabled : "disabled",
            checked : "checked",
            hidden : "hidden",            
            cal1 : "cal1",
            cal3 : "cal3",
            cal6 : "cal6",
            page1 : "",
            page2 : "hidden",
            pageTitle : "Book Appointment",
            costing : "",
            open: false,
            cost1 : "cost1",
            cost3 : "cost3",
            cost6 : "cost6"                   
        }; 
        
    }

    componentWillMount() {
        /* var nodes = document.querySelectorAll("input#custom-css-outlined-input[type=text]");
        for (var i=0; i<nodes.length; i++) {
            if (nodes[i].value === "" || !/[0-9.]+/.test(nodes[i].value))
                return this.setState({disabled : "disabled"});
        } */
        
    }
    componentDidMount() {
       // this.props.jsonKey();                
    }

    BackBtn = (event) => {
        this.setState({
            page1 : "",
            page2 : "hidden"
        });
    }
handleClickOpen = () => {
    this.setState({ open: true });
    var proName = document.getElementById('procedureVal').innerHTML;

    var CostingDiv = document.getElementsByClassName("CostingDiv")[0].value;

    document.getElementById('confirmMsg').innerHTML = "Appointment for " + proName + " on " + CostingDiv +" is fixed.";
    
  };

  handleClose = () => {
    this.setState({ 
      open: false, 
      page2 : "hidden",
      page1 : "" });
  };

    CheckCost = (event) => {

        this.setState({
            page1 : "hidden",
            page2 : ""
        });
        
        var radios = document.getElementsByName('months');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                // do whatever you want with the checked radio
                if(radios[i].value === "With-in 1 month ") {
                   this.setState({
                       cal1 : "",
                       cal3 : "cal3",
                       cal6 : "cal6",
                       cost1 : "",
                       cost3 : "cost3",
                       cost6 : "cost6"
                   });
                }
                else if(radios[i].value === "With-in 3 months ") {
                    this.setState({
                       cal1 : "cal1",
                       cal3 : "",
                       cal6 : "cal6" ,
                       cost1 : "cost1",
                       cost3 : "",
                       cost6 : "cost6"
                    });

                }
                else if(radios[i].value === "With-in 6 months ") {
                    this.setState({
                        cal1 : "cal1",
                       cal3 : "cal3",
                       cal6 : "",
                       cost1 : "cost1",
                       cost3 : "cost3",
                       cost6 : ""
                    });
                }
        
                // only one radio can be logically checked, don't check the rest
                //break;
            }
        }

        var dropdownVal = document.getElementById("mySelect").value;
        document.getElementById("procedureVal").innerHTML = dropdownVal;
        
    }

    producerFn = (event) => {
        var selectedVal = document.getElementById("mySelect").value;
        document.getElementById("procedureVal").innerHTML = selectedVal;
       
            if(selectedVal === "")
            {
                this.setState({
                    marked : []
                });
            }
            else if(selectedVal === "Inguinal hernia" ) {          
                this.setState({
                    colors: [
                        { "d":"2019-05-03", background: '#cfd8dc' },
                        { "d":"2019-05-15", background: '#cfd8dc' },
                        { "d":"2019-05-18", background: '#cfd8dc' },
                        { "d":"2019-06-07", background: '#cfd8dc' },
                        { "d":"2019-06-12", background: '#cfd8dc' },
                        { "d":"2019-06-23", background: '#cfd8dc' }
                    ],
                    marked : [ 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-01", "text": "$6992.69" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-02", "text": "$7221.72" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-06", "text": "$6806.49" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-08", "text": "$7077.47" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-09", "text": "$7152.3" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-12", "text": "$6985.53"}, 
                       
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-15", "text": "$7110.92" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-16", "text": "$7254.78" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-18", "text": "$7018.26" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-19", "text": "$7208.95" }, 
                       
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-21", "text": "$7022.94" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-22", "text": "$7147.32"}, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-23", "text": "$7211.28" },  
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-28", "text": "$6861.54" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-29", "text": "$7035.97" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-02", "text": "$7015.61" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-03", "text": "$6716.54" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-04", "text": "$6766.35" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-07", "text": "$7140.71" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-08", "text": "$6929.85"}, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-12", "text": "$6797.42" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-13", "text": "$7128.04" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-14", "text": "$7018.95" }, 
                      
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-17", "text": "$7122.64" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-18", "text": "$7103.23" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-19", "text": "$6866.32"}, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-24", "text": "$6973.22" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-25", "text": "$6859.35" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-26", "text": "$7012.24" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-02", "text": "$7074.79"}, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-03", "text": "$7064.96" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-04", "text": "$6788.75" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-08", "text": "$7130.2"}, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-09", "text": "$7093.38" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-10", "text": "$6754.31" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-15", "text": "$6880.59" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-16", "text": "$6901.76" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-17", "text": "$6856.07" }, 
                        
                
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-22", "text": "$6978.69" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-23", "text": "$6790.19" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-24", "text": "$7122.41"}, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-25", "text": "$7035.28" }, 
                       
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-01", "text": "$7142.15" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-02", "text": "$7044.48" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-09", "text": "$7020.02" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-10", "text": "$6697.82" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-11", "text": "$7015.91" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-12", "text": "$6931.46" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-13", "text": "$6936.36" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-20", "text": "$6724.66" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-21", "text": "$6888.08" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-23", "text": "$7022.15" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-24", "text": "$7099.24" }, 
                       
                         
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-03-29", "text": "$6919.14" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-30", "text": "$6945.62" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-03-31", "text": "$7128.63" }
                        

  
                    ],
                    labels : [                                 
                       
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-01", "text": "$6992.69" , "title" : "Los Robles Regional Medical Center, Distance - 4.3 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-12-02", "text": "Booked", "background" : "#7e56bd" , "title" : "Ronald Reagan UCLA Medical Center - , Distance - 2.1 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-03", "text": "$6766.0" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-04", "text": "$7036.68", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-05", "text": "$6813.12", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-06", "text": "$6806.49", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-07", "text": "$6856.34", "title" : "Keck Hospital - , Distance - 6.5 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-08", "text": "$7077.47", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-09", "text": "$7152.3", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-10", "text": "$6951.06" , "title" : "Alhambra Hospital Medical Center - , Distance - 8.6 mi"}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-11", "text": "$6742.99" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-12-12", "text": "Booked", "background" : "#7e56bd", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-13", "text": "$6988.14", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-14", "text": "$7037.31", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-15", "text": "$7110.92", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-16", "text": "$7254.78", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-12-17", "text": "$6684.27", "title" : "Keck Hospital - , Distance - 6.5 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-18", "text": "$7018.26", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-12-19", "text": "Booked", "background" : "#7e56bd" , "title" : "Hospital - , Distance - "}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-20", "text": "$6985.99", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-21", "text": "$7022.94", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-12-22", "text": "Booked", "background" : "#7e56bd" , "title" : "Hospital - , Distance - "}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-23", "text": "$7211.28" , "title" : "Keck Hospital - , Distance - 6.5 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-24", "text": "$6872.66", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-25", "text": "$6913.52", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-26", "text": "$6872.11" , "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-27", "text": "$7076.26" , "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-28", "text": "$6861.54" , "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-29", "text": "$7035.97" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-30", "text": "$6952.76" , "title" : "Keck Hospital - , Distance - 6.5 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-31", "text": "$6815.94", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-01", "text": "$7079.01", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-02", "text": "$7015.61", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2020-01-03", "text": "$6716.54" , "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-04", "text": "$6766.35", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-05", "text": "$6840.72", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-06", "text": "$7002.45", "title" : "Keck Hospital - , Distance - 6.5 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-07", "text": "$7140.71", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-01-08", "text": "Booked", "background" : "#7e56bd" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-09", "text": "$7171.51", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-10", "text": "$7154.1" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-11", "text": "$7124.24", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-12", "text": "$6797.42" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-13", "text": "$7128.04" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-14", "text": "$7018.95", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-15", "text": "$7123.46" , "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-16", "text": "$6914.01" , "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-17", "text": "$7122.64", "title" : "UCLA Health - , Distance - 5.7 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-18", "text": "$7103.23", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-01-19", "text": "Booked", "background" : "#7e56bd" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-20", "text": "$6879.31" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-21", "text": "$6807.04", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-22", "text": "$6888.34", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-23", "text": "$7059.11", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-24", "text": "$6973.22", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-25", "text": "$6859.35", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-01-26", "text": "Booked", "background" : "#7e56bd" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-27", "text": "$6851.85" , "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-28", "text": "$6983.11" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-29", "text": "$6829.79" , "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-30", "text": "$7077.96" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-31", "text": "$7077.96", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-01", "text": "$7049.38" , "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-02-02", "text": "Booked", "background" : "#7e56bd" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-03", "text": "$7064.96", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2020-02-04", "text": "$6788.75", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-05", "text": "$6994.89", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-06", "text": "$6892.15" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-07", "text": "$6928.64" , "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-02-08", "text": "Booked", "background" : "#7e56bd" , "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-09", "text": "$7093.38" , "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-10", "text": "$7754.31" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-11", "text": "$7771.63" , "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-12", "text": "$7779.71" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-13", "text": "$7933.81" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-14", "text": "$6901.53" , "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-15", "text": "$6880.59" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-16", "text": "$6901.76", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-17", "text": "$6856.07" , "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-18", "text": "$6934.17" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-19", "text": "$6897.35" , "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-20", "text": "$7116.81", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-21", "text": "$7068.76", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-22", "text": "$6978.69" , "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-23", "text": "$6790.19", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2020-02-24", "text": "Booked", "background" : "#7e56bd", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-25", "text": "$7035.28", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-26", "text": "$7007.79", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-27", "text": "$7079.08", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-28", "text": "$7167.09", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-29", "text": "$7007.79", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-01", "text": "$7142.15", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-02", "text": "$7044.48", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-03", "text": "$7168.1", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-04", "text": "$6888.61", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-05", "text": "$6866.61", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-06", "text": "$6877.58", "title" : "Providence Saint John's Health Center  - , Distance - 6.0 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-07", "text": "$6942.68", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-08", "text": "$6843.15", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-09", "text": "$7020.02", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2020-08-10", "text": "$6697.82", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-11", "text": "$7015.91", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-12", "text": "$6931.46", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-13", "text": "$6936.36", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-14", "text": "$6983.11", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-15", "text": "$6788.97", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-16", "text": "$6851.79", "title" : "Adventist Health White Memorial - , Distance - 5.3 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-17", "text": "$7167.91", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-18", "text": "$6864.65", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-19", "text": "$7107.58", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-20", "text": "$6724.66", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-21", "text": "$6888.08", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-22", "text": "$6915.58", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-23", "text": "$7022.15", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-24", "text": "$7099.24", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-25", "text": "$6973.51", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-26", "text": "$6791.07", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-27", "text": "$6830.25", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-28", "text": "$6953.12", "title" : "Kindred Hospital - , Distance - 9.0 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-29", "text": "$6919.14", "title" : "Southern Califronia Hospital - , Distance - 4.2 mi." }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-30", "text": "$6945.62", "title" : "Cedars-Sinai Medical Center - , Distance - 2.8 mi."}, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-08-31", "text": "$7128.63", "title" : "LAC+USC Medical Center - , Distance - 6.8 mi." }

 
                    ]
                });             
            }
            else if(selectedVal === "Total knee replacement" ) { 
                            
                this.setState({
                    marked : [ 
                        
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-01", "text": "$46021.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-02", "text": "$46413.32" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-03", "text": "$45957.25" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-04", "text": "$45301.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-05", "text": "$46692.93" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-06", "text": "$45691.83" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-07", "text": "$46523.84" }
 
                    ],
                    labels : [

  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-01", "text": "$46021.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-02", "text": "$46413.32" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-03", "text": "$45957.25" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-04", "text": "$45301.95" }, 
 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-31", "text": "$45640.06" }
                    ]
                });             
            }
            else if(selectedVal === "Vasectomy" ) { 
                                
                this.setState({
                    marked : [ 
                        
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-01", "text": "$1810.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-02", "text": "$1849.75" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-03", "text": "$1847.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-04", "text": "$1832.74" }, 
  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-31", "text": "$1782.75" }
  
                    ],
                    labels : [                                 
                        
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-01", "text": "$1810.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-02", "text": "$1849.75" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-03", "text": "$1847.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-04", "text": "$1832.74" }, 
 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-31", "text": "$1782.75" }

                    ]
                });             
            }           
    }
    
    monthRdo = (event) => {
        var textField =   document.getElementsByClassName("MuiInputBase-input-262");
        for (var i=0; i<textField.length; i++) {
            if(textField[i].value !== "" )            
            {
                if (document.getElementById("mySelect").value !== "") {
                this.setState({
                    disabled : ""
                });
            }

            }
        }
    }

   /* oneCal = (event) => {
            var myselect1 = document.getElementsByClassName("mbsc-comp")[1].value;
           alert(myselect1);
    }
    threeCal = (event) => {
        var myselect3 = document.getElementsByClassName("mbsc-comp")[6].value;
       alert(myselect3);
}
sixCal = (event) => {
    var myselect11 = document.getElementsByClassName("mbsc-comp")[11].value;
    alert(myselect11);
}
*/

onSetDate = (ev, inst) => {
    this.setState({
      selectedDate: inst.getVal()
    });
  }

  
    render() { 
        return (
            <div className="container">
                <h1 className="pageTitle">{this.state.pageTitle}</h1>
                <form name="booking" className={this.state.page1}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <CustomizedInputs label={'MRN*'} txtClassName={'small'} />
                    </Grid>
                    <Grid item xs={6}>                   
                        <CustomizedInputs label={'First Name*'} txtClassName={'normal'} />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomizedInputs label={'Last Name'} txtClassName={'normal'} />
                    </Grid>
                    <Grid item xs={6}>                   
                        <CustomizedInputs label={'Contact Number*'} txtClassName={'normal'} />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomizedInputs label={'Address'} txtClassName={'normal'} />
                    </Grid>
                    <Grid item xs={6}>                   
                        <CustomizedInputs label={'Sex*'} txtClassName={'small'} />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomizedInputs label={'Date of Birth'} type={'date'} txtClassName={'small'} />
                    </Grid>
                   
                    <Grid item xs={12} sm={6} >
                    <label className="labelColor">Procedure Name</label>                   
                        <select name="Procedure" required id="mySelect" onChange={this.producerFn}>
                            <option value="">None *</option>
                            {this.state.Procedure.length !== 0 && this.state.Procedure.map((item,index) => {
                                return (
                                <option value={item.p} key={index}>{item.p}</option>
                            )
                        }   
                        ) 
            }     
                        </select>
                    </Grid>
                    <Grid item xs={12} sm={6}>                   
                    <label className="labelColor">Doctor's Name</label>                   
                        <select name="doctorname" required id="mySelect1">
                            <option value="">Please select</option>
                            <option value="Lawrence">Dr. Lawrence</option>
                            <option value="Joseph">Dr. Joseph</option>
                            <option value="Robert">Dr. Robert</option>
                            <option value="Edward">Dr. Edward</option>
                            <option value="Peter">Dr. Peter</option>
                            <option value="Oma">Dr. Omar</option>
                            <option value="Ranna">Dr. Ranna</option>
                        </select>

                    </Grid>
					<Grid item xs={12} sm={6}>                   
                    

                    </Grid>
					<Grid item xs={12} sm={6}>                   
                    <label className="labelColor">Choose out of network hospital &nbsp;</label>                   
                        <input type="checkbox" className="chk" />

                    </Grid>
                    </Grid>
                    <br />
                    <hr />
                    <Grid container spacing={24}>
                    <Grid item xs={4}>
                    <RadioButtonsGroup labels="With-in 1 month " onClick={this.monthRdo} value={'With-in 1 month '} />
                    </Grid>
                    <Grid item xs={4}>
                    <RadioButtonsGroup labels="With-in 3 months "  onClick={this.monthRdo} value={'With-in 3 months '} />
                    </Grid>
                    <Grid item xs={4}>
                    <RadioButtonsGroup labels="With-in 6 months "  onClick={this.monthRdo} value={'With-in 6 months '}/>
                    </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={24}>                    
                    <Grid container justify = "center">
                    <ContainButtons label={'Check Procedure Cost'} onClick={this.CheckCost} disabled={this.state.disabled}></ContainButtons>
        
                          
                    </Grid>        
        </Grid>
        </form>
        <div className={this.state.page2}>
        <div className="btnAlignment"><ContainButtons label={'Back'} onClick={this.BackBtn} disabled={this.state.disabled}></ContainButtons></div>
            <h3 id="procedureVal">Procedure</h3>
            <p>Please select an available date for the chosen procedure.</p>
                <p><span className="legend-mark"></span> - Denotes the unavailable slots.</p>
                    <div className={this.state.cal1}>
                    <mobiscroll.Form inputStyle="box" labelStyle="inline">                    
                    <mobiscroll.FormGroup>
                        <div className="mbsc-row mbsc-form-grid">
                            
                            <MobiCalc display={'inline'} value={this.state.selectedDate} onSet={this.onSetDate} marked={this.state.marked} months={'1'} />
                            
                            </div>   
                    </mobiscroll.FormGroup>
                    </mobiscroll.Form>
                    </div>
                    <div className={this.state.cal3}>
                    <mobiscroll.Form inputStyle="box" labelStyle="inline">                 
                    <mobiscroll.FormGroup>                        
                    
                            <MobiCalc display={'inline'} value={this.state.selectedDate} onSet={this.onSetDate} marked={this.state.marked} months={'3'} />
                            
                    </mobiscroll.FormGroup>
            </mobiscroll.Form>
            </div>
            <div className={this.state.cal6}>
                    <mobiscroll.Form inputStyle="box" labelStyle="inline">                   
                    <mobiscroll.FormGroup>
                            
                            <MobiCalc display={'inline'} value={this.state.selectedDate} onSet={this.onSetDate} marked={this.state.marked} months={'6'}/>
                            
                            </mobiscroll.FormGroup>
            </mobiscroll.Form>
                </div>
                <div className={this.state.costing}>
                <h3>Costing</h3>

               
               
                <mobiscroll.Form inputStyle="box" labelStyle="inline">
                          
                    <mobiscroll.FormGroup>                        
                    <div className=" ">
                                
                                    <MobiCalc
                                    value={this.state.selectedDate}
                                        display={'inline'}                                    
                                        labels={this.state.labels}
                                        months={1}
                                        className={'CostingDiv'}                                     
                                    />
                            </div>
                            </mobiscroll.FormGroup>
                            
                            </mobiscroll.Form>
             
                
                <br className="clear" />
                
               
                
                <Grid container spacing={24}>                    
                    <Grid container justify = "center">
                    <div>
       <ContainButtons label={'Book Appointment'} onClick={this.handleClickOpen}>
        </ContainButtons>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
          
          <div id="confirmMsg"></div>
            
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
          </DialogContent>
          <DialogActions>
           
            <ContainButtons onClick={this.handleClose}  label={'Ok'} >
              
            </ContainButtons>
          </DialogActions>
        </Dialog>
      </div>
                </Grid>
                </Grid>
                </div>
                </div>
                  
                
                
         

            </div>
        );
    }
}
 


export default BookApp;