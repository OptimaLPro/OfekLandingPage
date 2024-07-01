import { motion } from "framer-motion";
import React from "react";
import "./Hero.css";
import Ofek from "/Ofek.png";
import TypeIt from "typeit-react";

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
                            <div className="z-10 flex justify-center lg:items-end lg:justify-end row-span-4 mt-5 lg:my-0 lg:tracking-widest text-[80px] xl:text-[100px] amatic-font">

                                <motion.p
                                    initial={{ rotate: 180, scale: 0 }}
                                    animate={{ rotate: 0, scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20,
                                        delay: 0.2
                                    }}
                                    className="drop-shadow-md">
                                    {/* Ofek Shmuely */}
                                    <TypeIt
                                        getBeforeInit={(instance) => {
                                            instance
                                            .type("O")
                                            .pause(125)
                                            .type("f")
                                            .pause(65)
                                            .type("e")
                                            .pause(63)
                                            .type("k")
                                            .pause(105)
                                            .type(" ")
                                            .pause(168)
                                            .type("S")
                                            .pause(191)
                                            .type("h")
                                            .pause(273)
                                            .type("m")
                                            .pause(64)
                                            .type("u")
                                            .pause(160)
                                            .type("e")
                                            .pause(104)
                                            .type("l")
                                            .pause(225)
                                            .type("l")
                                            .pause(71)
                                            .type("l")
                                            .pause(487)
                                            .delete(1)
                                            .pause(99)
                                            .delete(1)
                                            .pause(509)
                                            .type("i")
                                            return instance;
                                        }}
                                    />;
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ rotate: 50, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                    delay: 0.5
                                }}
                                className="row-span-4 p-8 text-2xl tracking-wide lg:mt-10 lg:mr-4 lg:p-0 heebo-font rtl">
                                <p>שלום, נעים להכיר!</p>
                                <p>אני אופק שמואלי אבל החברים הטובים באמת קוראים לי פשוט אופק כי אין לי כינוי. מה שכן יש לי, זה אהבה למילים, לכתיבה ויצירה.</p>
                                <p>אני לא אוהב להגיד על עצמי שאני חריג ומיוחד, אבל מכיוון שזה האתר שלי ומותר לי להגיד כאן הכל, אני אגיד שאני מסתכל על הדברים מנקודת מבט אחרת, חושב מחוץ לקופסא (וגם בתוכה כשצריך), TEAM PLAYER ועובד מסור.</p>
                                <p>אני בעל ניסיון בעבודה במשרד פרסום מוביל בו שימשתי כקופירייטר, קרייאטיב ובניתי אסטרטגיות שיווק ללקוחות מגוונים.</p>
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 50, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25,
                                    delay: 0.7
                                }}
                                className="tracking-wide row-span-4 text-[28px] oswald-font mr-4 leading-snug">
                                <p className="text-[28px]">OFEKSH1471@GMAIL.COM</p>
                                <p className="text-[28px]">052-5054201</p>
                                <p className="text-[20px]">TEL AVIV, ISRAEL</p>
                            </motion.div>
                            {/* <div className="row-span-4 text-[28px] heebo-font block lg:hidden my-10">
                                <p>Tel Aviv, Israel</p>
                                <p>052-5054201</p>
                                <p>ofeksh1471@gmail.com</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        delay: 0.9
                    }}
                    className="z-10 flex justify-center col-span-6 mt-8 lg:mt-0 lg:justify-start">
                    <img src={Ofek} className="object-contain lg:h-screen" alt="Ofek Shmuely" />
                </motion.div>
            </div>
        </div >
    );
}

export default Hero;
