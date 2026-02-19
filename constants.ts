import { StateData, AssemblyConstituency } from './types.ts';

export const APP_NAME = "VoterListExcel.in";
export const CONTACT_WHATSAPP = "918949656466"; 

const getProfessionalPrice = (no: number) => {
  // Base price 4500 + variance (0-500) = Range 4500 to 5000
  const base = 4500;
  const variance = (no * 37) % 501; 
  return base + variance;
};

// --- DATA SOURCE: PUNJAB (117) ---
const PB_DATA = [
  { no: 1, name: "Sujanpur" }, { no: 2, name: "Bhoa (SC)" }, { no: 3, name: "Pathankot" }, { no: 4, name: "Gurdaspur" }, { no: 5, name: "Dina Nagar (SC)" }, { no: 6, name: "Qadian" }, { no: 7, name: "Batala" }, { no: 8, name: "Sri Hargobindpur (SC)" }, { no: 9, name: "Fatehgarh Churian" }, { no: 10, name: "Dera Baba Nanak" }, 
  { no: 11, name: "Ajnala" }, { no: 12, name: "Raja Sansi" }, { no: 13, name: "Majitha" }, { no: 14, name: "Jandiala (SC)" }, { no: 15, name: "Amritsar North" }, { no: 16, name: "Amritsar West (SC)" }, { no: 17, name: "Amritsar Central" }, { no: 18, name: "Amritsar East" }, { no: 19, name: "Amritsar South" }, { no: 20, name: "Attari (SC)" }, 
  { no: 21, name: "Tarn Taran" }, { no: 22, name: "Khem Karan" }, { no: 23, name: "Patti" }, { no: 24, name: "Khadoor Sahib" }, { no: 25, name: "Baba Bakala (SC)" }, { no: 26, name: "Bholath" }, { no: 27, name: "Kapurthala" }, { no: 28, name: "Sultanpur Lodhi" }, { no: 29, name: "Phagwara (SC)" }, { no: 30, name: "Phillaura (SC)" }, 
  { no: 31, name: "Shahkot" }, { no: 32, name: "Kartarpur (SC)" }, { no: 33, name: "Jalandhar West (SC)" }, { no: 34, name: "Jalandhar Central" }, { no: 35, name: "Jalandhar North" }, { no: 36, name: "Jalandhar Cantt." }, { no: 37, name: "Adampur (SC)" }, { no: 38, name: "Mukerian" }, { no: 39, name: "Dasuya" }, { no: 40, name: "Urmar" }, 
  { no: 41, name: "Sham Chaurasi (SC)" }, { no: 42, name: "Hoshiarpur" }, { no: 43, name: "Chabbewal (SC)" }, { no: 44, name: "Garhshankar" }, { no: 45, name: "Banga (SC)" }, { no: 46, name: "Nawanshahr" }, { no: 47, name: "Balachaur" }, { no: 48, name: "Anandpur Sahib" }, { no: 49, name: "Rupnagar" }, { no: 50, name: "Chamkaur Sahib (SC)" }, 
  { no: 51, name: "Kharar" }, { no: 52, name: "S.A.S. Nagar" }, { no: 53, name: "Bassi Pathana (SC)" }, { no: 54, name: "Fatehgarh Sahib" }, { no: 55, name: "Amloh" }, { no: 56, name: "Khanna" }, { no: 57, name: "Samrala" }, { no: 58, name: "Sahnewal" }, { no: 59, name: "Ludhiana East" }, { no: 60, name: "Ludhiana South" }, 
  { no: 61, name: "Atam Nagar" }, { no: 62, name: "Ludhiana Central" }, { no: 63, name: "Ludhiana West" }, { no: 64, name: "Ludhiana North" }, { no: 65, name: "Gill (SC)" }, { no: 66, name: "Payal (SC)" }, { no: 67, name: "Dakha" }, { no: 68, name: "Raikot (SC)" }, { no: 69, name: "Jagraon (SC)" }, { no: 70, name: "Nihal Singhwala (SC)" }, 
  { no: 71, name: "Baghapurana" }, { no: 72, name: "Moga" }, { no: 73, name: "Dharamkot" }, { no: 74, name: "Zira" }, { no: 75, name: "Firozpur City" }, { no: 76, name: "Firozpur Rural (SC)" }, { no: 77, name: "Guru Har Sahai" }, { no: 78, name: "Jalalabad" }, { no: 79, name: "Fazilka" }, { no: 80, name: "Abohar" }, 
  { no: 81, name: "Balluana (SC)" }, { no: 82, name: "Malout (SC)" }, { no: 83, name: "Muktsar" }, { no: 84, name: "Gidderbaha" }, { no: 85, name: "Lambi" }, { no: 86, name: "Jaitu (SC)" }, { no: 87, name: "Kotkapura" }, { no: 88, name: "Faridkot" }, { no: 89, name: "Rampura Phul" }, { no: 90, name: "Bhucho Mandi (SC)" }, 
  { no: 91, name: "Bathinda Urban" }, { no: 92, name: "Bathinda Rural (SC)" }, { no: 93, name: "Talwandi Sabo" }, { no: 94, name: "Maur" }, { no: 95, name: "Mansa" }, { no: 96, name: "Sardulgarh" }, { no: 97, name: "Budhlada (SC)" }, { no: 98, name: "Lehragaga" }, { no: 99, name: "Dirba (SC)" }, { no: 100, name: "Sunam" }, 
  { no: 101, name: "Bhadaur (SC)" }, { no: 102, name: "Barnala" }, { no: 103, name: "Mehal Kalan (SC)" }, { no: 104, name: "Malerkotla" }, { no: 105, name: "Amargarh" }, { no: 106, name: "Dhuri" }, { no: 107, name: "Sangrur" }, { no: 108, name: "Nabha (SC)" }, { no: 109, name: "Patiala Rural" }, { no: 110, name: "Patiala" }, 
  { no: 111, name: "Rajpura" }, { no: 112, name: "Dera Bassi" }, { no: 113, name: "Ghanaur" }, { no: 114, name: "Sanour" }, { no: 115, name: "Patiala Urban" }, { no: 116, name: "Samana" }, { no: 117, name: "Shutrana (SC)" }
];

// --- DATA SOURCE: HARYANA (90) ---
const HR_DATA = [
  { no: 1, name: "Kalka" }, { no: 2, name: "Panchkula" }, { no: 3, name: "Naraingarh" }, { no: 4, name: "Ambala Cantt." }, { no: 5, name: "Ambala City" }, { no: 6, name: "Mullana (SC)" }, { no: 7, name: "Sadhaura (SC)" }, { no: 8, name: "Jagadhri" }, { no: 9, name: "Yamunanagar" }, { no: 10, name: "Radaur" },
  { no: 11, name: "Ladwa" }, { no: 12, name: "Shahbad (SC)" }, { no: 13, name: "Thanesar" }, { no: 14, name: "Pehowa" }, { no: 15, name: "Guhla (SC)" }, { no: 16, name: "Kalayat" }, { no: 17, name: "Kaithal" }, { no: 18, name: "Pundri" }, { no: 19, name: "Nilokheri (SC)" }, { no: 20, name: "Indri" },
  { no: 21, name: "Karnal" }, { no: 22, name: "Gharaunda" }, { no: 23, name: "Assandh" }, { no: 24, name: "Panipat Rural" }, { no: 25, name: "Panipat City" }, { no: 26, name: "Israna (SC)" }, { no: 27, name: "Samalkha" }, { no: 28, name: "Ganaur" }, { no: 29, name: "Rai" }, { no: 30, name: "Kharkhauda (SC)" },
  { no: 31, name: "Sonipat" }, { no: 32, name: "Gohana" }, { no: 33, name: "Baroda" }, { no: 34, name: "Julana" }, { no: 35, name: "Safidon" }, { no: 36, name: "Jind" }, { no: 37, name: "Uchana Kalan" }, { no: 38, name: "Narwana (SC)" }, { no: 39, name: "Tohana" }, { no: 40, name: "Fatehabad" },
  { no: 41, name: "Ratia (SC)" }, { no: 42, name: "Kalanwali (SC)" }, { no: 43, name: "Dabwali" }, { no: 44, name: "Rania" }, { no: 45, name: "Sirsa" }, { no: 46, name: "Ellenabad" }, { no: 47, name: "Adampur" }, { no: 48, name: "Uklana (SC)" }, { no: 49, name: "Narnaund" }, { no: 50, name: "Hansi" },
  { no: 51, name: "Barwala" }, { no: 52, name: "Hisar" }, { no: 53, name: "Nalwa" }, { no: 54, name: "Loharu" }, { no: 55, name: "Badhra" }, { no: 56, name: "Dadri" }, { no: 57, name: "Bhiwani" }, { no: 58, name: "Tosham" }, { no: 59, name: "Bawani Khera (SC)" }, { no: 60, name: "Meham" },
  { no: 61, name: "Garhi Sampla-Kiloi" }, { no: 62, name: "Rohtak" }, { no: 63, name: "Kalanaur (SC)" }, { no: 64, name: "Bahadurgarh" }, { no: 65, name: "Badli" }, { no: 66, name: "Jhajjar (SC)" }, { no: 67, name: "Beri" }, { no: 68, name: "Ateli" }, { no: 69, name: "Mahendragarh" }, { no: 70, name: "Narnaul" },
  { no: 71, name: "Nangal Chaudhry" }, { no: 72, name: "Bawal (SC)" }, { no: 73, name: "Kosli" }, { no: 74, name: "Rewari" }, { no: 75, name: "Pataudi (SC)" }, { no: 76, name: "Badshahpur" }, { no: 77, name: "Gurgaon" }, { no: 78, name: "Sohna" }, { no: 79, name: "Nuh" }, { no: 80, name: "Ferozepur Jhirka" },
  { no: 81, name: "Punahana" }, { no: 82, name: "Hathin" }, { no: 83, name: "Hodal (SC)" }, { no: 84, name: "Palwal" }, { no: 85, name: "Prithla" }, { no: 86, name: "Faridabad NIT" }, { no: 87, name: "Badkhal" }, { no: 88, name: "Ballabhgarh" }, { no: 89, name: "Faridabad" }, { no: 90, name: "Tigaon" }
];

