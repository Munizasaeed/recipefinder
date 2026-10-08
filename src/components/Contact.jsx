import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
    const [formData,setFormData]=useState({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const [error,setError]=useState({
   name: '',
  email: '',
  subject: '',
  message: ''
})

const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const handlesubmit = (e) => {
  e.preventDefault();
  
  let newErrors = { name: '', email: '', subject: '', message: '' };
  if (formData.name === '') {
    newErrors.name = 'Name is required';
  }
  if (formData.email === '') {
    newErrors.email = 'Email is required';
  }
  if (formData.subject === '') {
    newErrors.subject = 'Subject is required';
  }
   if (formData.message === '') {
    newErrors.message = 'Message is required';
  }
  else if (formData.message.length < 10) {
     newErrors.message = 'length is short';
  }
  else {
    setIsSubmitting(true);
    setTimeout(() => {
setIsSuccess(true);
      setFormData({ name: '', email: '', message: '', subject: '' });
      setIsSubmitting(false);
    }, 1500);
  }
   setError(newErrors);
};
  return (
    <div className="bg-[#F9F6F0] text-gray-800  p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">    
          {/* --- LEFT COLUMN: CONTACT DETAILS --- */}
          <div className="flex flex-col justify-between gap-4">
                  {/* Email, Phone, Address Cards */}
  {contactInfo.map((info, index) => (
  <a
    key={index}
    href={info.link}
    target={info.external ? "_blank" : undefined}
    rel={info.external ? "noopener" : undefined}
    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-sm flex items-center gap-6 flex-1 hover:shadow-md"
  >
    <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0 text-[#A0522D]">
      <FontAwesomeIcon icon={info.icon} className="text-xl" />
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        {info.title}
      </h3>

      <p
        className={`mt-1 break-all ${
          info.title === "Email"
            ? "text-blue-600"
            : "text-gray-700"
        }`}
      >
        {info.value}
      </p>
    </div>
  </a>
))}
            {/* --- SOCIAL LINKS CARD --- */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-sm flex items-center gap-6 flex-1">
              <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0 text-[#A0522D]">
               <a 
    href="https://instagram.com/recipefinder" 
    target="_blank" 
    rel="noopener"
    className="hover:text-[#8B4513] transition-colors"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
  </a>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Social Links</h3>
               <div className="flex items-center gap-5 mt-3 text-[#A0522D]">
  <a 
    href="https://facebook.com/recipefinder" 
    target="_blank" 
    rel="noopener"
    className="hover:text-[#8B4513] transition-colors"
  >
    <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
  </a>
  <a 
    href="https://instagram.com/recipefinder" 
    target="_blank" 
    rel="noopener"
    className="hover:text-[#8B4513] transition-colors"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
  </a>
  <a 
    href="https://youtube.com/@recipefinder" 
    target="_blank" 
    rel="noopener"
    className="hover:text-[#8B4513] transition-colors"
  >
    <FontAwesomeIcon icon={faYoutube} className="text-xl" />
  </a>
</div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-gray-400 transition duration-200 shadow-md h-full flex flex-col justify-between">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Form
            </h2>

            <form onSubmit={handlesubmit} className="flex flex-col gap-4 flex-1 border border-transparent justify-between hover:border-gray-40">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
      onChange={(e) =>{ setFormData({...formData, name: e.target.value}); setError({...error, name: ''});setIsSuccess(false);}}
      
                className="w-full px-5 py-3 rounded-lg  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
              />
<p className="text-red-600 text-sm">{error.name}</p>
              <input
                type="email"
                value={formData.email}
                onChange={(e)=>{setFormData({...formData,email:e.target.value}); setError({...error, email: ''});setIsSuccess(false);}}
                placeholder="Email Address"
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
              />
              <p className="text-red-600 text-sm">{error.email}</p>
              <input
                type="text"
                placeholder="Subject"
                   value={formData.subject}
                onChange={(e)=>{setFormData({...formData,subject:e.target.value}); setError({...error, subject: ''});setIsSuccess(false);}}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400"
              />
              <p className="text-red-600 text-sm">{error.subject}</p>
              <textarea
                rows="4"
                placeholder="Your Message"
                   value={formData.message}
                onChange={(e)=>{setFormData({...formData,message:e.target.value}); setError({...error,message:""}); setIsSuccess(false);}}
                className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A0522D] transition duration-200 focus:border-transparent text-gray-800 placeholder-gray-400 resize-none flex-1"
              />
              <p className="text-red-600 text-sm">{error.message}</p>
          <button
  type="submit"
  disabled={isSubmitting}
  className="w-full bg-[#A0522D] hover:bg-[#8B4513] text-white font-medium py-3.5 rounded-lg shadow-sm transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
>
  <FontAwesomeIcon icon={faPaperPlane} />
  {isSubmitting ? "Sending..." : "Send Message"}
</button>
{isSuccess && <p className="text-green-600">Message sent successfully!</p>}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;