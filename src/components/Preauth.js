import React from 'react'

function Preauth() {


    
    return (

        <div>
            <br></br><h1><center> Preauthauthorization Request Form</center></h1><br></br>

        <div className='preauth row'><br></br><br></br>
            <div className="col-lg-4">
                <br></br>
                <label className="LabelClass">Reference Number</label>
                <input type="text" placeholder="Enter reference number" class="form-control form-control-sm" required></input>
                <br></br>
                <label className="LabelClass">Admission Type</label>
                <select class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}>
                    <option value = "sender" selected disabled hidden>Select Type</option> 
                    <option value = "Planned">Planned</option> 
                    <option value = "Emergency">Emergency</option> 
                    <option value = "Accident">Accident</option> 
                    <option value = "Maternity">Maternity</option> 
                </select>
                <br></br><br></br><br></br>
                <label className="LabelClass">Gender</label>
                <select class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}>
                    <option value = "sender" selected disabled hidden>Select Gender</option> 
                    <option value = "Male">Male</option> 
                    <option value = "Female">Female</option>                 
                </select>
                <br></br>
                <label className="LabelClass">Address</label>
                <textarea class="form-control form-control-sm" rows="4" placeholder = "Enter address" name = 'address' required style={{resize: "None", fontSize: "20px", width: "350px"}}></textarea>

                <br></br>        
                <label className="LabelClass">Doctor</label>
                <input type="text" placeholder="Enter Name" name="Doctor" class="form-control form-control-sm" required></input>
           </div> 

           <div className="col-lg-4">
                <br></br>
                <label className="LabelClass">Policy Number</label>
                <input type="text" placeholder="Enter policy no." class="form-control form-control-sm" required></input>
                <br></br>
                <label className="LabelClass">Patient</label>
                <input type="text" class="form-control form-control-sm" placeholder="First Name" required></input>
                <div className='row'>
                    <div className="col-lg-2">
                      <input type="text" style={{width: "317%"}} class="form-control form-control-sm" placeholder="Middle Name" required></input>
                    </div>
                    <div className="col-lg-2">
                      <input type="text" style={{width: "322%", marginLeft: "80px"}} class="form-control form-control-sm" placeholder="Surname" required></input>
                    </div>
                </div>
                <br></br>   
                <label  className="LabelClass" style={{marginTop: "10px"}}>D.O.B</label>
                <input type="date" class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}></input>
                
                <br></br>
                <label className="LabelClass">City</label>
                <input type="text" class="form-control form-control-sm" name='city' placeholder="Enter City" required></input>
                <br></br>
                <label className="LabelClass">Pincode</label>
                <input type="text" class="form-control form-control-sm" name='pincode' placeholder="Enter Pincode" required></input>

                <br></br>
                <label className="LabelClass">Date of Admission</label>
                <input type="date" class="form-control form-control-sm" name='DOA' style={{width: "300px", height: "43px", fontSize: "20px"}} required></input>
           
           </div> 

           <div className="col-lg-4">
                <br></br>
                <label className="LabelClass">Insurance Company</label>
                <select class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}>
                    <option value = "sender" selected disabled hidden>Select Company</option> 
                    <option value = "Birla">Aditya Birla Health Insurance Co. Ltd.</option> 
                    <option value = "Bajaj">Bajaj Allianz General Insurance Co. Ltd.</option> 
                    <option value = "CareHealth">Care Health Insurance Ltd.</option>   
                    <option value = "DHFL">DHFL Insurance General Insurance Co. Ltd.</option> 
                    <option value = "HDFC_ERGO" >HDFC ERGO General Insurance Co. Ltd.</option> 
                    <option value = "HDFC_LIFE" >HDFC Life Insurance Co. Ltd.</option> 
                    <option value = "ICICI_Lombard" >ICICI Lombard General Insurance Co. Ltd.</option> 
                    <option value = "ICICI_Prudential" >ICICI Prudential Life Insurance Co. Ltd.</option> 
                    <option value = "Reliance_General" >Reliance General Insurance Co. Ltd.</option> 
                    <option value = "SBI_General" >SBI General Insurance Co. Ltd.</option> 
                    <option value = "SBI_Life" >SBI Life Insurance Co. Ltd.</option> 
                    <option value = "Star" >Star Health And Allied Insurance Co. Ltd.</option> 
                    <option value = "Tata" >Tata Aig General Insurance Co. Ltd.</option> 
                </select>
                <br></br>
                <label className="LabelClass">Patient Email</label>
                <input type="text" className="form-control form-control-sm" placeholder="example@example.com" required></input>

                <br></br><br></br><br></br>
                <label className="LabelClass">Mobile Number</label>
                <input type="text" className="form-control form-control-sm" pattern="^\d{10}$" placeholder="9999999999" required></input>
                <br></br>
                <label className="LabelClass">State</label>
                <select class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}>
                <option value = "state" selected disabled hidden>Select State</option> 
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
                <br></br>
                <label className="LabelClass">Treatment</label>
                <select class="form-control form-control-sm" style={{width: "300px", height: "43px", fontSize: "20px"}}>
                    <option value = "Treatment" selected disabled hidden>Select Treatment</option> 
                    <option value = "Cancer">Cancer</option> 
                    <option value = "Medical">Medical</option> 
                    <option value = "Surgery with Medical">Surhery with Medical</option>
                    <option value = "Surgical">Surgical</option> 
                    <option value = "Trauma">Trauma</option> 
                </select> 
                <br></br>
                <label className="LabelClass">Aadhar Card No.</label>
                <input type='text' name='Aadhar' className="form-control form-control-sm" placeholder='Enter Aadhar Card Number' required></input>
            </div>
            <br></br><br></br>
           </div> <br></br>
           <div className='preauth'>
               <h1 style={{fontSize: "30px"}}><center>Attachment Details</center></h1><br></br>
               <h5>Upload Files/Reports/ID Details(Scanned PDF and JPG files)</h5><br></br>
                <div className='row'>
                    <div className="col-lg-4">
                        <input type='file' style={{height: "40px", fontSize: "20px", width:"70%"}} className="form-control form-control-sm"></input>
                        <br></br>
                        <input type='file' style={{height: "40px", fontSize: "20px", width:"70%"}} className="form-control form-control-sm"></input>
                        <br></br>
                        <input type='file' style={{height: "40px", fontSize: "20px", width:"70%"}} className="form-control form-control-sm"></input>
                        <br></br>
                        <input type='file' style={{height: "40px", fontSize: "20px", width:"70%"}} className="form-control form-control-sm"></input>
                        <br></br>
                        <input type='file' style={{height: "40px", fontSize: "20px", width:"70%"}} className="form-control form-control-sm"></input>
                    </div>
                    <div className='col-lg-8'>
                        <input type='text' style={{width: "725px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <br></br>
                        <input type='text' style={{width: "725px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <br></br>
                        <input type='text' style={{width: "725px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <br></br>
                        <input type='text' style={{width: "725px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <br></br>
                        <input type='text' style={{width: "725px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <br></br>
                    </div>
                </div>
           </div><br></br>
           <div className='preauth'>
                <h2><center>Past Illness Details</center></h2><br></br>
                <h5>Past Illness/Chronic Details</h5><br></br>
                <div className='row'>
                <div className="col-lg-3">
                    <label className='PastIllnessLabel'>HyperTension</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Diabetes</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Heart Disease</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>COPD</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>HIV</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Asthama</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Cancer</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Arthritis</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Congenital Disease</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Other Diseases</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Alcohol/Drugs</label>
                    <br></br><br></br>
                    <label className='PastIllnessLabel'>Smoking History</label>
                    <br></br>
                </div>
                <div className='col-lg-5'>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='HyperTension' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Diabetes' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Heart Disease' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='COPD' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='HIV' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Asthama' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Cancer' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Arthritis'></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Congenital Disease' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Other Disease' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Alcohol/Drugs' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                <div>
                    <label className="PastIllnessLabel"><input type='radio' value='Smoking History' ></input>  Yes</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  No</label>
                    <label className="PastIllnessLabel"><input style={{marginLeft: "70px"}} type='radio' value='HyperTension' ></input>  Not Mentioned</label>
                </div><br></br>
                </div>
                <div className='col-lg-4'>
                        <input type='text' style={{width: "325px", marginBottom: "12px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        
                        <input type='text' style={{width: "325px", marginBottom: "12px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        
                        <input type='text' style={{width: "325px", marginBottom: "12px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "12px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "14px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "14px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "14px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "12px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "14px" }} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                        <input type='text' style={{width: "325px", marginBottom: "14px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        
                        <input type='text' style={{width: "325px", marginBottom: "14px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                        <input type='text' style={{width: "325px", marginBottom: "14px"}} className="form-control form-control-sm"  placeholder='Remarks'></input>
                       
                </div>
              </div>
                    
            </div>
        </div>
    
    )
}

export default Preauth