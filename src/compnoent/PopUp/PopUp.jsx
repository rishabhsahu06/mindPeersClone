import React from 'react'
import { X } from 'lucide-react';

function PopUp() {
  return (
    <>
<button>X</button>
<div className='w-full h-72 bg-white flex  '> <form>
<div className=' text-black'><label className='text-black' htmlFor='Name'>
    <input className='text-black text-xl px-4' type='text' placeholder='Enter Name'></input>
    </label>

    <label htmlFor='Email'>
    <input type='email' placeholder=''></input>
    </label></div>

    <div className='flex'><label htmlFor='Phone number'>
    <input type='number' placeholder=''></input>
    </label>

    <label htmlFor='Profession'>
    <input type='text' placeholder=''></input>
    </label></div>


    <div className='flex'><label htmlFor='Company'>
    <input type='text' placeholder=''></input>
    </label>

    <label htmlFor='Role'>
    <input type='email' placeholder=''></input>
    </label></div>

</form> </div>
<button>Submit To Download</button>
    </>
  )
}

export default PopUp