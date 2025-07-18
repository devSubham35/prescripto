import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const ContactUs = () => {
    return (
        <div className='container mb-10'>
            <div className='w-full text-center py-5 md:py-8 text-2xl text-foreground'>
                CONTACT<span className='font-bold text-primary ml-2'>US</span>
            </div>

            {/* Responsive wrapper */}
            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-muted-foreground px-4'>

                {/* Image Section */}
                <div className='md:max-w-[450px] md:w-1/2 flex justify-center items-center'>
                    <Image
                        src="/contact_image.png"
                        alt="Prescripto_logo"
                        width={500}
                        height={500}
                        className='w-full h-auto object-contain'
                    />
                </div>

                {/* Info Section */}
                <div className='md:w-1/2 flex flex-col gap-8 text-center md:text-left'>
                    <div>
                        <h1 className='text-xl mb-4 font-semibold'>OUR OFFICE</h1>
                        <p>54709 Willms Station</p>
                        <p>Suite 350, Washington, USA</p>
                    </div>

                    <div>
                        <p>Tel: (415) 555‑0132</p>
                        <p>Email: greatstackdev@gmail.com</p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-xl mb-2 font-semibold'>Careers at PRESCRIPTO</h1>
                        <p>Learn more about our teams and job openings.</p>
                        <Button
                            variant='outline'
                            className='rounded-none py-6 px-8 border-[#adadad] w-full sm:w-auto text-primary'
                        >
                            Explore Jobs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
