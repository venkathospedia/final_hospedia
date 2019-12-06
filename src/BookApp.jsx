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
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-01", "text": "$6992.69" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-02", "text": "$7221.72", "background" : "#7e56bd" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-06", "text": "$6806.49" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-08", "text": "$7077.47" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-09", "text": "$7152.3" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-12", "text": "$6985.53", "background" : "#7e56bd" }, 
                       
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-15", "text": "$7110.92" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-16", "text": "$7254.78" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-18", "text": "$7018.26" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-19", "text": "$7208.95", "background" : "#7e56bd" }, 
                       
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-21", "text": "$7022.94" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-22", "text": "$7147.32", "background" : "#7e56bd" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-23", "text": "$7211.28" },  
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-28", "text": "$6861.54" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-29", "text": "$7035.97" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-02", "text": "$7015.61" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-03", "text": "$6716.54" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-04", "text": "$6766.35" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-07", "text": "$7140.71" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-08", "text": "$6929.85", "background" : "#7e56bd" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-12", "text": "$6797.42" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-13", "text": "$7128.04" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-14", "text": "$7018.95" }, 
                      
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-17", "text": "$7122.64" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-18", "text": "$7103.23" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-19", "text": "$6866.32", "background" : "#7e56bd" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-24", "text": "$6973.22" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-25", "text": "$6859.35" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-26", "text": "$7012.24", "background" : "#7e56bd" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-02", "text": "$7074.79", "background" : "#7e56bd" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-03", "text": "$7064.96" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-04", "text": "$6788.75" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-08", "text": "$7130.2", "background" : "#7e56bd" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-09", "text": "$7093.38" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-10", "text": "$6754.31" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-15", "text": "$6880.59" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-16", "text": "$6901.76" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-17", "text": "$6856.07" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-22", "text": "$6978.69" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-23", "text": "$6790.19" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-24", "text": "$7122.41", "background" : "#7e56bd" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-25", "text": "$7035.28" }, 
                       
                         
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-30", "text": "$7258.74" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-31", "text": "$7087.65" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-01", "text": "$7142.15" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-02", "text": "$7044.48" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-09", "text": "$7020.02" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-10", "text": "$6697.82" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-11", "text": "$7015.91" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-12", "text": "$6931.46" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-13", "text": "$6936.36" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-20", "text": "$6724.66" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-21", "text": "$6888.08" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-23", "text": "$7022.15" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-24", "text": "$7099.24" }, 
                       
                         
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-29", "text": "$6919.14" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-30", "text": "$6945.62" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-31", "text": "$7128.63" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-01", "text": "$7021.66" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-06", "text": "$6982.61" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-07", "text": "$6918.3" }, 
                      
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-09", "text": "$6938.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-10", "text": "$6974.1" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-11", "text": "$7017.08" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-14", "text": "$6831.29" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-15", "text": "$6982.22" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-16", "text": "$7015.97" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-19", "text": "$7113.38" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-20", "text": "$6795.23" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-21", "text": "$6825.21" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-22", "text": "$7201.1" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-26", "text": "$6901.11" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-27", "text": "$7016.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-28", "text": "$6975.87" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-02", "text": "$7214.55" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-03", "text": "$6892.08" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-04", "text": "$7005.23" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-08", "text": "$7056.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-09", "text": "$6923.01" }, 
                      
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-11", "text": "$6971.49" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-15", "text": "$6764.92" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-16", "text": "$6880.85" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-17", "text": "$7010.11" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-22", "text": "$6997.64" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-23", "text": "$6945.6" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-26", "text": "$7005.92" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-27", "text": "$7038.88" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-30", "text": "$7045.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-31", "text": "$6955.93" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-01", "text": "$7145.81" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-05", "text": "$6966.55" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-06", "text": "$6963.89" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-07", "text": "$7065.27" }, 
                      
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-11", "text": "$7092.07" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-12", "text": "$6943.6" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-13", "text": "$6968.02" }, 
                        
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-20", "text": "$7158.32" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-21", "text": "$6865.27" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-22", "text": "$6937.87" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-26", "text": "$6778.86" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-27", "text": "$6983.63" }, 
                        
                         
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-12-02", "text": "$000.51", "title" : "mytitle" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-03", "text": "$7038.98" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-04", "text": "$6880.13" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-09", "text": "$6702.92", "title": "asda" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-11", "text": "$6888.09" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-13", "text": "$6901.63" }, 
						{"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-15", "text": "$6901.63" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-17", "text": "$6901.63" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-18", "text": "$6949.0" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-21", "text": "$6924.28" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-24", "text": "$6924.28" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-25", "text": "$7076.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-26", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-28", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-29", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-30", "text": "$7108.3" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-31", "text": "$6934.3" },

						{"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-02", "text": "$6977.51" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-03", "text": "$7038.98" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-04", "text": "$6880.13" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-09", "text": "$6702.92" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-11", "text": "$6888.09" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-13", "text": "$6901.63" }, 
						{"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-15", "text": "$6901.63" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-17", "text": "$6901.63" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-18", "text": "$6949.0" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-21", "text": "$6924.28" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-24", "text": "$6924.28" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-25", "text": "$7076.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-26", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-28", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-29", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-30", "text": "$7108.3" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-01-31", "text": "$6934.3" },
						{"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-02", "text": "$6977.51" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-03", "text": "$7038.98" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-04", "text": "$6880.13" }, 
                       
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-09", "text": "$6702.92" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-11", "text": "$6888.09" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-13", "text": "$6901.63" }, 
						{"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-15", "text": "$6901.63" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-17", "text": "$6901.63" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-18", "text": "$6949.0" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-21", "text": "$6924.28" }, 
                        
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-24", "text": "$6924.28" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-25", "text": "$7076.36" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-26", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-28", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-29", "text": "$6988.05" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-30", "text": "$7108.3" }, 
                        {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2020-02-31", "text": "$6934.3" }

  
                    ],
                    labels : [                                 
                       
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-01", "text": "$6992.69" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-05-02", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-03", "text": "$6766.0" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-04", "text": "$7036.68" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-05", "text": "$6813.12" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-06", "text": "$6806.49" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-07", "text": "$6856.34" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-08", "text": "$7077.47" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-09", "text": "$7152.3" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-10", "text": "$6951.06" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-11", "text": "$6742.99" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-05-12", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-13", "text": "$6988.14" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-14", "text": "$7037.31" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-15", "text": "$7110.92" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-16", "text": "$7254.78" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-05-17", "text": "$6684.27" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-18", "text": "$7018.26" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-05-19", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-20", "text": "$6985.99" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-21", "text": "$7022.94" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-05-22", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-23", "text": "$7211.28" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-24", "text": "$6872.66" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-25", "text": "$6913.52" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-26", "text": "$6872.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-27", "text": "$7076.26" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-28", "text": "$6861.54" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-29", "text": "$7035.97" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-30", "text": "$6952.76" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-05-31", "text": "$6815.94" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-01", "text": "$7079.01" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-02", "text": "$7015.61" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-06-03", "text": "$6716.54" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-04", "text": "$6766.35" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-05", "text": "$6840.72" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-06", "text": "$7002.45" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-07", "text": "$7140.71" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-06-08", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-09", "text": "$7171.51" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-10", "text": "$7154.1" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-11", "text": "$7124.24" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-12", "text": "$6797.42" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-13", "text": "$7128.04" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-14", "text": "$7018.95" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-15", "text": "$7123.46" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-16", "text": "$6914.01" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-17", "text": "$7122.64" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-18", "text": "$7103.23" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-06-19", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-20", "text": "$6879.31" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-21", "text": "$6807.04" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-22", "text": "$6888.34" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-23", "text": "$7059.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-24", "text": "$6973.22" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-25", "text": "$6859.35" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-06-26", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-27", "text": "$6851.85" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-28", "text": "$6983.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-29", "text": "$6829.79" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-06-30", "text": "$7077.96" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-01", "text": "$7049.38" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-07-02", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-03", "text": "$7064.96" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-07-04", "text": "$6788.75" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-05", "text": "$6994.89" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-06", "text": "$6892.15" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-07", "text": "$6928.64" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-07-08", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-09", "text": "$7093.38" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-10", "text": "$6754.31" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-11", "text": "$6771.63" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-12", "text": "$6779.71" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-13", "text": "$6933.81" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-14", "text": "$6901.53" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-15", "text": "$6880.59" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-16", "text": "$6901.76" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-17", "text": "$6856.07" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-18", "text": "$6934.17" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-19", "text": "$6897.35" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-20", "text": "$7116.81" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-21", "text": "$7068.76" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-22", "text": "$6978.69" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-23", "text": "$6790.19" }, 
 {"Procedure": "Inguinal hernia", "color": "#CCCCCC", "d": "2019-07-24", "text": "Booked", "background" : "#7e56bd" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-25", "text": "$7035.28" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-26", "text": "$7007.79" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-27", "text": "$7079.08" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-28", "text": "$7167.09" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-29", "text": "$7007.79" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-30", "text": "$7258.74" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-07-31", "text": "$7087.65" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-01", "text": "$7142.15" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-02", "text": "$7044.48" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-03", "text": "$7168.1" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-04", "text": "$6888.61" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-05", "text": "$6866.61" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-06", "text": "$6877.58" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-07", "text": "$6942.68" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-08", "text": "$6843.15" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-09", "text": "$7020.02" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-08-10", "text": "$6697.82" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-11", "text": "$7015.91" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-12", "text": "$6931.46" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-13", "text": "$6936.36" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-14", "text": "$6983.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-15", "text": "$6788.97" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-16", "text": "$6851.79" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-17", "text": "$7167.91" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-18", "text": "$6864.65" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-19", "text": "$7107.58" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-20", "text": "$6724.66" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-21", "text": "$6888.08" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-22", "text": "$6915.58" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-23", "text": "$7022.15" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-24", "text": "$7099.24" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-25", "text": "$6973.51" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-26", "text": "$6791.07" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-27", "text": "$6830.25" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-28", "text": "$6953.12" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-29", "text": "$6919.14" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-30", "text": "$6945.62" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-08-31", "text": "$7128.63" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-01", "text": "$7021.66" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-02", "text": "$6983.96" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-03", "text": "$6767.6" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-04", "text": "$6915.64" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-05", "text": "$6810.05" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-06", "text": "$6982.61" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-07", "text": "$6918.3" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-09-08", "text": "$6760.3" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-09", "text": "$6938.36" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-10", "text": "$6974.1" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-11", "text": "$7017.08" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-12", "text": "$7025.95" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-13", "text": "$7094.56" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-14", "text": "$6831.29" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-15", "text": "$6982.22" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-16", "text": "$7015.97" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-17", "text": "$6800.1" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-18", "text": "$6985.82" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-19", "text": "$7113.38" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-20", "text": "$6795.23" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-21", "text": "$6825.21" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-22", "text": "$7201.1" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-23", "text": "$7103.75" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-24", "text": "$7115.05" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-25", "text": "$7023.2" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-26", "text": "$6901.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-27", "text": "$7016.36" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-28", "text": "$6975.87" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-29", "text": "$7131.09" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-09-30", "text": "$6847.7" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-01", "text": "$7097.24" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-02", "text": "$7214.55" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-03", "text": "$6892.08" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-04", "text": "$7005.23" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-05", "text": "$6834.86" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-06", "text": "$6928.77" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-07", "text": "$6971.62" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-08", "text": "$7056.36" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-09", "text": "$6923.01" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-10", "text": "$6945.59" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-11", "text": "$6971.49" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-10-12", "text": "$6687.6" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-13", "text": "$6751.85" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-14", "text": "$6942.32" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-15", "text": "$6764.92" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-16", "text": "$6880.85" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-17", "text": "$7010.11" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-18", "text": "$6913.68" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-19", "text": "$7214.33" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-20", "text": "$7160.08" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-21", "text": "$7022.35" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-22", "text": "$6997.64" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-23", "text": "$6945.6" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-24", "text": "$7207.58" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-25", "text": "$6823.04" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-26", "text": "$7005.92" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-27", "text": "$7038.88" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-28", "text": "$7107.61" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-29", "text": "$6849.86" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-30", "text": "$7045.36" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-10-31", "text": "$6955.93" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-01", "text": "$7145.81" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-02", "text": "$6939.54" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-03", "text": "$6943.27" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-04", "text": "$7017.77" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-05", "text": "$6966.55" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-06", "text": "$6963.89" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-07", "text": "$7065.27" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-08", "text": "$6802.69" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-09", "text": "$7141.92" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-10", "text": "$7076.23" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-11", "text": "$7092.07" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-12", "text": "$6943.6" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-13", "text": "$6968.02" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-14", "text": "$7043.92" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-15", "text": "$6949.13" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-16", "text": "$6894.9" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-17", "text": "$7074.69" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-18", "text": "$6960.07" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-19", "text": "$6835.81" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-20", "text": "$7158.32" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-21", "text": "$6865.27" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-22", "text": "$6937.87" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-23", "text": "$6994.0" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-24", "text": "$7122.18" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-25", "text": "$6893.22" }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-11-26", "text": "$6778.86" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-27", "text": "$6983.63" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-28", "text": "$6838.07" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-29", "text": "$7090.01" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-11-30", "text": "$6858.69" }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-01", "text": "$6998.09", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-02", "text": "$6977.51", "title" : "Hospital - , Distance - "  }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-03", "text": "$7038.98", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-04", "text": "$6880.13", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-05", "text": "$6800.56", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-06", "text": "$6769.63", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-07", "text": "$7180.25", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-08", "text": "$7098.59", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-09", "text": "$6702.92", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#007aff", "d": "2019-12-10", "text": "$7182.77", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-11", "text": "$6888.09", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-12", "text": "$7042.31", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-13", "text": "$6800.85", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-14", "text": "$7079.99", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-15", "text": "$6817.58", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-16", "text": "$6826.91", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-17", "text": "$6901.63", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-18", "text": "$6949.0", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-19", "text": "$7226.57", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-20", "text": "$6895.32", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-21", "text": "$7077.44", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-22", "text": "$7205.42", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-23", "text": "$6960.52", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-24", "text": "$6924.28", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-25", "text": "$7076.36", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-26", "text": "$6988.05", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-27", "text": "$6979.73", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-28", "text": "$7160.84", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-29", "text": "$7161.75", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-30", "text": "$7108.3", "title" : "Hospital - , Distance - " }, 
 {"Procedure": "Inguinal hernia", "color": "#f13f77", "d": "2019-12-31", "text": "$6934.3", "title" : "Hospital - , Distance - " }
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
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-07", "text": "$46523.84" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-08", "text": "$46655.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-09", "text": "$45753.45" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-10", "text": "$46492.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-11", "text": "$45674.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-12", "text": "$45352.13" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-13", "text": "$46138.51" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-14", "text": "$45435.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-15", "text": "$46519.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-16", "text": "$45331.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-17", "text": "$45529.63" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-18", "text": "$46109.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-19", "text": "$46751.29" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-20", "text": "$46659.65" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-21", "text": "$46366.54" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-22", "text": "$46178.29" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-23", "text": "$46344.52" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-24", "text": "$45686.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-25", "text": "$46116.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-26", "text": "$46410.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-27", "text": "$46330.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-28", "text": "$46231.4" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-29", "text": "$46623.34" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-30", "text": "$46538.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-01", "text": "$46094.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-02", "text": "$45853.94" },  
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-06", "text": "$45324.68" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-07", "text": "$45628.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-10", "text": "$46098.72" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-11", "text": "$45935.99" },  
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-14", "text": "$46057.17" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-15", "text": "$46526.58" },  
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-19", "text": "$46500.58" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-20", "text": "$46445.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-29", "text": "$47171.93" },  
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-02", "text": "$45923.61" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-03", "text": "$46854.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-04", "text": "$46377.5" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-05", "text": "$45440.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-08", "text": "$45875.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-09", "text": "$46439.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-10", "text": "$46040.72" },
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-15", "text": "$46406.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-20", "text": "$46332.85" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-21", "text": "$46454.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-26", "text": "$46183.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-27", "text": "$46328.65" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-28", "text": "$46788.68" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-29", "text": "$46501.24" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-30", "text": "$46568.88" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-04", "text": "$46230.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-05", "text": "$46393.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-06", "text": "$45624.45" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-07", "text": "$46112.78" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-08", "text": "$47134.22" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-09", "text": "$45963.66" },
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-15", "text": "$45819.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-16", "text": "$46412.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-17", "text": "$46783.52" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-18", "text": "$46314.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-19", "text": "$46267.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-25", "text": "$46348.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-26", "text": "$45826.14" },
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-31", "text": "$46191.56" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-01", "text": "$46227.24" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-02", "text": "$46415.92" },
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-12", "text": "$46827.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-13", "text": "$46001.77" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-14", "text": "$46874.71" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-15", "text": "$46634.13" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-16", "text": "$46300.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-17", "text": "$45945.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-28", "text": "$46190.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-29", "text": "$45940.5" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-30", "text": "$45950.27" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-31", "text": "$45915.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-01", "text": "$46157.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-02", "text": "$46855.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-03", "text": "$45855.27" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-11", "text": "$45640.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-12", "text": "$46555.35" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-13", "text": "$46627.76" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-14", "text": "$46615.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-15", "text": "$45805.05" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-16", "text": "$46630.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-17", "text": "$45981.71" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-18", "text": "$46399.43" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-19", "text": "$46914.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-26", "text": "$45646.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-27", "text": "$45550.98" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-28", "text": "$46321.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-29", "text": "$45571.36" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-30", "text": "$47048.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-01", "text": "$45808.59" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-02", "text": "$46967.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-03", "text": "$46564.64" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-10", "text": "$46725.07" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-11", "text": "$46400.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-12", "text": "$45553.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-13", "text": "$45403.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-14", "text": "$45918.26" },
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-20", "text": "$46807.96" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-21", "text": "$45796.07" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-22", "text": "$47283.38" },  
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-29", "text": "$46667.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-30", "text": "$45942.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-31", "text": "$46885.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-01", "text": "$46161.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-02", "text": "$45941.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-03", "text": "$46554.73" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-04", "text": "$46119.1" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-05", "text": "$47009.73" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-06", "text": "$47267.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-07", "text": "$46137.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-14", "text": "$45770.78" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-15", "text": "$45275.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-16", "text": "$46153.19" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-17", "text": "$46473.04" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-23", "text": "$47265.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-24", "text": "$46368.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-25", "text": "$45870.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-26", "text": "$46136.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-27", "text": "$46656.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-28", "text": "$46339.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-29", "text": "$45848.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-30", "text": "$47161.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-07", "text": "$46157.35" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-08", "text": "$46788.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-09", "text": "$46097.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-10", "text": "$46253.63" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-11", "text": "$45615.88" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-12", "text": "$46555.89" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-13", "text": "$46859.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-14", "text": "$46959.77" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-15", "text": "$45730.69" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-16", "text": "$46670.26" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-22", "text": "$46973.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-23", "text": "$46543.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-24", "text": "$47341.87" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-30", "text": "$45671.36" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-31", "text": "$45640.06" }  
                    ],
                    labels : [

  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-01", "text": "$46021.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-02", "text": "$46413.32" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-03", "text": "$45957.25" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-04", "text": "$45301.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-05", "text": "$46692.93" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-06", "text": "$45691.83" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-07", "text": "$46523.84" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-08", "text": "$46655.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-09", "text": "$45753.45" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-10", "text": "$46492.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-11", "text": "$45674.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-12", "text": "$45352.13" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-13", "text": "$46138.51" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-14", "text": "$45435.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-15", "text": "$46519.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-16", "text": "$45331.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-17", "text": "$45529.63" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-18", "text": "$46109.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-19", "text": "$46751.29" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-20", "text": "$46659.65" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-21", "text": "$46366.54" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-22", "text": "$46178.29" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-23", "text": "$46344.52" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-24", "text": "$45686.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-25", "text": "$46116.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-26", "text": "$46410.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-27", "text": "$46330.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-28", "text": "$46231.4" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-29", "text": "$46623.34" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-04-30", "text": "$46538.2" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-01", "text": "$46094.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-02", "text": "$45853.94" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-03", "text": "$46038.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-04", "text": "$46195.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-05", "text": "$46846.91" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-05-06", "text": "$45324.68" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-07", "text": "$45628.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-08", "text": "$46376.67" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-09", "text": "$46683.25" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-10", "text": "$46098.72" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-11", "text": "$45935.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-12", "text": "$46320.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-13", "text": "$45983.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-14", "text": "$46057.17" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-15", "text": "$46526.58" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-16", "text": "$46656.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-17", "text": "$45998.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-18", "text": "$45951.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-19", "text": "$46500.58" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-20", "text": "$46445.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-21", "text": "$45940.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-22", "text": "$45403.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-23", "text": "$46435.32" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-24", "text": "$45744.22" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-25", "text": "$46209.38" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-26", "text": "$45839.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-27", "text": "$46432.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-28", "text": "$46874.59" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-29", "text": "$47171.93" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-30", "text": "$46135.19" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-05-31", "text": "$46468.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-01", "text": "$45996.87" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-02", "text": "$45923.61" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-03", "text": "$46854.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-04", "text": "$46377.5" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-06-05", "text": "$45440.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-06", "text": "$46340.85" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-07", "text": "$45944.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-08", "text": "$45875.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-09", "text": "$46439.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-10", "text": "$46040.72" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-11", "text": "$46679.01" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-12", "text": "$46687.36" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-13", "text": "$46194.17" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-14", "text": "$46756.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-15", "text": "$46406.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-16", "text": "$45855.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-17", "text": "$47344.26" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-18", "text": "$45910.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-19", "text": "$46862.33" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-20", "text": "$46332.85" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-21", "text": "$46454.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-22", "text": "$46028.56" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-23", "text": "$46325.11" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-24", "text": "$46474.85" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-25", "text": "$46154.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-26", "text": "$46183.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-27", "text": "$46328.65" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-28", "text": "$46788.68" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-29", "text": "$46501.24" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-06-30", "text": "$46568.88" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-01", "text": "$45998.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-02", "text": "$46175.87" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-03", "text": "$46955.09" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-04", "text": "$46230.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-05", "text": "$46393.99" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-06", "text": "$45624.45" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-07", "text": "$46112.78" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-08", "text": "$47134.22" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-09", "text": "$45963.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-10", "text": "$46045.5" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-11", "text": "$46101.6" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-12", "text": "$46462.56" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-13", "text": "$46356.68" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-14", "text": "$46044.21" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-15", "text": "$45819.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-16", "text": "$46412.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-17", "text": "$46783.52" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-18", "text": "$46314.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-19", "text": "$46267.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-20", "text": "$45527.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-21", "text": "$46281.61" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-22", "text": "$46314.55" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-23", "text": "$46362.03" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-07-24", "text": "$45273.0" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-25", "text": "$46348.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-26", "text": "$45826.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-27", "text": "$46272.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-28", "text": "$46813.09" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-29", "text": "$46243.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-30", "text": "$46549.08" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-07-31", "text": "$46191.56" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-01", "text": "$46227.24" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-02", "text": "$46415.92" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-03", "text": "$46066.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-04", "text": "$46269.15" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-05", "text": "$46327.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-06", "text": "$46836.26" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-07", "text": "$46276.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-08", "text": "$45776.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-09", "text": "$46134.71" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-10", "text": "$46496.56" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-11", "text": "$46146.15" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-12", "text": "$46827.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-13", "text": "$46001.77" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-14", "text": "$46874.71" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-15", "text": "$46634.13" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-16", "text": "$46300.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-17", "text": "$45945.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-18", "text": "$46521.98" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-19", "text": "$46324.76" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-20", "text": "$46582.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-21", "text": "$46232.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-22", "text": "$46168.98" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-23", "text": "$46312.48" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-24", "text": "$47092.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-25", "text": "$46621.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-26", "text": "$46901.16" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-27", "text": "$46082.1" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-28", "text": "$46190.99" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-08-29", "text": "$45940.5" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-30", "text": "$45950.27" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-08-31", "text": "$45915.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-01", "text": "$46157.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-02", "text": "$46855.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-03", "text": "$45855.27" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-04", "text": "$45935.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-05", "text": "$46383.87" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-06", "text": "$46726.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-07", "text": "$46531.88" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-08", "text": "$45659.69" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-09", "text": "$46239.79" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-10", "text": "$46503.67" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-11", "text": "$45640.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-12", "text": "$46555.35" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-13", "text": "$46627.76" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-14", "text": "$46615.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-15", "text": "$45805.05" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-16", "text": "$46630.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-17", "text": "$45981.71" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-18", "text": "$46399.43" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-19", "text": "$46914.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-20", "text": "$47329.4" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-21", "text": "$46425.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-22", "text": "$46315.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-23", "text": "$47115.03" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-24", "text": "$46629.63" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-09-25", "text": "$45408.94" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-26", "text": "$45646.12" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-27", "text": "$45550.98" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-28", "text": "$46321.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-29", "text": "$45571.36" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-09-30", "text": "$47048.06" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-01", "text": "$45808.59" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-02", "text": "$46967.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-03", "text": "$46564.64" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-04", "text": "$45805.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-05", "text": "$45843.47" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-06", "text": "$45816.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-07", "text": "$45991.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-08", "text": "$45661.94" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-09", "text": "$46760.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-10", "text": "$46725.07" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-11", "text": "$46400.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-12", "text": "$45553.28" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-10-13", "text": "$45403.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-14", "text": "$45918.26" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-15", "text": "$46259.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-16", "text": "$45811.33" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-17", "text": "$46733.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-18", "text": "$47002.75" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-19", "text": "$46834.27" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-20", "text": "$46807.96" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-21", "text": "$45796.07" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-22", "text": "$47283.38" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-23", "text": "$46935.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-24", "text": "$46150.58" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-25", "text": "$46309.15" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-26", "text": "$46478.61" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-27", "text": "$46804.65" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-28", "text": "$47336.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-29", "text": "$46667.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-30", "text": "$45942.53" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-10-31", "text": "$46885.37" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-01", "text": "$46161.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-02", "text": "$45941.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-03", "text": "$46554.73" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-04", "text": "$46119.1" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-05", "text": "$47009.73" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-06", "text": "$47267.95" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-07", "text": "$46137.14" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-08", "text": "$46413.4" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-09", "text": "$46301.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-10", "text": "$46002.13" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-11", "text": "$45748.24" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-12", "text": "$46340.94" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-13", "text": "$46132.98" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-14", "text": "$45770.78" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-11-15", "text": "$45275.3" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-16", "text": "$46153.19" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-17", "text": "$46473.04" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-18", "text": "$47076.35" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-19", "text": "$47190.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-20", "text": "$46935.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-21", "text": "$45927.85" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-22", "text": "$46751.46" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-23", "text": "$47265.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-24", "text": "$46368.31" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-25", "text": "$45870.57" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-26", "text": "$46136.97" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-27", "text": "$46656.28" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-28", "text": "$46339.74" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-29", "text": "$45848.23" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-11-30", "text": "$47161.9" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-01", "text": "$46120.43" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-02", "text": "$46661.15" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-03", "text": "$46342.05" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-04", "text": "$46450.05" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-05", "text": "$46038.38" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-06", "text": "$46568.8" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-07", "text": "$46157.35" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-08", "text": "$46788.86" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-09", "text": "$46097.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-10", "text": "$46253.63" }, 
  { "Procedure": "Total knee replacement", "color": "#007aff", "d": "2019-12-11", "text": "$45615.88" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-12", "text": "$46555.89" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-13", "text": "$46859.42" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-14", "text": "$46959.77" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-15", "text": "$45730.69" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-16", "text": "$46670.26" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-17", "text": "$46671.18" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-18", "text": "$45722.02" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-19", "text": "$47132.5" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-20", "text": "$47297.66" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-21", "text": "$45995.93" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-22", "text": "$46973.7" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-23", "text": "$46543.81" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-24", "text": "$47341.87" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-25", "text": "$46503.54" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-26", "text": "$45944.43" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-27", "text": "$45818.58" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-28", "text": "$46139.75" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-29", "text": "$46961.05" }, 
  { "Procedure": "Total knee replacement", "color": "#f13f77", "d": "2019-12-30", "text": "$45671.36" }, 
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
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-05", "text": "$1926.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-06", "text": "$1854.15" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-07", "text": "$1877.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-08", "text": "$1890.41" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-09", "text": "$1785.58" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-10", "text": "$1953.82" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-11", "text": "$1855.33" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-12", "text": "$1879.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-13", "text": "$1923.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-14", "text": "$1770.72" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-15", "text": "$1931.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-16", "text": "$1899.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-17", "text": "$1837.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-18", "text": "$1805.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-19", "text": "$1871.09" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-20", "text": "$1894.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-21", "text": "$1862.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-22", "text": "$1922.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-23", "text": "$1988.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-24", "text": "$1825.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-25", "text": "$1905.9" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-26", "text": "$1903.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-27", "text": "$1853.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-28", "text": "$1846.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-29", "text": "$1853.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-30", "text": "$1826.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-01", "text": "$1939.92" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-02", "text": "$1793.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-03", "text": "$1840.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-06", "text": "$1818.25" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-07", "text": "$1865.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-08", "text": "$1864.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-09", "text": "$1907.12" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-16", "text": "$1841.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-17", "text": "$1922.94" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-21", "text": "$1795.08" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-22", "text": "$1888.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-23", "text": "$1829.78" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-28", "text": "$1825.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-29", "text": "$1969.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-30", "text": "$1941.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-02", "text": "$1771.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-03", "text": "$1876.34" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-04", "text": "$1876.1" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-05", "text": "$1903.1" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-10", "text": "$1819.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-11", "text": "$1797.6" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-14", "text": "$1832.17" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-17", "text": "$1869.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-18", "text": "$1864.46" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-19", "text": "$1922.2" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-24", "text": "$1911.66" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-25", "text": "$1974.08" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-26", "text": "$1882.66" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-30", "text": "$1943.89" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-01", "text": "$1879.26" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-05", "text": "$1801.3" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-06", "text": "$1782.99" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-10", "text": "$1938.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-11", "text": "$1852.44" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-12", "text": "$1889.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-18", "text": "$1908.28" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-19", "text": "$1832.16" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-20", "text": "$1929.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-21", "text": "$1919.95" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-25", "text": "$1912.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-26", "text": "$1820.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-27", "text": "$1853.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-28", "text": "$1862.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-01", "text": "$1886.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-04", "text": "$1922.16" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-05", "text": "$1880.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-06", "text": "$1834.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-07", "text": "$1808.6" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-08", "text": "$1826.52" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-09", "text": "$1946.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-10", "text": "$1760.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-17", "text": "$1861.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-18", "text": "$1893.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-19", "text": "$1861.95" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-20", "text": "$1834.42" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-25", "text": "$1848.82" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-26", "text": "$1899.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-27", "text": "$1826.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-01", "text": "$1872.58" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-02", "text": "$1887.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-03", "text": "$1834.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-04", "text": "$1766.22" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-10", "text": "$1942.23" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-15", "text": "$1858.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-16", "text": "$1919.13" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-17", "text": "$1808.84" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-18", "text": "$1814.78" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-23", "text": "$1875.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-24", "text": "$1870.36" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-29", "text": "$1923.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-30", "text": "$1947.36" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-06", "text": "$1997.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-07", "text": "$1850.61" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-13", "text": "$1829.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-14", "text": "$1816.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-19", "text": "$1935.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-20", "text": "$1868.53" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-21", "text": "$1917.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-22", "text": "$1929.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-23", "text": "$1874.88" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-24", "text": "$1932.18" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-30", "text": "$1904.12" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-05", "text": "$1834.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-06", "text": "$1832.43" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-13", "text": "$1943.71" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-14", "text": "$1828.96" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-20", "text": "$1883.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-21", "text": "$1867.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-22", "text": "$1871.7" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-23", "text": "$1893.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-24", "text": "$1932.49" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-25", "text": "$1864.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-26", "text": "$1815.69" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-27", "text": "$1833.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-28", "text": "$1865.43" },
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-04", "text": "$1755.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-05", "text": "$1911.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-06", "text": "$1904.27" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-13", "text": "$1758.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-14", "text": "$1866.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-15", "text": "$1855.42" },  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-21", "text": "$1901.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-22", "text": "$1906.3" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-23", "text": "$1780.31" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-30", "text": "$1931.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-31", "text": "$1782.75" }
  
                    ],
                    labels : [                                 
                        
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-01", "text": "$1810.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-02", "text": "$1849.75" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-03", "text": "$1847.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-04", "text": "$1832.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-05", "text": "$1926.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-06", "text": "$1854.15" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-07", "text": "$1877.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-08", "text": "$1890.41" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-09", "text": "$1785.58" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-10", "text": "$1953.82" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-11", "text": "$1855.33" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-12", "text": "$1879.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-13", "text": "$1923.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-14", "text": "$1770.72" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-15", "text": "$1931.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-16", "text": "$1899.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-17", "text": "$1837.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-18", "text": "$1805.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-19", "text": "$1871.09" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-20", "text": "$1894.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-21", "text": "$1862.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-22", "text": "$1922.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-23", "text": "$1988.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-24", "text": "$1825.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-25", "text": "$1905.9" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-26", "text": "$1903.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-27", "text": "$1853.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-28", "text": "$1846.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-29", "text": "$1853.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-04-30", "text": "$1826.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-01", "text": "$1939.92" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-02", "text": "$1793.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-03", "text": "$1840.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-04", "text": "$1790.89" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-05", "text": "$1855.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-06", "text": "$1818.25" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-07", "text": "$1865.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-08", "text": "$1864.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-09", "text": "$1907.12" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-10", "text": "$1872.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-11", "text": "$1870.88" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-12", "text": "$1895.57" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-05-13", "text": "$1788.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-14", "text": "$1890.89" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-15", "text": "$1869.01" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-16", "text": "$1841.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-17", "text": "$1922.94" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-18", "text": "$1900.43" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-19", "text": "$1985.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-20", "text": "$1908.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-21", "text": "$1795.08" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-22", "text": "$1888.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-23", "text": "$1829.78" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-24", "text": "$1850.71" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-25", "text": "$1928.13" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-26", "text": "$1909.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-27", "text": "$1871.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-28", "text": "$1825.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-29", "text": "$1969.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-30", "text": "$1941.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-05-31", "text": "$1834.74" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-01", "text": "$1856.27" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-06-02", "text": "$1771.21" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-03", "text": "$1876.34" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-04", "text": "$1876.1" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-05", "text": "$1903.1" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-06-06", "text": "$1856.08" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-07", "text": "$1890.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-08", "text": "$1863.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-09", "text": "$1942.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-10", "text": "$1819.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-11", "text": "$1797.6" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-12", "text": "$1819.55" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-13", "text": "$1962.52" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-14", "text": "$1832.17" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-15", "text": "$1856.97" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-16", "text": "$1887.67" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-17", "text": "$1869.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-18", "text": "$1864.46" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-19", "text": "$1922.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-20", "text": "$1799.5" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-21", "text": "$1832.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-22", "text": "$1891.78" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-23", "text": "$1914.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-24", "text": "$1911.66" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-25", "text": "$1974.08" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-26", "text": "$1882.66" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-27", "text": "$1926.24" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-28", "text": "$1846.84" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-29", "text": "$1834.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-06-30", "text": "$1943.89" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-01", "text": "$1879.26" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-02", "text": "$1940.18" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-03", "text": "$1889.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-04", "text": "$1888.48" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-05", "text": "$1801.3" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-06", "text": "$1782.99" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-07", "text": "$1892.44" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-08", "text": "$1872.34" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-09", "text": "$1819.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-10", "text": "$1938.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-11", "text": "$1852.44" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-12", "text": "$1889.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-13", "text": "$1932.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-14", "text": "$1816.38" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-15", "text": "$1788.92" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-16", "text": "$1880.62" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-17", "text": "$1808.96" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-18", "text": "$1908.28" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-19", "text": "$1832.16" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-20", "text": "$1929.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-21", "text": "$1919.95" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-22", "text": "$1959.15" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-23", "text": "$1955.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-24", "text": "$1952.34" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-25", "text": "$1912.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-26", "text": "$1820.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-27", "text": "$1853.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-28", "text": "$1862.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-29", "text": "$1913.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-30", "text": "$1818.24" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-07-31", "text": "$1910.29" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-01", "text": "$1886.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-02", "text": "$1848.68" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-03", "text": "$1917.23" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-04", "text": "$1922.16" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-05", "text": "$1880.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-06", "text": "$1834.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-07", "text": "$1808.6" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-08", "text": "$1826.52" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-09", "text": "$1946.35" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-08-10", "text": "$1760.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-11", "text": "$1920.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-12", "text": "$1961.02" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-13", "text": "$1893.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-14", "text": "$1827.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-15", "text": "$1861.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-16", "text": "$1795.35" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-17", "text": "$1861.86" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-18", "text": "$1893.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-19", "text": "$1861.95" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-20", "text": "$1834.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-21", "text": "$1907.94" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-22", "text": "$1902.02" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-23", "text": "$1916.1" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-24", "text": "$1895.23" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-25", "text": "$1848.82" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-26", "text": "$1899.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-27", "text": "$1826.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-28", "text": "$1822.41" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-29", "text": "$1829.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-30", "text": "$1878.44" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-08-31", "text": "$1847.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-01", "text": "$1872.58" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-02", "text": "$1887.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-03", "text": "$1834.19" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-04", "text": "$1766.22" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-05", "text": "$1860.01" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-06", "text": "$1833.83" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-07", "text": "$1932.51" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-08", "text": "$1829.48" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-09", "text": "$1783.49" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-10", "text": "$1942.23" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-11", "text": "$1833.75" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-12", "text": "$1924.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-13", "text": "$1859.29" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-14", "text": "$1843.39" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-15", "text": "$1858.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-16", "text": "$1919.13" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-17", "text": "$1808.84" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-18", "text": "$1814.78" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-09-19", "text": "$1765.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-20", "text": "$1937.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-21", "text": "$1892.33" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-22", "text": "$1802.88" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-23", "text": "$1875.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-24", "text": "$1870.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-25", "text": "$1854.22" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-26", "text": "$1893.8" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-27", "text": "$1858.76" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-28", "text": "$1891.54" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-29", "text": "$1923.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-09-30", "text": "$1947.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-01", "text": "$1826.34" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-02", "text": "$1952.33" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-10-03", "text": "$1804.53" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-04", "text": "$1888.69" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-05", "text": "$1971.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-06", "text": "$1997.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-07", "text": "$1850.61" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-08", "text": "$1863.62" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-09", "text": "$1875.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-10", "text": "$1889.95" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-11", "text": "$1810.23" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-12", "text": "$1865.99" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-13", "text": "$1829.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-14", "text": "$1816.37" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-15", "text": "$1960.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-16", "text": "$1882.61" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-17", "text": "$1842.32" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-18", "text": "$1845.27" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-19", "text": "$1935.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-20", "text": "$1868.53" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-21", "text": "$1917.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-22", "text": "$1929.65" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-23", "text": "$1874.88" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-24", "text": "$1932.18" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-25", "text": "$1815.12" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-26", "text": "$1894.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-27", "text": "$1895.77" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-28", "text": "$1866.76" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-29", "text": "$1850.56" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-30", "text": "$1904.12" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-10-31", "text": "$1825.43" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-01", "text": "$1846.4" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-02", "text": "$1891.16" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-03", "text": "$1847.25" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-11-04", "text": "$1761.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-05", "text": "$1834.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-06", "text": "$1832.43" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-07", "text": "$1832.18" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-08", "text": "$1929.88" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-09", "text": "$1851.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-10", "text": "$1904.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-11", "text": "$1895.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-12", "text": "$1939.63" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-13", "text": "$1943.71" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-14", "text": "$1828.96" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-15", "text": "$1841.07" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-16", "text": "$1980.5" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-17", "text": "$1946.15" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-18", "text": "$1903.03" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-19", "text": "$1826.0" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-20", "text": "$1883.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-21", "text": "$1867.59" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-22", "text": "$1871.7" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-23", "text": "$1893.05" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-24", "text": "$1932.49" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-25", "text": "$1864.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-26", "text": "$1815.69" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-27", "text": "$1833.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-28", "text": "$1865.43" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-29", "text": "$1830.79" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-11-30", "text": "$1830.09" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-01", "text": "$1855.77" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-02", "text": "$1859.09" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-03", "text": "$1908.57" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2019-12-04", "text": "$1755.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-05", "text": "$1911.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-06", "text": "$1904.27" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-07", "text": "$1805.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-08", "text": "$1897.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-09", "text": "$1865.97" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-10", "text": "$1903.17" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-11", "text": "$1887.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-12", "text": "$1789.67" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-13", "text": "$1758.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-14", "text": "$1866.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-15", "text": "$1855.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-16", "text": "$1849.81" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-17", "text": "$1843.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-18", "text": "$1866.33" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-19", "text": "$1814.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-20", "text": "$1866.67" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-21", "text": "$1901.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-22", "text": "$1906.3" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-23", "text": "$1780.31" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-24", "text": "$1851.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-25", "text": "$1828.45" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-26", "text": "$1902.56" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-27", "text": "$1833.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-28", "text": "$1870.28" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-29", "text": "$1936.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-30", "text": "$1931.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2019-12-31", "text": "$1782.75" },
  
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-01", "text": "$1855.77" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-02", "text": "$1859.09" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-03", "text": "$1908.57" }, 
  {"Procedure": "Vasectomy", "color": "#007aff", "d": "2020-01-04", "text": "$1755.14" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-05", "text": "$1911.11" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-06", "text": "$1904.27" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-07", "text": "$1805.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-08", "text": "$1897.93" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-09", "text": "$1865.97" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-10", "text": "$1903.17" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-11", "text": "$1887.36" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-12", "text": "$1789.67" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-13", "text": "$1758.91" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-14", "text": "$1866.47" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-15", "text": "$1855.42" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-16", "text": "$1849.81" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-17", "text": "$1843.06" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-18", "text": "$1866.33" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-19", "text": "$1814.64" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-20", "text": "$1866.67" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-21", "text": "$1901.2" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-22", "text": "$1906.3" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-23", "text": "$1780.31" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-24", "text": "$1851.73" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-25", "text": "$1828.45" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-26", "text": "$1902.56" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-27", "text": "$1833.85" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-28", "text": "$1870.28" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-29", "text": "$1936.98" }, 
  {"Procedure": "Vasectomy", "color": "#f13f77", "d": "2020-01-30", "text": "$1931.14" }, 
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