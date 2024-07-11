import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';


const qualificationData = [
  {
    title: 'supervisors',
    data: [
      {
        university: ' Erasmo Purificato',
        qualification: 'Ph.D. in Computer Science',
      },
      {
        university: 'Hannan Mahadik',
        qualification: 'MSc Infomatik',
      },
      {
        university: 'Gagan Deshmukh',
        qualification: 'MSc Data and Knowledge Engineering',
      },
    ],
  },
  {
    title: 'team',
    data: [
      {
        name: 'Mihir Digavalli',
        institute: 'Msc Data and Knowledge Engineering',
      },
      {
        name: 'Mudit Khandelwal',
        institute: 'Msc Data and Knowledge Engineering',
      },
      {
        name: 'Prajwal Sridhar',
        institute: 'Msc Data and Knowledge Engineering',
      },
      {
        name: 'Rohit Rakesh',
        institute: 'Msc Data and Knowledge Engineering',
      },
      {
        name: 'Pranava Sai Vamsi Bandaru',
        institute: 'Msc Data and Knowledge Engineering',
      },
    ],
  },
];

const skillData = [
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/vercel.svg',
      },
      {
        imgPath: '/about/overleaf.svg',
      },
      {
        imgPath: '/about/next-js.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About Project
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Motivation
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Team
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Future Scope
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Bias of LLMs in Education
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    This work is motivated by integrating large language models, such as GPT-4 and Copilot Free, that have further found their way into educational settings. They promise personalized learning and more excellent educational experiences, yet these models cannot be completely free of bias; the models can propagate stereotypes and inequities among learners. It is more important to note that biased content would harm the educational potential and even fairness. There should be systematic assessment and repair of such biases in educational technologies to realize an environment that is all-inclusive and provides equality for all students. This study was conducted to understand the extent and nature of biases in LLMs and develop strategies for mitigating their negative impacts to contribute to creating more equitable and practical tools for education
                    </p>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      Meet the Team
                    </h3>
                    {/* experience & supervisors wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-6'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <User2 />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'team').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-1'>
                          {getData(qualificationData, 'team').data.map(
                            (item, index) => {
                              const { name, institute } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {name}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {institute}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* supervisors */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'supervisors').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'supervisors').data.map(
                            (item, index) => {
                              const { university, qualification,} = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Future Scope</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2'></h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                      Future research should focus on developing adaptive debiasing algorithms for fair learning outcomes, expanding diverse training datasets, fostering interdisciplinary collaboration for ethical LLM design, conducting longitudinal impact studies, and establishing robust policies for ethical LLM deployment in education.
            </p>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tool list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
