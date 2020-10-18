import React from 'react';
import App from './App'
import Map from './Map'
import RequestCard from './RequestCard'
import HeaderBar from './HeaderBar'

import './App.css';

import firebase from './firebase.js';
import { getContrastRatio } from '@material-ui/core';

function MainApp() {


    let cards_arr = []
    let my_keys = []
  
    firebase.database().ref('request_or_donation').on('value',(snap)=>{
        //console.log(snap.val());               

        //database_value = snap.val()

        // loop through this objec
        //      For each thing in the object, add a component to the array 
        //      with the new passed down properties
        
    });

    var ref = firebase.database().ref('request_or_donation')
    ref.once('value',function(snap) {
        snap.forEach(function(item) {
            var itemVal = item.val();
            my_keys.push(itemVal);

            cards_arr.push(<RequestCard name={itemVal.request_name} description={itemVal.items}/>)
            
        });
    })

    console.log(cards_arr)

      
    // console.log(my_keys)
    
    // console.log("len: " + Object.keys(my_keys).length)
    // console.log(my_keys)

    // for (let i=0; i<keys.length; i++) {
    //     console.log('hello')
    //     console.log(i)
    //     let item = keys[i]
    //     cards_arr.push(<RequestCard key={i} name={item.request_name} description={item.items}/>)
    // }

    // cards_arr = my_keys.map((element) => element.donate)

    console.log(cards_arr)

    let test_arr = []
    test_arr.push(<RequestCard location="Georgia Tech" description="Fresh groceries and bread" donate={true}/>)
    test_arr.push(<RequestCard location="First Harvest Food Bank" description="Milk, water, vegetables" request = {true}/>)

    console.log(test_arr)

    return (
        <div>
            <HeaderBar />
            <div className='main-app'>
            
            <div className='map-button'>
                <Map />
            </div>
            <div className='cards'>
                {test_arr}
            </div>
            <div className='login-request'>
                <App />
            </div>
            
            
        </div>
        </div>
        
    )
      
}

export default MainApp;
