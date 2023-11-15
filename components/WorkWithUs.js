import React from 'react'

const WorkWithUs = () => {
    return (
        <div className='workWithUs bg-[#eeeafd] mt-4 rounded-3xl p-28 py-36 grid grid-cols-2'>
            <div className='flex flex-col gap-4'>
                <div className='font-bold text-5xl'>
                    Work with us
                    <div class="cards-wrapper1 py-10">
                        <div class="card card-white">
                            <img src='/work.png' />
                            <h3>About</h3>
                            <div className='font-normal grey-text'>
                                At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
                            </div>
                        </div>
                        <div class="card card-pink">
                            <h3>Product</h3>
                            <div className='font-normal grey-text'>
                                Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='workWithUsRight font-bold text-5xl'>
                <div className='ahead-blue px-20'>ahead</div>
                <div class="cards-wrapper-ahead">
                    <div class="card card-ahead">
                        <h3>Power through, even when the going gets tough</h3>
                        <div className='font-normal grey-text'>
                            We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                        </div>
                    </div>
                    <div class="card card-ahead">
                        <h3>Learn more about who you are and where you want to go</h3>
                        <div className='font-normal grey-text'>
                            We ask the right questions to help you better understand why you do things the way you do.
                        </div>
                    </div>
                    <div class="card card-ahead">
                        <h3>Play and grow together with others on the same journey</h3>
                        <div className='font-normal grey-text'>
                            Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
                        </div>
                    </div>
                    <div class="card card-ahead">
                        <h3>Learn more about who you are and where you want to go</h3>
                        <div className='font-normal grey-text'>
                            We ask the right questions to help you better understand why you do things the way you do.
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default WorkWithUs
