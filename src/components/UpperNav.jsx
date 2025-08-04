import { Link } from 'react-router-dom';

const UpperBar = () => {
  return (
    <nav className="bg-[#8a7208] py-2 px-4" id="upBar">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          {/* Social Media Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-3 order-2 lg:order-1">
            <a
              href="https://www.facebook.com/ascentwealth.mf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/461facebook5.png"
                className="w-6 h-6"
                alt="Facebook"
              />
            </a>

            <Link
              to="/"
              className="hover:opacity-80 transition-opacity"
              aria-label="Twitter"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/71twitter5.png"
                className="w-6 h-6"
                alt="Twitter"
              />
            </Link>

            <a
              href="https://www.instagram.com/ascent.wealth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/55instagram5.png"
                className="w-6 h-6"
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.youtube.com/channel/UC1KDPVsTcCbihC9xDcP-ZWQ/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/118youtube5.png"
                className="w-6 h-6"
                alt="YouTube"
              />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+917305953668&text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="WhatsApp"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/883whatsapp5.png"
                className="w-6 h-6"
                alt="WhatsApp"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/kannan-rangaswamy-39761b8b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <img
                src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/211linkedin5.png"
                className="w-6 h-6"
                alt="LinkedIn"
              />
            </a>
          </div>

          {/* Contact Information */}
          <div className="hidden sm:block">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-white order-1 lg:order-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5"
                  src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/46955615telephone1.png"
                  alt="Phone"
                />
                <a
                  href="tel:+917305953668"
                  className="text-white no-underline hover:underline"
                >
                  <span className="text-sm font-semibold">+91-7305953668</span>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <img
                  src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/704694287mail2.png"
                  alt="Mail"
                  className="w-5 h-5"
                />
                <a
                  href="mailto:ascentwealth.invest@gmail.com"
                  className="text-white no-underline hover:underline"
                >
                  <span className="text-sm font-semibold">
                    ascentwealth.invest@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UpperBar;
