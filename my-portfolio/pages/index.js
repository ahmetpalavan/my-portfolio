import { About, Experience, Header,Hero, Skills } from "../components"

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <div>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <Header/>
      <section id="hero" className="snap-start"> 
        <Hero/>
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      <section id="experience" className="snap-center">
        <Experience/>
      </section>
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      {/* {Projects} */}
      {/* {Contact Me} */}
    </div>
  )
}
