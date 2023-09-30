import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
//template_58rrruv
//9GSTpi8F69U-EQzka
//service_ustcu6b

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(0);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(1);
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "anujsah25112010@gmail.com",
      Password : "ABFFFE0C8DD4CBEDB88D02E0542A061B0BA6",
      To : 'harshithvallabaneni3824@gmail.com',
      From : form.email,
      Subject : `A New Message From ${form.name} By Portfolio Contact Form`,
      Body : `Message is sent by |~ ${form.name} ~ ${form.email} ~| and his message is : ${form.message} `
  }).then(
    delay(1000).then(() => setLoading(2)),
    )
    function delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    }
  };

  return (
    <div
      className={`xl:mt-12 pb-20 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='hover:border-[#1d8b8b] flex-[0.75] border border-[#235f5f] bg-[#121211] shadow-2xl hover:shadow-[#42316e] shadow-[#3d3679] p-8 rounded-2xl mx-auto'>
        <p className={`${styles.sectionSubText} lobster text-3xl text-cyan-300 underline underline-offset-4 decoration-2 decoration-double italic my-3 hover:text-[32px] duration-200 cursor-default hover:text-[#a7b4ff]`}>»→ Get in touch  »→</p>
        <h3 className={`${styles.sectionHeadText} text-3xl tracking-wider spice font-bold text-[#7a78ff] italic mt-[32px] hover:text-[32px] duration-200 cursor-default hover:text-[#95a5ff]`}>Contact.</h3> 
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='font-medium text-xl ml-2 hover:text-[21px] duration-200 hover:text-violet-500 text-violet-400 mb-4 pacifico'>Your Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's your good name?" className='bg-tertiary lobster placeholder:tracking-widest py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[1px] outline-double outline-offset-[3px] outline-[#6b4545] font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium text-xl ml-2 text-violet-400 mb-4 pacifico hover:text-[21px] duration-200 hover:text-violet-500'>Your email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange}placeholder="What's your web address?" className='bg-tertiary lobster placeholder:tracking-widest py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[1px] outline-double outline-offset-[3px] outline-[#6b4545] font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='font-medium text-xl ml-2 text-violet-400 mb-4 pacifico hover:text-[21px] duration-200 hover:text-violet-500'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder='What you want to say?' className='bg-tertiary lobster placeholder:tracking-widest py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[1px] outline-double outline-offset-[3px] outline-[#6b4545] font-medium' />
          </label>
          <button type='submit' className={`py-3 bg-slate-900 border border-[#202020] px-8 rounded-xl outline-none hover:shadow-[#302563] w-fit font-bold shadow-md shadow-[#0f3d3d] disabled:opacity-10`} disabled={loading==2} >
            {loading == 1 ? "Sending..." : loading == 2 ? "Sent" : "Send"}
          </button>
        </form>
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");