// --- DATA SOURCE: UTTARAKHAND (70) ---
const UK_DATA = [
    { no: 1, name: "Purola (SC)" }, { no: 2, name: "Yamunotri" }, { no: 3, name: "Gangotri" }, { no: 4, name: "Badrinath" }, { no: 5, name: "Tharali (SC)" }, { no: 6, name: "Karnprayag" }, { no: 7, name: "Kedarnath" }, { no: 8, name: "Rudraprayag" }, { no: 9, name: "Ghansali (SC)" }, { no: 10, name: "Devprayag" },
    { no: 11, name: "Narendranagar" }, { no: 12, name: "Pratapnagar" }, { no: 13, name: "Tehri" }, { no: 14, name: "Dhanaulti" }, { no: 15, name: "Chakrata (ST)" }, { no: 16, name: "Vikasnagar" }, { no: 17, name: "Sahaspur" }, { no: 18, name: "Dharampur" }, { no: 19, name: "Raipur" }, { no: 20, name: "Rajpur Road (SC)" },
    { no: 21, name: "Dehradun Cantt." }, { no: 22, name: "Mussoorie" }, { no: 23, name: "Doiwala" }, { no: 24, name: "Rishikesh" }, { no: 25, name: "Hardwar" }, { no: 26, name: "B.H.E.L. Ranipur" }, { no: 27, name: "Jwalapur (SC)" }, { no: 28, name: "Bhagwanpur (SC)" }, { no: 29, name: "Jhabrera (SC)" }, { no: 30, name: "Piran Kaliyar" },
    { no: 31, name: "Roorkee" }, { no: 32, name: "Khanpur" }, { no: 33, name: "Manglaur" }, { no: 34, name: "Laksar" }, { no: 35, name: "Hardwar Rural" }, { no: 36, name: "Yamkeshwar" }, { no: 37, name: "Pauri (SC)" }, { no: 38, name: "Srinagar" }, { no: 39, name: "Chaubattakhal" }, { no: 40, name: "Lansdowne" },
    { no: 41, name: "Kotdwar" }, { no: 42, name: "Dharchula" }, { no: 43, name: "Didihat" }, { no: 44, name: "Pithoragarh" }, { no: 45, name: "Gangolihat (SC)" }, { no: 46, name: "Kapkot" }, { no: 47, name: "Bageshwar (SC)" }, { no: 48, name: "Dwarahat" }, { no: 49, name: "Salt" }, { no: 50, name: "Ranikhet" },
    { no: 51, name: "Someshwar (SC)" }, { no: 52, name: "Almora" }, { no: 53, name: "Jageshwar" }, { no: 54, name: "Lohaghat" }, { no: 55, name: "Champawat" }, { no: 56, name: "Lalkuan" }, { no: 57, name: "Bhimtal" }, { no: 58, name: "Nainital (SC)" }, { no: 59, name: "Haldwani" }, { no: 60, name: "Kaladhungi" },
    { no: 61, name: "Ramnagar" }, { no: 62, name: "Jaspur" }, { no: 63, name: "Kashipur" }, { no: 64, name: "Bajpur (SC)" }, { no: 65, name: "Gadarpur" }, { no: 66, name: "Rudrapur" }, { no: 67, name: "Kichha" }, { no: 68, name: "Sitarganj" }, { no: 69, name: "Nanakmatta (ST)" }, { no: 70, name: "Khatima" }
];

// --- DATA SOURCE: TELANGANA (119) ---
const TS_DATA = [
  { no: 1, name: "Sirpur" }, { no: 2, name: "Asifabad (ST)" }, { no: 3, name: "Khanapur (ST)" }, { no: 4, name: "Adilabad" }, { no: 5, name: "Boath (ST)" }, { no: 6, name: "Nirmal" }, { no: 7, name: "Mudhole" }, { no: 8, name: "Chennur (SC)" }, { no: 9, name: "Bellampalli (SC)" }, { no: 10, name: "Mancherial" },
  { no: 11, name: "Dharmapuri (SC)" }, { no: 12, name: "Ramagundam" }, { no: 13, name: "Manthani" }, { no: 14, name: "Peddapalle" }, { no: 15, name: "Karimnagar" }, { no: 16, name: "Choppadandi (SC)" }, { no: 17, name: "Vemulawada" }, { no: 18, name: "Sircilla" }, { no: 19, name: "Manakondur (SC)" }, { no: 20, name: "Huzurabad" },
];

// --- DATA SOURCE: ANDHRA PRADESH (175) ---
const AP_DATA = [
  { no: 1, name: "Palakonda (ST)" }, { no: 2, name: "Kurupam (ST)" }, { no: 3, name: "Parvathipuram (SC)" }, { no: 4, name: "Salur (ST)" }, { no: 5, name: "Araku Valley (ST)" }, { no: 6, name: "Paderu (ST)" }, { no: 7, name: "Rampachodavaram" }, { no: 8, name: "Ichchapuram" }, { no: 9, name: "Palasa" }, { no: 10, name: "Tekkali" },
  { no: 11, name: "Pathapatnam" }, { no: 12, name: "Srikakulam" }, { no: 13, name: "Amadalavalasa" }, { no: 14, name: "Narasannapeta" }, { no: 15, name: "Etcherla" }, { no: 16, name: "Rajam (SC)" }, { no: 17, name: "Bobbili" }, { no: 18, name: "Cheepurupalle" }, { no: 19, name: "Gajapathinagaram" }, { no: 20, name: "Nellimarla" },
  { no: 21, name: "Vizianagaram" }, { no: 22, name: "Srungavarapukota" }, { no: 23, name: "Bhimli" }, { no: 24, name: "Visakhapatnam East" }, { no: 25, name: "Visakhapatnam South" }, { no: 26, name: "Visakhapatnam North" }, { no: 27, name: "Visakhapatnam West" }, { no: 28, name: "Gajuwaka" }, { no: 29, name: "Chodavaram" }, { no: 30, name: "V.Madugula" },
  { no: 31, name: "Anakapalli" }, { no: 32, name: "Pendurthi" }, { no: 33, "name": "Elamanchili" }, { no: 34, name: "Payakaraopeta (SC)" }, { no: 35, name: "Narsipatnam" }, { no: 36, name: "Tuni" }, { no: 37, name: "Prathipadu" }, { no: 38, name: "Pithapuram" }, { no: 39, name: "Kakinada Rural" }, { no: 40, name: "Peddapuram" },
  { no: 41, name: "Kakinada City" }, { no: 42, name: "Jaggampeta" }, { no: 43, name: "Ramachandrapuram" }, { no: 44, name: "Mummidivaram" }, { no: 45, name: "Amalapuram (SC)" }, { no: 46, name: "Razole (SC)" }, { no: 47, name: "Gannavaram (SC)" }, { no: 48, name: "Kothapeta" }, { no: 49, name: "Mandapeta" }, { no: 50, name: "Anaparthy" },
  { no: 51, name: "Rajanagaram" }, { no: 52, name: "Rajahmundry City" }, { no: 53, name: "Rajahmundry Rural" }, { no: 54, name: "Kovvur (SC)" }, { no: 55, name: "Nidadavole" }, { no: 56, name: "Gopalapuram (SC)" }, { no: 57, name: "Achanta" }, { no: 58, name: "Palacole" }, { no: 59, name: "Narasapuram" }, { no: 60, name: "Bhimavaram" },
  { no: 61, name: "Undi" }, { no: 62, name: "Tanuku" }, { no: 63, name: "Tadepalligudem" }, { no: 64, name: "Unguturu" }, { no: 65, name: "Denduluru" }, { no: 66, name: "Eluru" }, { no: 67, name: "Polavaram (ST)" }, { no: 68, name: "Chintalapudi (SC)" }, { no: 69, name: "Nuzvid" }, { no: 70, name: "Kaikalur" },
  { no: 71, name: "Gannavaram" }, { no: 72, name: "Gudivada" }, { no: 73, name: "Pedana" }, { no: 74, name: "Machilipatnam" }, { no: 75, name: "Avanigadda" }, { no: 76, name: "Pamarru (SC)" }, { no: 77, name: "Penamaluru" }, { no: 78, name: "Tiruvuru (SC)" }, { no: 79, name: "Vijayawada West" }, { no: 80, name: "Vijayawada Central" },
  { no: 81, name: "Vijayawada East" }, { no: 82, name: "Mylavaram" }, { no: 83, name: "Nandigama (SC)" }, { no: 84, name: "Jaggayyapeta" }, { no: 85, name: "Tadikonda (SC)" }, { no: 86, name: "Mangalagiri" }, { no: 87, name: "Ponnur" }, { no: 88, name: "Tenali" }, { no: 89, name: "Prathipadu (SC)" }, { no: 90, name: "Guntur West" },
  { no: 91, name: "Guntur East" }, { no: 92, name: "Pedakurapadu" }, { no: 93, name: "Chilakaluripet" }, { no: 94, name: "Narasaraopet" }, { no: 95, name: "Sattenapalli" }, { no: 96, name: "Vinukonda" }, { no: 97, name: "Gurazala" }, { no: 98, name: "Macherla" }, { no: 99, name: "Vemuru (SC)" }, { no: 100, name: "Repalle" },
  { no: 101, name: "Bapatla" }, { no: 102, name: "Parchur" }, { no: 103, name: "Addanki" }, { no: 104, name: "Chirala" }, { no: 105, name: "Santhanuthalapadu (SC)" }, { no: 106, name: "Yerragondapalem (SC)" }, { no: 107, name: "Darsi" }, { no: 108, name: "Ongole" }, { no: 109, name: "Kondapi (SC)" }, { no: 110, name: "Markapuram" },
  { no: 111, name: "Giddalur" }, { no: 112, name: "Kanigiri" }, { no: 113, name: "Allagadda" }, { no: 114, name: "Srisailam" }, { no: 115, name: "Nandikotkur (SC)" }, { no: 116, name: "Panyam" }, { no: 117, name: "Nandyal" }, { no: 118, name: "Banaganapalle" }, { no: 119, name: "Dhone" }, { no: 120, name: "Kurnool" },
  { no: 121, name: "Pattikonda" }, { no: 122, name: "Kodumur (SC)" }, { no: 123, name: "Yemmiganur" }, { no: 124, name: "Mantralayam" }, { no: 125, name: "Adoni" }, { no: 126, name: "Alur" }, { no: 127, name: "Rayadurg" }, { no: 128, name: "Uravakonda" }, { no: 129, name: "Guntakal" }, { no: 130, name: "Tadipatri" },
  { no: 131, name: "Singanamala (SC)" }, { no: 132, name: "Anantapur Urban" }, { no: 133, "name": "Kalyandurg" }, { no: 134, name: "Raptadu" }, { no: 135, name: "Madakasira (SC)" }, { no: 136, name: "Hindupur" }, { no: 137, name: "Penukonda" }, { no: 138, name: "Puttaparthi" }, { no: 139, name: "Dharmavaram" }, { no: 140, name: "Kadiri" },
  { no: 141, name: "Badvel (SC)" }, { no: 142, name: "Kadapa" }, { no: 143, name: "Pulivendla" }, { no: 144, name: "Kamalapuram" }, { no: 145, name: "Jammalamadugu" }, { no: 146, name: "Proddatur" }, { no: 147, name: "Mydukur" }, { no: 148, name: "Kandukur" }, { no: 149, name: "Kavali" }, { no: 150, name: "Atmakur" },
  { no: 151, name: "Kovur" }, { no: 152, name: "Nellore City" }, { no: 153, name: "Nellore Rural" }, { no: 154, name: "Udayagiri" }, { no: 155, name: "Sarvepalli" }, { no: 156, name: "Gudur (SC)" }, { no: 157, name: "Sullurpeta (SC)" }, { no: 158, name: "Venkatagiri" }, { no: 159, name: "Tirupati" }, { no: 160, name: "Srikalahasti" },
  { no: 161, name: "Satyavedu (SC)" }, { no: 162, name: "Rajampet" }, { no: 163, name: "Kodur (SC)" }, { no: 164, name: "Rayachoti" }, { no: 165, name: "Thamballapalle" }, { no: 166, name: "Pileru" }, { no: 167, name: "Madanapalle" }, { no: 168, name: "Punganur" }, { no: 169, name: "Chandragiri" }, { no: 170, name: "Nagari" },
  { no: 171, name: "Gangadhara Nellore (SC)" }, { no: 172, name: "Chittoor" }, { no: 173, name: "Puthalapattu (SC)" }, { no: 174, name: "Palamaner" }, { no: 175, name: "Kuppam" }
];

