import React from 'react'

interface nameProps {
    name: string
}



const Name: React.FC<nameProps> = ({name}) => {
  return (
    <div>
      {name}
    </div>
  )
}


export default Name
