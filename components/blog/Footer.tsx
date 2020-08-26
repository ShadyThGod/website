/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Github from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";
import Mastodon from "@/icons/Mastodon";

const breakpoints = [576, 1024, 1280, 1370];
const media_queries = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FooterLink = ({ children, href, ...props }) => (
  <a
    className="footer-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    css={css`
      display: flex;
      fill: #fff;
      font-size: 1.75vw;
      margin-right: 1vw;

      ${media_queries[1]} {
        font-size: 1.25rem;
        margin-right: 0.75rem;
      }
    `}
  >
    {children}
  </a>
);

const Footer = () => (
  <footer
    css={css`
      background: #131313;
      color: #fff;
      padding: 0.75vw 3vw;
      font-size: 1.3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `}
  >
    <div className="left">(c) 2020 Aman Harwara</div>
    <div
      className="right"
      css={css`
        display: flex;
      `}
    >
      <FooterLink href="https://github.com/amanharwara">{Github}</FooterLink>
      <FooterLink href="https://mastodon.social/@amanharwara">
        {Mastodon}
      </FooterLink>
      <FooterLink
        href="https://instagram.com/aman.harwara"
        style={{ marginRight: "0" }}
      >
        {Instagram}
      </FooterLink>
    </div>
  </footer>
);

export default Footer;