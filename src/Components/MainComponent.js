import * as React from 'react'
import {ProjectComponent} from './ProjectComponent'
// import left from '../Resources/left_arrow.png'
// import right from '../Resources/right_arrow.png'
import {TTC} from '../Models/TTC'
import {MINXLI} from '../Models/Minxli'
import {NXP} from '../Models/Nxp'

// const ttc_project = {
//   id: 0,
//   name: 'Talking Tom Camp',
//   description: ttc.projectDescription,
//   image: ttc.projectImage,
//   url: ttc.projectUrl,
// }

// const minxli_project = {
//   id: 1,
//   name: 'MINXLI',
//   description: MINXLI.projectDescription,
//   image: MINXLI.projectImage,
//   url: MINXLI.projectUrl,
// }

// const nxp_project = {
//   id: 2,
//   name: 'NXP TAG INFO',
//   description: NXP.projectDescription,
//   image: NXP.projectImage,
//   url: NXP.projectUrl,
// }

// const projectsArray = [ttc_project, minxli_project, nxp_project]

// function reducer(state, action) {
//   let nextProjectId = 0
//   switch (action.type) {
//     case 'LEFT': {
//       const currentProjectId = state.id
//       nextProjectId =
//         currentProjectId - 1 < 0
//           ? projectsArray.length - 1
//           : currentProjectId - 1

//       return {...projectsArray[nextProjectId]}
//     }
//     case 'RIGHT': {
//       const currentProjectId = state.id

//       nextProjectId =
//         currentProjectId + 1 >= projectsArray.length ? 0 : currentProjectId + 1

//       return {...projectsArray[nextProjectId]}
//     }

//     default:
//       throw new Error('Invalid Action Type provided ', action.type)
//   }
// }

function MainComponent() {
  // const [state, dispatch] = React.useReducer(reducer, {
  //   id: 0,
  //   name: 'Talking Tom Camp',
  //   description: ttc.projectDescription,
  //   image: ttc.projectImage,
  //   url: ttc.projectUrl,
  // })

  return (
    <div className="container mx-auto my-12 px-4 md:px-12">
      <div className="flex justify-center my-2">
        <p className="text-white text-5xl font-sans tracking-widest">
          PORTFOLIO
        </p>
      </div>

      {/* <div className="-mx-1 lg:-mx-4"> */}
      {/* <div className="flex flex-col justify-center mx-4">
          <button onClick={() => dispatch({type: 'LEFT'})}>
            <img src={left} alt="Left Arrow" />
          </button>
        </div> */}
      {/* <div className="flex flex-nowrap gap-x-4 -mx-1 lg:-mx-4">
        <ProjectComponent
          projectName="Talking Tom Camp"
          projectDescription={TTC.projectDescription}
          projectImage={TTC.projectImage}
          projectUrl={TTC.projectUrl}
        />
        <ProjectComponent
          projectName="Minxli"
          projectDescription={MINXLI.projectDescription}
          projectImage={MINXLI.projectImage}
          projectUrl={MINXLI.projectUrl}
        />
        <ProjectComponent
          projectName="NXP Tag Info"
          projectDescription={NXP.projectDescription}
          projectImage={NXP.projectImage}
          projectUrl={NXP.projectUrl}
        />
        />
      </div>*/}
      <div className="grid grid-cols-3 grid-rows-test gap-3 mx-1 lg:-mx-4">
        <ProjectComponent
          projectName="Talking Tom Camp"
          projectDescription={TTC.projectDescription}
          projectImage={TTC.projectImage}
          projectUrl={TTC.projectUrl}
        />
        <ProjectComponent
          projectName="Minxli"
          projectDescription={MINXLI.projectDescription}
          projectImage={MINXLI.projectImage}
          projectUrl={MINXLI.projectUrl}
        />
        <ProjectComponent
          projectName="NXP Tag Info"
          projectDescription={NXP.projectDescription}
          projectImage={NXP.projectImage}
          projectUrl={NXP.projectUrl}
        />
      </div>
      {/* <div className="flex flex-col justify-center mx-4">
          <button onClick={() => dispatch({type: 'RIGHT'})}>
            <img src={right} alt="Right Arrow" />
          </button>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export {MainComponent}
