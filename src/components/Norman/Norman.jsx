import NormanLogo from "/Norman.png";
import NormaniPhone from "/NormaniPhone.png";
import Norman1 from "/Norman1.png";
import Norman2 from "/Norman2.png";
import Norman3 from "/Norman3.png";
import Norman4 from "/Norman4.png";
import Norman5 from "/Norman5.png";

const Norman = () => {
    return (
        <>
            <div className="bg-[#fdf3e7] h-max">
                <div className="flex items-end justify-center gap-10 text-right text-blac heebo-font">
                    <div className="w-[60%] text-[#743956] text-2xl">
                        <p className="mb-5 text-[60px] font-bold">הפרצוף אומר הכל</p>
                        <p>סטודיו נורמן הוא סטודיו צעיר ודינמי המורכב מאמנים צעירים </p>
                        <p>ושאפתניים. הסטודיו מציע מגוון של יצירות אישיות המבוססות על</p>
                        <p>,תמונות הלקוח ומדפיס אותם על אקססוריז שונים כמו גרביים, תיקים</p>
                        <p>.'כפפות תנור, בוקסרים וכו</p>
                    </div>
                    <div className="w-[40%]">
                        <img src={NormanLogo} width={250} className="mt-20"></img>
                    </div>
                </div>
                <div className="flex justify-center gap-32 mt-16">
                    <div>
                        <img src={NormaniPhone} width={450} className="mb-20 drop-shadow-2xl"></img>
                    </div>
                    <div className="flex flex-col justify-around mb-20">
                        <img src={Norman1} className="shadow-2xl" width={400}></img>
                        <img src={Norman2} className="shadow-2xl" width={400}></img>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center gap-32">
                        <div className="flex justify-around gap-10 mb-16">
                            <img src={Norman3} className="shadow-2xl" width={400}></img>
                            <img src={Norman4} className="shadow-2xl" width={400}></img>
                            <img src={Norman5} className="shadow-2xl" width={400}></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Norman;