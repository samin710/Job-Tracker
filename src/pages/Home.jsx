import React, { use, useEffect } from "react";
import heroImg from "../assets/heroImg.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useLoaderData } from "react-router";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import CompanyLogo from "../components/CompanyLogo/CompanyLogo";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../components/Loading/Loading";
import { motion } from "framer-motion";

const Home = () => {
  const data = useLoaderData();

  const { loading } = use(AuthContext);

  useEffect(() => {
    document.title = "JobTracker | Home";
  }, []);

  if (loading) return <Loading></Loading>;

  // Scroll animation variants for the Career Tips section
  const scrollAnimation = {
    offscreen: { opacity: 0, y: 100, rotate: 0 }, // Initial position off-screen
    onscreen: {
      opacity: 1,
      y: 0, // Moving back to original position
      rotate: 0, // Restoring rotation
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <div className=" px-5 md:px-12 lg:px-20 py-3 md:py-5 lg:py-9">
        <div className="md:mb-8 lg:mb-10 mb-5">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Job
            <span className=" bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tracker
            </span>
          </h1>
          <div className="hero-content flex-col-reverse md:flex-row rounded-2xl shadow-2xl md:items-center md:py-4  py-3 justify-between px-2 md:px-4 md:mt-4 mt-2 max-w-full">
            <div className="text">
              {/* list */}
              <ul className="list bg-base-100 rounded-box space-y-2 md:space-y-3 md:pt-5">
                <li className="list-row border border-primary items-center">
                  <div>
                    <FaCheckCircle
                      size={40}
                      className="bg-secondary rounded-full"
                    />
                  </div>

                  <div>
                    {" "}
                    <h1 className="text-xl md:text-2xl lg:text-3xl">
                      Browse Opportunities Across Companies
                    </h1>
                    <p className="list-col-wrap md:text-lg text-accent">
                      Instantly access a diverse range of job listings from top
                      companies—filtered by role, location, or industry to match
                      your interests.
                    </p>
                  </div>
                </li>
                <li className="list-row border border-primary items-center">
                  <div>
                    <FaCheckCircle
                      size={40}
                      className="bg-secondary rounded-full"
                    />
                  </div>

                  <div>
                    {" "}
                    <h1 className="text-xl md:text-2xl lg:text-3xl">
                      Review Job Criteria in Detail
                    </h1>
                    <p className="list-col-wrap md:text-lg text-accent">
                      Click on any job to view a complete breakdown of the
                      requirements, responsibilities, and benefits—no guesswork,
                      no hidden details.
                    </p>
                  </div>
                </li>
                <li className="list-row border border-primary items-center">
                  <div>
                    <FaCheckCircle
                      size={40}
                      className="bg-secondary rounded-full"
                    />
                  </div>

                  <div>
                    {" "}
                    <h1 className="text-xl md:text-2xl lg:text-3xl">
                      Match Your Profile with Ease
                    </h1>
                    <p className="list-col-wrap md:text-lg text-accent">
                      Easily compare your skills and experience with the job
                      qualifications using our smart matching indicators.
                    </p>
                  </div>
                </li>
                <li className="list-row border border-primary items-center">
                  <div>
                    <FaCheckCircle
                      size={40}
                      className="bg-secondary rounded-full"
                    />
                  </div>

                  <div>
                    {" "}
                    <h1 className="text-xl md:text-2xl lg:text-3xl">
                      Apply Confidently
                    </h1>
                    <p className="list-col-wrap md:text-lg text-accent">
                      Once you find the right fit, apply directly through our
                      platform with just a few clicks—track your application
                      status in real time.ts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:h-[450px] h-[300px]">
              {" "}
              <img
                src={heroImg}
                className="rounded-lg shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Company section */}
        <div className="md:mb-8 lg:mb-10 mb-5">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Available <span className="text-primary">Companies</span>
          </h1>{" "}
          <div className="grid grid-cols-4 w-full shadow-2xl rounded-2xl py-5 md:py-6 lg:py-8 mt-1 md:mt-3 lg:mt-5 gap-3 px-2 md:px-3 lg:px-4 md:gap-5 lg:gap-7 bg-gradient-to-t from-secondary to-white">
            {data.map((com) => (
              <CompanyLogo key={com.id} com={com}></CompanyLogo>
            ))}
          </div>
        </div>
        {/* Career Tips */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Career <span className="text-primary">Tips</span>
        </h1>

        <div className="mt-1 md:mt-3 lg:mt-5 rounded-2xl space-y-3 lg:pb-20 pb-10">
          {/* Tip 1 */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollAnimation}
          >
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#734bd1] md:text-2xl text-lg lg:text-3xl peer-checked:bg-secondary peer-checked:text-black">
                <p className="text-white">How to Write a Standout Resume?</p>
              </div>
              <div className="collapse-content bg-primary text-accent peer-checked:bg-secondary md:text-lg text-sm lg:text-xl">
                <p className="text-accent">
                  Craft a resume that grabs attention in seconds.
                  <li className="md:ml-4 ml-2">
                    Use a clean, professional layout
                  </li>
                  <li className="md:ml-4 ml-2">
                    Highlight measurable achievements, not just responsibilities
                  </li>
                  <li className="md:ml-4 ml-2">
                    Tailor your resume for each job application
                  </li>
                  <li className="md:ml-4 ml-2">
                    Keep it concise (1 page for freshers, 1–2 for experienced)
                  </li>
                  <li className="md:ml-4 ml-2">
                    Use strong action verbs like “led,” “designed,” or
                    “implemented”
                  </li>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tip 2 */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollAnimation}
          >
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#734bd1] md:text-2xl text-lg lg:text-3xl peer-checked:bg-secondary peer-checked:text-black">
                <p className="text-white">
                  Top 5 Mistakes to Avoid in Interviews
                </p>
              </div>
              <div className="collapse-content bg-primary text-accent peer-checked:bg-secondary md:text-lg text-sm lg:text-xl">
                <p className="text-accent">
                  Even skilled candidates make these avoidable mistakes:
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Going in unprepared about the company
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Giving vague or generic answers
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Speaking negatively about past employers
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Not asking questions when given a chance
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Failing to follow up with a thank-you email
                  </li>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tip 3 */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollAnimation}
          >
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#734bd1] md:text-2xl text-lg lg:text-3xl peer-checked:bg-secondary peer-checked:text-black">
                <p className="text-white">
                  How to Optimize Your LinkedIn Profile?
                </p>
              </div>
              <div className="collapse-content bg-primary text-accent peer-checked:bg-secondary md:text-lg text-sm lg:text-xl">
                <p className="text-accent">
                  Make recruiters come to you by polishing your LinkedIn
                  profile:
                  <li className="md:ml-4 ml-2">
                    Use a clear professional headshot
                  </li>
                  <li className="md:ml-4 ml-2">
                    Write a compelling headline that reflects your goal
                  </li>
                  <li className="md:ml-4 ml-2">
                    Fill out the “About” section with key skills and passions
                  </li>
                  <li className="md:ml-4 ml-2">
                    List all relevant experiences and achievements
                  </li>
                  <li className="md:ml-4 ml-2">
                    Request recommendations and endorsements
                  </li>
                </p>
              </div>
            </div>
          </motion.div>
          {/* Tip 4 */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollAnimation}
          >
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#734bd1] md:text-2xl text-lg lg:text-3xl peer-checked:bg-secondary peer-checked:text-black">
                <p className="text-white">
                  How to Answer “Tell Me About Yourself”
                </p>
              </div>
              <div className="collapse-content bg-primary text-accent peer-checked:bg-secondary md:text-lg text-sm lg:text-xl">
                <p className="text-accent">
                  Keep your answer concise and job-relevant:
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Start with your current role and key strengths
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Mention 1–2 key accomplishments
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Briefly walk through your career journey
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Connect your story to the job you're applying for
                  </li>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tip 5 */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollAnimation}
          >
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-[#734bd1] md:text-2xl text-lg lg:text-3xl peer-checked:bg-secondary peer-checked:text-black">
                <p className="text-white">
                  Smart Ways to Follow Up After an Interview
                </p>
              </div>
              <div className="collapse-content bg-primary text-accent peer-checked:bg-secondary md:text-lg text-sm lg:text-xl">
                <p className="text-accent">
                  Stand out by following up professionally:
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Send a thank-you email within 24 hours
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Mention something specific from the interview
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Reaffirm your interest in the role
                  </li>
                  <li className="list-decimal list-inside md:ml-4 ml-2">
                    Politely ask about the next steps or timeline
                  </li>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/*  Success Stories Section */}
        <div className="md:mb-8 lg:mb-10 mb-5">
          <h1 className=" text-3xl md:text-5xl font-bold ">
            Success <span className="text-primary">Stories</span>
          </h1>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-6 grid-cols-1">
            <div className="card border shadow-lg mt-1 md:mt-3 lg:mt-5 border-primary">
              <figure className="p-4 md:p-6">
                <img src={img1} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center p-0 px-4 md:pb-5 pb-3">
                <h2 className="card-title text-2xl md:text-3xl">Sejuty Jara</h2>
                <p className="text-lg md:text-xl">
                  Frontend Developer at Facebook
                </p>
                <p className="md:text-lg text-sm text-accent">
                  "Job Track made my job search incredibly smooth. I found my
                  dream role within a week and loved how easy it was to compare
                  opportunities."
                </p>
              </div>
            </div>
            <div className="card border shadow-lg mt-1 md:mt-3 lg:mt-5 border-primary">
              <figure className="p-4 md:p-6">
                <img src={img2} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center p-0 px-4  md:pb-5 pb-3">
                <h2 className="card-title text-2xl md:text-3xl">Masud Rana</h2>
                <p className="text-lg md:text-xl">Data Analyst at Google</p>
                <p className="md:text-lg text-sm text-accent">
                  "I was struggling to find jobs that matched my profile, but
                  Job Track's smart filters helped me land a role that fits my
                  skills perfectly."
                </p>
              </div>
            </div>
            <div className="card border shadow-lg mt-1 md:mt-3 lg:mt-5 border-primary">
              <figure className="p-4 md:p-6">
                <img src={img3} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center p-0 px-4  md:pb-5 pb-3">
                <h2 className="card-title text-2xl md:text-3xl">
                  Arman Shahriar
                </h2>
                <p className="text-lg md:text-xl">
                  Software QA Engineer at Adobe
                </p>
                <p className="md:text-lg text-sm text-accent">
                  "The platform is clean, intuitive, and fast. I especially
                  liked the way it showed job criteria clearly—it gave me
                  confidence to apply"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
