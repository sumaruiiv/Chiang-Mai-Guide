/* Practical trip-planning content — bilingual. Checked September 2026. */

window.CM_SEASONS = [
  /* month index 0–11 → season key */
  "cool", "cool", "hot", "hot", "hot", "rain", "rain", "rain", "rain", "rain", "cool", "cool"
];

window.CM_SEASON_INFO = {
  cool: {
    label: { en: "Cool & dry", th: "หนาวและแห้ง" },
    range: { en: "Nov – Feb", th: "พ.ย. – ก.พ." },
    text:  { en: "**Best time to visit.** Sunny days around 25–30 °C, cool mornings, cold on the mountains. Busiest and priciest season.", th: "**ช่วงที่ดีที่สุด** กลางวันแดดดีราว 25–30 °C เช้าอากาศเย็น บนดอยหนาว เป็นช่วงที่คนเยอะและราคาสูงที่สุด" }
  },
  hot: {
    label: { en: "Hot & hazy", th: "ร้อนและมีหมอกควัน" },
    range: { en: "Mar – May", th: "มี.ค. – พ.ค." },
    text:  { en: "Temperatures can pass 38 °C. **Smoke season (roughly Feb–Apr)** brings poor air — check the AQI daily and pack N95 masks. Songkran in April.", th: "อุณหภูมิอาจเกิน 38 °C **ช่วงหมอกควัน (ประมาณ ก.พ.–เม.ย.)** คุณภาพอากาศแย่ ควรเช็กค่า AQI ทุกวันและพกหน้ากาก N95 มีเทศกาลสงกรานต์ในเดือนเมษายน" }
  },
  rain: {
    label: { en: "Green & rainy", th: "ฤดูฝน เขียวชอุ่ม" },
    range: { en: "Jun – Oct", th: "มิ.ย. – ต.ค." },
    text:  { en: "Short, heavy afternoon storms; lush forests and full waterfalls. **Kew Mae Pan trail closes** and trails get slippery. Fewer crowds, lower prices.", th: "ฝนตกหนักช่วงบ่ายไม่นาน ป่าเขียวชอุ่มและน้ำตกเต็มที่ **เส้นทางกิ่วแม่ปานปิด** และทางเดินลื่น คนน้อยและราคาถูกลง" }
  }
};

