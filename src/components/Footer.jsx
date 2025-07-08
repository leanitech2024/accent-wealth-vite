
const Footer = () => {
    return (
        <section>
            <footer className="bg-black text-center lg:text-left text-white mt-10">
                <div className='container mx-auto'>
                    <div className="p-4 pb-0">
                        <section>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-3 mx-auto mt-3">
                                    <h4 className="mb-4 font-bold text-[#bb9d45] italic">About Us</h4>
                                    <p>We are an AMFI registered Mutual Funds Distributor engaged in distribution of Equity, Debt, Hybrid, Sector and Thematic Mutual Funds. We also provide services with respect to various secondary Bonds, Equity trading, NCDs, Life and Health Insurance, Corporate FDs and Estate Planning solutions etc.</p>
                                    <br />
                                    <p> AMFI Registered Mutual Funds Distributor (ARN 109866)</p>
                                </div>
                                <hr className="w-full md:hidden border-gray-700 my-4" />
                                <div className="w-full md:w-1/5 lg:w-1/5 xl:w-1/5 px-3 mx-auto mt-3">
                                    <h4 className="mb-4 font-bold text-[#bb9d45] italic">Products</h4>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Mutual Funds</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Life and Health Insurance</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Corporate FDs, Bonds and NCDs</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Estate Planning</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Equity - De-mat Accounts</a></p>
                                    <p><a href='https://www.ascentwealth.in/' className="text-white no-underline hover:underline">Goal Based Financial Planning</a></p>
                                </div>
                                <hr className="w-full md:hidden border-gray-700 my-4" />
                                <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 px-3 mx-auto mt-3">
                                    <h4 className="mb-4 font-bold text-[#bb9d45] italic">Contact</h4>
                                    <p className="mb-6 flex items-center">
                                        <img className="mb-1 mr-2 w-7 h-7" src='https://images.anchoredgetechno.com/images/phone4.png' /> :- +91-7305953668
                                    </p>
                                    <p className="mb-6 mt-6 flex items-center">
                                        <img className="mb-1 mr-2 w-7 h-7" src='https://images.anchoredgetechno.com/images/email4.png' /> :- ascentwealth.invest@gmail.com
                                    </p>
                                    <p className="mt-6 flex items-start">
                                        <img className="mb-2 mr-2 w-7 h-7 flex-shrink-0" src='https://images.anchoredgetechno.com/images/location4.png' /> :- Thoraipakkam, Chennai,<br />Tamilnadu - 600097, India
                                    </p>
                                </div>
                                <div className="w-full md:w-1/4 lg:w-1/5 xl:w-1/5 px-3 mx-auto mt-3">
                                    <h4 className="mb-4 font-bold text-[#bb9d45] italic">Follow us</h4>
                                    <div className='flex mt-4 p-2'>
                                        <a className="mb-2 mr-2" href="https://www.facebook.com/ascentwealth.mf" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/461facebook5.png" alt="Facebook" className="w-6 h-6" />
                                        </a>
                                        <a className="mb-2 mr-2" href="/" target='_blank'>
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/71twitter5.png" alt="x" className="w-6 h-6" />
                                        </a>
                                        <a className="mb-2 mr-2" href="https://www.instagram.com/ascent.wealth/" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/55instagram5.png" alt="LinkedIn" className="w-6 h-6" />
                                        </a>
                                    </div>
                                    <div className='flex'>
                                        <a className="mb-2 mr-2" href="https://www.youtube.com/channel/UC1KDPVsTcCbihC9xDcP-ZWQ/featured" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/118youtube5.png" alt="LinkedIn" className="w-6 h-6" />
                                        </a>
                                        <a className="mb-2 mr-2" href="https://api.whatsapp.com/send?phone=+917305953668&text=Hello" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/883whatsapp5.png" alt="LinkedIn" className="w-6 h-6" />
                                        </a>
                                        <a className="mb-2 mr-2" href="https://www.linkedin.com/in/kannan-rangaswamy-39761b8b/" target='_blank' rel="noreferrer">
                                            <img src="https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/211linkedin5.png" alt="LinkedIn" className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="text-center p-3 bg-opacity-20 bg-gray-900">
                    © 2024 Copyright :
                    <a className="text-white no-underline hover:underline ml-1" href="https://mdbootstrap.com/"> Ascent Wealth. All rights reserved. || Designed & Developed By : Shreyansh Tiwari</a>
                </div>
            </footer>
        </section>
    );
};

export default Footer;