import { useState } from "react";
import "./Experience.css";
import ExperiencePanel from "../../components/ExperiencePanel/ExperiencePanel";
import ExperienceNav from "../../components/ExperienceNav/ExperienceNav";

const Experience = () => {
  const [selected, useSelected] = useState(0);

  const ChangeSelected = (i) => {
    useSelected(i);
  };

  const experiences = [
    {
      name: "PedePizza",
      author: "João Santos",
      devDate: "November 2022",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
    {
      name: "SmartWiki",
      author: "João Santos",
      devDate: "March 2023",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
    {
      name: "Phoenix",
      author: "João Santos",
      devDate: "April 2023",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
    {
      name: "Snake",
      author: "João Santos",
      devDate: "January 2021",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
    {
      name: "Culturafro",
      author: "João Santos",
      devDate: "September 2024",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
    {
      name: "Jellifin",
      author: "Jellifin",
      devDate: "-",
      link: "webisk.com.br",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf ",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section__header">
        <p className="section__number">02.</p>
        <h2 className="section__title">View my Sites</h2>
        <hr className="section__spacer" />
      </div>

      <div className="experience__inner">
        <ExperienceNav
          key="experience-nav"
          experiences={experiences}
          selected={selected}
          ChangeSelected={ChangeSelected}
        />

        <div className="experience__texts">
          {experiences.map(
            (experience, index) =>
              selected === index && (
                <ExperiencePanel
                  key={`experience-panel-${index}`}
                  experience={experience}
                  index={index}
                />
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