// --- DATA SOURCE: ARUNACHAL PRADESH (60) ---
const AR_DATA = [
  { no: 1, name: "Lumla (ST)" }, { no: 2, name: "Tawang (ST)" }, { no: 3, name: "Mukto (ST)" }, { no: 4, name: "Dirang (ST)" }, { no: 5, name: "Kalaktang (ST)" }, { no: 6, name: "Thrizino-Buragaon (ST)" }, { no: 7, name: "Bomdila (ST)" }, { no: 8, name: "Bameng (ST)" }, { no: 9, name: "Chayang Tajo (ST)" }, { no: 10, name: "Seppa East (ST)" },
  { no: 11, name: "Seppa West (ST)" }, { no: 12, name: "Pakke Kessang (ST)" }, { no: 13, name: "Itanagar (ST)" }, { no: 14, name: "Doimukh (ST)" }, { no: 15, name: "Sagalee (ST)" }, { no: 16, name: "Yachuli (ST)" }, { no: 17, name: "Ziro Hapoli (ST)" }, { no: 18, name: "Palin (ST)" }, { no: 19, name: "Nyapin (ST)" }, { no: 20, name: "Tali (ST)" },
  { no: 21, name: "Koloriang (ST)" }, { no: 22, name: "Nacho (ST)" }, { no: 23, name: "Taliha (ST)" }, { no: 24, name: "Daporijo (ST)" }, { no: 25, name: "Raga (ST)" }, { no: 26, name: "Dumporijo (ST)" }, { no: 27, name: "Liromoba (ST)" }, { no: 28, name: "Likabali (ST)" }, { no: 29, name: "Basar (ST)" }, { no: 30, name: "Along West (ST)" },
  { no: 31, name: "Along East (ST)" }, { no: 32, name: "Rumgong (ST)" }, { no: 33, name: "Mechuka (ST)" }, { no: 34, name: "Tuting Yingkiong (ST)" }, { no: 35, name: "Pangin (ST)" }, { no: 36, name: "Nari-Koyu (ST)" }, { no: 37, name: "Pasighat West (ST)" }, { no: 38, "name": "Pasighat East (ST)" }, { no: 39, name: "Mebo (ST)" }, { no: 40, name: "Mariyang-Geku (ST)" },
  { no: 41, name: "Anini (ST)" }, { no: 42, name: "Dambuk (ST)" }, { no: 43, name: "Roing (ST)" }, { no: 44, name: "Tezu (ST)" }, { no: 45, name: "Hayuliang (ST)" }, { no: 46, name: "Chowkham (ST)" }, { no: 47, name: "Namsai (ST)" }, { no: 48, name: "Lekang (ST)" }, { no: 49, name: "Bordumsa – Diyun" }, { no: 50, name: "Miao (ST)" },
  { no: 51, name: "Nampong (ST)" }, { no: 52, name: "Changlang South (ST)" }, { no: 53, name: "Changlang North (ST)" }, { no: 54, name: "Namsang (ST)" }, { no: 55, name: "Khonsa East (ST)" }, { no: 56, name: "Khonsa West (ST)" }, { no: 57, name: "Borduria Bogapani (ST)" }, { no: 58, name: "Kanubari (ST)" }, { no: 59, name: "Longding Pumao (ST)" }, { no: 60, name: "Pongchau Wakka (ST)" }
];

