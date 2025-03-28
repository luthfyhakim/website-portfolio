import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm{" "}
              <span className="font-mono font-semibold text-orange-400">
                Luthfi Hakim
              </span>
              . I'm a Backend Engineer based in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text font-semibold text-transparent">
                East Java, Indonesia
              </span>
              . I have a passion for software development and I love to build
              things that can make a difference in people's lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              As a technologies enthusiast, I am highly passionate about
              building web and mobile applications. And I love learning new
              technologies, especially elegant code architectures and design
              patterns. I hope to leverage my technical skills to build valuable
              apps that can make a difference in people's lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Outside of programming, I am also a crypto and finance enthusiast.
              I hope my works can aspires people to see the beauty of the world
              around us. So welcome to subscribe to my social media channels
              above to see my works!
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