window.CM_PLAN = [
  {
    icon: "plane",
    title: { en: "Arriving", th: "การเดินทางมาถึง" },
    items: [
      { en: "**Chiang Mai International Airport (CNX)** is only about 4 km from the Old City — 15–20 minutes by airport taxi or Grab/Bolt.", th: "**ท่าอากาศยานนานาชาติเชียงใหม่ (CNX)** ห่างคูเมืองเพียงประมาณ 4 กม. ใช้เวลา 15–20 นาทีด้วยแท็กซี่สนามบินหรือ Grab/Bolt" },
      { en: "**Overnight trains** run from Bangkok (Krung Thep Aphiwat) in roughly 11–13 hours; buses arrive at the **Arcade Bus Terminal**.", th: "**รถไฟขบวนกลางคืน**จากกรุงเทพฯ (สถานีกลางกรุงเทพอภิวัฒน์) ใช้เวลาประมาณ 11–13 ชั่วโมง รถทัวร์จอดที่**สถานีขนส่งอาเขต**" },
      { en: "Foreign visitors must complete the **Thailand Digital Arrival Card (TDAC)** online within 3 days before arrival. Visa rules change — check your embassy or the official e-Visa site.", th: "ชาวต่างชาติต้องกรอก**บัตรขาเข้าดิจิทัล (TDAC)** ออนไลน์ภายใน 3 วันก่อนเดินทางถึง กฎวีซ่าเปลี่ยนแปลงบ่อย ควรตรวจสอบกับสถานทูตหรือเว็บไซต์ e-Visa ทางการ" }
    ]
  },
  {
    icon: "route",
    title: { en: "Getting around", th: "การเดินทางในเมือง" },
    items: [
      { en: "**Grab and Bolt** apps work well and show the price up front.", th: "แอป **Grab และ Bolt** ใช้งานได้ดีและแสดงราคาก่อนเรียก" },
      { en: "**Red songthaew (rot daeng)** are shared trucks: flag one down, say your destination, and agree the price first — short trips in town are usually around 30–50 THB per person.", th: "**รถสองแถวแดง (รถแดง)** เป็นรถโดยสารร่วม โบกเรียก บอกจุดหมาย และตกลงราคาก่อนขึ้น ระยะสั้นในเมืองปกติราว 30–50 บาทต่อคน" },
      { en: "The **Old City** is a square about 1.5 km on each side — easy to explore on foot.", th: "**คูเมือง**เป็นสี่เหลี่ยมด้านละประมาณ 1.5 กม. เดินเที่ยวได้สบาย" },
      { en: "Renting a scooter requires a **valid motorcycle licence** and a helmet. Traffic drives on the **left**.", th: "การเช่ามอเตอร์ไซค์ต้องมี**ใบขับขี่รถจักรยานยนต์ที่ถูกต้อง**และสวมหมวกกันน็อก ขับรถ**ชิดซ้าย**" }
    ]
  },
  {
    icon: "temple",
    title: { en: "Temple etiquette", th: "มารยาทในวัด" },
    items: [
      { en: "**Cover shoulders and knees**, and take off shoes before entering any hall.", th: "**ปิดไหล่และเข่า** และถอดรองเท้าก่อนเข้าอาคารทุกหลัง" },
      { en: "Never point your feet at a Buddha image or a monk; sit with feet tucked to the side.", th: "ไม่ชี้เท้าไปทางพระพุทธรูปหรือพระสงฆ์ นั่งพับเพียบเก็บเท้าไว้ด้านข้าง" },
      { en: "**Women should not touch monks** or hand them things directly.", th: "**ผู้หญิงไม่ควรสัมผัสพระ**หรือยื่นของให้พระโดยตรง" },
      { en: "Respect the monarchy — Thai law is strict. Stand still when the **national anthem** plays at 8:00 and 18:00 in public places.", th: "เคารพสถาบันพระมหากษัตริย์ กฎหมายไทยเข้มงวด หยุดยืนนิ่งเมื่อ**เพลงชาติ**ดังเวลา 08:00 และ 18:00 ในที่สาธารณะ" }
    ]
  },
  {
    icon: "wallet",
    title: { en: "Money & connectivity", th: "เงินและการสื่อสาร" },
    items: [
      { en: "Currency is the **Thai Baht (THB)**. Carry **cash** for markets, temples and songthaews; cards work in malls and hotels.", th: "สกุลเงินคือ**บาท (THB)** พก**เงินสด**สำหรับตลาด วัด และรถสองแถว บัตรใช้ได้ในห้างและโรงแรม" },
      { en: "Thai ATMs usually charge foreign cards a **fee of about 220 THB** per withdrawal — take out larger amounts less often.", th: "ตู้ ATM ในไทยมักเก็บ**ค่าธรรมเนียมบัตรต่างประเทศราว 220 บาท**ต่อครั้ง ควรถอนครั้งละมาก ๆ" },
      { en: "Buy a **tourist SIM or eSIM** at the airport with your passport (AIS, True).", th: "ซื้อ**ซิมหรือ eSIM นักท่องเที่ยว**ที่สนามบินโดยใช้หนังสือเดินทาง (AIS, True)" },
      { en: "Power is **220 V**; plugs are types A, B, C and O.", th: "ไฟฟ้า **220 โวลต์** ปลั๊กแบบ A, B, C และ O" }
    ]
  },
  {
    icon: "health",
    title: { en: "Health & safety", th: "สุขภาพและความปลอดภัย" },
    items: [
      { en: "**Tourist Police 1155** (English spoken) · **Medical emergency 1669** · **Police 191**.", th: "**ตำรวจท่องเที่ยว 1155** (พูดภาษาอังกฤษได้) · **เจ็บป่วยฉุกเฉิน 1669** · **เหตุด่วนเหตุร้าย 191**" },
      { en: "Major hospitals: **Maharaj Nakorn Chiang Mai**, **Chiang Mai Ram**, **Bangkok Hospital Chiang Mai**.", th: "โรงพยาบาลหลัก: **มหาราชนครเชียงใหม่ (สวนดอก)**, **เชียงใหม่ราม**, **กรุงเทพเชียงใหม่**" },
      { en: "Drink bottled or filtered water, and use **mosquito repellent** (dengue is a risk in the rainy season).", th: "ดื่มน้ำขวดหรือน้ำกรอง และทา**ยากันยุง** (ไข้เลือดออกระบาดในหน้าฝน)" },
      { en: "In smoke season, check the air quality (AQI) before outdoor plans.", th: "ช่วงหมอกควัน ควรเช็กค่าคุณภาพอากาศ (AQI) ก่อนทำกิจกรรมกลางแจ้ง" }
    ]
  }
];