// --- DATA SOURCE: ASSAM (126) ---
const AS_DATA = [
  { no: 1, name: "Ratabari (SC)" }, { no: 2, name: "Patharkandi" }, { no: 3, name: "Karimganj North" }, { no: 4, name: "Karimganj South" }, { no: 5, name: "Badarpur" }, { no: 6, name: "Hailakandi" }, { no: 7, name: "Katlichera" }, { no: 8, name: "Algapur" }, { no: 9, name: "Silchar" }, { no: 10, name: "Sonai" },
  { no: 11, name: "Dholai (SC)" }, { no: 12, name: "Udharbond" }, { no: 13, name: "Lakhipur" }, { no: 14, name: "Barkhola" }, { no: 15, name: "Katigorah" }, { no: 16, name: "Haflong (ST)" }, { no: 17, name: "Bokajan (ST)" }, { no: 18, name: "Howraghat (ST)" }, { no: 19, name: "Diphu (ST)" }, { no: 20, name: "Baithalangso (ST)" },
  { no: 21, name: "Mankachar" }, { no: 22, name: "Salmara South" }, { no: 23, name: "Dhubri" }, { no: 24, name: "Gauripur" }, { no: 25, name: "Golakganj" }, { no: 26, name: "Bilasipara West" }, { no: 27, name: "Bilasipara East" }, { no: 28, name: "Goalpara East" }, { no: 29, name: "Goalpara West" }, { no: 30, name: "Jaleswar" },
  { no: 31, name: "Gossaigaon" }, { no: 32, name: "Kokrajhar West (ST)" }, { no: 33, name: "Kokrajhar East (ST)" }, { no: 34, name: "Sidli (ST)" }, { no: 35, name: "Bijni" }, { no: 36, name: "Sorbhog" }, { no: 37, name: "Bhabanipur" }, { no: 38, name: "Tamulpur" }, { no: 39, name: "Barama (ST)" }, { no: 40, name: "Chapaguri (ST)" },
  { no: 41, name: "Bongaigaon" }, { no: 42, name: "Abhayapuri North" }, { no: 43, name: "Abhayapuri South (SC)" }, { no: 44, name: "Patacharkuchi" }, { no: 45, name: "Barpeta" }, { no: 46, name: "Jania" }, { no: 47, name: "Baghbar" }, { no: 48, name: "Sarukhetri" }, { no: 49, name: "Chenga" }, { no: 50, name: "Dharmapur" },
  { no: 51, name: "Dudhnai (ST)" }, { no: 52, name: "Boko (SC)" }, { no: 53, name: "Chaygaon" }, { no: 54, name: "Palasbari" }, { no: 55, name: "Jalukbari" }, { no: 56, name: "Dispur" }, { no: 57, name: "Gauhati East" }, { no: 58, name: "Gauhati West" }, { no: 59, name: "Hajo" }, { no: 60, name: "Barkhetry" },
  { no: 61, name: "Kamalpur" }, { no: 62, name: "Rangiya" }, { no: 63, name: "Nalbari" }, { no: 64, name: "Panery" }, { no: 65, "name": "Kalaigaon" }, { no: 66, name: "Sipajhar" }, { no: 67, name: "Mangaldoi (SC)" }, { no: 68, name: "Dalgaon" }, { no: 69, name: "Udalguri (ST)" }, { no: 70, name: "Majbat" },
  { no: 71, name: "Dhekiajuli" }, { no: 72, name: "Barchalla" }, { no: 73, name: "Tezpur" }, { no: 74, name: "Rangapara" }, { no: 75, name: "Sootea" }, { no: 76, name: "Biswanath" }, { no: 77, name: "Behali" }, { no: 78, name: "Gohpur" }, { no: 79, name: "Bihpuria" }, { no: 80, name: "Jagiroad (SC)" },
  { no: 81, name: "Marigaon" }, { no: 82, name: "Laharighat" }, { no: 83, name: "Raha (SC)" }, { no: 84, name: "Nowgong" }, { no: 85, name: "Barhampur" }, { no: 86, name: "Jamunamukh" }, { no: 87, name: "Hojai" }, { no: 88, name: "Lumding" }, { no: 89, name: "Dhing" }, { no: 90, name: "Batadroba" },
  { no: 91, name: "Rupohihat" }, { no: 92, name: "Samaguri" }, { no: 93, name: "Kaliabor" }, { no: 94, name: "Bokakhat" }, { no: 95, name: "Sarupathar" }, { no: 96, name: "Golaghat" }, { no: 97, name: "Khumtai" }, { no: 98, name: "Dergaon (SC)" }, { no: 99, name: "Jorhat" }, { no: 100, name: "Titabar" },
  { no: 101, name: "Mariani" }, { no: 102, name: "Teok" }, { no: 103, name: "Amguri" }, { no: 104, name: "Nazira" }, { no: 105, name: "Mahmara" }, { no: 106, name: "Sonari" }, { no: 107, name: "Thowra" }, { no: 108, name: "Sibsagar" }, { no: 109, name: "Moran" }, { no: 110, name: "Dibrugarh" },
  { no: 111, name: "Lahowal" }, { no: 112, name: "Duliajan" }, { no: 113, name: "Tingkhong" }, { no: 114, name: "Naharkatia" }, { no: 115, name: "Tinsukia" }, { no: 116, name: "Digboi" }, { no: 117, name: "Margherita" }, { no: 118, name: "Majuli (ST)" }, { no: 119, name: "Naoboicha" }, { no: 120, name: "Lakhimpur" },
  { no: 121, name: "Dhakuakhana (ST)" }, { no: 122, name: "Dhemaji (ST)" }, { no: 123, name: "Jonai (ST)" }, { no: 124, name: "Chabua" }, { no: 125, name: "Doom Dooma" }, { no: 126, name: "Sadiya" }
];

// --- DATA SOURCE: BIHAR (243) ---
const BR_DATA = [
  { no: 1, name: "Valmiki Nagar" }, { no: 2, name: "Ramnagar (SC)" }, { no: 3, name: "Narkatiaganj" }, { no: 4, name: "Bagaha" }, { no: 5, name: "Lauriya" }, { no: 6, name: "Sikta" }, { no: 7, name: "Nautan" }, { no: 8, name: "Chanpatia" }, { no: 9, name: "Bettiah" }, { no: 10, name: "Raxaul" },
  { no: 11, name: "Sugauli" }, { no: 12, name: "Narkatia" }, { no: 13, name: "Harsidhi (SC)" }, { no: 14, name: "Govindganj" }, { no: 15, name: "Kesaria" }, { no: 16, name: "Kalyanpur" }, { no: 17, name: "Pipra" }, { no: 18, name: "Motihari" }, { no: 19, name: "Madhuban" }, { no: 20, name: "Chiraia" },
  { no: 21, name: "Dhaka" }, { no: 22, name: "Sheohar" }, { no: 23, name: "Riga" }, { no: 24, name: "Belsand" }, { no: 25, name: "Bathnaha (SC)" }, { no: 26, name: "Parihar" }, { no: 27, name: "Sursand" }, { no: 28, name: "Bajpatti" }, { no: 29, name: "Sitamarhi" }, { no: 30, name: "Runnisaidpur" },
  { no: 31, name: "Harlakhi" }, { no: 32, name: "Benipatti" }, { no: 33, name: "Bisfi" }, { no: 34, name: "Madhubani" }, { no: 35, name: "Keoti" }, { no: 36, name: "Jale" }, { no: 37, name: "Khajauli" }, { no: 38, name: "Babubarhi" }, { no: 39, name: "Rajnagar (SC)" }, { no: 40, name: "Jhanjharpur" },
  { no: 41, name: "Phulparas" }, { no: 42, name: "Laukaha" }, { no: 43, name: "Nirmali" }, { no: 44, name: "Pipra" }, { no: 45, name: "Supaul" }, { no: 46, name: "Triveniganj (SC)" }, { no: 47, name: "Chhatapur" }, { no: 48, name: "Singheshwar (SC)" }, { no: 49, name: "Narpatganj" }, { no: 50, name: "Raniganj (SC)" },
  { no: 51, name: "Forbesganj" }, { no: 52, name: "Araria" }, { no: 53, name: "Jokihat" }, { no: 54, name: "Sikti" }, { no: 55, name: "Bahadurganj" }, { no: 56, name: "Thakurganj" }, { no: 57, name: "Kishanganj" }, { no: 58, name: "Kochadhaman" }, { no: 59, name: "Amour" }, { no: 60, name: "Baisi" },
  { no: 61, name: "Katihar" }, { no: 62, name: "Kadwa" }, { no: 63, name: "Balrampur" }, { no: 64, name: "Pranpur" }, { no: 65, "name": "Manihari (ST)" }, { no: 66, name: "Barari" }, { no: 67, name: "Kasba" }, { no: 68, name: "Banmankhi (SC)" }, { no: 69, name: "Rupauli" }, { no: 70, name: "Dhamdaha" },
  { no: 71, name: "Purnia" }, { no: 72, name: "Korha (SC)" }, { no: 73, name: "Alamnagar" }, { no: 74, name: "Bihariganj" }, { no: 75, name: "Madhepura" }, { no: 76, name: "Sonbarsha (SC)" }, { no: 77, name: "Saharsa" }, { no: 78, name: "Mahishi" }, { no: 79, name: "Gaura Bauram" }, { no: 80, name: "Benipur" },
  { no: 81, name: "Alinagar" }, { no: 82, name: "Darbhanga Rural" }, { no: 83, name: "Darbhanga" }, { no: 84, name: "Bahadurpur" }, { no: 85, name: "Gaighat" }, { no: 86, name: "Aurai" }, { no: 87, name: "Bochaha (SC)" }, { no: 88, name: "Sakra (SC)" }, { no: 89, name: "Kurhani" }, { no: 90, name: "Muzaffarpur" },
  { no: 91, name: "Minapur" }, { no: 92, name: "Kanti" }, { no: 93, name: "Baruraj" }, { no: 94, name: "Paroo" }, { no: 95, name: "Sahebganj" }, { no: 96, name: "Vaishali" }, { no: 97, name: "Baikunthpur" }, { no: 98, name: "Barauli" }, { no: 99, name: "Gopalganj" }, { no: 100, name: "Kuchaikote" },
  { no: 101, name: "Bhorey (SC)" }, { no: 102, name: "Hathua" }, { no: 103, name: "Siwan" }, { no: 104, name: "Ziradei" }, { no: 105, name: "Darauli (SC)" }, { no: 106, name: "Raghunathpur" }, { no: 107, name: "Daraundha" }, { no: 108, name: "Barharia" }, { no: 109, name: "Goriakothi" }, { no: 110, name: "Maharajganj" },
  { no: 111, name: "Ekma" }, { no: 112, name: "Manjhi" }, { no: 113, name: "Baniapur" }, { no: 114, name: "Taraiya" }, { no: 115, name: "Marhaura" }, { no: 116, name: "Chapra" }, { no: 117, name: "Garkha (SC)" }, { no: 118, name: "Amnour" }, { no: 119, name: "Parsa" }, { no: 120, name: "Sonepur" },
  { no: 121, name: "Hajipur" }, { no: 122, name: "Lalganj" }, { no: 123, name: "Mahua" }, { no: 124, name: "Raja Pakar (SC)" }, { no: 125, name: "Raghopur" }, { no: 126, name: "Mahnar" }, { no: 127, name: "Patepur (SC)" }, { no: 128, name: "Ujiarpur" }, { no: 129, name: "Morwa" }, { no: 130, name: "Sarairanjan" },
  { no: 131, name: "Mohiuddinnagar" }, { no: 132, name: "Bibhutipur" }, { no: 133, name: "Kusheshwar Asthan (SC)" }, { no: 134, name: "Hayaghat" }, { no: 135, name: "Kalyanpur (SC)" }, { no: 136, name: "Warisnagar" }, { no: 137, name: "Samastipur" }, { no: 138, name: "Rosera (SC)" }, { no: 139, name: "Cheria Bariarpur" }, { no: 140, name: "Bachhwara" },
  { no: 141, name: "Teghra" }, { no: 142, name: "Matihani" }, { no: 143, name: "Sahebpur Kamal" }, { no: 144, name: "Begusarai" }, { no: 145, name: "Bakhri (SC)" }, { no: 146, name: "Simri Bakhtiarpur" }, { no: 147, name: "Hasanpur" }, { no: 148, name: "Alauli (SC)" }, { no: 149, name: "Khagaria" }, { no: 150, name: "Beldaur" },
  { no: 151, name: "Parbatta" }, { no: 152, name: "Bihpur" }, { no: 153, name: "Gopalpur" }, { no: 154, name: "Pirpainti (SC)" }, { no: 155, name: "Kahalgaon" }, { no: 156, name: "Bhagalpur" }, { no: 157, name: "Nathnagar" }, { no: 158, name: "Sultanganj" }, { no: 159, name: "Amarpur" }, { no: 160, name: "Dhauraiya (SC)" },
  { no: 161, name: "Banka" }, { no: 162, name: "Katoria (ST)" }, { no: 163, name: "Belhar" }, { no: 164, name: "Munger" }, { no: 165, name: "Jamalpur" }, { no: 166, name: "Suryagarha" }, { no: 167, name: "Lakhisarai" }, { no: 168, name: "Mokama" }, { no: 169, name: "Barh" }, { no: 170, name: "Asthawan" },
  { no: 171, name: "Biharsharif" }, { no: 172, name: "Rajgir (SC)" }, { no: 173, name: "Islampur" }, { no: 174, name: "Hilsa" }, { no: 175, name: "Nalanda" }, { no: 176, name: "Harnaut" }, { no: 177, name: "Bakhtiarpur" }, { no: 178, name: "Digha" }, { no: 179, name: "Bankipur" }, { no: 180, name: "Kumhrar" },
  { no: 181, name: "Patna Sahib" }, { no: 182, name: "Fatuha" }, { no: 183, name: "Danapur" }, { no: 184, name: "Maner" }, { no: 185, name: "Phulwari (SC)" }, { no: 186, name: "Masaurhi (SC)" }, { no: 187, name: "Paliganj" }, { no: 188, name: "Bikram" }, { no: 189, name: "Sandesh" }, { no: 190, name: "Barhara" },
  { no: 191, name: "Arrah" }, { no: 192, name: "Agiaon (SC)" }, { no: 193, name: "Tarari" }, { no: 194, name: "Jagdishpur" }, { no: 195, name: "Shahpur" }, { no: 196, name: "Brahampur" }, { no: 197, name: "Buxar" }, { no: 198, name: "Dumraon" }, { no: 199, name: "Rajpur (SC)" }, { no: 200, name: "Ramgarh" },
  { no: 201, name: "Dinara" }, { no: 202, name: "Mohania (SC)" }, { no: 203, name: "Bhabua" }, { no: 204, name: "Chainpur" }, { no: 205, name: "Chenari (SC)" }, { no: 206, name: "Sasaram" }, { no: 207, name: "Kargahar" }, { no: 208, name: "Nokha" }, { no: 209, name: "Dehri" }, { no: 210, name: "Karakat" },
  { no: 211, name: "Goh" }, { no: 212, name: "Obra" }, { no: 213, name: "Nabinagar" }, { no: 214, name: "Arwal" }, { no: 215, name: "Kurtha" }, { no: 216, name: "Jahanabad" }, { no: 217, name: "Ghosi" }, { no: 218, name: "Makhdumpur (SC)" }, { no: 219, name: "Atri" }, { no: 220, name: "Kutumba (SC)" },
  { no: 221, name: "Aurangabad" }, { no: 222, name: "Rafiganj" }, { no: 223, name: "Gurua" }, { no: 224, name: "Imamganj (SC)" }, { no: 225, name: "Tikari" }, { no: 226, name: "Sherghati" }, { no: 227, name: "Barachatti (SC)" }, { no: 228, name: "Bodh Gaya (SC)" }, { no: 229, name: "Gaya Town" }, { no: 230, name: "Belaganj" },
  { no: 231, name: "Wazirganj" }, { no: 232, name: "Barbigha" }, { no: 233, "name": "Rajauli (SC)" }, { no: 234, name: "Hisua" }, { no: 235, name: "Nawada" }, { no: 236, name: "Gobindpur" }, { no: 237, name: "Warsaliganj" }, { no: 238, name: "Tarapur" }, { no: 239, name: "Sheikhpura" }, { no: 240, name: "Sikandra (SC)" },
  { no: 241, name: "Jamui" }, { no: 242, name: "Jhajha" }, { no: 243, name: "Chakai" }
];

