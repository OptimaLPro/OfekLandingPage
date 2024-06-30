import IsocLogo from "/Isoc.png"
import Isoc1 from "/Isoc1.png"
import Isoc2 from "/Isoc2.png"
import Isoc3 from "/Isoc3.png"
import Isoc4 from "/Isoc4.png"
import Isoc5 from "/Isoc5.png"
import Isoc6 from "/Isoc6.png"
import Isoc7 from "/Isoc7.png"
import Isoc8 from "/Isoc8.png"
import Isoc9 from "/Isoc9.png"
import Isoc10 from "/Isoc10.png"
import Isoc11 from "/Isoc11.png"
import Isoc12 from "/Isoc12.png"
import { FaGithub } from "react-icons/fa";


const Isoc = () => {
    return (
        <>
            <div className="bg-[#64b1bc]">
                <div className="flex flex-col items-center gap-10 text-right text-white heebo-font">
                    <div className="w-[80%] flex justify-end">
                        <img src={IsocLogo} className="mt-32" width={400}></img>
                    </div>
                    <div className="w-[80%] text-right">
                        <div >
                            <p className="text-[55px] font-bold tracking-wide">"השקה חוזרת של מתחם חדש בעברית בסיומת ".ישראל</p>
                        </div>
                    </div>
                    <div className="w-[80%] text-right text-4xl tracking-wide">
                        <p className="mb-4 text-4xl font-bold tracking-wide"> - מסרים מרכזיים</p>
                        <p>עידוד רישום דומיין ישראלי כאשר כעת אפשרות השימוש בדומיין ובכתובת</p>
                        <p>האתר בעברית באופן מלא פתוחה לציבור ואף גרפה הצלחה ועובדת עם</p>
                        <p>.למעלה מ-700 דומיינים שנרשמו במרחב השמות החדש</p>
                    </div>
                    <div className="my-10 mb-4 text-4xl tracking-wide w-[80%]">
                        <p > - במהלך הקמפיין התמקדנו ב-3 קונספטים שונים</p>
                    </div>
                    <div className="my-10 mb-4 text-4xl tracking-wide w-[80%]">
                        <p>CAPSLOCK, SHIFT & ALT ,בישראל התנהג כישראלי - עכשיו שהסיומת כתובה בעברית</p>
                        <p>.כפתורי שינוי השפה במקלדת מנסים להטמע בתרבות הישראלית</p>
                    </div>
                    <div className="flex flex-col gap-6 w-[70%]">
                        <div className="flex justify-between">
                            <div className="flex ">
                                <img src={Isoc1} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc2} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc3} className="ml-[150px]" width={250}></img>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex ">
                                <img src={Isoc4} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc5} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc6} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                        </div>


                    </div>
                    <div className="my-10 mb-4 text-4xl tracking-wide w-[80%]">
                        <p>!ולנו יש .ישראל - נכון, יש דברים שעדיין לא הגיעו לישראל, אבל הדבר הכי חשוב כבר כאן</p>
                    </div>
                    <div className="flex flex-col gap-6 w-[70%]">
                        <div className="flex justify-between">
                            <div className="flex ">
                                <img src={Isoc7} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc8} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc9} className="ml-[150px]" width={250}></img>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 mb-4 text-4xl tracking-wide w-[80%]">
                        <p>,דברו עברית בבקשה - משתמשים בשפה שלנו. למדינת ישראל יש שפה עשירה, מיוחדת ומרתקת</p>
                        <p>?אז למה בעצם שלא נשתמש בה במרחב הרשת</p>
                    </div>
                    <div className="flex flex-col gap-6 w-[70%]">
                        <div className="flex justify-between">
                            <div className="flex ">
                                <img src={Isoc10} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc11} className="border-4 rounded-md shadow-2xl" width={400}></img>
                            </div>
                            <div className="flex ">
                                <img src={Isoc12} className="ml-[150px]" width={250}></img>
                            </div>
                        </div>
                    </div>
                    <div className="my-10 text-[150px] amatic-font tracking-wider">
                        <p>THANK YOU</p>
                    </div>
                    <div className="flex flex-col items-center justify-center mb-10 heebo-font">
                        <div><p>Made with ❤️ by Nati</p></div>
                        <div>
                            <a href="https://github.com/OptimaLPro" target="_blank" rel="noopener noreferrer">
                                <FaGithub style={{ fontSize: '25px' }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Isoc;