window.CM_FESTIVALS = [
  { when: { en: "Early February", th: "ต้นกุมภาพันธ์" }, name: { en: "Chiang Mai Flower Festival", th: "เทศกาลไม้ดอกไม้ประดับเชียงใหม่" }, text: { en: "Flower-covered floats parade to Suan Buak Haad park, usually on the first weekend of February.", th: "ขบวนรถบุปผชาติแห่ไปสวนบวกหาด มักจัดในสุดสัปดาห์แรกของเดือนกุมภาพันธ์" } },
  { when: { en: "13–15 April", th: "13–15 เมษายน" }, name: { en: "Songkran (Thai New Year)", th: "สงกรานต์ (ปี๋ใหม่เมือง)" }, text: { en: "The city's famous water festival — the moat becomes one big water fight, and Phra Buddha Sihing is paraded for blessings.", th: "เทศกาลสาดน้ำชื่อดัง รอบคูเมืองกลายเป็นสนามเล่นน้ำ และมีการแห่พระพุทธสิหิงค์ให้สรงน้ำ" } },
  { when: { en: "November full moon", th: "วันเพ็ญเดือนสิบสอง (พ.ย.)" }, name: { en: "Yi Peng & Loy Krathong", th: "ยี่เป็งและลอยกระทง" }, text: { en: "Lanterns, candles and krathong floats on the Ping River. Sky-lantern releases are restricted to permitted events and times.", th: "โคมไฟ เทียน และกระทงบนแม่น้ำปิง การปล่อยโคมลอยอนุญาตเฉพาะงานและเวลาที่กำหนด" } }
];

window.CM_FOOD = [
  { name: { en: "Khao soi", th: "ข้าวซอย" }, text: { en: "Curry noodle soup with crispy noodles on top — the dish of Chiang Mai.", th: "ก๋วยเตี๋ยวแกงกะทิโรยเส้นกรอบ อาหารประจำเชียงใหม่" } },
  { name: { en: "Sai ua", th: "ไส้อั่ว" }, text: { en: "Herb-packed grilled Northern sausage with lemongrass and chilli.", th: "ไส้กรอกย่างสมุนไพรภาคเหนือ หอมตะไคร้และพริก" } },
  { name: { en: "Nam prik noom", th: "น้ำพริกหนุ่ม" }, text: { en: "Smoky green-chilli dip, eaten with vegetables and pork crackling.", th: "น้ำพริกพริกหนุ่มย่าง กินกับผักและแคบหมู" } },
  { name: { en: "Khan tok", th: "ขันโตก" }, text: { en: "A traditional Lanna dinner of shared dishes served on a low pedestal tray.", th: "สำรับอาหารล้านนาแบบดั้งเดิม เสิร์ฟบนโตกให้ล้อมวงกิน" } }
];

window.CM_ITINERARIES = [
  {
    title: { en: "Day 1 · Old City temples", th: "วันที่ 1 · วัดในคูเมือง" },
    stops: [
      { t: "08:00", id: "phra-singh",  text: { en: "Wat Phra Singh before the crowds", th: "วัดพระสิงห์ก่อนคนเยอะ" } },
      { t: "10:00", id: "chedi-luang", text: { en: "Wat Chedi Luang and a Monk Chat", th: "วัดเจดีย์หลวงและ Monk Chat" } },
      { t: "12:30", id: null,          text: { en: "Khao soi lunch", th: "มื้อกลางวันข้าวซอย" } },
      { t: "15:30", id: "umong",       text: { en: "Wat Umong's tunnels and forest", th: "อุโมงค์และป่าวัดอุโมงค์" } },
      { t: "17:00", id: "sunday-street", text: { en: "Walking street (Sat: Wua Lai · Sun: Tha Phae)", th: "ถนนคนเดิน (เสาร์: วัวลาย · อาทิตย์: ท่าแพ)" } }
    ]
  },
  {
    title: { en: "Day 2 · The mountain", th: "วันที่ 2 · ขึ้นดอย" },
    stops: [
      { t: "07:00", id: "monks-trail", text: { en: "Hike the Monk's Trail", th: "เดินเส้นทางพระ" } },
      { t: "08:00", id: "monks-trail", text: { en: "Wat Pha Lat in the morning light", th: "วัดผาลาดในแสงเช้า" } },
      { t: "10:30", id: "doi-suthep",  text: { en: "Doi Suthep by songthaew or trail", th: "ดอยสุเทพโดยรถสองแถวหรือเดินต่อ" } },
      { t: "17:00", id: "suan-dok",    text: { en: "Sunset at Wat Suan Dok (Monk Chat Mon/Wed/Fri)", th: "ชมพระอาทิตย์ตกที่วัดสวนดอก (Monk Chat จ./พ./ศ.)" } },
      { t: "19:30", id: "night-bazaar", text: { en: "Dinner at the Night Bazaar", th: "มื้อเย็นที่ไนท์บาซาร์" } }
    ]
  },
  {
    title: { en: "Day 3 · Out of town", th: "วันที่ 3 · นอกเมือง" },
    stops: [
      { t: "07:00", id: "inthanon",      text: { en: "Doi Inthanon (full day)", th: "ดอยอินทนนท์ (ทั้งวัน)" } },
      { t: "or",    id: "elephant-park", text: { en: "Elephant Nature Park (book ahead)", th: "ปางช้างอีเลเฟ่นท์ เนเจอร์ พาร์ค (จองล่วงหน้า)" } },
      { t: "or",    id: "bua-tong",      text: { en: "Bua Tong Sticky Waterfalls (half day)", th: "น้ำตกบัวตอง (ครึ่งวัน)" } }
    ]
  }
];
