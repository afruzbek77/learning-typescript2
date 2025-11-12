// ==========================модификатуры доступа : public, protected, private , readonly

class PersonalComputer{
public isRadioMause : boolean = true;
// mana public qilib qoydim bu bilan hamma joyda ishlatsa boladi
readonly MemoryGB : number = 16

private keyboard : string = "usb"
protected vidioCard : string = "GeForce RTX 3060 Ti"
memorySlots :number = 5;
powerWatt : number;
constructor(powerWatt:number){
this.powerWatt = powerWatt;
}
getReadonly(){
    return this.isRadioMause;
}
getPrivate(){
return this.MemoryGB
}

getProtected(){
    return this.vidioCard
}

}

class SystemBlock extends PersonalComputer{
    powerunit : number = 1;
    motherBoard : number = 1;
    graphicsCard ; number = 4;
    cdRom : number;
    hdd : number;
    constructor(powerWatt: number, cdRom:number, hdd : number){
         super(powerWatt);
         this.hdd = hdd;
         this.cdRom = cdRom;
         this.vidioCard;
    }
}

const PC = new PersonalComputer(3000);
const System = new SystemBlock(3000,8,4)

console.log(PC.isRadioMause);
console.log(System.isRadioMause);
// public bilan hammasi yaxshi ketyapti
console.log(PC.MemoryGB);
console.log(System.getReadonly());
// readonly da ham muommo yoq lekin readonlyni qiymatini ozgartirib bolmaydi
// console.log(System.keyboard);
console.log(PC.getPrivate());
// 1-sida keyboardni chaqirganda xato berdi private ni faqat oziga tegishli joyda ishlatsa boladi faqat PersonalComputer ichida 
// console.log(PC.vidioCard);
console.log(System.getProtected());
//  vidioCardni extenes qilinganda ham oziga tegishlida ham ishlatsa boladi.

// ====================  protected bilan private farqi \
// private faqat  yaratilgan class da bolsa osha yerda ishlaydi protected esa ham osha classda ham extends qilinganda ham ishlaydi



