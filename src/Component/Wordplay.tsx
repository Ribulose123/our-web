import React, { useState, useRef, useEffect } from 'react'
import {gsap} from 'gsap'
import{motion} from 'framer-motion'

const Wordplay:React.FC = () => {
    const words =["Let celebrate", "Our Love"]
    const [currentWord, setCurrentWord]= useState<number>(0)
    const [animationComplete, setAminationComplete]=useState<boolean>(false)
    const wordRef =useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(wordRef.current && animationComplete){
            gsap.fromTo(
                wordRef.current,
                {opacity:0, y:20},
                {opacity:1, y:0, duration:0.8, ease:'power2.out'}
            )
        }
    },[currentWord, animationComplete])

    useEffect (()=>{
        const interval = setInterval(()=>{
            setAminationComplete(false)
            gsap.to(wordRef.current, {
                opacity:0,
                y:20,
                duration:0.6,
                ease:'power2.in',
                onComplete:()=>{
                    setCurrentWord((prevWord)=> (prevWord + 1) % words.length)
                    setAminationComplete(true)
                }
            })
        }, 3000)
        return()=>clearInterval(interval)
    }, [])
  return (
    <div>
        <motion.div
              ref={wordRef}
              className="text-4xl md:-ml-[10px] text-start ml-4 md:text-center  text-white font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {words[currentWord]}
            </motion.div>
    </div>
  )
}

export default Wordplay