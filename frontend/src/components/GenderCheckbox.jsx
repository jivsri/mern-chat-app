import React from 'react'

export default function GenderCheckbox({onCheckboxChange,selectedGender}) {
    return (
        <div className='flex text-white'>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender==="Male"? "selected" :""}`}>
                    <span className="label-text text-white m-2">Male</span>
                    <input type="checkbox"  className="checkbox checkbox-primary" 
                        checked={selectedGender=="Male"}
                        onChange={()=>{
                            onCheckboxChange("Male");
                        }}
                    />
                </label>
            </div>

            <div className="form-control">
            <label className={`label gap-2 cursor-pointer ${selectedGender==="Female"? "selected" :""}`}>
                <span className="label-text text-white m-2">Female</span>
                    <input type="checkbox"  className="checkbox checkbox-primary" 
                        checked={selectedGender=="Female"}
                        onChange={()=>{
                            onCheckboxChange("Female");
                        }}
                    />
                </label>
            </div>

        </div>
    )
}
