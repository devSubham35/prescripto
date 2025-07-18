import { Button } from "../ui/button"
import DoctorShowcaseCard from "../common/DoctorShowcaseCard"

const data = [
    { image: "/Doctor_02.png", name: "Dr. Richard James", type: "General Physician" },
    { image: "/Doctor_01.png", name: "Dr. Emily Carter", type: "Cardiologist" },
    { image: "/Doctor_04.png", name: "Dr. Michael Lee", type: "Dermatologist" },
    { image: "/Doctor_03.png", name: "Dr. Sarah Patel", type: "Pediatrician" },
    { image: "/Doctor_05.png", name: "Dr. Anthony Kim", type: "Neurologist" },
    { image: "/Doctor_02.png", name: "Dr. Richard James", type: "General Physician" },
    { image: "/Doctor_01.png", name: "Dr. Emily Carter", type: "Cardiologist" },
    { image: "/Doctor_04.png", name: "Dr. Michael Lee", type: "Dermatologist" },
    { image: "/Doctor_03.png", name: "Dr. Sarah Patel", type: "Pediatrician" },
    { image: "/Doctor_05.png", name: "Dr. Anthony Kim", type: "Neurologist" },
  ]

const TopDoctorsUI = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-6 py-8 md:py-10">
      <div className="text-center flex flex-col gap-3 mb-2 md:mb-4">
        <h1 className="text-3xl font-semibold"><span className="text-primary">Top Doctors</span> to Book</h1>
        <p className="text-md text-muted-foreground">Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5'>
        {
          data?.slice(0,8)?.map((item, index) => (
            <DoctorShowcaseCard
              key={index}
              image={item.image}
              name={item.name}
              type={item.type}
            />
          ))
        }
      </div>
      <Button className="px-6 py-2.5 rounded-full dark:bg-white dark:text-secondary">More</Button>
    </div>
  )
}

export default TopDoctorsUI