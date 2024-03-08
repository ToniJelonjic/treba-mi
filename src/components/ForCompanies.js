import React from 'react'
import { useEffect } from 'react'
import { useScrollTo } from 'react-use-window-scroll'

const ForCompanies = () => {

  const scrollTo = useScrollTo();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])


  return (
    <div className='pages'>Uskoro ...</div>
  )
}

export default ForCompanies