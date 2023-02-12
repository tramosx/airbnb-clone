import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
            <Image 
            src="https://www.fotografemelhor.com.br/site/wp-content/uploads/2021/11/er070271-32-37-2.jpg" 
            layout="fill" 
            objectFit="cover"
            />
        </div>
    )
}

export default Banner;