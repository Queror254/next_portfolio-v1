'use client'
import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing";
const Intro = () => {

    return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
         <h1 className="flex justify-start">
            <GradualSpacing
          className="font-display text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white"
          text="Hi! I'm Victor."
         />
         </h1>
           {/*<h1 className="text-4xl font-bold">Hi! I am Victor</h1> */}
           <p className="text-base text-gray-800 dark:text-gray-300">
                A seasoned Fullstack Developer with over 4 years of experience, 
                proficient in both front-end and back-end technologies. 
                This expertise spans a variety of programming languages, 
                frameworks, and tools, enabling the development of robust 
                and scalable web applications.
            </p>
            </div>
            <div className="flex items-center justify-center md:mb-0">
                <Image 
                src="/images/victor.jpg" 
                alt="Victor" 
                width={160} 
                height={160}
                className="border-2 border-gray-100 rounded-full object-cover"
                  />
            </div>
        </div>
    );
};

export default Intro;
