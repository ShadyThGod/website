import React from "react"
import Layout from "../components/layout"
import Social from '../components/social'

const AboutPage = () => {
    let navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" }
    ];

    return (
        <Layout title="About" notIndex={true} navLinks={navLinks}>
            <div className="description" style={{
                fontSize: '1.4rem',
                fontFamily: 'Public Sans, sans-serif'
            }}>I am a web developer and designer from India. I’m adept in HTML, CSS and JavaScript. Also semi-proficient in tech like Electron, React, Gatsby, Hexo. I use Figma for designing and also know Photoshop.<br /><br />Contact:</div>
            <div className="contact">
                <Social icon="github" href="https://github.com/shadythgod" text="@shadythgod"></Social>
                <Social icon="mail" href="mailto:amanharwara@gmail.com" text="amanharwara[at]gmail[dot]com"></Social>
            </div>
        </Layout >
    )
}

export default AboutPage