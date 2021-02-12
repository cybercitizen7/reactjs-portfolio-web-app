import * as React from 'react'
import {GITHUB_IMAGE_URL} from '../Constants/Strings'
import {TWITTER_IMAGE_URL} from '../Constants/Strings'
import {LINKEDIN_IMAGE_URL} from '../Constants/Strings'

function FooterComponent() {
  return (
    <div className="container mx-auto my-12 px-4 md:px-12">
      <p
        className="text-gray-400
       font-sans text-center py-3"
      >
        CHECK ME OUT:
      </p>
      <div className="grid grid-cols-custom3 gap-3 justify-center">
        <a href="https://github.com/cybercitizen7">
          <img
            src={GITHUB_IMAGE_URL}
            alt="Github profile"
            className="justify-center"
          />
        </a>
        <a href="https://twitter.com/cybercitizen7">
          <img
            src={TWITTER_IMAGE_URL}
            alt="Twitter profile"
            className="justify-center"
          />
        </a>
        <a href="https://www.linkedin.com/in/david-kasabji/">
          <img
            src={LINKEDIN_IMAGE_URL}
            alt="Linkedin profile"
            className="justify-center"
          />
        </a>
      </div>
    </div>
  )
}

export {FooterComponent}
