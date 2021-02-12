import * as React from 'react'
import {ABOUT_ME} from '../Constants/Strings'

function HeaderComponent() {
  return (
    <div className="grid grid-cols-6 rounded-sm shadow-lg flex flex-row">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/dk_intrv.png`}
        alt="Profile"
        className="max-h-52 p-2"
      />
      <div className="col-span-4 px-4">
        <h1 className="text-lg text-white mt-10 font-sans">David Kasabji</h1>
        <p className="text-sm text-white mt-3 font-sans">{ABOUT_ME}</p>
      </div>
    </div>
  )
}

export {HeaderComponent}
