import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiQuestionnaireFill,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Human Centered AI
            </div>
            <h1 className='h1 mb-4'>Bias in LLMs in Education</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
            In this project, we looked at bias in LLMs designed for educational applications. We were particularly interested in the extent and nature of the biases perceived within responses from different models. 
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact us <Send size={18} />
                </Button>
              </Link>
              
              <a className="group gap-x-2 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="\hcai.pdf" target="_blank"
              download>Download Report{" "}</a>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
              target="_blank"

            />
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[40%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              badgeText='LLMs'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTeamFill />}
              endCountNum={30}
              endCountText='+'
              badgeText='Unique Responses'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTodoFill />}
              endCountNum={12}
              endCountText=''
              badgeText='Questions'
            />
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/developers.png'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
