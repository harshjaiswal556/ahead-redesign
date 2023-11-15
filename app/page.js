import DoesThisSoundSimilar from '@/components/DoesThisSoundSimilar'
import EQBeats from '@/components/EQBeats'
import Landing from '@/components/Landing'
import Nav from '@/components/Nav'
import MeetAheadApp from '@/components/MeetAheadApp'
import BestEQ from '@/components/BestEQ'

export default function Home() {
  return (
    <div className='flex flex-col p-4'>
      <Nav />
      <Landing />
      <EQBeats />
      <DoesThisSoundSimilar />
      <MeetAheadApp />
      <BestEQ />
    </div>
  )
}
