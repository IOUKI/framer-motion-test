'use client'

import React, { useRef } from 'react'
import { useFollowPointer } from '@/components/follow-pointer';
import { motion } from 'framer-motion';

const Spring = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 0.8,
        bounce: 1,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  )
}

export default Spring