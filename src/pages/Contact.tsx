import { Phone, Mail, Linkedin } from "lucide-react";

function Contact(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <Phone color="#141414" strokeWidth={1.5} size={32} />
          <p>+47 94836373</p>
        </div>
        {/* Mail */}
        <div>
          <a
            className="flex items-center space-x-2"
            href="mailto:eivind-buodd@hotmail.com"
            target="_blank"
          >
            <Mail color="#141414" strokeWidth={1.5} size={32} />
            <p>eivind-buodd@hotmail.com</p>
          </a>
        </div>
        {/* LinkedIn */}
        <div>
          <a
            className="flex items-center space-x-2"
            href="https://www.linkedin.com/in/eivind-buodd-6741a7315/"
            target="_blank"
          >
            <Linkedin color="#141414" strokeWidth={1.5} size={32} />
            <p>Eivind Buodd</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
