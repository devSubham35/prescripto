import { Button } from '@/components/ui/button'
import CustomRatingComponent from '@/components/common/CustomRatingComponent'
import { Calendar } from 'lucide-react'
import CustomHeader from '@/components/common/CustomHeader'

const AppointmentPage = () => {

    return (
        <div className='container py-4 md:py-10'>

            <div className="flex flex-row items-center justify-between">
                {/* <div>
                    <h1 className='text-xl md:text-3xl font-bold mb-2'>My Appointments</h1>
                    <p className='text-xs md:text-base text-muted-foreground'>
                        Manage your healthcare appointments and consultations
                    </p>
                </div> */}
                <CustomHeader
                    title="My Appointments"
                    subTitle="Manage your healthcare appointments and consultations"
                />
                <div className="mt-4 md:mt-0">
                    <Button className="w-full md:w-auto">
                        <Calendar className="w-4 h-4 md:mr-2" />
                        Book <span className='hidden md:block'>New Appointment</span>
                    </Button>
                </div>
            </div>

            {
                [...Array(5)].map((item, key) => (
                    <div key={key} className='w-full'>
                        <div className='border-y py-4 flex flex-col md:flex-row gap-3 md:gap-5 justify-between'>

                            <div className='flex gap-4'>
                                <div className='size-[100px] md:size-[140px] bg-accent flex-shrink-0 rounded-xl'></div>
                                <div className='text-muted-foreground text-xs md:text-sm'>
                                    <h1 className='text-base md:text-lg text-secondary-foreground font-semibold'>
                                        Dr. Richard James
                                    </h1>
                                    <h6 className='md:mb-3 text-xs md:text-[16px]'>General physician</h6>
                                    <CustomRatingComponent defaultValue={2} readOnly size={14} className='block md:hidden my-1' />
                                    <h6 className='text-[12px] md:text-base font-medium'>Address</h6>
                                    <p className='mb-2 md:mb-2 line-clamp-2 md:line-clamp-none md:whitespace-nowrap'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore,
                                    </p>
                                    <p>
                                        <span className='text-[12px] md:text-base font-medium whitespace-nowrap'>Date & Time : </span>
                                        25, July, 2024 |  11:30 PM
                                    </p>
                                </div>
                            </div>

                            <div className='w-full flex flex-col justify-between items-end'>
                                <CustomRatingComponent defaultValue={2} readOnly size={18} className='hidden md:block' />
                                <div className='w-full md:w-fit flex flex-row-reverse md:flex-col md:justify-end gap-2'>
                                    <Button
                                        variant="outline"
                                        className='hover:border-red-600/70 text-muted-foreground
                                    hover:text-red-500 hover:bg-transparent w-full md:w-fit'>
                                        Cancel Appointment
                                    </Button>
                                    <Button className='w-full'>Pay Now</Button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default AppointmentPage