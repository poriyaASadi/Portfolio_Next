import Image from 'next/image'
//import { VideoText } from "../components/ui/video-text";
import { SpinningText } from "../components/ui/spinning-text";
import { NumberTicker } from '../components/ui/number-ticker';
import { button } from 'motion/react-client';
export default function Home() {
  return (
    <>
      {/* <div className="w-full  h-screen flex items-center justify-center">
        <div className="relative h-[700px] w-[1200px] overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm">DEVELOPER</VideoText>
        </div>
      </div> */}
      <main className='overflow-x-hidden'>
        {/* top main  */}
        <section className="container  text-white font-embed flex gap-16 flex-col-reverse lg:flex-row  *:w-[calc(100%+2)]] lg:min-h-[600px] lg:h-[500px]  items-center justify-center">
          <div className="w-full min-h-full flex items-start justify-center flex-col">
            <p>Software Developer</p>
            <h1 className="text-white  tracking-tight font-medium lg:leading-15 text-[2.5em] lg:text-[3em]">Hello I'm <br /><span className="text-green-400">PORIYA ASADI</span></h1>
            <p className='text-sm leading-6 lg:leading-7  lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora placeat, laborum deserunt eius hic ea sunt ipsam provident corrupti.</p>
            <div className="mt-4 flex items-center flex-wrap gap-6">
              <button type="button" className="text-green-400 border hover:bg-green-400 hover:text-black transition-colors duration-300 border-green-400 text-sm  flex items-center  gap-1 font-embed rounded-full py-1.5 px-4">DOWNLOAD CV
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinecap="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
              <ul className="flex items-center *:hover:bg-green-400 *:hover:text-black *:hover:cursor-pointer *:transition-colors *:duration-300 gap-4">
                <li className="border border-green-400  text-green-400 w-9 h-9 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinecap="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </li>
                <li className="border border-green-400  text-green-400 w-9 h-9 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinecap="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </li>
                <li className="border border-green-400  text-green-400 w-9 h-9 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinecap="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </li>
                <li className="border border-green-400  text-green-400 w-9 h-9 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinecap="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-center min-h-full p-3">
            <div className="relative w-[250px] h-[250px] bg-amber-200  lg:w-[300px] flex items-center justify-center lg:h-[300px] rounded-full">
              <Image
                src="/images/profile.jpeg"
                width={300}
                height={300}
                alt="Landscape picture"
                className=" text-green-400 w-full h-full absolute left-1/2 top-1/2 object-cover -translate-x-1/2 -translate-y-1/2 rounded-full"
              />
              <SpinningText style={{ width: '100%', height: '100%', color: ' #05df72 ' }} duration={30} className="w-full text-[3em] lg:text-[4em] h-full">. DEVELOPER . IRAN . SOFTWER ENGINER</SpinningText>
              {/* ----_----_----_----_----_----_----_----_----_----_----_----_----_----_ */}
            </div>
          </div>
        </section>
        {/* number ticker section */}
        <section className='container overflow-x-hidden'>
          <ul className='text-slate-300 grid grid-cols-2 lg:grid-cols-4 w-full *:justify-center'>
            <li className='flex flex-row-reverse items-center gap-3'>
              <div className='text-sm'>
                <p>Years of</p>
                <span>experience</span>
              </div>
              <NumberTicker
                value={100}
                className="font-medium text-white! text-[2.5em] lg:text-[3.5em] tracking-tighter whitespace-pre-wrap "
              />
            </li>
            <li className='flex flex-row-reverse items-center gap-3'>
              <div className='text-sm'>
                <p>Projects</p>
                <span>completed</span>
              </div>
              <NumberTicker
                value={10}
                className="font-medium text-white! text-[2.5em] lg:text-[3.5em] tracking-tighter whitespace-pre-wrap "
              />
            </li>
            <li className='flex flex-row-reverse items-center gap-3'>
              <div className='text-sm'>
                <p>Technologies</p>
                <span>mastered</span>
              </div>
              <NumberTicker
                value={23}
                className="font-medium text-white! text-[2.5em] lg:text-[3.5em] tracking-tighter whitespace-pre-wrap "
              />
            </li>
            <li className='flex flex-row-reverse items-center gap-3'>
              <div className='text-sm'>
                <p>Code</p>
                <span>commits</span>
              </div>
              <NumberTicker
                value={450}
                className="font-medium text-white! text-[2.5em] lg:text-[3.5em] tracking-tighter whitespace-pre-wrap "
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
