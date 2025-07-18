import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { navRoutes } from "@/routes/navRoutes"

const data = [
    {
        title: "COMPANY",
        subMenu: [
            { title: "Home", link: navRoutes?.home },
            { title: "About us", link: navRoutes?.about_us },
            { title: "Contact us", link: navRoutes?.contact_us },
            { title: "Privacy policy", link: navRoutes?.home },
        ]
    },
    {
        title: "GET IN TOUCH",
        subMenu: [
            { title: "+1-212-456-7890", link: "#" },
            { title: "subham@gmail.com", link: "#" },
        ]
    }
]

const Footer = () => {

    const { theme } = useTheme()

    return (
        <div className="container space-y-3 md:space-y-8 py-5 md:py-10">
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <div className='w-[150px] mb-4 md:mb-6'>
                        <Image
                            width={500}
                            height={500}
                            alt="Prescripto_logo"
                            className='w-full h-full'
                            src={theme === "dark" ? "/dark_logo.svg" : "/logo.svg"}
                        />
                    </div>
                    <p className="text-xs md:text-sm text-[#8d8d8d] md:leading-[25px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className="w-full flex md:justify-end">
                    <div className="w-fit h-full flex gap-8 md:gap-16 md:justify-evenly 
                    text-muted-foreground">
                        {
                            data?.map((item, index) => (
                                <div key={index}>
                                    <h1 className="mb-2 md:mb-4 text-sm md:text-lg font-semibold">{item?.title}</h1>
                                    <div className="md:space-y-2">
                                        {
                                            item?.subMenu?.map((subMenuItem, subMenuIndex) => (
                                                <div key={subMenuIndex}>
                                                    <Link href={subMenuItem?.link ?? "#"} 
                                                    className={`${subMenuItem?.link? "text-xs md:text-base hover:text-primary cursor-pointer" : ""}`}>
                                                        {subMenuItem?.title}
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="border-b"></div>
            <h1 className="text-xs md:text-sm text-center text-muted-foreground">
                Copyright © 2025 devSubham35 - All Right Reserved.
            </h1>
        </div>
    )
}

export default Footer