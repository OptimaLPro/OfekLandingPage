import React from "react";
import Ofek from "/Ofek.png";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container lg:h-screen bg-[#fff3e7]">
            <div className="z-0 bubbles-container">
                <div className="bubble bubble1"></div>
                <div className="bubble bubble2"></div>
                <div className="bubble bubble3"></div>
            </div>
            <div className="z-10 gap-4 lg:grid lg:grid-cols-12 text-zinc-800">
                <div className="z-10 lg:col-span-6 ">
                    <div className="z-10 flex items-center justify-center lg:h-screen">
                        <div className="z-10 lg:grid lg:grid-rows-12 text-center lg:text-right lg:gap-8 lg:w-[80%] lg:text-xl">
                            <div className="z-10 flex justify-center lg:items-end lg:justify-end row-span-4 my-5 lg:my-0 lg:tracking-widest text-[80px] lg:text-[100px] amatic-font">
                                <p className="drop-shadow-md">Ofek Shmuely</p>
                            </div>
                            <div className="row-span-4 p-4 text-2xl lg:mt-10 lg:mr-4 lg:p-0 heebo-font dir-rtl">
                                <p>שלום, נעים להכיר!</p>
                                <p>אני אופק שמואלי אבל החברים הטובים באמת קוראים לי פשוט אופק כי אין לי כינוי. מה שכן יש לי, זה אהבה למילים, לכתיבה ויצירה.</p>
                                <p>אני לא אוהב להגיד על עצמי שאני חריג ומיוחד, אבל מכיוון שזה האתר שלי ומותר לי להגיד כאן הכל, אני אגיד שאני מסתכל על הדברים מנקודת מבט אחרת, חושב מחוץ לקופסא (וגם בתוכה כשצריך), TEAM PLAYER ועובד מסור.</p>
                                <p>אני בעל ניסיון בעבודה במשרד פרסום מוביל בו שימשתי כקופירייטר, קרייאטיב ובניתי אסטרטגיות שיווק ללקוחות מגוונים.</p>
                            </div>
                            <div className="tracking-wide row-span-4 text-[28px] oswald-font mr-4 leading-snug">
                                <p className="text-[28px]">OFEKSH1471@GMAIL.COM</p>
                                <p className="text-[28px]">052-5054201</p>
                                <p className="text-[20px]">TEL AVIV, ISRAEL</p>
                            </div>
                            {/* <div className="row-span-4 text-[28px] heebo-font block lg:hidden my-10">
                                <p>Tel Aviv, Israel</p>
                                <p>052-5054201</p>
                                <p>ofeksh1471@gmail.com</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="z-10 flex justify-center col-span-6 mt-4 lg:mt-0 lg:justify-start">
                    <img src={Ofek} className="object-contain lg:h-screen" alt="Ofek Shmuely" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
