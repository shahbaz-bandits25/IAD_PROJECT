import React, {Component} from 'react';
import SidePanels from '../sidePanel/SidePanels';
import HotelsCard from '../Card/Cards';
import classes from './HotelsPage.module.css';
import { MDBContainer,MDBRow, MDBCol} from "mdbreact";
import IMAGES from './images';
import axios from 'axios';


class AllHotels extends Component {
    constructor(){

    
     super()


    this.state= {
        sidePanels: [

            {'id':0,'name':' FACILITIES'},
            {'id':1,'name':' Pet allowed', 'icon':'fas fa-paw','icon1':'check'},
            {'id':2,'name':' Wifi' , 'icon':'fas fa-wifi','icon1':'check'},
            {'id':3,'name':' Spa' , 'icon':'fas fa-spa','icon1':'check'},
            {'id':4,'name':' Restaurant' , 'icon':'fas fa-concierge-bell','icon1':'check '},
            {'id':5,'name':' Pool', 'icon':'fa fa-swimming-pool','icon1':'check '},
            {'id':6,'name':' Parking', 'icon':'fas fa-parking','icon1':'check' },
            {'id':7,'name':' Fitness center', 'icon':'fas fa-dumbbell','icon1':'check '},
            
                
                ],

         districtNames: [
            {'name':'Paris Center'},
            {'name':'La Defance'},
            {'name':'Latin Quarter'}
        ],

         TitleName: 'District/Area',
       

         cardData: []
    }
}


componentDidMount() {
    axios.get(`http://localhost:8080/allhotels`)
      .then(res => {
        this.setState({cardData: res.data})
      })
    }

    render(){
        const {sidePanels, districtNames, TitleName, cardData } = this.state
        
    return(

       
        <MDBContainer fluid >
        <MDBRow>       
            <MDBCol md="4">
                <div className={classes.sidePanel}>
                    <SidePanels 
                        sidepanel={sidePanels} 
                        districtName={districtNames}
                        titleName={TitleName}
                        show={true}/>            
                </div>
            </MDBCol>
            <MDBCol md="8">
            {/* <div style={{backgroundColor:"red", height:'90vh', flexGrow:"10"}}/> */}
            <div className={classes.resCard}>
            <HotelsCard 
            CardData={cardData}
            imagesrc= {IMAGES}
             lightName='TOUR'/>
            </div>
            </MDBCol>

        </MDBRow>
        </MDBContainer>
    )
}
}



export default AllHotels;