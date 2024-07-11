'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    category: 'Insights',
    name: 'Most Biased LLM',
    description:
      'ChatGPT was the most biased LLM',
    link: 'https://app.powerbi.com/groups/me/reports/09a72f1b-3f4e-4a24-ad5c-dc3657563646/678e9e5b9e63b9ac02dd?experience=power-bi',
    github: 'https://github.com/journeytoday/hcai-project/',
  },
  {
    category: 'Insights',
    name: 'Least Biased LLM',
    description:
      'CoPilot was the least biased LLM.',
    link: 'https://app.powerbi.com/groups/me/reports/09a72f1b-3f4e-4a24-ad5c-dc3657563646/678e9e5b9e63b9ac02dd?experience=power-bi',
    github: 'https://github.com/journeytoday/hcai-project/',
  },
  {
    category: 'Insights',
    name: 'Interesting finds',
    description:
      'In terms of ethnicity, ChatGPT leads with 182, closely followed by Gemini at 156. Regarding age, ChatGPT also holds the top position with 146, narrowly trailed by Claude at 141.',
    link: 'https://app.powerbi.com/groups/me/reports/09a72f1b-3f4e-4a24-ad5c-dc3657563646/678e9e5b9e63b9ac02dd?experience=power-bi',
    github: 'https://github.com/journeytoday/hcai-project/',
  },
  {
    category: 'Insights',
    name: 'Bias Comparison',
    description:
      'Men were more likely to feel there was a bias in the answers than women',
    link: 'https://app.powerbi.com/groups/me/reports/09a72f1b-3f4e-4a24-ad5c-dc3657563646/678e9e5b9e63b9ac02dd?experience=power-bi',
    github: 'https://github.com/journeytoday/hcai-project/',
  },
  {
    category: 'Insights',
    name: 'Demographic Finds',
    description:
      '72.97% of our response base was male while 27.03% was female among them 54.05% were working professionals while 45.95% were students.',
    link: 'https://app.powerbi.com/groups/me/reports/09a72f1b-3f4e-4a24-ad5c-dc3657563646/678e9e5b9e63b9ac02dd?experience=power-bi',
    github: 'https://github.com/journeytoday/hcai-project/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Our Insights</h2>
          <p className='subtitle mb-8'>
            Here are some of our insights
          </p>
          <Link href='/projects'>
            <Button>All Insights</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
