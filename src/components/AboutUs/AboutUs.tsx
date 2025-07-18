import Image from 'next/image'

const data = [
    { title: "Efficiency:", quote: "Streamlined appointment scheduling that fits into your busy lifestyle." },
    { title: "Convenience:", quote: "Access to a network of trusted healthcare professionals in your area." },
    { title: "Personalization:", quote: "Tailored recommendations and reminders to help you stay on top of your health." },
]

const AboutUs = () => {
    return (
        <div className='container pb-10'>
          <div className='w-full text-center py-5 md:py-8 text-2xl text-foreground'>
                ABOUT<span className='font-bold text-primary ml-2'>US</span>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-10 text-muted-foreground'>
                
                <div className='lg:w-full max-h-[400px] lg:min-w-[400px] lg:h-full overflow-hidden'>
                    <Image src="/about_image.png" alt="Prescripto_logo"
                        width={500} height={500} className='w-full lg:h-full object-contain' />
                </div>

                <div className='text-muted-foreground text-[16px] space-y-5'>
                    <p>
                        Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently.
                        At Prescripto, we understand the challenges individuals face when
                        it comes to scheduling doctor appointments and managing their health records.
                    </p>
                    <p>
                        Prescripto is committed to excellence in healthcare technology.
                        We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
                        Whether you are booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                    </p>

                    <div>
                        <h1 className='text-2xl font-bold mb-2'>Our Vision</h1>
                        <p>
                            Prescripto is committed to excellence in healthcare technology.
                            We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service.
                            Whether you are booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-3 mt-8 gap-6'>
                {
                    data?.map((item, index) => (
                        <div  key={index} className='w-full p-8 border text-muted-foreground'>
                            <h1 className='text-lg font-semibold mb-2 text-primary'>{item?.title}</h1>
                            <p className='text-sm text-balance'>{item?.quote}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default AboutUs