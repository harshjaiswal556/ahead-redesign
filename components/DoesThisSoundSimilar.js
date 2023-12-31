import React from 'react'
import "../app/globals.css"
import { motion } from "framer-motion"
const DoesThisSoundSimilar = () => {
  return (
    <div className='flex flex-col gap-4 px-16 py-16'>
      <motion.div initial={{
        x: -300, opacity: 0
      }} whileInView={{
        x: 0, opacity: 1
      }} transition={{
        delay: 1,
        duration: 1
      }} className='text-4xl font-semibold'>Does this sound familiar ...</motion.div>


      <div class="cards-wrapper">
        <div class="card card1">
          <div class="emoji">🤔</div>
          <h3>You attend a class reunion</h3>
          <div>
            You compare yourself With your peers' achievements, instead Of
            making your self-judgement more independent of others.
          </div>
        </div>
        <div class="card card2">
          <div class="emoji">🥳</div>
          <h3>You are at a lively dinner party</h3>
          <div>
            You play on your phone, instead Of confidently approaching strangers
            and striking up a chat.
          </div>
        </div>
        <div class="card card3">
          <div class="emoji">🙂</div>
          <h3>You hit dead end in a negotiation</h3>
          <div>
            You get nervous, frazzled, and frustrated, instead of staying
            optimistic and solution-oriented.
          </div>
        </div>
        <div class="card card4">
          <div class="emoji">🥳</div>
          <h3>You are at a lively dinner party</h3>
          <div>
            You play on your phone, instead Of confidently approaching strangers
            and striking up a chat.
          </div>
        </div>
        <div class="card card5">
          <div class="emoji">🤔</div>
          <h3>You attend a class reunion</h3>
          <div>
            You compare yourself With your peers' achievements, instead Of
            making your self-judgement more independent of others.
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoesThisSoundSimilar
