"use client"

import DoesThisSoundSimilar from '@/components/DoesThisSoundSimilar'
import EQBeats from '@/components/EQBeats'
import Landing from '@/components/Landing'
import Nav from '@/components/Nav'
import MeetAheadApp from '@/components/MeetAheadApp'
import BestEQ from '@/components/BestEQ'
import StartATest from '@/components/StartATest'
import OpenVacancy from '@/components/OpenVacancy'
import Footer from '@/components/Footer'
import SelfEmployement from '@/components/SelfEmployement'
import Wondered from '@/components/Wondered'
import WorkWithUs from '@/components/WorkWithUs'

export default function Home() {
  return (
    <div className='flex flex-col p-4'>
      <Nav />
      <Landing />
      <EQBeats />
      <DoesThisSoundSimilar />
      <MeetAheadApp />
      <SelfEmployement />
      <BestEQ />
      <Wondered />
      <StartATest />
      <WorkWithUs />
      <OpenVacancy />
      <Footer />
    </div>
  )
}
