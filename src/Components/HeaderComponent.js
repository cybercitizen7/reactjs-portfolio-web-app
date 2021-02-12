import * as React from 'react'
// import profile from '../Resources/dk_intrv.png'
// import twitterIcon from '../Resources/twitter_icon.png'
// import linkedinIcon from '../Resources/linkedin_icon.png'
import {ABOUT_ME} from '../Constants/Strings'

function HeaderComponent() {
  return (
    <div className="fmax-w-full h-1/2 rounded-sm shadow-lg flex flex-row">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/dk_intrv.png`}
        alt="Profile"
        className="max-h-full flex-col w-64 p-2"
      />
      <div className="flex-grow max-h-full px-4">
        <h1 className="text-lg text-white mt-10 font-sans">David Kasabji</h1>
        <p className="text-sm text-white mt-3 font-sans">{ABOUT_ME}</p>
      </div>
    </div>
  )
}

export {HeaderComponent}
