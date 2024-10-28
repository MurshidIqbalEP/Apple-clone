import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { watchImg } from '../utils'

function Highlight() {
    useGSAP(()=>{
     gsap.to("#title",{opacity:1,y:0})
     gsap.to("#title",{opacity:1,y:0})
    },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max-width'>
           <div className='mb-12 w-full items-end justify-between'>
              <h1 id='title' className='section-heading'>
                 get headings.
              </h1>

              <div className='flex flex-wrap items-end gap-5'>
                 <p className='link'>Watch the film  <img src={watchImg}  alt='watch' className=' ml-2'/> </p>
             </div>
        </div>

           
        </div>

    </section>
  )
}

export default Highlight
