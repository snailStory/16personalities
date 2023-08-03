import { css } from "@emotion/react";
import twitter from "/src/assets/svgs/twitter.svg";
import instagram from "/src/assets/svgs/instagram.svg";
import facebook from "/src/assets/svgs/facebook.svg";

const Footer = () => {
  const footerNavMenus = [
    "Contact",
    "Testimonials, Terms & Conditions",
    "Privacy Policy",
    "For Teams",
    "Join Us!",
  ];

  const footerNavIcons = [
    { icon: facebook, name: "facebook" },
    { icon: instagram, name: "instagram" },
    { icon: twitter, name: "witter" },
  ];
  return (
    <div
      css={css`
        border-top: 1px solid #aaa;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 80px 15px 40px 15px;
      `}
    >
      <div>&copy;2023 Snail Story</div>
      <nav>
        <ul
          css={css`
            display: flex;
            gap: 20px;
          `}
        >
          {footerNavMenus.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </nav>
      <nav>
        <ul
          css={css`
            display: flex;
            gap: 20px;
          `}
        >
          {footerNavIcons.map((item, index) => {
            return (
              <li
                key={index}
                css={css`
                  border: solid 2.5px #555;
                  border-radius: 100px;
                  padding: 10px;
                  background-color: #d7d7d7;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  css={css`
                    width: 16px;
                    background-color: #d7d7d7;
                  `}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        css={css`
          text-align: center;
        `}
      >
        Please
        consider reporting inaccuracies to support@snailsotry.com or join
        our project!
      </div>
    </div>
  );
};

export default Footer;
