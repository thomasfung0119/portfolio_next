import Head from 'next/head'
import Link from "next/link"
import dynamic from 'next/dynamic'

import Landing from '@/views/Landing/Landing';
import Expertise from '@/views/Expertise/Expertise';
import Footer from '@/components/Footer/Footer';
import styles from '@/styles/Home.module.css';
import { FormattedMessage, useIntl } from "react-intl";
import { useTheme } from 'next-themes';
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

const Navbar = dynamic(() => import('@/components/NavBar/Navbar'), { ssr: false })

function Home(props) {

  const intl = useIntl();
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Head>
        <title>Thomas' Porfolio</title>
        <meta name="description" content="Hi, I am Thomas Fung, a software developer that based off Hong Kong. This is a simple portfolio that allow people to know more about me and investigate my past projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Navbar 
            id = "main-navbar"
            title = "TF"
            ids = {{
            "Landing": <FormattedMessage id="page.home.section1" />,
            "Expertise": <FormattedMessage id="page.home.section2" />,
            "section-three": <FormattedMessage id="page.home.section3" />,
            }}
            translationLink = {{
            "en": <Link key="tc" href="/" locale="tc">繁中</Link>,
            "tc": <Link key="sc" href="/" locale="sc">簡中</Link>,
            "sc": <Link key="en" href="/" locale="en">EN</Link>,
            }}
            themeButton = {{
            "light": <BsFillLightbulbFill onClick={() => setTheme('dark')}/>,
            "dark": <BsFillLightbulbOffFill onClick={() => setTheme('light')}/>,
            }}
            theme = {theme}
        />
        <Landing theme = {theme}/>
        <Expertise />
        <Footer />
      </main>
    </>
  )
}

export default Home;