// --- DATA SOURCE: GOA (40) ---
const GA_DATA = [
  { no: 1, name: "Mandrem" }, { no: 2, name: "Pernem (SC)" }, { no: 3, name: "Bicholim" }, { no: 4, name: "Tivim" }, { no: 5, name: "Mapusa" }, { no: 6, name: "Siolim" }, { no: 7, name: "Saligao" }, { no: 8, name: "Calangute" }, { no: 9, name: "Porvorim" }, { no: 10, name: "Aldona" },
  { no: 11, name: "Panaji" }, { no: 12, name: "Taleigao" }, { no: 13, name: "St. Cruz" }, { no: 14, name: "St. Andre" }, { no: 15, name: "Cumbarjua" }, { no: 16, name: "Maem" }, { no: 17, name: "Sanquelim" }, { no: 18, name: "Poriem" }, { no: 19, name: "Valpoi" }, { no: 20, name: "Priol" },
  { no: 21, name: "Ponda" }, { no: 22, name: "Siroda" }, { no: 23, name: "Marcaim" }, { no: 24, name: "Mormugao" }, { no: 25, name: "Vasco-Da-Gama" }, { no: 26, name: "Dabolim" }, { no: 27, name: "Cortalim" }, { no: 28, name: "Nuvem" }, { no: 29, name: "Curtorim" }, { no: 30, name: "Fatorda" },
  { no: 31, name: "Margao" }, { no: 32, name: "Benaulim" }, { no: 33, "name": "Navelim" }, { no: 34, name: "Cuncolim" }, { no: 35, name: "Velim" }, { no: 36, name: "Quepem" }, { no: 37, name: "Curchorem" }, { no: 38, name: "Sanvordem" }, { no: 39, name: "Sanguem" }, { no: 40, name: "Canacona" }
];

