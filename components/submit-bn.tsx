

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useFormStatus } from 'react-dom';


const SubmitBtn = () => {

    const { pending} = useFormStatus();

    return (
        <button type="submit" className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full dark:bg-white/10
        outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 transition
        hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:opacity-65"
        disabled={pending}>
            {
                pending ? (
                <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'>

                </div>
                ) : (
                    <>
                        Enviar <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1
                        group-hover:-translate-y-1' />
                    </>
                )
            }
        </button>
    )
}

export default SubmitBtn