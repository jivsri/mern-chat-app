import React from 'react'

export default function GenderCheckbox() {
    return (
        <div className='flex text-white'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-white m-2">Male</span>
                    <input type="checkbox"  className="checkbox checkbox-primary" />
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                <span className="label-text text-white m-2">Female</span>
                    <input type="checkbox"  className="checkbox checkbox-primary" />
                </label>
            </div>

        </div>
    )
}