// --- DATA SOURCE: GUJARAT (182) ---
const GJ_DATA = [
  { no: 1, name: "Abdasa" }, { no: 2, name: "Mandvi" }, { no: 3, name: "Bhuj" }, { no: 4, name: "Anjar" }, { no: 5, name: "Gandhidham (SC)" }, { no: 6, name: "Rapar" }, { no: 7, name: "Vav" }, { no: 8, name: "Tharad" }, { no: 9, name: "Dhanera" }, { no: 10, name: "Danta (ST)" },
  { no: 11, name: "Vadgam (SC)" }, { no: 12, name: "Palanpur" }, { no: 13, name: "Deesa" }, { no: 14, name: "Deodar" }, { no: 15, name: "Kankrej" }, { no: 16, name: "Radhanpur" }, { no: 17, name: "Chanasma" }, { no: 18, name: "Patan" }, { no: 19, name: "Sidhpur" }, { no: 20, name: "Kheralu" },
  { no: 21, name: "Unjha" }, { no: 22, name: "Visnagar" }, { no: 23, name: "Becharaji" }, { no: 24, name: "Kadi (SC)" }, { no: 25, name: "Mahesana" }, { no: 26, name: "Vijapur" }, { no: 27, name: "Himatnagar" }, { no: 28, name: "Idar (SC)" }, { no: 29, name: "Khedbrahma (ST)" }, { no: 30, name: "Bhiloda (ST)" },
  { no: 31, name: "Modasa" }, { no: 32, name: "Bayad" }, { no: 33, name: "Prantij" }, { no: 34, "name": "Dehgam" }, { no: 35, name: "Gandhinagar South" }, { no: 36, name: "Gandhinagar North" }, { no: 37, name: "Mansa" }, { no: 38, name: "Kalol" }, { no: 39, name: "Viramgam" }, { no: 40, name: "Sanand" },
  { no: 41, name: "Ghatlodia" }, { no: 42, name: "Vejalpur" }, { no: 43, name: "Vatva" }, { no: 44, name: "Ellisbridge" }, { no: 45, name: "Naranpura" }, { no: 46, name: "Nikol" }, { no: 47, name: "Naroda" }, { no: 48, name: "Thakkarbapa Nagar" }, { no: 49, name: "Bapunagar" }, { no: 50, name: "Amraiwadi" },
  { no: 51, name: "Dariapur" }, { no: 52, name: "Jamalpur - Khadia" }, { no: 53, name: "Maninagar" }, { no: 54, name: "Danilimda (SC)" }, { no: 55, name: "Sabarmati" }, { no: 56, name: "Asarwa (SC)" }, { no: 57, name: "Daskroi" }, { no: 58, name: "Dholka" }, { no: 59, name: "Dhandhuka" }, { no: 60, name: "Dasada (SC)" },
  { no: 61, name: "Limbdi" }, { no: 62, name: "Wadhwan" }, { no: 63, name: "Chotila" }, { no: 64, name: "Dhrangadhra" }, { no: 65, name: "Morbi" }, { no: 66, name: "Tankara" }, { no: 67, name: "Wankaner" }, { no: 68, name: "Rajkot East" }, { no: 69, name: "Rajkot West" }, { no: 70, name: "Rajkot South" },
  { no: 71, name: "Rajkot Rural (SC)" }, { no: 72, name: "Jasdan" }, { no: 73, name: "Gondal" }, { no: 74, name: "Jetpur" }, { no: 75, name: "Dhoraji" }, { no: 76, name: "Porbandar" }, { no: 77, name: "Kutiyana" }, { no: 78, name: "Manavadar" }, { no: 79, name: "Visavadar" }, { no: 80, name: "Keshod" },
  { no: 81, name: "Mangrol" }, { no: 82, name: "Junagadh" }, { no: 83, name: "Somnath" }, { no: 84, name: "Talala" }, { no: 85, name: "Kodinar (SC)" }, { no: 86, name: "Una" }, { no: 87, name: "Dhari" }, { no: 88, name: "Amreli" }, { no: 89, name: "Lathi" }, { no: 90, name: "Savarkundla" },
  { no: 91, name: "Rajula" }, { no: 92, name: "Mahuva" }, { no: 93, name: "Talaja" }, { no: 94, name: "Gariadhar" }, { no: 95, name: "Palitana" }, { no: 96, name: "Bhavnagar Rural" }, { no: 97, name: "Bhavnagar East" }, { no: 98, name: "Bhavnagar West" }, { no: 99, name: "Gadhada (SC)" }, { no: 100, name: "Botad" },
  { no: 101, name: "Khambhat" }, { no: 102, name: "Borsad" }, { no: 103, name: "Anklav" }, { no: 104, name: "Umreth" }, { no: 105, name: "Anand" }, { no: 106, name: "Petlad" }, { no: 107, name: "Sojitra" }, { no: 108, name: "Matar" }, { no: 109, name: "Nadiad" }, { no: 110, name: "Mehmedabad" },
  { no: 111, name: "Mahudha" }, { no: 112, name: "Thasra" }, { no: 113, name: "Kapadvanj" }, { no: 114, name: "Balasinor" }, { no: 115, name: "Lunawada" }, { no: 116, "name": "Santrampur (ST)" }, { no: 117, name: "Shehra" }, { no: 118, name: "Morva Hadaf (ST)" }, { no: 119, name: "Godhra" }, { no: 120, name: "Kalol" },
  { no: 121, name: "Halol" }, { no: 122, name: "Fatepura (ST)" }, { no: 123, name: "Jhalod (ST)" }, { no: 124, name: "Limkheda (ST)" }, { no: 125, name: "Dahod (ST)" }, { no: 126, name: "Garbada (ST)" }, { no: 127, name: "Devgadhbaria" }, { no: 128, name: "Savli" }, { no: 129, name: "Vaghodia" }, { no: 130, name: "Chhota Udaipur (ST)" },
  { no: 131, name: "Jetpur (ST)" }, { no: 132, name: "Sankheda (ST)" }, { no: 133, "name": "Dabhoi" }, { no: 134, name: "Vadodara City (SC)" }, { no: 135, name: "Sayajigunj" }, { no: 136, name: "Akota" }, { no: 137, name: "Raopura" }, { no: 138, name: "Manjalpur" }, { no: 139, name: "Padra" }, { no: 140, name: "Karjan" },
  { no: 141, name: "Nandod (ST)" }, { no: 142, name: "Dediapada (ST)" }, { no: 143, name: "Jambusar" }, { no: 144, name: "Vagra" }, { no: 145, name: "Jhagadia (ST)" }, { no: 146, name: "Bharuch" }, { no: 147, name: "Ankleshwar" }, { no: 148, name: "Olpad" }, { no: 149, name: "Mangrol (ST)" }, { no: 150, name: "Mandvi (ST)" },
  { no: 151, name: "Kamrej" }, { no: 152, name: "Surat East" }, { no: 153, name: "Surat North" }, { no: 154, name: "Varachha Road" }, { no: 155, name: "Karanj" }, { no: 156, name: "Limbayat" }, { no: 157, name: "Udhna" }, { no: 158, name: "Majura" }, { no: 159, name: "Katargam" }, { no: 160, name: "Surat West" },
  { no: 161, name: "Choryasi" }, { no: 162, name: "Bardoli (SC)" }, { no: 163, name: "Mahuva (ST)" }, { no: 164, name: "Vyara (ST)" }, { no: 165, name: "Nizar (ST)" }, { no: 166, name: "Dangs (ST)" }, { no: 167, name: "Jalalpore" }, { no: 168, name: "Navsari" }, { no: 169, name: "Gandevi (ST)" }, { no: 170, name: "Bansda (ST)" },
  { no: 171, name: "Dharampur (ST)" }, { no: 172, name: "Valsad" }, { no: 173, name: "Pardi" }, { no: 174, name: "Kaprada (ST)" }, { no: 175, name: "Umbergaon (ST)" },
];

// --- DATA SOURCE: KERALA (140) ---
const KL_DATA = [
    { no: 1, name: "MANJESHWAR" }, { no: 2, name: "KASARAGOD" }, { no: 3, name: "UDMA" }, { no: 4, name: "KANHANGAD" }, { no: 5, name: "TRIKARIPUR" }, { no: 6, name: "PAYYANNUR" }, { no: 7, name: "KALLIASSERI" }, { no: 8, name: "TALIPARAMBA" }, { no: 9, name: "IRIKKUR" }, { no: 10, name: "AZHIKODE" },
    { no: 11, name: "KANNUR" }, { no: 12, name: "DHARMADAM" }, { no: 13, name: "MATTANNUR" }, { no: 14, name: "PERAVOOR" }, { no: 15, name: "THALASSERY" }, { no: 16, name: "KUTHUPARAMBA" }, { no: 17, name: "VADAKARA" }, { no: 18, name: "KUTTIADI" }, { no: 19, name: "NADAPURAM" }, { no: 20, name: "QUILANDY" },
    { no: 21, name: "PERAMBRA" }, { no: 22, name: "MANANTHAVADY (ST)" }, { no: 23, name: "SULTHANBATHERY (ST)" }, { no: 24, name: "KALPETTA" }, { no: 25, name: "THIRUVAMBADY" }, { no: 26, name: "ERANAD" }, { no: 27, name: "NILAMBUR" }, { no: 28, name: "WANDOOR (SC)" }, { no: 29, name: "BALUSSERI (SC)" }, { no: 30, name: "ELATHUR" },
    { no: 31, name: "KOZHIKODE NORTH" }, { no: 32, name: "KOZHIKODE SOUTH" }, { no: 33, name: "BEYPORE" }, { no: 34, name: "KUNNAMANGALAM" }, { no: 35, name: "KODUVALLY" }, { no: 36, name: "KONDOTTY" }, { no: 37, name: "MANJERI" }, { no: 38, name: "PERINTHALMANNA" }, { no: 39, name: "MANKADA" }, { no: 40, name: "MALAPPURAM" },
    { no: 41, name: "VENGARA" }, { no: 42, name: "VALLIKKUNNU" }, { no: 43, name: "TIRURANGADI" }, { no: 44, name: "TANUR" }, { no: 45, name: "TIRUR" }, { no: 46, name: "KOTTAKKAL" }, { no: 47, name: "THAVANUR" }, { no: 48, name: "PONNANI" }, { no: 49, name: "THRITHALA" }, { no: 50, name: "PATTAMBI" },
    { no: 51, name: "SHORNUR" }, { no: 52, name: "OTTAPALAM" }, { no: 53, name: "KONGAD (SC)" }, { no: 54, name: "MANNARKAD" }, { no: 55, name: "MALAMPUZHA" }, { no: 56, name: "PALAKKAD" }, { no: 57, name: "TARUR (SC)" }, { no: 58, name: "CHITTUR" }, { no: 59, name: "NENMARA" }, { no: 60, name: "ALATHUR" },
    { no: 61, name: "CHELAKKARA (SC)" }, { no: 62, name: "KUNNAMKULAM" }, { no: 63, name: "WADAKKANCHERY" }, { no: 64, name: "GURUVAYOOR" }, { no: 65, name: "MANALUR" }, { no: 66, name: "OLLUR" }, { no: 67, name: "THRISSUR" }, { no: 68, name: "NATTIKA (SC)" }, { no: 69, name: "IRINJALAKKUDA" }, { no: 70, name: "PUTHUKKAD" },
    { no: 71, name: "KAIPAMANGALAM" }, { no: 72, name: "CHALAKKUDY" }, { no: 73, name: "KODUNGALLUR" }, { no: 74, name: "PERUMBAVOOR" }, { no: 75, name: "ANGAMALY" }, { no: 76, name: "ALUVA" }, { no: 77, name: "KUNNATHUNAD (SC)" }, { no: 78, name: "KALAMASSERY" }, { no: 79, name: "PARAVUR" }, { no: 80, name: "VYPEN" },
    { no: 81, name: "KOCHI" }, { no: 82, name: "THRIPUNITHURA" }, { no: 83, name: "ERANAKULAM" }, { no: 84, name: "THRIKKAKARA" }, { no: 85, name: "MUVATTUPUZHA" }, { no: 86, name: "KOTHAMANGALAM" }, { no: 87, name: "DEVIKULAM (SC)" }, { no: 88, name: "UDUMBANCHOLA" }, { no: 89, name: "THODUPUZHA" }, { no: 90, name: "IDUKKI" },
    { no: 91, name: "PEERUMADE" }, { no: 92, name: "PIRAVOM" }, { no: 93, name: "PALA" }, { no: 94, name: "KADUTHURUTHY" }, { no: 95, name: "VAIKOM (SC)" }, { no: 96, name: "ETTUMANOOR" }, { no: 97, name: "KOTTAYAM" }, { no: 98, name: "PUTHUPPALLY" }, { no: 99, name: "AROOR" }, { no: 100, name: "CHERTHALA" },
    { no: 101, name: "ALAPPUZHA" }, { no: 102, name: "AMBALAPUZHA" }, { no: 103, name: "HARIPAD" }, { no: 104, name: "KAYAMKULAM" }, { no: 105, name: "KARUNAGAPPALLY" }, { no: 106, name: "CHANGANASSERY" }, { no: 107, name: "KUTTANAD" }, { no: 108, name: "MAVELIKARA (SC)" }, { no: 109, name: "CHENGANNUR" }, { no: 110, name: "KUNNATHUR (SC)" },
    { no: 111, name: "KOTTARAKKARA" }, { no: 112, name: "PATHANAPURAM" }, { no: 113, name: "KANJIRAPPALLY" }, { no: 114, name: "POONJAR" }, { no: 115, name: "THIRUVALLA" }, { no: 116, name: "RANNI" }, { no: 117, name: "ARANMULA" }, { no: 118, name: "KONNI" }, { no: 119, name: "ADOOR (SC)" }, { no: 120, name: "CHAVARA" },
    { no: 121, name: "PUNALUR" }, { no: 122, name: "CHADAYAMANGALAM" }, { no: 123, name: "KUNDARA" }, { no: 124, name: "KOLLAM" }, { no: 125, name: "ERAVIPURAM" }, { no: 126, name: "CHATHANNUR" }, { no: 127, name: "VARKALA" }, { no: 128, name: "ATTINGAL (SC)" }, { no: 129, name: "CHIRAYINKEEZHU (SC)" }, { no: 130, name: "NEDUMANGAD" },
    { no: 131, name: "VAMANAPURAM" }, { no: 132, name: "ARUVIKKARA" }, { no: 133, name: "KATTAKKADA" }, { no: 134, name: "KAZHAKKOOTTAM" }, { no: 135, name: "VATTIYOORKAVU" }, { no: 136, name: "THIRUVANANTHA" }, { no: 137, name: "NEMOM" }, { no: 138, name: "PARASSALA" }, { no: 139, name: "KOVALAM" }, { no: 140, name: "NEYYATTINKARA" }
];

// --- DATA SOURCE: MADHYA PRADESH (230) ---
const MP_DATA = [
    { no: 1, name: "SHEOPUR" }, { no: 2, name: "VIJAYPUR" }, { no: 3, name: "SABALAGADH" }, { no: 4, name: "JAURA" }, { no: 5, name: "SUMAOLI" }, { no: 6, name: "MORENA" }, { no: 7, name: "DIMANI" }, { no: 8, name: "AMBAH (SC)" }, { no: 9, name: "ATER" }, { no: 10, name: "BHIND" },
    { no: 11, name: "LAHAR" }, { no: 12, name: "MEHGAON" }, { no: 13, name: "GOHAD (SC)" }, { no: 14, name: "SEWDA" }, { no: 15, name: "BHANDER (SC)" }, { no: 16, name: "DATIA" }, { no: 17, name: "GWALIOR RURAL" }, { no: 18, name: "GWALIOR" }, { no: 19, name: "GWALIOR EAST" }, { no: 20, name: "GWALIOR SOUTH" },
    { no: 21, name: "BHITRWAR" }, { no: 22, name: "DABARA (SC)" }, { no: 23, name: "KARERA (SC)" }, { no: 24, name: "POHARI" }, { no: 25, name: "SHIVPURI" }, { no: 26, name: "PICHHORE" }, { no: 27, name: "KOLARAS" }, { no: 28, name: "BAMORI" }, { no: 29, name: "GUNA (SC)" }, { no: 30, name: "ASHOK NAGAR (SC)" },
    { no: 31, name: "CHANDERI" }, { no: 32, name: "MUNGAOLI" }, { no: 33, name: "BINA (SC)" }, { no: 34, name: "KHURAI" }, { no: 35, name: "SURKHI" }, { no: 36, name: "NARYAWALI (SC)" }, { no: 37, name: "SAGAR" }, { no: 38, name: "KURWAI (SC)" }, { no: 39, name: "SIRONJ" }, { no: 40, name: "SHAMSHABAD" },
    { no: 41, name: "TIKAMGARH" }, { no: 42, name: "JATARA (SC)" }, { no: 43, name: "PRITHVIPUR" }, { no: 44, name: "NIWARI" }, { no: 45, name: "KHARGAPUR" }, { no: 46, name: "MAHARAJPUR" }, { no: 47, name: "CHHATARPUR" }, { no: 48, name: "BIJAWAR" }, { no: 49, name: "DEORI" }, { no: 50, name: "REHLI" },
    { no: 51, name: "BANDA" }, { no: 52, name: "MALHARA" }, { no: 53, name: "PATHARIYA" }, { no: 54, name: "DAMOH" }, { no: 55, name: "JABERA" }, { no: 56, name: "HATTA (SC)" }, { no: 57, name: "CHANDLA (SC)" }, { no: 58, name: "RAJNAGAR" }, { no: 59, name: "PAWAI" }, { no: 60, name: "GUNNOUR (SC)" },
    { no: 61, name: "PANNA" }, { no: 62, name: "VIJAYRAGHAVGARH" }, { no: 63, name: "MUDWARA" }, { no: 64, name: "BAHORIBAND" }, { no: 65, name: "CHITRAKOOT" }, { no: 66, name: "RAIGAON (SC)" }, { no: 67, name: "SATNA" }, { no: 68, name: "NAGOD" }, { no: 69, name: "MAIHAR" }, { no: 70, name: "AMARPATAN" },
    { no: 71, name: "RAMPUR BAGHELAN" }, { no: 72, name: "SIRMOUR" }, { no: 73, name: "SEMARIYA" }, { no: 74, name: "TEONTHAR" }, { no: 75, name: "MAUGANJ" }, { no: 76, name: "DEOTALAB" }, { no: 77, name: "MANGAWAN (SC)" }, { no: 78, name: "REWA" }, { no: 79, name: "GURH" }, { no: 80, name: "CHURHAT" },
    { no: 81, name: "SIDHI" }, { no: 82, name: "SIHAWAL" }, { no: 83, name: "CHITRANGI (ST)" }, { no: 84, name: "SINGAROULI" }, { no: 85, name: "DEVSAR (SC)" }, { no: 86, name: "DHOUHANI (ST)" }, { no: 87, name: "BEOHARI (ST)" }, { no: 88, name: "JAISINGHNAGAR (ST)" }, { no: 89, name: "JAITPUR (ST)" }, { no: 90, name: "KOTAMA" },
    { no: 91, name: "ANUPPUR (ST)" }, { no: 92, name: "PUSPRAJGARH (ST)" }, { no: 93, name: "BANDHAVGARH (ST)" }, { no: 94, name: "MANPUR (ST)" }, { no: 95, name: "BADWARA (ST)" }, { no: 96, name: "PATAN" }, { no: 97, name: "BARGI" }, { no: 98, name: "JABALPUR EAST (SC)" }, { no: 99, name: "JABALPUR NORTH" }, { no: 100, name: "JABALPUR CANTT" },
    { no: 101, name: "JABALPUR WEST" }, { no: 102, name: "PANAGAR" }, { no: 103, name: "SIHORA (ST)" }, { no: 104, name: "SHAHPURA (ST)" }, { no: 105, name: "DINDORI (ST)" }, { no: 106, name: "BICHHIYA (ST)" }, { no: 107, name: "NIWAS (ST)" }, { no: 108, name: "MANDLA (ST)" }, { no: 109, name: "KEOLARI" }, { no: 110, name: "LAKHANADON (ST)" },
    { no: 111, name: "GOTEGAON (SC)" }, { no: 112, name: "BAIHAR (ST)" }, { no: 113, name: "LANJI" }, { no: 114, name: "PARASWADA" }, { no: 115, name: "BALAGHAT" }, { no: 116, name: "WARASEONI" }, { no: 117, name: "KATANGI" }, { no: 118, name: "BARGHAT (ST)" }, { no: 119, name: "SEONI" }, { no: 120, name: "JUNNARDEO (ST)" },
    { no: 121, name: "AMARWARA (ST)" }, { no: 122, name: "CHURAI" }, { no: 123, name: "SAUSAR" }, { no: 124, name: "CHHINDWARA" }, { no: 125, name: "PARASIYA (SC)" }, { no: 126, name: "PANDHURNA (ST)" }, { no: 127, name: "NARSINGPUR" }, { no: 128, name: "TENDUKHEDA" }, { no: 129, name: "GADARWARA" }, { no: 130, name: "SEONI MALWA" },
    { no: 131, name: "HOSHANGABAD" }, { no: 132, name: "SOHAGPUR" }, { no: 133, name: "PIPARIYA (SC)" }, { no: 134, name: "UDAIPURA" }, { no: 135, name: "BHOJPUR" }, { no: 136, name: "SANCHI (SC)" }, { no: 137, name: "SILWANI" }, { no: 138, name: "VIDISHA" }, { no: 139, name: "BASODA" }, { no: 140, name: "BUDHNI" },
    { no: 141, name: "ICHHAWAR" }, { no: 142, name: "KHATEGAON" }, { no: 143, name: "BERASIA (SC)" }, { no: 144, name: "BHOPAL UTTAR" }, { no: 145, name: "NARELA" }, { no: 146, name: "BHOPAL DAKSHIN-PASCHIM" }, { no: 147, name: "BHOPAL MADHYA" }, { no: 148, name: "GOVINDPURA" }, { no: 149, name: "HUZUR" }, { no: 150, name: "SEHORE" },
    { no: 151, name: "CHACHODA" }, { no: 152, name: "RAGHOGARH" }, { no: 153, name: "NARSINGHGARH" }, { no: 154, name: "BIAORA" }, { no: 155, name: "RAJGARH" }, { no: 156, name: "KHILCHIPUR" }, { no: 157, name: "SARANGPUR (SC)" }, { no: 158, name: "SUSNER" }, { no: 159, name: "ASHTA (SC)" }, { no: 160, name: "AGAR (SC)" },
    { no: 161, name: "SHAJAPUR" }, { no: 162, name: "SHUJALPUR" }, { no: 163, name: "KALAPIPAL" }, { no: 164, name: "SONKATCH (SC)" }, { no: 165, name: "DEWAS" }, { no: 166, name: "HATPIPLIYA" }, { no: 167, name: "NAGADA - KHACHROD" }, { no: 168, name: "MAHIDPUR" }, { no: 169, name: "TARANA (SC)" }, { no: 170, name: "GHATIYA (SC)" },
    { no: 171, name: "UJJAIN NORTH" }, { no: 172, name: "UJJAIN SOUTH" }, { no: 173, name: "BADNAGAR" }, { no: 174, name: "ALOTE (SC)" }, { no: 175, name: "JAORA" }, { no: 176, name: "MANDSOUR" }, { no: 177, name: "MALHARGARH (SC)" }, { no: 178, name: "SUWASRA" }, { no: 179, name: "GAROTH" }, { no: 180, name: "MANASA" },
    { no: 181, name: "NEEMUCH" }, { no: 182, name: "JAWAD" }, { no: 183, name: "ALIRAJPUR (ST)" }, { no: 184, name: "JOBAT (ST)" }, { no: 185, name: "JHABUA (ST)" }, { no: 186, name: "THANDLA (ST)" }, { no: 187, name: "PETLAWAD (ST)" }, { no: 188, name: "RATLAM RURAL (ST)" }, { no: 189, name: "RATLAM CITY" }, { no: 190, name: "SAILANA (ST)" },
    { no: 191, name: "SARDARPUR (ST)" }, { no: 192, name: "GANDHWANI (ST)" }, { no: 193, name: "KUKSHI (ST)" }, { no: 194, name: "MANAWAR (ST)" }, { no: 195, name: "DHARAMPURI (ST)" }, { no: 196, name: "DHAR" }, { no: 197, name: "BADNAWAR" }, { no: 198, name: "DR. AMBEDKAR NAGAR - MHOW" }, { no: 199, name: "DEPALPUR" }, { no: 200, name: "INDORE-1" },
    { no: 201, name: "INDORE-2" }, { no: 202, name: "INDORE-3" }, { no: 203, name: "INDORE-4" }, { no: 204, name: "INDORE-5" }, { no: 205, name: "RAU" }, { no: 206, name: "SANWER (SC)" }, { no: 207, name: "MAHESHWAR (SC)" }, { no: 208, name: "KASRAWAD" }, { no: 209, name: "KHARGONE" }, { no: 210, name: "BHAGWANPURA (ST)" },
    { no: 211, name: "SENDHWA (ST)" }, { no: 212, name: "RAJPUR (ST)" }, { no: 213, name: "PANSEMAL (ST)" }, { no: 214, name: "BARWANI (ST)" }, { no: 215, name: "BAGLI (ST)" }, { no: 216, name: "MANDHATA" }, { no: 217, name: "KHANDWA (SC)" }, { no: 218, name: "PANDHANA (ST)" }, { no: 219, name: "NEPANAGAR (ST)" }, { no: 220, name: "BURHANPUR" },
    { no: 221, name: "BHIKANGAON (ST)" }, { no: 222, name: "BADWAHA" }, { no: 223, name: "MULTAI" }, { no: 224, name: "AMLA (SC)" }, { no: 225, name: "BETUL" }, { no: 226, name: "GHODADONGRI (ST)" }, { no: 227, name: "BHAINSDEHI (ST)" }, { no: 228, name: "TIMARNI (ST)" }, { no: 229, name: "HARDA" }, { no: 230, name: "HARSUD (ST)" }
];


export const generateConstituencies = (stateCode: string, totalSeats: number): AssemblyConstituency[] => {
  const mapData = (dataArr: { no: number, name: string }[], label: string) => {
    return dataArr.map(d => ({
      id: `${stateCode.toLowerCase()}-${d.no}`,
      number: d.no,
      name: d.name,
      lokSabhaName: `${label} Data Hub`,
      price: getProfessionalPrice(d.no),
      dataYear: "2026-27",
      partsCount: 200 + (d.no % 50)
    }));
  };

  let realData: { no: number, name: string }[] = [];
  switch (stateCode) {
    case 'PB':
      realData = PB_DATA;
      break;
    case 'HR':
      realData = HR_DATA;
      break;
    case 'UK':
      realData = UK_DATA;
      break;
    case 'TS':
      realData = TS_DATA;
      break;
    case 'AP':
      realData = AP_DATA;
      break;
    case 'AR':
      realData = AR_DATA;
      break;
    case 'AS':
      realData = AS_DATA;
      break;
    case 'BR':
      realData = BR_DATA;
      break;
    case 'GA':
      realData = GA_DATA;
      break;
    case 'GJ':
      realData = GJ_DATA;
      break;
    case 'KL':
      realData = KL_DATA;
      break;
    case 'MP':
      realData = MP_DATA;
      break;
  }

  const baseList = mapData(realData, stateCode);
  const existingNumbers = new Set(baseList.map(ac => ac.number));
  const fullList: AssemblyConstituency[] = [...baseList];

  for(let i = 1; i <= totalSeats; i++) {
    if (!existingNumbers.has(i)) {
      fullList.push({
        id: `${stateCode.toLowerCase()}-${i}`,
        number: i,
        name: `${stateCode} Constituency ${i}`,
        lokSabhaName: "Verified Node",
        price: getProfessionalPrice(i),
        dataYear: "2026-27",
        partsCount: 220
      });
    }
  }

  return fullList.sort((a,b) => a.number - b.number);
};

export const INDIAN_STATES: StateData[] = [
    { id: 'ap', name: 'Andhra Pradesh', code: 'AP', totalSeats: 175, acs: [] },
    { id: 'ar', name: 'Arunachal Pradesh', code: 'AR', totalSeats: 60, acs: [] },
    { id: 'as', name: 'Assam', code: 'AS', totalSeats: 126, acs: [] },
    { id: 'br', name: 'Bihar', code: 'BR', totalSeats: 243, acs: [] },
    { id: 'cg', name: 'Chhattisgarh', code: 'CG', totalSeats: 90, acs: [] },
    { id: 'dl', name: 'Delhi', code: 'DL', totalSeats: 70, acs: [] },
    { id: 'ga', name: 'Goa', code: 'GA', totalSeats: 40, acs: [] },
    { id: 'gj', name: 'Gujarat', code: 'GJ', totalSeats: 182, acs: [] },
    { id: 'hr', name: 'Haryana', code: 'HR', totalSeats: 90, acs: [] },
    { id: 'hp', name: 'Himachal Pradesh', code: 'HP', totalSeats: 68, acs: [] },
    { id: 'jk', name: 'Jammu and Kashmir', code: 'JK', totalSeats: 90, acs: [] },
    { id: 'jh', name: 'Jharkhand', code: 'JH', totalSeats: 81, acs: [] },
    { id: 'ka', name: 'Karnataka', code: 'KA', totalSeats: 224, acs: [] },
    { id: 'kl', name: 'Kerala', code: 'KL', totalSeats: 140, acs: [] },
    { id: 'mp', name: 'Madhya Pradesh', code: 'MP', totalSeats: 230, acs: [] },
    { id: 'mh', name: 'Maharashtra', code: 'MH', totalSeats: 288, acs: [] },
    { id: 'mn', name: 'Manipur', code: 'MN', totalSeats: 60, acs: [] },
    { id: 'ml', name: 'Meghalaya', code: 'ML', totalSeats: 60, acs: [] },
    { id: 'mz', name: 'Mizoram', code: 'MZ', totalSeats: 40, acs: [] },
    { id: 'nl', name: 'Nagaland', code: 'NL', totalSeats: 60, acs: [] },
    { id: 'od', name: 'Odisha', code: 'OD', totalSeats: 147, acs: [] },
    { id: 'py', name: 'Puducherry', code: 'PY', totalSeats: 30, acs: [] },
    { id: 'pb', name: 'Punjab', code: 'PB', totalSeats: 117, acs: [] },
    { id: 'rj', name: 'Rajasthan', code: 'RJ', totalSeats: 200, acs: [] },
    { id: 'sk', name: 'Sikkim', code: 'SK', totalSeats: 32, acs: [] },
    { id: 'tn', name: 'Tamil Nadu', code: 'TN', totalSeats: 234, acs: [] },
    { id: 'ts', name: 'Telangana', code: 'TS', totalSeats: 119, acs: [] },
    { id: 'tr', name: 'Tripura', code: 'TR', totalSeats: 60, acs: [] },
    { id: 'up', name: 'Uttar Pradesh', code: 'UP', totalSeats: 403, acs: [] },
    { id: 'uk', name: 'Uttarakhand', code: 'UK', totalSeats: 70, acs: [] },
    { id: 'wb', name: 'West Bengal', code: 'WB', totalSeats: 294, acs: [] },
];

INDIAN_STATES.forEach(s => s.acs = generateConstituencies(s.code, s.totalSeats));