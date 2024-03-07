'use client'

import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Home = () => {
  const [toggle, setToggle] = useState(true)

  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", latest => console.log(latest))

  return (
    <section className="min-h-[200vh]">

      {/* 顯示or消失 */}
      <button onClick={() => { setToggle(!toggle) }}>toggle button</button>
      <motion.div animate={{ opacity: toggle ? 1 : 0 }}>
        <div className="bg-yellow-400 w-10 h-10">
        </div>
      </motion.div>
      {/* <div className="fixed bottom-0 w-screen">
        <motion.div 
          className="bg-white h-5 w-full"
          style={{ scaleX: scrollYProgress }} 
        />
      </div> */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  )
}

export default Home