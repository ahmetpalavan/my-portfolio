import Header from "../components/Header"
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <div>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </div>
      <h1></h1>
      <Header/>
      <section id="hero">
        <Hero/>
      </section>
      {/* {About} */}
      {/* {Experience} */}
      {/* {Skills} */}
      {/* {Projects} */}
      {/* {Contact Me} */}
    </div>
  )
}