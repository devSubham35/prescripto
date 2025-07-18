import Link from "next/link"
import { Button } from "../ui/button"
import { navRoutes } from "@/routes/navRoutes"
import CustomInputField from "../common/CustomInputField"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const SignupUI = () => {
    return (
        <div className="container">
            <div className='h-[80vh] flex justify-center pt-10 md:pt-20'>
                <Card className="w-full h-fit max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Create Account</CardTitle>
                        <CardDescription>
                            Please sign up to book appointment
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-4">
                                <CustomInputField
                                    type="text"
                                    id="full_name"
                                    label="Full Name"
                                    placeholder="Enter your name"
                                />
                                <CustomInputField
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <CustomInputField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Already have an account?
                            <span className="hover:text-primary cursor-pointer ml-1 font-semibold">
                                <Link href={navRoutes?.auth?.login}>Login</Link>
                            </span>
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default SignupUI