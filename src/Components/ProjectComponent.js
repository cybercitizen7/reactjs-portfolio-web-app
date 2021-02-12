import * as React from 'react'

function ProjectComponent({
  projectName,
  projectDescription,
  projectImage,
  projectUrl,
  translate,
}) {
  const [scale, setScale] = React.useState(0)

  React.useEffect(() => {
    setScale(100)
  }, [scale])
  // const [projectState, setProjectState] = React.useState({
  //   projectName,
  //   projectDescription,
  //   projectImage,
  //   projectUrl,
  // })

  console.log(projectImage)

  return (
    // <div
    //   className={`
    //   flex
    //   my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3
    //   transform transition-all duration-1000 ease-out scale-${scale}
    //   transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
    // >
    //   <article className="h-auto overflow-hidden rounded-lg shadow-lg-card bg-blue-900">
    //     <a href={projectUrl}>
    //       <img
    //         alt="Placeholder"
    //         className="block h-auto max-h-52 w-full"
    //         src={projectImage}
    //       />

    //       <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    //         <h1 className="text-lg text-white font-sans">
    //           {projectName.toUpperCase()}
    //         </h1>
    //       </header>

    //       <footer className="h-52 max-h-52 overflow-hidden justify-between leading-none p-2 md:p-4">
    //         <p className="ml-2 text-sm text-gray-300 font-sans">
    //           {projectDescription}
    //         </p>
    //       </footer>
    //     </a>
    //   </article>
    // </div>
    <div
      className={`
      my-1 px-1 lg:my-4 lg:px-4 
      transform transition-all duration-1000 ease-out scale-${scale}
      transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}
    >
      <article className="min-h-full h-full overflow-hidden rounded-lg shadow-lg-card bg-blue-900">
        <a href={projectUrl}>
          <img
            alt="Placeholder"
            className="block max-h-56 w-full"
            src={projectImage}
          />

          <header className="leading-tight p-2 md:p-4">
            <h1 className="text-lg text-white font-sans">
              {projectName.toUpperCase()}
            </h1>
          </header>

          <footer className="overflow-hidden leading-none p-2 md:p-4">
            <p className="ml-2 text-sm text-gray-300 font-sans">
              {projectDescription}
            </p>
          </footer>
        </a>
      </article>
    </div>
  )
}

export {ProjectComponent}
