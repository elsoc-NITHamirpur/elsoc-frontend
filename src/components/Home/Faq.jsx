import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import Heading from "../Heading/Heading";
 
const Faq = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="px-4 md:px-40 py-20 md:py-40">
    <Heading title="Frequently Answered Questions"/>
    <motion.div
    initial={{ opacity: 0, y:100 }}
    transition={{ ease: "easeOut", duration: 2 }}
    whileInView={{opacity:1, y:0}}
    className="m-auto p-8">
    <Fragment>
      <Accordion className="text-white border-teal-600 border p-2 md:p-4 cursor-pointer rounded-lg" open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>What does ELSOC do ?</AccordionHeader>
        <AccordionBody>
          ELSOC is the society of Electrical engineering which organizes various events and workshops
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-teal-600 border p-2 md:p-4 my-8 cursor-pointer rounded-lg" open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>What are the events organized by the ELSOC throughout the year ?</AccordionHeader>
        <AccordionBody>
          Viva questionnaire, Intern Talk , Workshop on Blockchain technology are some of the events organized by ELSOC.
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-teal-600 border p-2 md:p-4 cursor-pointer rounded-lg" open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>How to join ELSOC ? What is the procedure for this ?</AccordionHeader>
        <AccordionBody>
          You can join ELSOC in your 1st or 2nd year by going through interview process.
        </AccordionBody>
      </Accordion>
    </Fragment>
    </motion.div>
    </div>
  );
}
export default Faq;
