import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MdKeyboardArrowRight } from "react-icons/md";


const data = ["/Resource_01.png", "/Resource_02.png", "/Resource_03.png", "/Resource_01.png", "/Resource_02.png", "/Resource_03.png"]

const LandingHeroUI = () => {
  return (
    <div className="container py-8">
      <div className="w-full rounded-xl bg-primary grid md:grid-cols-2">

        <div className="h-full text-white font-semibold flex flex-col justify-center items-center md:items-start
      text-lg md:text-3xl lg:text-4xl md:space-y-5 md:p-8 md:px-10 p-4">

          <h1 className="leading-6 md:leading-[40px] lg:leading-[60px] mb-2 text-center 
        text-[20px] md:text-[30px] lg:text-[50px] 2xl:text-[40px] md:text-left">
            Book Appointment With Trusted Doctors
          </h1>

          <div className="text-muted-foreground text-sm text-white font-[400] 
        flex flex-col items-center md:items-start gap-2 md:gap-4">
            <div className="flex justify-center md:justify-start -space-x-4 md:-space-x-6">
              {
                data.slice(0, 3).map((item, index) => (
                  <div key={index} className="bg-white size-8 md:size-14 rounded-full border shadow-md overflow-hidden">
                    <Image
                      src={item}
                      alt="resource_image"
                      width={500}
                      height={500}
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))
              }
              {
                data.length > 3 && (
                  <div className="bg-gray-200 size-8 md:size-14 rounded-full border shadow-md 
                flex items-center justify-center md:text-lg font-medium text-gray-700">
                    +{data.length - 3}
                  </div>
                )
              }
            </div>
            <p className="text-center md:text-left text-[12px] md:text-[14px] lg:text-[16px] leading-3 md:leading-[20px]">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <Button variant="secondary" className='w-fit rounded-full mt-2 bg-white dark:text-secondary
            text-[10px] md:text-[12px] lg:text-[14px] h-[28px] md:h-[40px] px-2 lg:px-4 pl-3 md:pl-4'>
            Book Appointment
            <MdKeyboardArrowRight className="text-[2px] mx-0" />
          </Button>
        </div>

        <div className="h-[180px] md:h-auto flex items-end md:pr-6">
          <Image
            src="/landing_hero.png"
            alt="appointment_doctor_image"
            width={500}
            height={100}
            className='w-full h-full md:h-[90%] object-contain object-bottom'
          />
        </div>
      </div>
    </div>
  )
}

export default LandingHeroUI