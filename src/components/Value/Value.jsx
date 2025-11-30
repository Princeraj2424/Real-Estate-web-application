import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion'; 

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth v-container">
        
        {/* LEFT IMAGE */}
        <div className="v-left">
          <div className="image-container">
            <img src="/value.png" alt="Value" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="v-right">
          <span className="orangeText">Our Values</span>
          <br />
          <span className="primaryText">Value We Give To You</span>
          <br />
          <span className="secondaryText">
            We are always ready to provide the best service to you.
            We believe a good place to live can make your life better.
          </span>

          {/* ACCORDION */}
          <Accordion 
            className="accordion"
            allowMultipleExpanded={false}   // only one open at a time
            allowZeroExpanded={true}        // <-- key fix to allow closing
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem className="accordionItem fadeIn" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="flexCenterb icon">
                      {item.icon}
                      <span className="primary-Text">{item.heading}</span>
                    </div>
                    <div className="flex-Centericon">
                      <MdOutlineArrowDropDown size={20}/>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <div className="accordionPanelWrapper">
                    <p className="secondaryText">{item.detail}</p>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default Value;
