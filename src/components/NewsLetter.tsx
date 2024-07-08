import React from 'react'
import { Button } from './ui/button';

const NewsLetter = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-6 h-[214px] py-8 lg:py-0">
      <p className='font-bold text-[1.25rem] lg:text-[1.5rem] font-sans text-center text-black'>Stay updated by subscribing to our newsletter</p>
      <div className="flex justify-center items-center flex-row gap-2">
        <input
          type="text"
          placeholder="Input your email"
          className="p-2 rounded-3xl bg-background-normal text-texts-normal focus-visible:outline-none"
        />

        <Button className='font-nunitosans text-[1rem] text-backgrounds-light bg-green-primary-dark border border-green-primary-normal'>
            Subscribe
        </Button>
      </div>
    </section>
  );
}

export default NewsLetter