import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion } from "framer-motion"
import Heading from "../BasicComponents/Heading";
 
const Faq = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="py-20 bg-black bg-opacity-60">
    <Heading title="Frequently Answered Questions"/>
    <motion.div
    initial={{ opacity: 0, y:100 }}
    transition={{ ease: "easeOut", duration: 2 }}
    whileInView={{opacity:1, y:0}}
    className="m-auto px-12 pt-28 pb-40 md:px-36">
    <Fragment>
      <Accordion className="text-white border-teal-600 border px-4 py-1 cursor-pointer rounded-lg" open={open === 1} onClick={() => handleOpen(1)}>
        <AccordionHeader>What does ELSOC do ?</AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta incidunt voluptatem temporibus, dolorem iure distinctio suscipit aut, voluptates deleniti dolor, nostrum expedita fuga! Quam, nostrum facilis. Tempore, deleniti tenetur?
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-teal-600 border px-4 py-1 my-8 cursor-pointer rounded-lg" open={open === 2} onClick={() => handleOpen(2)}>
        <AccordionHeader>What are the events organized by the ELSOC throughout the year ?</AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non eaque cupiditate nihil accusamus, assumenda delectus magnam itaque iusto explicabo debitis. Animi optio iure ipsa non tempora molestias doloribus ex?
        </AccordionBody>
      </Accordion>
      <Accordion className="text-white border-teal-600 border px-4 py-1 cursor-pointer rounded-lg" open={open === 3} onClick={() => handleOpen(3)}>
        <AccordionHeader>How to join ELSOC ? What is the procedure for this ?</AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse odit illum iste ipsum repudiandae ex dignissimos reprehenderit tempore dolorum eaque aperiam accusantium, itaque recusandae asperiores laudantium, fuga enim natus!
        </AccordionBody>
      </Accordion>
    </Fragment>
    </motion.div>
    </div>
  );
}
export default Faq;
