import { put, takeLatest, all } from 'redux-saga/effects';


function* fetchslot() {
   
//    const json =  yield fetch('http://localhost:3000/data/table-form_meds-view-data.json')
//     .then(response => {
//         console.log(JSON.stringify(response));
//      } )
//      .catch((err) => {
//          console.log("Api call failed: "+JSON.response(err, null, 4));
//      }); 
var now = new Date();
  yield put({ type: "DATA_RECEIVED", data: {
      
    marked : [ 
                
        { d: new Date(now.getFullYear(), now.getMonth(), 29), 
            "color": '#7e56bd',
            "Procedure":"Inguinal hernia", 
            "Discharge Time (Hours)":"12 hrs",
            "OTUtility(%)":48,
            "Staff Occ(%)":43,
            "bed occu(%)":53,
            "MRPrice($)":7743,
            "overall Discount":"10%",
            "total discount":774.3,
            "Actual Price":6968.7
          },
          { d: new Date(now.getFullYear(), now.getMonth(), 29), "color": '#7e56bd',
          "Procedure":"Inguinal hernia",
          "Discharge Time (Hours)":"12 hrs",
          "OTUtility(%)":48,
          "Staff Occ(%)":43,
          "bed occu(%)":53,
          "MRPrice($)":7743,
          "overall Discount":"10%",
          "total discount":774.3,
          "Actual Price":6968.7
        },
        { d: new Date(now.getFullYear(), now.getMonth(), 19), color: '#8dec7d',
        "Procedure":"Inguinal hernia",
        "Discharge Time (Hours)":"12 hrs",
        "OTUtility(%)":48,
        "Staff Occ(%)":43,
        "bed occu(%)":53,
        "MRPrice($)":7743,
        "overall Discount":"10%",
        "total discount":774.3,
        "Actual Price":6968.7 
    }
    ]
    
}
 });
}
function* actionWatcher() {
     yield takeLatest('jsonDataType', fetchslot)
}

export default function* rootSaga() {
   yield all([
        actionWatcher(),
   ]);
}