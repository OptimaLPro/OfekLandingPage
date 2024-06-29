import Ofek from "/Ofek.png";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="h-screen bg-[#fff3e7]">
                <div className="grid grid-cols-12 gap-4 ">
                    <div className="col-span-6 ">
                        <div className="flex items-center justify-end h-screen">
                            <div className="grid grid-rows-12 text-right gap-8 w-[80%] text-xl">
                                <div className="flex items-end justify-end row-span-4 tracking-widest text-[100px] amatic-font ">
                                    <p>Ofek Shmuely</p></div>
                                <div className="row-span-4 mt-10 mr-4 text-2xl heebo-font">
                                    <p>!שלום, נעים להכיר</p>
                                    <p>,אני אופק שמואלי, קופירייטר מנוסה, איש קריאייטיב ומנהל סושיאל</p>
                                    <p>.בוגר "הבצפר" ללימודי קופירייטינג וניהול רשתות חברתיות</p>
                                    <p>אני לא אוהב להגיד על עצמי שאני חריג ומיוחד, אבל אני אגיד בכל זאת</p>
                                    <p>.כיוון שזה הדף שלי ומותר לי להגיד כאן הכל</p>
                                    <p>אני אוהב להסתכל על הדברים מנקודת מבט אחרת, לחשב מחוץ לקופסא</p>
                                    <p>(וגם בתוכה כשצריך) TEAM PLAYER ,ועובד מסור. בעל ניסיון בעבודה</p>
                                    <p>במשרד פרסום מוביל בו שימשתי כקופירייטר, קריאייטיב ואסטרטגיה</p>
                                    <p>.וכעת אני מחפש את המקום הבא לצמוח בו</p>
                                </div>
                                <div className="row-span-4 text-[28px] heebo-font mr-4">Tel Aviv, Israel | 052-5054201 | ofeksh1471@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 ">
                        <img src={Ofek} className="object-contain h-screen"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;