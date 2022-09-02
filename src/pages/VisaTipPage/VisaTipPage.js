import ImageHeader from '../../components/ContentTourPage/ImageHeader'
import visaSrc from '../../assets/Tips/Visa/visaSrc.jpg'
import TipsHeader from '../../components/ContentTourPage/TipsHeader/TipsHeader';
import visa from '../../assets/Tips/Visa/visa.png'
import visa1 from '../../assets/Tips/Visa/visa1.png'
import visa2 from '../../assets/Tips/Visa/visa2.png'
function VisaTipPage() {
    return (
        <div className="section bg-green-50">
            <div className="section-center">
                <ImageHeader imageSrc={visaSrc} />
                <div className='border-b-2 border-b-gray-200 md:w-3/5 w-full text-center md:text-left mx-auto md:pl-2 '>
                    <TipsHeader
                        title="All Vietnam destinations are open. No self-isolation is required. Here are key points of the new guidelines: RT-PCR test + visa + travel insurance now accepted for entry."
                        author="Huy Nguyen"
                        date="28 November 2021"
                    />
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Simple entry requirements
                    </h3>
                    <ul>
                        <li className="py-2">
                            <p className='tip-text'>
                                1. Negative Covid-19 test result per passenger:
                            </p>
                            <p className='text-sm pl-4 mt-1'>
                                <strong>Travelers entering via air:</strong> Present negative test results as mentioned in the section above. In case not presenting proof of a negative test result for SARS-CoV-2 as specified above, entrants are required to undergo a SARS-CoV-2 test at the border gate before entry (using RT-PCR/RT-LAMP method or rapid antigen test for SARS-CoV-2). Upon receiving a negative SARS-CoV-2 test result, they are allowed to enter and join tour activities. If the RT - PCR test result returns positive, they must follow strictly the regulations of the health authority.<br />
                                <strong>Travelers entering via land, rail and sea routes:</strong> Present negative test results as mentioned in the section above. In case not presenting proof of a negative test result for SARS-CoV-2 as specified above, entrants are required to undergo a SARS-CoV-2 test at the border gate before entry (using RT-PCR/RT-LAMP method or rapid antigen test for SARS-CoV-2). Upon receiving a negative SARS-CoV-2 test result, they are allowed to enter and join tour activities. If the RT - PCR test result returns positive, they must follow strictly the regulations of the health authority. <br />
                                <strong>Children under 2 years old</strong> are not required to be tested for SARS-CoV-2. Having not been vaccinated against COVID-19 or having never been infected with SARS-CoV-2 before, they are allowed to enter and to join outdoor activities with their parents and relatives.
                            </p>
                        </li>
                        <li className="py-2">
                            <p className='tip-text'>
                                2. Proof of valid medical/travel insurance covering Covid-19 treatment. Minimum cover USD10,000 Link to info
                            </p>
                        </li>
                        <li className="py-2">
                            <p className='tip-text'>
                                3. Downloaded PC-Covid mobile app (Apple/Google Play) which must be presented to enter all VN establishments
                            </p>
                        </li>
                        <li className="py-2">
                            <p className='tip-text'>
                                4. Visitors are requested to self-monitor for 10 days from entry, and to notify the nearest medical facility should they experience signs of COVID-19.
                            </p>
                        </li>
                        <li className="py-2">
                            <p className='tip-text'>
                                5. Surgical masks, social distancing and sanitizing are required at all times. Children under two are allowed outdoors when accompanied by adults.
                            </p>
                        </li>
                    </ul>
                    <p className='italic text-sm text-gray-400 my-2'>
                        For questions about the new policy, please call Vietnams Immigration Department at 024 3938 7320.
                    </p>
                    <img src={visa} alt=''
                        className='tip-img'
                    />
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Vietnam Visa Exemptions
                    </h3>
                    <p className='tip-text'>
                        Visitors from the following countries may enter visa-free, and stay for the indicated number of days. The full list of countries with visa exemptions is below. To view visa exemptions for diplomatic and other passports, please visit here <br />
                        To stay beyond this number of days, you may apply for a visa extension upon your arrival in Vietnam.
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Vietnam Visa Exemption List
                    </h3>
                    <p className='tip-text'>
                        Citizens of the Federal Republic of Germany, the French Republic, the Italian Republic, the Kingdom of Spain, the United Kingdom of Great Britain and Northern Ireland, the Russian Federation, Japan, the Republic of Korea, the United Kingdom of Denmark, the Kingdom of Sweden, the Kingdom of Norway, the Republic of Finland and the Republic of Belarus entering Vietnam for a sojourn of 15 days, counting from the date of entry, regardless of their passport types and entry purposes, provided they meet all the conditions prescribed by Vietnam’s law.In addition, the policy on entry visa exemption for citizens of the above-mentioned countries shall be implemented for 3 years from March 15, 2022 to the end of March 14, 2025, and will be considered for an extension in accordance with Vietnam’s law.
                    </p>
                    <p className='italic text-sm text-gray-400 my-2'>
                        For further details of Resolution 32/NQ-CP, <a href='https://vietnamtourism.gov.vn/en/post/16994' className='text-gray-800'>Click here.</a>
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        Vietnam Electronic Visa (e-Visa)
                    </h3>
                    <p className='tip-text'>Vietnams e-Visa is now available to nationals of 80 countries:</p>
                    <img src={visa1} alt=''
                        className='tip-img'
                    />
                    <p className='tip-text'>
                        Andorra, Argentina, Armenia, Australia, Austria, Azerbaijan, Belarus, Belgium, Bosnia and Herzegovina, Brazil, Brunei, Bulgaria, Canada, Colombia, Croatia, Cuba, Cyprus, Czech Republic, Chile, China (including Hong Kong and Macau passports), Denmark, Estonia, Fiji, Finland, France, Georgia, Germany, Greece, Hungary, Iceland, India, Ireland, Italy, Japan, Kazakhstan, Latvia,
                        Liechtenstein, Lithuania, Luxembourg, Macedonia, Malta, Marshall Islands, Mexico, Micronesia, Moldova, Monaco, Montenegro, Mongolia, Myanmar, Nauru, Netherlands, New Zealand, Norway, Palau, Panama, Papua New Guinea, Peru, Poland, Portugal, Philippines, Qatar, Romania, Russia, Salomon Islands, San Marino, Serbia, Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland, Timor Leste, United Arab Emirates, United Kingdom, United States of America, Uruguay, Vanuatu, Venezuela, and Western Samoa.
                        <br />Simply <a className='text-green-400' href='https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu'>apply online for your tourist E-visa</a> , valid for 30 days. E-visa fee is USD 25, the processing time is 3 working days. You will receive your code by email to print your visa.
                    </p>
                </div>
                <div className='tip-container'>
                    <h3 className='tip-title'>
                        How to Apply for Vietnams e-Visa:
                    </h3>
                    <p className='tip-text'>
                        <strong>Step 1:</strong> Prepare the required materials:
                        <ul>
                            <li>- One 4x6 passport photo in .jpg format with a white background, without glasses.</li>
                            <li>- One photo in .jpg format of your passport data page.</li>
                            <li>- Passport valid for at least six months.</li>
                            <li>- Your temporary address in Vietnam and points of entry and exit.</li>
                            <li>- Debit or credit card for payment.</li>
                        </ul>
                        <strong>Step 2:</strong> Click <a className='text-green-400' href='https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/khai-thi-thuc-dien-tu/cap-thi-thuc-dien-tu'>this link</a> or access <a className='text-green-400' href='https://immigration.gov.vn/'>https://immigration.gov.vn/</a> and go to 'E-visa Issuance' then click on the link for 'Outside Vietnam foreigners'. <br />
                        <strong>Step 3:</strong>  Upload your .jpg images (passport data page and passport photo) and fill out the required fields on the form completely. Submit your form.<br />
                        <strong>Step 4:</strong>  Pay the e-Visa fee of 25 USD. Copy down the document code provided.<br />
                        <strong>Step 5:</strong> Within three working days you should receive news of your e-Visa application via email. If not, you can also run a search for your e-Visa at this <a className='text-green-400' href='https://evisa.xuatnhapcanh.gov.vn/tra-cuu-thi-thuc'>link</a> .<br />
                        <p className='verticalRight'>TIP: Travellers with an e-Visa can go directly to immigration counters at their point of entry and do not need to queue at Visa on Arrival counters.</p>
                    </p>
                </div>
                <div className='tip-container'>
                    <p className='tip-text italic text-gray-500'>
                        Insurance requirement: <br />Purchase medical/travel insurance that covers COVID-19 treatment with a minimum coverage: $10,000. This typically costs about USD 40.
                        <img src={visa2} alt=''
                            className='tip-img'
                        />
                    </p>
                </div>
                <div className='tip-container'>
                    <p className='tip-title'>
                        Vietnam Visa on Arrival
                    </p>
                    <p className='tip-text '>
                        If you are planning a multiple-entry visit or a stay of more than 30 days, you will want to apply for a visa on arrival. To do this you will need: <br /> <br />
                        <strong>Step 1:</strong> A 4x6 passport photo with a white background and no glasses. <br />
                        <strong>Step 2:</strong> A 4x6 passport photo with a white background and no glasses.A filled-out visa application form <a href='https://visa.mofa.gov.vn/_layouts/registration/ApplicationForm.aspx'>visa application form</a> <br />
                        <strong>Step 3:</strong> A passport or substitute ID valid for six months from the date you plan to enter Vietnam. <br />
                        <strong>Step 4:</strong> Payment (25 USD to 50 USD) for visa fees, and <br />
                        <strong>Step 5:</strong> A Letter of Approval from a Vietnamese embassy or consulate (if you are picking up your visa at the airport). <br /> <br />
                        If you are near a Vietnamese embassy or consulate, you can submit your photo, application form, passport, and visa fee in person. <a href='https://visa.mofa.gov.vn/Homepage.aspx'>This website</a> will guide you through the process. <br /> <br />
                        If you are unable to reach a Vietnamese embassy or are short on time, there are trusted services online that can provide you with a valid Letter of Approval for a fee. Bring this letter together with a visa application form and your other documents to the Visa on Arrival counter at the airport when you land.<br />

                    </p>
                    <p className='verticalRight'>TIP: You will need to pay your visa stamp fee in USD or Vietnamese Dong on arrival at the airport.</p>
                    <p className='italic text-sm text-gray-400 my-2'>The information above is compiled by the Vietnam National Administration of Tourism. Guidelines may change at any time based on conditions, as determined by the Vietnam government.</p>
                </div>
            </div>
        </div>
    );
}

export default VisaTipPage;