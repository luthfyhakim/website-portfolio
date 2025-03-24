import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Luthfi Hakim! 👋</MotionText>
      </h1>
      <img
        src="/photo.jpeg"
        alt="Profile Picture"
        className="m-5 h-48 w-48 rounded-full"
      />
      <h1>
        <MotionDiv delayOffset={0.8}>Backend Engineer 🧑🏻‍💻</MotionDiv>
      </h1>
      <h1>
        <MotionDiv delayOffset={1}>CryptoBros 💰</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Just an ordinary person<b> ✨ Golang and Typescript </b>developer
            who loves to build something cool.
          </p>
        </MotionDiv>
      </div>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
