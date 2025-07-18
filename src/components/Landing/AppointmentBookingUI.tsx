import Image from "next/image"
import { Button } from "../ui/button"
import { MdKeyboardArrowRight } from "react-icons/md"

const AppointmentBookingUI = () => {
    return (
        <div className="container">
            <div className="w-full h-[180px] md:h-[350px] rounded-xl my-8 bg-primary relative 
      mt-[25px] md:mt-[56px]">

                <div className="w-2/3 h-full text-white font-semibold flex flex-col justify-center
        text-lg md:text-3xl lg:text-4xl md:space-y-5 md:p-8 md:px-10 p-4">
                    <h1>Book Appointment</h1>
                    <p>With 100+ Trusted Doctors</p>
                    <Button variant="secondary" className='w-fit rounded-full mt-2 bg-white dark:text-secondary 
                    text-[10px] md:text-[12px] lg:text-[14px] h-[28px] md:h-[40px] px-2 lg:px-4 pl-3 md:pl-4'>
                        Create Account
                        <MdKeyboardArrowRight className="text-[2px] mx-0" />
                    </Button>

                    <div className="absolute bottom-0 md:bottom-[-2px] right-0 w-[200px] md:w-[400px] h-[120%]">
                        <Image
                            width={500}
                            height={500}
                            src="/appointment-doc-img.png"
                            alt="appointment_doctor_image"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentBookingUI