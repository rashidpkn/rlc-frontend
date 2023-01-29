import Nationality from "../../newAds/components/Nationality"

const MainFilter = () => {
    return (
        <div className="filtermenu w-full h-[57px]  hidden lg:flex justify-between items-center gap-[27px] text-white">
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Price Range</option>
                <option value="800">500-800</option>
                <option value="900">801-900</option>
                <option value="1000">901-1000</option>
                <option value="1100">1001-1100</option>
                <option value="1200">1101-1200</option>
                <option value="1300">1201-1300</option>
                <option value="1400">1301-1400</option>
                <option value="1500">1401-1500</option>
                <option value="1600">1501-1600</option>
                <option value="1700">1601-1700</option>
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <Nationality color={'white'} />
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Language</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Bosnian">Bosnian</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Chinese (Cantonese)">Chinese (Cantonese)</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="English">English</option>
                <option value="Estonian">Estonian</option>
                <option value="Filipino">Filipino</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Lebanese">Lebanese</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Latvian">Latvian</option>
                <option value="Malaysian">Malaysian</option>
                <option value="Moldovan">Moldovan</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Moroccan">Moroccan</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Somali">Somali</option>
                <option value="Southern Sotho">Southern Sotho</option>
                <option value="Spanish">Spanish</option>
                <option value="Swedish">Swedish</option>
                <option value="Taiwanese">Taiwanese</option>
                <option value="Thai">Thai</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Zulu">Zulu</option>
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Age</option>
                <option value="20">18-20</option>
                <option value="23">21-23</option>
                <option value="26">24-26</option>
                <option value="29">27-29</option>
                <option value="32">30-32</option>
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Eye</option>
                <option value="Brown">Brown</option>
                <option value="Blue">Blue</option>
                <option value="Hazel">Hazel</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                <option value="Gray">Gray</option>
            </select>
            <select className="bg-[#17191E] w-[155px] h-[27px] rounded-lg outline-none">
                <option value="">Select Hair</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Blond">Blond</option>
                <option value="White/Gray">White/Gray</option>
                <option value="Red">Red</option>
            </select>
            <button className="bg-[#17191E] w-[27px] h-[27px] rounded-lg">+</button>
            <button className="bg-[#006EF8] w-[94px] h-[27px] rounded-lg">Search</button>
        </div>
    )
}
export default MainFilter