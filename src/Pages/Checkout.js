import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Prices from '../Data/PackagesData';



const Checkout = () => {

    const params = useParams()

    const Package = Prices.find(x => x.id == params.id)


    const [qnty , setQnty] = useState(1)

    function Increment(){
        setQnty(qnty+1)
    }
    function Decrement(){
      if (qnty>1) {
        setQnty(qnty-1)
      }
    }


    return (
        <div>
            <div className=" container-fluid my-5 ">
                <div className="row justify-content-center ">
                    <div className="col-xl-10">
                        <div className="card shadow-lg ">
                            <div className="row  mx-auto justify-content-center text-center">
                                <div className="col-12 mt-3 "></div>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-md-5" style={{height:"600px"}}>
                                    <div className="card border-0" style={{marginTop:"35px"}}>
                                        <div className="card-header pb-0">
                                            <h2 className="card-title space ">Checkout</h2>
                                            <p className="card-text text-muted mt-4  space">PACKAGE DETAILS</p>
                                            <hr className="my-0" />
                                        </div>
                                        <div className="card-body">
                                           
                                            <div className="row mt-4">
                                                <div className="col"><p className="text-muted mb-2">PAYMENT DETAILS</p><hr className="mt-0" /></div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="NAME" className="small text-muted mb-1">NAME ON CARD</label>
                                                <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="BBBootstrap Team" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="NAME" className="small text-muted mb-1">CARD NUMBER</label>
                                                <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="4534 5555 5555 5555" />
                                            </div>
                                            <div className="row no-gutters">
                                                <div className="col-sm-6 pr-sm-2">
                                                    <div className="form-group">
                                                        <label htmlFor="NAME" className="small text-muted mb-1">VALID THROUGH</label>
                                                        <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="06/21" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="NAME" className="small text-muted mb-1">CVC CODE</label>
                                                        <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder={183} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-md-5">
                                                <div className="col">
                                                    <button type="button" name id className="GrandTotal btn btn-lg ">Grand Total: ${Package.price * qnty}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="card border-0 " style={{marginTop:"35px"}}>
                                        <div className="card-header card-2">
                                            <p className="card-text text-muted mt-md-4  mb-2 space">YOUR ORDER</p>
                                            <hr className="my-2" />
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row  justify-content-between">
                                                <div className="col-auto col-md-7">
                                                    <div className="media flex-column flex-sm-row">
                                                        <img className=" img-fluid" src={Package.image} width={62} height={62} />
                                                        <div className="media-body  my-auto">
                                                            <div className="row ">
                                                                <div className="col-auto"><p className="mb-0"><b>{Package.title}</b></p><small className="text-muted">{Package.subTitle}</small></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" pl-0 flex-sm-col col-auto  my-auto"> 
                                                <button onClick={Decrement} className='btn btn-dark btn-sm mx-1'>-</button>
                                                {qnty}
                                                <button onClick={Increment} className='btn btn-dark btn-sm mx-1'>+</button>
                                                </div>
                                                </div>
                                                <div className=" p-2 flex-sm-col col-auto"><p className='fs-5'><b>${Package.price}</b></p></div>
                                                
                                                <div className="row mb-5 mt-4 ">
                                                <div className="col-md-7 col-lg-6 mx-auto"><button type="button" className="AddGift btn btn-block btn-lg">ADD GIFT CODE</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Checkout;
