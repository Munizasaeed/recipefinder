// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const contactInfo = [
//   {
//     icon: faEnvelope,
//     title: "Email",
//     value: "support@recipefinder.com",
//     link: "mailto:support@recipefinder.com",
//   },
//   {
//     icon: faPhone,
//     title: "Phone",
//     value: "+1 555-RECIPE-X",
//     link: "tel:+15557324739",
//   },
//   {
//     icon: faMapMarkerAlt,
//     title: "Address",
//     value: "123 Flavor Street, Kitchen Town, CA 90210",
//     link: "https://maps.google.com/?q=123+Flavor+Street+Kitchen+Town+CA+90210",
//     external: true,
//   },
// ];
// const Contact = () => {
//     const [formData,setFormData]=useState({
//   name: '',
//   email: '',
//   subject: '',
//   message: ''
// })
// const [error,setError]=useState({
//    name: '',
//   email: '',
//   subject: '',
//   message: ''
// })

// const [isSubmitting, setIsSubmitting] = useState(false);
// const [isSuccess, setIsSuccess] = useState(false);
// const handlesubmit = (e) => {
//   e.preventDefault();
  
//   let newErrors = { name: '', email: '', subject: '', message: '' };
//   if (formData.name === '') {
//     newErrors.name = 'Name is required';
//   }
//   if (formData.email === '') {
//     newErrors.email = 'Email is required';
//   }
//   if (formData.subject === '') {
//     newErrors.subject = 'Subject is required';
//   }
//    if (formData.message === '') {
//     newErrors.message = 'Message is required';
//   }
//   else if (formData.message.length < 10) {
//      newErrors.message = 'length is short';
//   }
//   else {
//     setIsSubmitting(true);
//     setTimeout(() => {
// setIsSuccess(true);
//       setFormData({ name: '', email: '', message: '', subject: '' });
//       setIsSubmitting(false);
//     }, 1500);
//   }
//    setError(newErrors);
// };
//   return (
//     <div className="bg-[#F9F6F0] text-gray-800  p-6 md:p-12 flex items-center justify-center">
//       <div className="max-w-7xl w-full mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">    
//           {/* --- LEFT COLUMN: CONTACT DETAILS --- */}
//           <div className="flex flex-col justify-between gap-4">
//                   {/* Email, Phone, Address Cards */}
//   {contactInfo.map((info, index) => (
//   <a
//     key={index}
//     href={info.link}
//     target={info.external ? "_blank" : undefined}
//     rel={info.external ? "noopener" : undefined}
//     className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-sm flex items-center gap-6 flex-1 hover:shadow-md"
//   >
//     <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0 text-[#A0522D]">
//       <FontAwesomeIcon icon={info.icon} className="text-xl" />
//     </div>

//     <div>
//       <h3 className="text-xl font-semibold text-gray-900">
//         {info.title}
//       </h3>

//       <p
//         className={`mt-1 break-all ${
//           info.title === "Email"
//             ? "text-blue-600"
//             : "text-gray-700"
//         }`}
//       >
//         {info.value}
//       </p>
//     </div>
//   </a>
// ))}
//             {/* --- SOCIAL LINKS CARD --- */}
//             <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-sm flex items-center gap-6 flex-1">
//               <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0 text-[#A0522D]">
//                <a 
//     href="https://instagram.com/recipefinder" 
//     target="_blank" 
//     rel="noopener"
//     className="hover:text-[#8B4513] transition-colors"
//   >
//     <FontAwesomeIcon icon={faInstagram} className="text-xl" />
//   </a>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900">Social Links</h3>
//                <div className="flex items-center gap-5 mt-3 text-[#A0522D]">
//   <a 
//     href="https://facebook.com/recipefinder" 
//     target="_blank" 
//     rel="noopener"
//     className="hover:text-[#8B4513] transition-colors"
//   >
//     <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
//   </a>
//   <a 
//     href="https://instagram.com/recipefinder" 
//     target="_blank" 
//     rel="noopener"
//     className="hover:text-[#8B4513] transition-colors"
//   >
//     <FontAwesomeIcon icon={faInstagram} className="text-xl" />
//   </a>
//   <a 
//     href="https://youtube.com/@recipefinder" 
//     target="_blank" 
//     rel="noopener"
//     className="hover:text-[#8B4513] transition-colors"
//   >
//     <FontAwesomeIcon icon={faYoutube} className="text-xl" />
//   </a>
// </div>
//               </div>
//             </div>
//           </div>

//           {/* --- RIGHT COLUMN: CONTACT FORM --- */}
//           <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-md h-full flex flex-col justify-between">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">
//               Contact Form
//             </h2>

//             <form onSubmit={handlesubmit} className="flex flex-col gap-4 flex-1 border border-transparent justify-between hover:border-gray-40">
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={formData.name}
//       onChange={(e) =>{ setFormData({...formData, name: e.target.value}); setError({...error, name: ''});setIsSuccess(false);}}
      
