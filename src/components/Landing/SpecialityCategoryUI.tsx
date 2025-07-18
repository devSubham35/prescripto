import Image from "next/image"

const data = [
    { image: "/General_physician.svg", type: "General physician" },
    { image: "/Gynecologist.svg", type: "Gynecologist" },
    { image: "/Dermatologist.svg", type: "Dermatologist" },
    { image: "/Pediatricians.svg", type: "Pediatrician" },
    { image: "/Neurologist.svg", type: "Neurologist" },
    { image: "/Gastroenterologist.svg", type: "Gastroenterologist" },

]

const SpecialityCategoryUI = () => {
    return (
        <div className="container flex flex-col justify-center items-center gap-6 py-8 md:py-16">
            <div className="text-center flex flex-col gap-3 mb-2 md:mb-4">
                <h1 className="text-3xl font-semibold">Find by <span className="text-primary">Speciality</span> </h1>
                <p className="text-muted-foreground text-md">
                    Simply browse through our extensive list of trusted doctors,<br className="hidden md:block" /> schedule your appointment hassle-free.
                </p>
            </div>
            <div className='w-full grid grid-cols-3 md:grid-cols-6 gap-3'>
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2 md:gap-4 items-center justify-center cursor-pointer">
                            <div className="overflow-hidden size-20 md:size-24 lg:size-28">
                                <Image
                                    src={item?.image}
                                    alt="category_image"
                                    width={500}
                                    height={500}
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <h1 className="text-sm md:text-md whitespace-nowrap">{item?.type}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SpecialityCategoryUI