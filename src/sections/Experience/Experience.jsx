import { useState } from "react"
import "./Experience.css"

const Experience = () => {
  const [index, useIndex] = useState(0);

  const ChangeIndex = (i) => {
    useIndex(i)
  }

  const experience = [
    {
      name: "PedePizza",
      author: "João Santos",
      devDate: "November 2022",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
    {
      name: "SmartWiki",
      author: "João Santos",
      devDate: "March 2023",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
    {
      name: "Phoenix",
      author: "João Santos",
      devDate: "April 2023",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
    {
      name: "Snake",
      author: "João Santos",
      devDate: "January 2021",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
    {
      name: "Culturafro",
      author: "João Santos",
      devDate: "September 2024",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
    {
      name: "Jellifin",
      author: "Jellifin",
      devDate: "-",
      texts: [
        "sdoifiu hsadgfiyhu g sadiuhgf uisayhdiufahjk sdg fsd kajsdghfi uaskdjh",
        "ljksadhnfjkh aksjdhfkj hksdajhf klkajsdh asekljhdfa akjsdhf",
        "oasidf sadlkj asdçlkçjbqasd sadlmnf çalksdff n sadfonb lia~sd",
        "lksdanfoj asdkjlfh jkasldjkhf lajksdhfasçldkhjf aslkjdf "
      ],
    },
  ]

  return (
    <section id="experience" className="experience">
      <div className="section__header">
        <p className="section__number">02.</p>
        <h2 className="section__title">View my Sites</h2>
        <hr className="section__spacer"/>
      </div>

      <div className="inner">
        <div role="tablist" aria-label="Sites tabs" className="sAHTI">
          {experience.map((obj, i) => (
            <button id={`tab-${i}`} role="tab" aria-selected={i === index} tabIndex={i === index ? "0" : "-1"} aria-controls={`panel-${i}`} className={i === index ? "dHdZWh" : "gHbkvF"} onClick={() => ChangeIndex(i)}> 
              <span id={`sei-la-${i}`}>{obj.name}</span>
            </button>
          ))}

          <div className="fLsUSJ" style={{transform: `translateY(calc(${index}* var(--tab-height)))`}}></div>
        </div>

        <div className="jbGgbG">
          {experience.map((obj, i) => (
            index === i &&
            <div id={`panel-${i}`} role="tabpanel" tabIndex="0" aria-labelledby="tab-0" aria-hidden="false" className="QgHxr">
              <h3>
                <span>{obj.name}</span>
                <span className="company">&nbsp;@&nbsp;<a href="https://www.upstatement.com/" className="inline-link" rel="noopener noreferrer" target="_blank">{obj.author}</a></span>
              </h3>
              <p className="range">{obj.devDate}</p>
              <div>
                <ul>
                  {obj.texts.map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Experience