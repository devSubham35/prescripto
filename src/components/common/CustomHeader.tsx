
interface CustomHeaderProps {
    title: string;
    subTitle: string;
}
const CustomHeader = ({ title, subTitle }: CustomHeaderProps) => {
    return (
        <div className='mb-5 md:mb-8'>
            <h1 className='text-xl md:text-3xl font-bold mb-2'>{title ?? "_"}</h1>
            <p className='text-xs md:text-base text-muted-foreground'>
                {subTitle ?? "_"}
            </p>
        </div>
    )
}

export default CustomHeader