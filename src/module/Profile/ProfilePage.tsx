import CustomHeader from "@/components/common/CustomHeader"
import CustomInputField from "@/components/common/CustomInputField"
import { Separator } from "@/components/ui/separator"

const data = [
    {
        title: "Email",
        value: "edward@gmail.com"
    },
    {
        title: "Phone",
        value: "+1 123 456 7890"
    },
    {
        title: "Address",
        value: "57th Cross, Richmond Circle, Church Road, London"
    },
]

const ProfilePage = () => {
    return (
        <div className='container py-4 md:py-10'>
            {/* <CustomHeader title="My Profile" subTitle="Manage your personal details" /> */}
            <div className="space-y-5">
                <div className='size-32 bg-accent rounded-lg'></div>
                <h1 className="text-2xl font-medium">Edward Genere</h1>
                <Separator className="w-full" />
                <div>
                    <h1 className="text-lg mb-4">Contact Details</h1>
                    <div className="w-full space-y-4">
                        {
                            data?.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-24">{item?.title}</div>
                                    <CustomInputField
                                        id="email"
                                        type="text"
                                        value={item?.value}
                                        className="h-11"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage