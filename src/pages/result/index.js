import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Row, Col, Card,ListGroup, Button,Badge ,Tab, Nav} from "react-bootstrap";

import classNames from "classnames";
// components
import PageTitle from "../../components/PageTitle";
import { PieChart } from "react-minimal-pie-chart";
import "../../assets/css/result.css";
// dummy data
import Sad1 from "../../assets/images/sad1.webp";
import Sad2 from "../../assets/images/sad2.webp";
import Sad3 from "../../assets/images/sad3.webp";
import Happy1 from "../../assets/images/happy1.webp";
import Happy2 from "../../assets/images/happy2.webp";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer } from 'recharts';
// main component
  const Result = () => {
    const location=useLocation();
    let  data  = location.state.arrayvaluesch;
console.log(location.state.arrayvaluesch,data,"fromHome")

let navbarCssClasses="";
function setProgress(percent) {
  const p = 180 - (percent / 100) * 180;
   navbarCssClasses = `rotate(-${p}deg)`;
}
let progress = "";
if(data.Restful==="Moderate")
{
  progress = 70;
  setProgress(progress);
}
else if(data.Restful==="Not Very")
{
  progress = 35;
  setProgress(progress);
}
else if(data.Restful==="Very"){
  progress = 100;
  setProgress(progress);
}

const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');

const moodmoderator = [
  { value: "sad1", label: "Sad1",image:Sad1 },
  { value: "sad2", label: "Sad2",image:Sad2 },
  { value: "sad3", label: "Sad3",image:getBase64StringFromDataURL(Sad3) },
  { value: "happy1", label: "Happy1",image:Happy1 },
  { value: "happy2", label: "Happy2",image:Happy2 },
];
const moodfil = moodmoderator.filter(x => x.label === data.mood[0]);
console.log(moodmoderator,moodfil,"moodfil")
  /*
   * search product by name
   */

  //water

  const bottle = data.bottle * 1000;
  const glass = data.glass * 1000;
  const can = data.watercane * 1000;
  const jug = data.waterjug * 1000;

  const bardata = [
    {
      name: 'Water Consumption(in ml)',
      jug: jug,
      can: can,
      glass:glass,
      bottle:bottle,
      amt: 2400,
    },
  ];



 
  return (
    <React.Fragment>
      <PageTitle
        breadCrumbItems={[
        { label: "Program Details", path: "/Programs/programdetails" },
          { label: "Result", path: "", active: true },
        ]}
        title={"Result"}
      />
 <div className="content" style={{height:"890px !important"}}>

        
            <div className="row justify-content-center card align-items-center d-none d-xl-block">
            <div className="py-3 col-xl-12 col-md-6 justify-content-center d-flex gap-4">
              
                            <div className="product-box">
                <div className="card-body">
                  <div className="bg-light">
                  </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                        <div className="col"><h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Daily Consumption</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>
 
                          {data.breads ?(
 <p><span className="fw-bold">Bread:&nbsp;</span>{data.breads}</p> 
                          ):(
<p></p>
                          )}
{data.eggs ?( 
 <p><span className="fw-bold">Egg:&nbsp;</span>{data.eggs}</p>
                          ):(
<p></p>
                          )}

{data.nuts ?( 
  <p><span className="fw-bold">Nuts:&nbsp;</span>{data.nuts}</p>
                          ):(
<p></p>
                          )}

{data.roti ?( 
  <p><span className="fw-bold">Roti:&nbsp;</span>{data.roti}</p>
                          ):(
<p></p>
                          )}
{data.fruits ?( 
    <p><span className="fw-bold">Fruits:&nbsp;</span>{data.fruits}</p> 
                          ):(
<p></p>
                          )}

{data.veg ?( 
    <p><span className="fw-bold">Vegetables:&nbsp;</span>{data.veg}</p>
                          ):(
<p></p>
                          )}

{data.dairy ?( 
   <p><span className="fw-bold">Dairy:&nbsp;</span>{data.dairy}</p>
                          ):(
<p></p>
                          )}
                         
                         {data.drinks ?( 
   <p><span className="fw-bold">Drinks:&nbsp;</span>{data.drinks}</p>
                          ):(
<p></p>
                          )}   
                          </div>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Water Consumption</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>
                          {data.glass ?( 
    <p><span className="fw-bold">Glass:&nbsp;</span>{data.glass}</p>
                          ):(
<p></p>
                          )}  

{data.bottle ?( 
    <p><span className="fw-bold">Bottle:&nbsp;</span>{data.bottle}</p>
                          ):(
<p></p>
                          )}  

{data.watercane ?( 
    <p><span className="fw-bold">Water Cane:&nbsp;</span>{data.watercane}</p>
                          ):(
<p></p>
                          )} 

{data.waterjug ?( 
      <p><span className="fw-bold">Water Jug:&nbsp;</span>{data.waterjug}</p>
                          ):(
<p></p>
                          )} 
                          
                         
                        
                         
                          </div>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Symptom Tracker</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>
                          {data.Bloating ?( 
       <p><span className="fw-bold">Bloating:&nbsp;</span>{data.Bloating}</p>
                          ):(
<p></p>
                          )} 
                          {data.Gas ?( 
        <p><span className="fw-bold">Gas:&nbsp;</span>{data.Gas}</p>
                          ):(
<p></p>
                          )} 
                        
                        {data.Movement ?( 
      <p><span className="fw-bold">Movements:&nbsp;</span>{data.Movement}</p>
                          ):(
<p></p>
                          )} 

                         
                          </div>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                    </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                        <div className="col">
                      <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Mood Moderator</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          {data.mood!="" ?( 
       <p><span className="fw-bold">Mood:&nbsp;</span>{data.mood}</p>
                          ):(
<p></p>
                          )}

                         
                          </div>
                       
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                    </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                        <div className="col">
                        <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Sleep Survey</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>
                          {data.Restful ?( 
        <p><span className="fw-bold">Restful:&nbsp;</span>{data.Restful}</p>
                          ):(
<p></p>
                          )}
                        
                      
                          </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            
            </div>
           
            </div>

            <div className="row justify-content-center card align-items-center d-xl-none d-md-none">
            <div className="py-3 col-xl-12 col-md-6 justify-content-center">
              
                            <div className="col-xl-2">
                            <div className="product-box">
                <div className="card-body">
                  <div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                      <div className="col"><h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Daily Consumption</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          <p><span className="fw-bold">Bread:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Egg:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Nuts:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Roti:</span>&nbsp;33</p>
                          </div>
                        
                            </div>
                            </div>
                            </div>
                            </div>
                            </div></div>
                            <div className="col-xl-2">
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                      <div className="col">
                         <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Water Consumption</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          <p><span className="fw-bold">Glass:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Bottle:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Water Cane:</span>&nbsp;33</p>
                          <p><span className="fw-bold">Water Jug:</span>&nbsp;33</p>
                          </div>
                        
                            </div>
                            </div>
                            </div>
                            </div>
                            </div></div>
                            <div className="col-xl-2">
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                      <div className="col">
                         <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Symptom Tracker</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          <p><span className="fw-bold">Bloating:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Gas:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Movements:&nbsp;</span>&nbsp;33</p>
                         </div>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div></div>
                            <div className="col-xl-2">
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                 </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                      <div className="col">
                       <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Mood Moderator</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          <p><span className="fw-bold">Sad:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Sad1:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Sad2:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Happy1:&nbsp;</span>&nbsp;33</p>
                          <p><span className="fw-bold">Happy2:&nbsp;</span>&nbsp;33</p>
                          </div>
                        
                            </div>
                            </div>
                            </div>
                            </div>
                            </div></div>
                            <div className="col-xl-2">
                            <div className="product-box">
                <div className="card-body"
                ><div className="bg-light">
                  </div><div className="product-info pt-0">
                      <div className="row align-items-center">
                      <div className="col">
                         <h5 className="font-16 mt-0">
                          <a className="text-dark" href="/apps/ecommerce/product-details">Sleep Survey</a>
                          </h5>
                          <hr className="my-2"/>
                          <div>

                          <p><span className="fw-bold">Restful:</span>&nbsp;33</p>
                          </div>
                         
                            </div>
                            </div>
                            </div>
                            </div>
                            </div></div>
                            
            </div>
           </div>
            </div>
          
    </React.Fragment> 
  );
};

export default Result;
