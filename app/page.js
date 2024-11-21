"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Accordion,
  AccordionBody,
  AccordionHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

import BgLogoLeft from "@/public/icons/BgLogoLeft";
import BgLogoRight from "@/public/icons/BgLogoRight";
import CTLogo from "@/public/icons/CTLogo";
import Link from "next/link";
import {
  applicationProcessSolara,
  faqSolara,
  solaraFellows,
} from "@/constants/constants";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const CodetrainSolara = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="text-textColor overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] bg-ash bg-[url('/people/monjola.jpg')] bg-opacity-30 lg:bg-none bg-cover bg-center bg-no-repeat">
        <div className=" bg-ash bg-opacity-80 grid grid-cols-2 place-items-center min-h-[calc(100vh-64px)]">
          <div className="p-8 text-textColor leading-8 col-span-2 lg:col-span-1">
            <h2 className="text-4xl md:text-5xl text-violet font-bold">
              Coding for Kids –{" "}
              <span className="text-5xl">
                Inspiring the Innovators of Tomorrow
              </span>
            </h2>
            <Typography variant="paragraph" className="my-8">
              Unlock Your Child’s Potential with Codetrain Solara: Africa’s
              Premier Online School for Future Innovators (Ages 8–14). An
              experience designed to transform kids into World class Innovators,
              Leaders and Entrepreneurs.
            </Typography>
            <div className="flex gap-x-4 mt-14 z-10">
              <Link href="https://tally.so/r/mRZvBP" target="_blank">
                <Button className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
                  Enroll now
                </Button>
              </Link>
              <Link
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
              >
                <Button
                  className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                  variant="outlined"
                >
                  Let&#39;s Talk
                </Button>
              </Link>
            </div>
            <Typography variant="paragraph" className="mt-12">
              * Admission is in progress
            </Typography>
          </div>
          <div className="hidden lg:inline">
            <Image
              src="/people/monjola.jpg"
              width={720}
              height={384}
              alt="kid"
              className="object-cover !h-[calc(100vh+64px)]"
            />
          </div>
        </div>
      </section>

      {/* What is Codetrain Solara */}
      <section className="py-10 px-4 md:px-52">
        <h3 className="text-3xl md:text-4xl text-pink font-bold">
          What is Codetrain Solara
        </h3>
        <h3 className="text-xl md:text-2xl text-violet font-bold mt-4">
          Empowering Your Child for a Future as a Global Tech Leader
        </h3>
        <Typography variant="paragraph" className="text-textColor mt-4">
          At <span className="font-bold">Codetrain Solara,</span> we’re driven
          by the belief that African children hold the key to shaping the world
          as global leaders, innovators, and changemakers. Our mission is to
          nurture their potential through hands-on, project-based learning that
          combines creativity, technology, and leadership development. With over
          seven years of experience transforming lives through coding education,
          Codetrain has trained more than 700 software developers, with 89% of
          graduates contributing to companies across Africa and the global tech
          scene. Our foray into empowering younger learners has been equally
          remarkable. Children as young as 10 to 14 have achieved groundbreaking
          milestones:
        </Typography>
        <ul className="mt-2 ml-10 list-disc">
          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              Developed an NFC-powered mobile wallet.
            </Typography>
          </li>
          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              Created a COVID-19 data tracker and a communicable diseases app.
            </Typography>
          </li>
          <li className="mt-0.5">
            <Typography variant="paragraph">
              Designed and built innovative games.
            </Typography>
          </li>
          <li className="mt-0.5">
            <Typography variant="paragraph">
              Mentored peers and served as keynote speakers at international
              innovation challenges.
            </Typography>
          </li>
        </ul>
        <Typography variant="paragraph" className="text-textColor mt-4">
          <span className="text-pink">
            Now, we’re scaling this impact with Solara, an online school
            dedicated to preparing children to become future tech innovators.
          </span>{" "}
          Your Child’s Journey with Codetrain Solara. Through real-world
          projects and collaborative learning, your child will develop skills
          to:
        </Typography>
        <ul className="mt-2 ml-10 list-disc">
          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              <span className="font-bold">
                Excel in Technology & Innovation
              </span>{" "}
              - Master the fundamentals of coding, AI, and app development,
              positioning them to lead advancements in cutting-edge
              technologies.
            </Typography>
          </li>
          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              <span className="font-bold">
                Shape Industries and Launch Startups{" "}
              </span>{" "}
              - Gain entrepreneurial skills to create transformative solutions
              and drive innovation within global markets.
            </Typography>
          </li>

          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              <span className="font-bold">Inspire and Mentor Others</span> -
              Build communication and leadership skills, empowering them to
              influence others and participate in high-impact initiatives, from
              mentoring peers to speaking on global stages.
            </Typography>
          </li>

          <li className="mt-0.5">
            <Typography variant="paragraph" className="text-textColor">
              <span className="font-bold">
                Pursue Global Tech Opportunities
              </span>{" "}
              - Prepare to thrive as a tech leader, working on international
              teams or crafting policies and technologies that address pressing
              global challenges.
            </Typography>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row justify-between gap-10 mt-10">
          <div>
            <Image
              alt="lady"
              src="/people/solara.jpg"
              width={500}
              height={300}
              className="h-[520px]  object-cover"
            />
          </div>
          <div>
            <div className="">
              <div className="mt-4">
                <Typography
                  variant="paragraph"
                  className="text-pink font-bold text-4xl"
                >
                  Program Structure
                </Typography>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    <Typography variant="paragraph" className="text-textColor">
                      Online Saturday classes (12noon - 3pm GMT).
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph" className="text-textColor">
                      In-person Summar Bootcamp.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="paragraph" className="text-textColor">
                      Annual Innovation Conference.
                    </Typography>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Typography
                  variant="paragraph"
                  className="text-violet font-bold"
                >
                  Program Duration
                </Typography>
                <ul className="list-disc ml-5 mt-2">
                  <li>
                    <Typography variant="paragraph" className="text-textColor">
                      3 - 5 years annual subscription
                    </Typography>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <Typography
                  variant="paragraph"
                  className="text-violet font-bold"
                >
                  Program Pricing
                </Typography>
                <ul className="list-disc ml-5 mt-2">
                  <li>$650 or GHS 10,000 per year</li>
                </ul>
              </div>
              <div className="mt-4">
                <Typography
                  variant="paragraph"
                  className="text-violet font-bold"
                >
                  Part-Scholarships
                </Typography>
                <ul className="list-disc ml-5 mt-2">
                  <li className="max-w-[600px]">
                    Scholarships will be awarded to children who submit
                    compelling applications and demonstrate eligibility based on
                    financial need, gender inclusion, neurodivergence, or living
                    with a disability.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-4 mt-14 z-10">
              <Link href="https://tally.so/r/mRZvBP" target="_blank">
                <Button className="bg-yellow text-violet shadow-none font-bold px-5 sm:px-8 md:px-10 rounded-md">
                  Enroll now
                </Button>
              </Link>
              <Link
                href="https://calendly.com/fosterfrimpong63/one-one-with-codetrain-admissions"
                target="_blank"
              >
                <Button
                  className="text-violet bg-transparent shadow-none font-bold px-5 rounded-md border-violet sm:px-8 md:px-10"
                  variant="outlined"
                >
                  Let&#39;s Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jamain's success stories */}
      <section className="px-4 py-10 ">
        <div className="flex flex-col items-center md:flex-row justify-center gap-10">
          <div>
            <Typography variant="h3" className="text-violet max-w-md">
              Inspiring Young Innovators: Jermaine’s Journey
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor mt-4 max-w-xl"
            >
              At just 8 years old, Jermaine’s parents recognized his passion for
              technology and enrolled him at Codetrain. By 11, he had developed
              a COVID-19 statistics app, showcasing his growing skills. At
              Codetrain, he mastered full-stack web development, including
              JavaScript, React, and MongoDB, and honed teamwork, public
              speaking, and technical communication.
            </Typography>
            <Typography
              variant="paragraph"
              className="text-textColor mt-4 max-w-xl"
            >
              By 12, Jermaine was a keynote speaker at the Moonshot Pirates
              Bootcamp and mentored Austrian teen entrepreneurs, sharing
              insights and guiding innovative projects. Currently, he is
              empowering African small businesses with loyalty rewards and
              connecting startups with angel investors through his apps.
              Jermaine’s journey underscores the transformative power of tech
              education. Codetrain Solara offers your child the opportunity to
              build similar skills, unlocking their potential to become future
              innovators and leaders.
            </Typography>
          </div>
          <div className="w-full md:w-2/5">
            <iframe
              // width="560"
              // height="315"
              className="w-full h-52 sm:h-72 md:!max-w-[540px] md:h-[376px]"
              src="https://www.youtube.com/embed/OZ95UDVpc2s?si=4_9A7nQEiSq5ncMu"
              title="Jermaine's success story"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* <Typography
          variant="paragraph"
          className="text-textColor mt-10 md:px-10 md:max-w-7xl mx-auto"
        >
          By 12, Jermaine was a keynote speaker at the Moonshot Pirates Bootcamp
          and mentored Austrian teen entrepreneurs, sharing insights and guiding
          innovative projects. Currently, he is empowering African small
          businesses with loyalty rewards and connecting startups with angel
          investors through his apps. Jermaine’s journey underscores the
          transformative power of tech education. Codetrain Solara offers your
          child the opportunity to build similar skills, unlocking their
          potential to become future innovators and leaders.
        </Typography> */}
      </section>

      {/* Comprehensive Software Development Curriculum */}
      <section className="py-10 px-8">
        <div className="text-center relative z-10">
          <h3 className="text-3xl md:text-4xl text-violet font-bold text-balance">
            What Your Child Will Gain Through Codetrain Solara
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 py-10 bg-contain bg-center bg-no-repeat relative">
          <div className="max-w-[540px] bg-white relative z-10 sh">
            <Image
              src="/people/jeremy.jpg"
              alt="picture"
              className="rounded-non h-full object-cover"
              width={540}
              height={440}
              quality={100}
            />
          </div>
          <div className="relative z-10 text-textColor">
            <ul className="list-disc space-y-2 max-w-lg">
              <li>
                <Typography variant="h6" className="text-lg">
                  Coding, App Development and AI:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Master the essentials of programming and app development
                      while diving into foundational AI concepts, equipping your
                      child to thrive in the future digital economy.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  STEM (Science, Technology, Engineering and Math)
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Build strong skills across these critical disciplines
                      through hands-on projects in coding, AI, and technology
                      innovation. Entrepreneurship and Innovation. Foster a
                      problem-solving mindset and learn how to design impactful
                      solutions to address real-world challenges.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="font-extrabold text-lg">
                  Entrepreneurship and Innovation:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Foster a problem-solving mindset and learn how to design
                      impactful solutions to address real-world challenges.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Collaborative and Critical thinking
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Develop leadership, communication, and interpersonal
                      skills by working in teams to solve complex challenges.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Global Awareness:
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Understand global issues and learn how to leverage their
                      projects and skills to create positive, meaningful change.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Portfolio building
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Create a standout digital portfolio showcasing skills and
                      projects, opening doors to future academic or career
                      opportunities.
                    </Typography>
                  </li>
                </ul>
              </li>
              <li>
                <Typography variant="h6" className="text-lg">
                  Mentorship-Driven Learning
                </Typography>
                <ul className="ml-3 space-y-1">
                  <li>
                    <Typography variant="paragraph">
                      Learn under the guidance of experienced teaching fellows,
                      receive valuable feedback, and connect with global experts
                      to deepen specialized skills. Your child will gain a
                      well-rounded education rooted in innovation and
                      leadership, setting them on the path to becoming a future
                      tech pioneer.
                    </Typography>
                  </li>
                </ul>
              </li>
            </ul>
            <Link href="https://tally.so/r/mRZvBP">
              <Button className="mt-8 bg-yellow text-violet">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-10 px-4 sm:py-20 sm:px-7 flex flex-col-reverse lg:gap-10 lg:flex-row justify-center gap-4 relative">
        <div className="md:max-h-[587px] hidden lg:inline">
          <Card className="max-w-lg rounded-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <Image
                src="/people/gerald.webp"
                alt="korkor"
                width={540}
                height={276}
                className="overflow-hidden object-cover h-96"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="paragraph" className=" text-textColor">
                Most 12 year old love to play computer games, but one day,
                Gerard, a high school student in Ghana decided to delete all the
                games on his computer to build his own games. After his parents
                enrolled him at Codetrain solara, a special school in Ghana that
                trains app developers, who are innovators, big dreamers and
                entrepreneurial minded children, he discovered that with coding
                skills, he could realise his dream of building his own mobile
                games.
              </Typography>
            </CardBody>
            <hr className="border-violet h-1" />
            <CardFooter>
              <Typography variant="h6" className="text-textColor">
                Gerald
              </Typography>
              <Typography
                variant="paragraph"
                className="font-normal text-textColor"
              >
                Software Engineer
              </Typography>
            </CardFooter>
          </Card>
        </div>
        <div className="">
          <div className=" mt-5">
            <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
              Success Stories From Codetrain Solara
            </h3>
            <Typography
              variant="paragraph"
              className="text-textColor max-w-xl mt-4"
            >
              Our mission at Codetrain Solara is to empower Africa’s next
              generation of innovators, leaders, and entrepreneurs by providing
              an accessible, world-class education that blends technology,
              creativity, and social responsibility. Through hands-on,
              project-based learning, we aim to nurture curious minds, foster
              critical thinking, and inspire a global mindset among young
              learners, enabling them to address real-world challenges and drive
              meaningful change within their communities and beyond.
            </Typography>
          </div>
          <div className="flex flex-col items-center mt-2 gap-4">
            <Card className="w-96 md:w-[530px] max-h-[767px] rounded-none">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/jeremy.jpg"
                  alt="img"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="paragraph"
                  className="text-textColor line-clamp-6"
                >
                  At just 8 years old, Jermaine`s parents recognized his passion
                  for technology and enrolled him at Codetrain Solara. By age
                  11, he graduated, showcasing remarkable dedication and talent.
                  During the pandemic, he developed a COVID-19 app that provided
                  vital statistics about the virus. Through Codetrain Solara,
                  Jermaine gained essential skills in web development, front-end
                  design, databases, SQL, AI tools, React, JavaScript, and
                  Node.js.
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography variant="h6" className="font-bold text-textColor">
                  Jermaine
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-normal text-textColor"
                >
                  Software Engineer
                </Typography>
              </CardFooter>
            </Card>
            <Card className="w-96 md:w-[530px] max-h-[767px] rounded-none lg:hidden">
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
              >
                <Image
                  src="/people/gerald.webp"
                  alt="korkor"
                  width={540}
                  height={276}
                  className="overflow-hidden object-cover h-96"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="paragraph" className=" text-textColor">
                  Most 12 year old love to play computer games, but one day,
                  Gerard, a high school student in Ghana decided to delete all
                  the games on his computer to build his own games. After his
                  parents enrolled him at Codetrain solara, a special school in
                  Ghana that trains app developers, who are innovators, big
                  dreamers and entrepreneurial minded children, he discovered
                  that with coding skills, he could realise his dream of
                  building his own mobile games.
                </Typography>
              </CardBody>
              <hr className="border-violet h-1" />
              <CardFooter>
                <Typography variant="h6" className="text-textColor">
                  Gerald
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-normal text-textColor"
                >
                  Software Engineer
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* svg bg logos */}
        <BgLogoRight className="fill-cyan-50 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
        <BgLogoLeft className="fill-cyan-300 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
      </section>

      {/* What You Need To Get Accepted */}
      <section className="py-20 px-4 pl-9 flex flex-col gap-10 lg:flex-row justify-center">
        <div className="inline-flex flex-col gap-5 max-w-lg">
          <Typography variant="h4" className="text-violet">
            What You Need to Get Accepted to Codetrain Solara
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            At Codetrain Solara, we believe in creating opportunities for every
            child to reach their full potential. Our application process is open
            year-round, ensuring flexibility for families and aspiring young
            innovators.
          </Typography>
          <Typography variant="paragraph" className="text-textColor">
            We accept Inclusion, we encourage children from all backgrounds, and
            we’re happy to support them into the Program.
          </Typography>
        </div>
        <div className="flex flex-col md:w-3/5 text-textColor max-w-lg">
          <ul className="flex flex-col">
            <li className="mb-3">
              <Typography variant="h4" className="font-bold text-violet">
                Requirements for Admission:
              </Typography>
            </li>
            <ul className="list-disc">
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  <span className="font-bold">
                    Basic Computer Literacy Skills
                  </span>{" "}
                  - Your child should have a foundational understanding of how
                  to use a computer.
                </Typography>
              </li>
              <li>
                <Typography variant="paragraph" className="text-textColor">
                  <span className="font-bold">Pass Our Intake Puzzle</span> -
                  This engaging activity is designed to spark creativity and
                  test problem-solving abilities in a fun way.
                </Typography>
              </li>

              <li>
                <Typography variant="paragraph" className="text-textColor">
                  <span className="font-bold">Recommendation Letter</span> - A
                  letter of support from a parent or guardian will help us
                  understand your child’s character and potential.
                </Typography>
              </li>

              <li>
                <Typography variant="paragraph" className="text-textColor">
                  <span className="font-bold">Video Submission</span> - Submit a
                  short video (MP4 format) where your child shares a big dream
                  they have and why it inspires them. We’re excited to help your
                  child take their first step toward becoming a future
                  innovator. Start their journey with Codetrain Solara today!
                </Typography>
              </li>
            </ul>
          </ul>
        </div>
      </section>

      {/* Steps In The Application Process */}
      <section className="py-20 px-4 relative">
        <div className="relative z-10 text-center">
          <h3 className="text-3xl md:text-5xl text-violet font-bold">
            Steps In The Application Process
          </h3>
          <p className="text-textColor max-w-4xl mx-auto mt-10">
            Our application process is streamlined to ensure a smooth experience
            with clear instructions at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 md:gap-y-20 place-items-center mt-10 justify-items-center relative z-10">
          {applicationProcessSolara.map((process) => (
            <div
              className="max-w-md flex gap-4 md:odd:place-self-end md:even:place-self-start"
              key={process.id}
            >
              <div>
                <Typography variant="h4" className="text-pink text-8xl">
                  {process.id}
                </Typography>
              </div>
              <div>
                <Typography variant="h4" className="text-violet md:text-nowrap">
                  {process.title}
                </Typography>
                <Typography variant="paragraph" className="mt-1">
                  {process.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        {/* Bg Logo */}
        <CTLogo
          className="absolute top-0 size-[1080px] md:size-full object-cover opacity-[0.5]"
          color="#ebebeb"
        />
      </section>

      {/* Codetrain Solara Fellows section */}
      <section className="py-20 px-4 bg-ash text-center">
        <Typography variant="h3" className="text-violet">
          Meet The Teaching Fellows
        </Typography>

        <div className="grid grid-cols-1 place-items-center gap-10 mt-20 text-left">
          {solaraFellows.map((fellow) => (
            <Card
              className="w-full max-w-[48rem] rounded-none flex-col md:flex-row"
              key={fellow.name}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 h-96 md:h-auto md:w-2/5 shrink-0 rounded-none md:rounded-r-none"
              >
                <Image
                  src={fellow.src}
                  alt="card-image"
                  className="h-full w-full object-top object-cover rounded-none"
                  height={100}
                  width={100}
                  quality={100}
                />
              </CardHeader>
              <CardBody className="flex flex-col justify-center items-start">
                <Typography className="mb-8 text-textColor">
                  {fellow.text}
                </Typography>
                <hr className="border-violet h-1" />
                <Typography variant="h5" className="text-textColor">
                  {fellow.name}
                </Typography>
                <Typography variant="paragraph" className="text-textColor">
                  Teaching Fellow
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Discover Our Campus Section */}
      <section>
        <div className="px-4 py-10 text-center">
          <h1 className="font-bold text-violet text-xl text-nowrap sm:text-3xl lg:text-4xl">
            Contact or Visit us!
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-pink h-[422px] p-3 sm:p-10 flex flex-col justify-evenly items-start text-white">
            <Typography variant="h5">Talk To Us</Typography>
            <Typography variant="h5">+233 545 792 397</Typography>
            <Typography variant="h5">Email Us</Typography>
            <Typography variant="h5">admissions@codetrainafrica.com</Typography>
          </div>
          <div className="h-[422px]">
            <Image
              src="/people/campus2.jpg"
              alt="codetrain-campus"
              width={720}
              height={384}
              className="object-cover !h-[422px] w-full"
            />
          </div>
          <div className="h-[422px] text-center flex flex-col justify-evenly items-center">
            <Typography variant="h4" className="text-violet">
              East Legon - 16a Parsnip street
            </Typography>
            <Typography variant="paragraph" className="text-textColor">
              Near the A&C Mall
            </Typography>
            <div className="w-[95%] h-[300px] overflow-hidden my-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.474142057257!2d-0.15511199381799048!3d5.644322737402287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b269a8fbdd1%3A0x1bb79c84b5c0e1f2!2sCodetrain!5e0!3m2!1sen!2sgh!4v1721408509162!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="h-[422px]">
            <Image
              src="/people/gate.jpg"
              width={720}
              height={384}
              alt="gate"
              className="object-cover !h-[422px] w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 mt-20 text-center bg-ash">
        <h1 className="font-bold text-violet mx-auto text-2xl md:text-3xl lg:text-5xl">
          Frequently Asked Question About Codetrain
        </h1>
        <Typography
          variant="paragraph"
          className="my-10 max-w-3xl mx-auto text-textColor"
        >
          Have questions about our programs, fees, or anything else? Find
          answers here to help you make an informed decision.
        </Typography>

        <div>
          {faqSolara.map((item, index) => (
            <Accordion
              key={index}
              open={open === index + 1}
              className="mb-2 bg-white border border-blue-gray-100 px-4 max-w-5xl mx-auto text-left"
              icon={
                open === index + 1 ? (
                  <ArrowUpIcon
                    className="w-6 h-6 text-violet"
                    onClick={() => handleOpen(index)}
                  />
                ) : (
                  <ArrowDownIcon
                    className="w-6 h-6 text-violet"
                    onClick={() => handleOpen(index)}
                  />
                )
              }
            >
              <AccordionHeader
                onClick={() => handleOpen(index + 1)}
                className={`border-b-0 transition-colors text-sm md:text-lg ${
                  open === index + 1 ? "text-violet hover:!text-violet" : ""
                }`}
              >
                {item.question}
              </AccordionHeader>
              <AccordionBody className="pt-0 text-base font-normal text-textColor">
                {item.answer}
                <ul className="list-decimal p-3 pl-10">
                  {item.options &&
                    item.options.map((el) => (
                      <li key={el.option} className="p-1">
                        {el.option}
                      </li>
                    ))}
                </ul>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Excited to start your career Section */}
      <section className="bg-violet py-24 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-30">
          <div>
            <Typography
              variant="h2"
              className="text-lightBlue font-bold max-w-md"
            >
              Empowering Tomorrow’s Innovators
            </Typography>
            <Typography
              variant="paragraph"
              className="text-white max-w-xl mt-5"
            >
              Unleash your child`s potential
            </Typography>
          </div>
          <div className="mt-10 md:mt-0">
            <Link href="https://tally.so/r/mRZvBP" target="_blank">
              <Button variant="filled" className="bg-lightBlue">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
        <BgLogoLeft className="absolute fill-yellow opacity-[0.5] size-80 md:size-[443px] -top-14 md:-top-7 p-0 left-0" />
        <BgLogoRight className="absolute fill-yellow size-52 md:size-80 -bottom-10 md:bottom-0 right-0" />
      </section>
    </section>
  );
};
export default CodetrainSolara;