//                 className="w-full px-5 py-3 rounded-lg  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
//               />
// <p className="text-red-600 text-sm">{error.name}</p>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e)=>{setFormData({...formData,email:e.target.value}); setError({...error, email: ''});setIsSuccess(false);}}
//                 placeholder="Email Address"
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
//               />
//               <p className="text-red-600 text-sm">{error.email}</p>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                    value={formData.subject}
//                 onChange={(e)=>{setFormData({...formData,subject:e.target.value}); setError({...error, subject: ''});setIsSuccess(false);}}
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
//               />
//               <p className="text-red-600 text-sm">{error.subject}</p>
//               <textarea
//                 rows="4"
//                 placeholder="Your Message"
//                    value={formData.message}
//                 onChange={(e)=>{setFormData({...formData,message:e.target.value}); setError({...error,message:""}); setIsSuccess(false);}}
//                 className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400 resize-none flex-1"
//               />
//               <p className="text-red-600 text-sm">{error.message}</p>
//           <button
//   type="submit"
//   disabled={isSubmitting}
//   className="w-full bg-[#A0522D] hover:bg-[#8B4513] text-white font-medium py-3.5 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
// >
//   <FontAwesomeIcon icon={faPaperPlane} />
//   {isSubmitting ? "Sending..." : "Send Message"}
// </button>
// {isSuccess && <p className="text-green-600">Message sent successfully!</p>}
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faShareNodes,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const contactInfo = [
  {
    icon: faEnvelope,
    title: "Email",
    value: "support@recipefinder.com",
    link: "mailto:support@recipefinder.com",
  },
  {
    icon: faPhone,
    title: "Phone",
    value: "+1 555-RECIPE-X",
    link: "tel:+15557324739",
  },
  {
    icon: faMapMarkerAlt,
    title: "Address",
    value: "123 Flavor Street, Kitchen Town, CA 90210",
    link: "https://maps.google.com/?q=123+Flavor+Street+Kitchen+Town+CA+90210",
    external: true,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", subject: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setError(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="bg-[#FAF8F5] p-6 md:p-12 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D4A3E] tracking-tight">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 mt-2 italic text-base">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* --- LEFT COLUMN: CONTACT DETAILS & SOCIALS --- */}
          <div className="flex flex-col gap-5 justify-between">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-5 flex-1 group"
              >
                <div className="w-13 h-13 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500 group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={info.icon} className="text-lg" />
                </div>

                <div>
                  <h3 className="text-base  font-bold text-[#2D4A3E] group-hover:text-orange-500 transition-colors duration-200">
                    {info.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-medium break-all ${
                      info.title === "Email"
                        ? "text-blue-600 hover:underline"
                        : "text-black"
                    }`}
                  >
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-5 flex-1 group">
              <div className="w-13 h-13 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0 text-orange-500 group-hover:bg-[#2D4A3E] group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faShareNodes} className="text-lg" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#2D4A3E] group-hover:text-orange-500 transition-colors duration-200">
                  Follow Our Socials
                </h3>
                <div className="flex items-center gap-3.5 mt-2">
                  {/* Facebook - Original Color #1877F2 */}
                  <a
                    href="https://facebook.com/recipefinder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all duration-200 text-sm shadow-sm"
                    title="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  {/* Instagram - Original Color #E4405F */}
                  <a
                    href="https://instagram.com/recipefinder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#E4405F]/10 border border-[#E4405F]/20 flex items-center justify-center text-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:scale-110 transition-all duration-200 text-sm shadow-sm"
                    title="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>

                  {/* YouTube - Original Color #FF0000 */}
                  <a
                    href="https://youtube.com/@recipefinder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:scale-110 transition-all duration-200 text-sm shadow-sm"
                    title="YouTube"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#2D4A3E] mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Full Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      setError({ ...error, name: "" });
                      setIsSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] transition duration-200 text-gray-800 placeholder-gray-400 text-sm"
                  />
                  {error.name && (
                    <p className="text-red-500 text-xs mt-1 pl-1">
                      {error.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setError({ ...error, email: "" });
                      setIsSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] transition duration-200 text-gray-800 placeholder-gray-400 text-sm"
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs mt-1 pl-1">
                      {error.email}
                    </p>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      setError({ ...error, subject: "" });
                      setIsSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] transition duration-200 text-gray-800 placeholder-gray-400 text-sm"
                  />
                  {error.subject && (
                    <p className="text-red-500 text-xs mt-1 pl-1">
                      {error.subject}
                    </p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      setError({ ...error, message: "" });
                      setIsSuccess(false);
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D4A3E] transition duration-200 text-gray-800 placeholder-gray-400 resize-none text-sm"
                  />
                  {error.message && (
                    <p className="text-red-500 text-xs mt-1 pl-1">
                      {error.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3.5 rounded-xl shadow-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 mt-2 text-sm disabled:opacity-70"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>

                {/* Success Alert */}
                {isSuccess && (
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-sm font-medium mt-2">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;