import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h[700px]">
            <Image 
            src="https://www.fotografemelhor.com.br/site/wp-content/uploads/2021/11/er070271-32-37-2.jpg" 
            layout="fill" 
            objectFit="cover"
            alt="teste"
            />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Não sabe para onder ir? Perfeito.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
            </div>
        </div>
        
    )
}

export default Banner;