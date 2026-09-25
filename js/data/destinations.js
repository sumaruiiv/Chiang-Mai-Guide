/* Destinations — facts checked September 2026.
   Every text field is bilingual: { en, th }.
   coords are [latitude, longitude]; `photos` are ids from photos.js.
   Prices are in Thai Baht (THB) and change often — the site tells visitors to confirm on arrival. */

window.CM_CATEGORIES = {
  culture:  { en: "Culture & Heritage",   th: "วัฒนธรรมและมรดก" },
  nature:   { en: "Nature & Hiking",      th: "ธรรมชาติและเดินป่า" },
  markets:  { en: "Markets & Food",       th: "ตลาดและอาหาร" },
  wellness: { en: "Mindfulness",          th: "สมาธิและจิตใจ" },
  wildlife: { en: "Wildlife",             th: "สัตว์ป่า" }
};

window.CM_DESTINATIONS = [
  {
    id: "doi-suthep",
    cat: "culture",
    family: true,
    name: { en: "Wat Phra That Doi Suthep", th: "วัดพระธาตุดอยสุเทพราชวรวิหาร" },
    area: { en: "Doi Suthep–Pui, ~15 km north-west of the Old City", th: "ดอยสุเทพ–ปุย ห่างคูเมืองประมาณ 15 กม." },
    coords: [18.8050, 98.9216],
    maps: "Wat Phra That Doi Suthep",
    rating: 4.8,
    photos: ["doi-suthep-1", "doi-suthep-2", "doi-suthep-3"],
    facts: {
      hours:    { en: "Daily, about 6:00–18:00 (tram 6:00–18:00)", th: "ทุกวัน ประมาณ 06:00–18:00 (รถรางไฟฟ้า 06:00–18:00)" },
      price:    { en: "30–50 THB foreigners (price posted at the gate) · Tram 50 THB return, or climb 306 steps free", th: "ชาวต่างชาติ 30–50 บาท (ดูป้ายหน้าทางเข้า) · รถรางไป-กลับ 50 บาท หรือเดินบันได 306 ขั้นฟรี" },
      time:     { en: "1.5–2 hours", th: "1.5–2 ชั่วโมง" },
      distance: { en: "30–40 min by car from the Old City", th: "ขับรถจากคูเมือง 30–40 นาที" }
    },
    what: {
      en: "Chiang Mai's most sacred temple sits just over 1,000 m up the mountain that watches over the city. Founded in 1383, it is famous for its **golden chedi**, said to hold a relic of the Buddha. Walk slowly around the chedi clockwise with the pilgrims, ring the rows of bells, then step out onto the terrace for a **view across the whole city**.",
      th: "วัดที่ศักดิ์สิทธิ์ที่สุดของเชียงใหม่ ตั้งอยู่บนดอยสูงกว่า 1,000 เมตรที่มองเห็นทั้งเมือง สร้างเมื่อปี พ.ศ. 1926 มีชื่อเสียงจาก**พระบรมธาตุเจดีย์สีทอง**ที่เชื่อว่าบรรจุพระบรมสารีริกธาตุ เดินประทักษิณรอบเจดีย์ไปพร้อมผู้แสวงบุญ ตีระฆัง แล้วออกไปที่ระเบียงเพื่อ**ชมวิวเมืองเชียงใหม่ทั้งเมือง**"
    },
    who: {
      en: "Everyone. The **306-step Naga staircase** is steep; the tram is an easy option for families, older visitors and anyone with limited mobility.",
      th: "เหมาะกับทุกคน **บันไดนาค 306 ขั้น**ค่อนข้างชัน ผู้สูงอายุ ครอบครัวที่มีเด็ก หรือผู้ที่เดินลำบากใช้รถรางได้สะดวก"
    },
    prepare: {
      en: "Cover **shoulders and knees** (wraps can be borrowed or rented at the top), shoes off inside halls, and bring a light jacket — it is noticeably cooler up here.",
      th: "แต่งกายสุภาพ **ปิดไหล่และเข่า** (มีผ้าคลุมให้ยืมหรือเช่า) ถอดรองเท้าก่อนเข้าวิหาร และพกเสื้อคลุมบาง ๆ เพราะบนดอยอากาศเย็นกว่าในเมือง"
    },
    join: {
      en: "**Walk-in**, no booking needed. Buy the entry ticket at the top of the stairs.",
      th: "**เดินเข้าได้เลย** ไม่ต้องจอง ซื้อบัตรเข้าชมที่ด้านบนบันได"
    },
    getting: {
      en: "Shared **red songthaew** from the Chiang Mai University gate on Huay Kaew Road (leaves when full, agree the price first — usually about 100–150 THB return per person). Grab/Bolt cars also go up. Fit visitors can **hike the Monk's Trail** instead.",
      th: "**รถสองแถวแดง**จากหน้ามหาวิทยาลัยเชียงใหม่ ถนนห้วยแก้ว (ออกเมื่อผู้โดยสารเต็ม ตกลงราคาก่อนขึ้น ปกติราว 100–150 บาทไป-กลับต่อคน) หรือเรียก Grab/Bolt ผู้ที่แข็งแรงสามารถ**เดินขึ้นทางเส้นทางพระ (Monk's Trail)** ได้"
    },
    review: {
      en: "It is busy, and it is still worth it. Arrive **before 8 am** and you share the chedi with monks and locals instead of tour groups, and the morning light on the gold is extraordinary. On hazy days the view disappears, so check the air quality first.",
      th: "คนเยอะแต่ก็คุ้มค่า ถ้ามา**ก่อน 8 โมงเช้า** จะได้อยู่กับพระและชาวบ้านแทนกรุ๊ปทัวร์ แสงเช้าที่กระทบองค์เจดีย์ทองสวยมาก วันที่มีหมอกควันจะมองไม่เห็นวิว ควรเช็กค่าฝุ่นก่อนขึ้น"
    },
    tips: [
      { en: "Clear days just after rain give the best city views.", th: "วันที่ฟ้าใสหลังฝนตกจะเห็นวิวเมืองชัดที่สุด" },
      { en: "Since 1 Oct 2025 the national park charges a separate fee on nature trails — not for visiting the temple by road.", th: "ตั้งแต่ 1 ต.ค. 2568 อุทยานฯ เก็บค่าธรรมเนียมแยกสำหรับเส้นทางธรรมชาติ แต่ไม่เก็บหากขึ้นวัดทางถนน" }
    ]
  },

  {
    id: "monks-trail",
    cat: "nature",
    name: { en: "Monk's Trail & Wat Pha Lat", th: "เส้นทางเดินพระ และวัดผาลาด" },
    area: { en: "Trailhead at the end of Suthep Road, behind Chiang Mai University", th: "จุดเริ่มเดินสุดถนนสุเทพ ด้านหลังมหาวิทยาลัยเชียงใหม่" },
    coords: [18.8010, 98.9337],
    maps: "Wat Pha Lat Chiang Mai",
    rating: 4.7,
    photos: ["pha-lat-1", "pha-lat-2"],
    facts: {
      hours:    { en: "Daylight only — start 7:00–8:00, be off the trail before dark", th: "เดินได้เฉพาะกลางวัน เริ่ม 07:00–08:00 และลงก่อนมืด" },
      price:    { en: "Temple free (donations) · National park trail fee 100 THB foreign adults, 50 THB children (since Oct 2025)", th: "วัดไม่เก็บค่าเข้า (ทำบุญได้) · ค่าธรรมเนียมอุทยานฯ ชาวต่างชาติ ผู้ใหญ่ 100 บาท เด็ก 50 บาท (ตั้งแต่ ต.ค. 2568)" },
      time:     { en: "45–60 min up to Wat Pha Lat; +1–1.5 h more to Doi Suthep", th: "ขึ้นถึงวัดผาลาด 45–60 นาที ต่อไปดอยสุเทพอีก 1–1.5 ชม." },
      distance: { en: "10–15 min by car to the trailhead", th: "ขับรถไปจุดเริ่มเดิน 10–15 นาที" }
    },
    what: {
      en: "A **forest footpath** once used by monks to reach Doi Suthep. Follow the **orange robes tied to trees** uphill through dipterocarp forest to **Wat Pha Lat**, a quiet hermitage where a stream runs over the rocks between moss-covered naga, stone chedis and a viewpoint over the city.",
      th: "**ทางเดินในป่า**ที่พระสงฆ์ใช้เดินขึ้นดอยสุเทพ เดินตาม**ผ้าเหลืองที่ผูกไว้กับต้นไม้**ผ่านป่าเต็งรังขึ้นไปยัง**วัดผาลาด** วัดป่าที่เงียบสงบ มีลำธารไหลผ่านลานหิน รูปปั้นนาคที่มีมอสเกาะ เจดีย์หิน และจุดชมวิวเมือง"
    },
    who: {
      en: "**Beginner hikers with moderate fitness.** The path is steep in places with roots and loose soil, and slippery in the rainy season (June–October).",
      th: "**ผู้เริ่มต้นเดินป่าที่มีร่างกายแข็งแรงพอสมควร** ทางชันบางช่วง มีรากไม้และดินร่วน และลื่นในหน้าฝน (มิ.ย.–ต.ค.)"
    },
    prepare: {
      en: "Shoes with grip, **at least 1 litre of water**, insect repellent, and a top that **covers your shoulders** for entering the temple.",
      th: "รองเท้าที่ยึดเกาะดี **น้ำอย่างน้อย 1 ลิตร** ยากันยุง และเสื้อที่**ปิดไหล่**สำหรับเข้าวัด"
    },
    join: {
      en: "**Self-guided, walk-in.** Pay the national park fee at the trail checkpoint. Guided hikes are sold by many local tour agencies if you prefer company.",
      th: "**เดินเองได้ ไม่ต้องจอง** ชำระค่าธรรมเนียมอุทยานที่ด่านตรวจทางเดิน หากต้องการไกด์ มีบริษัททัวร์ท้องถิ่นหลายแห่งให้บริการ"
    },
    getting: {
      en: "Take Grab/Bolt to **\"Monk's Trail\" trailhead** at the top of Suthep Road. Walk back the same way, or continue to Doi Suthep and ride a red songthaew down.",
      th: "เรียก Grab/Bolt ไปที่ **จุดเริ่มเส้นทาง Monk's Trail** สุดถนนสุเทพ ขากลับเดินทางเดิม หรือเดินต่อไปดอยสุเทพแล้วนั่งรถสองแถวแดงลงมา"
    },
    review: {
      en: "Our favourite half-day in the city. Wat Pha Lat feels a world away from the traffic just below, and **early morning** is cool, shady and almost silent. Treat it as a monks' path: keep voices low and dress modestly at the temple.",
      th: "กิจกรรมครึ่งวันที่เราชอบที่สุดในเมือง วัดผาลาดให้ความรู้สึกห่างไกลความวุ่นวายด้านล่าง **ช่วงเช้าตรู่**อากาศเย็น ร่มรื่น และเงียบมาก ขอให้เคารพว่าเป็นทางเดินของพระ พูดเบา ๆ และแต่งกายสุภาพ"
    },
    tips: [
      { en: "The stretch above Wat Pha Lat to Doi Suthep is much steeper — only continue if you have time and water.", th: "ช่วงจากวัดผาลาดขึ้นดอยสุเทพชันกว่ามาก ควรไปต่อเฉพาะเมื่อมีเวลาและน้ำเพียงพอ" },
      { en: "Download an offline map; signal fades in the forest.", th: "ดาวน์โหลดแผนที่ออฟไลน์ไว้ เพราะสัญญาณในป่าไม่ค่อยดี" }
    ]
  },

  {
    id: "chedi-luang",
    cat: "culture",
    family: true,
    name: { en: "Wat Chedi Luang & Monk Chat", th: "วัดเจดีย์หลวงวรวิหาร และ Monk Chat" },
    area: { en: "Phra Pokklao Road, centre of the Old City", th: "ถนนพระปกเกล้า ใจกลางคูเมือง" },
    coords: [18.7869, 98.9864],
    maps: "Wat Chedi Luang",
    rating: 4.7,
    photos: ["chedi-luang-1", "chedi-luang-2", "chedi-luang-3"],
    facts: {
      hours:    { en: "Daily, about 6:00–18:00 · Monk Chat tables in the daytime", th: "ทุกวัน ประมาณ 06:00–18:00 · Monk Chat ช่วงกลางวัน" },
      price:    { en: "50 THB foreigners · Monk Chat free (donations welcome)", th: "ชาวต่างชาติ 50 บาท · Monk Chat ไม่เสียค่าใช้จ่าย (ทำบุญได้)" },
      time:     { en: "1–2 hours", th: "1–2 ชั่วโมง" },
      distance: { en: "Walkable anywhere in the Old City", th: "เดินได้จากทุกจุดในคูเมือง" }
    },
    what: {
      en: "The **great ruined chedi**, begun in the late 14th century, once stood around 80 m tall until an earthquake in the 16th century brought its top down. It housed the **Emerald Buddha** in the 15th century. At the **Monk Chat** tables, novice monks talk with visitors in English about Buddhism, daily temple life, and your questions about Thailand.",
      th: "**พระเจดีย์หลวง**ที่เริ่มสร้างปลายศตวรรษที่ 14 เคยสูงราว 80 เมตร ก่อนยอดพังลงจากแผ่นดินไหวในศตวรรษที่ 16 และเคยประดิษฐาน**พระแก้วมรกต**ในศตวรรษที่ 15 ที่โต๊ะ **Monk Chat** สามเณรจะพูดคุยภาษาอังกฤษกับผู้มาเยือนเรื่องพุทธศาสนา ชีวิตในวัด และตอบคำถามเกี่ยวกับประเทศไทย"
    },
    who: {
      en: "Everyone, especially **first-timers who are curious about Buddhism**. The Monk Chat is relaxed — no prior knowledge needed.",
      th: "ทุกคน โดยเฉพาะ**ผู้ที่สนใจพุทธศาสนาเป็นครั้งแรก** บรรยากาศ Monk Chat เป็นกันเอง ไม่ต้องมีความรู้มาก่อน"
    },
    prepare: {
      en: "Modest clothing. **Women should not touch a monk** or hand things to him directly — place the item down instead. Ask before taking portraits.",
      th: "แต่งกายสุภาพ **ผู้หญิงไม่ควรสัมผัสพระ** หรือยื่นของให้โดยตรง ให้วางของลงแทน และขออนุญาตก่อนถ่ายรูปพระ"
    },
    join: {
      en: "**Walk-in.** Look for the Monk Chat sign and tables on the north side of the grounds; times depend on the monks' schedule, so check the board.",
      th: "**เดินเข้าได้เลย** มองหาป้ายและโต๊ะ Monk Chat ด้านทิศเหนือของวัด เวลาขึ้นกับกิจของพระ ควรดูป้ายประกาศ"
    },
    getting: {
      en: "About 10 minutes' walk from Tha Phae Gate along Ratchadamnoen Road, then left onto Phra Pokklao Road.",
      th: "เดินจากประตูท่าแพตามถนนราชดำเนินประมาณ 10 นาที แล้วเลี้ยวซ้ายเข้าถนนพระปกเกล้า"
    },
    review: {
      en: "The ruin is powerful by day and even better **after dark**, when the brickwork is lit gold. The Monk Chat is one of the most genuine cultural exchanges in the city — go with real questions and you will get thoughtful answers.",
      th: "ซากเจดีย์ดูทรงพลังในตอนกลางวัน และสวยยิ่งขึ้น**ยามค่ำ**เมื่อเปิดไฟสีทอง Monk Chat เป็นการแลกเปลี่ยนวัฒนธรรมที่จริงใจที่สุดแห่งหนึ่งในเมือง ถามด้วยความสนใจจริงแล้วจะได้คำตอบที่ลึกซึ้ง"
    },
    tips: [
      { en: "The City Pillar shrine (Sao Inthakhin) is inside the grounds; by tradition women do not enter it.", th: "ภายในวัดมีวิหารเสาอินทขิล (เสาหลักเมือง) ตามประเพณีผู้หญิงไม่เข้าภายใน" }
    ]
  },

  {
    id: "phra-singh",
    cat: "culture",
    family: true,
    name: { en: "Wat Phra Singh", th: "วัดพระสิงห์วรมหาวิหาร" },
    area: { en: "West end of Ratchadamnoen Road, Old City", th: "สุดถนนราชดำเนินฝั่งตะวันตก ในคูเมือง" },
    coords: [18.7888, 98.9812],
    maps: "Wat Phra Singh Woramahawihan",
    rating: 4.6,
    photos: ["phra-singh-1", "phra-singh-2"],
    facts: {
      hours:    { en: "Daily, about 6:00–18:00", th: "ทุกวัน ประมาณ 06:00–18:00" },
      price:    { en: "About 40 THB foreigners (for the main viharns)", th: "ชาวต่างชาติประมาณ 40 บาท (สำหรับวิหารหลัก)" },
      time:     { en: "45–90 minutes", th: "45–90 นาที" },
      distance: { en: "20 min walk from Tha Phae Gate", th: "เดินจากประตูท่าแพ 20 นาที" }
    },
    what: {
      en: "Founded in the 14th century, this is the finest showcase of **Lanna temple architecture** in the city. Behind the large main hall, the small **Viharn Lai Kham** holds the revered **Phra Buddha Sihing** image and some of the best-preserved Lanna **murals** of northern life.",
      th: "วัดที่สร้างในศตวรรษที่ 14 และเป็นตัวอย่างที่งดงามที่สุดของ**สถาปัตยกรรมล้านนา**ในเมือง ด้านหลังวิหารหลวงคือ **วิหารลายคำ** ที่ประดิษฐาน**พระพุทธสิหิงค์** และมี**จิตรกรรมฝาผนัง**ล้านนาที่สมบูรณ์ที่สุดแห่งหนึ่ง"
    },
    who: {
      en: "Architecture and art lovers, photographers, and anyone with an hour in the Old City.",
      th: "ผู้ที่ชอบสถาปัตยกรรมและศิลปะ ช่างภาพ และทุกคนที่มีเวลาหนึ่งชั่วโมงในคูเมือง"
    },
    prepare: {
      en: "**Cash** for the ticket, modest clothes, and shoes you can slip off quickly.",
      th: "พก**เงินสด**สำหรับค่าเข้าชม แต่งกายสุภาพ และใส่รองเท้าที่ถอดง่าย"
    },
    join: {
      en: "**Walk-in**, no booking.",
      th: "**เดินเข้าได้เลย** ไม่ต้องจอง"
    },
    getting: {
      en: "Walk the length of Ratchadamnoen Road from Tha Phae Gate — the temple faces you at the end.",
      th: "เดินตามถนนราชดำเนินจากประตูท่าแพจนสุดทาง วัดจะอยู่ตรงหน้า"
    },
    review: {
      en: "Skip the rush into the big hall and **go straight round the back to Viharn Lai Kham**. The murals reward slow looking. At **Songkran (13–15 April)** the Phra Sihing image is paraded through the city — an unforgettable sight.",
      th: "อย่าเพิ่งรีบเข้าวิหารใหญ่ ให้**อ้อมไปวิหารลายคำด้านหลังก่อน** จิตรกรรมฝาผนังคุ้มค่ากับการดูช้า ๆ ช่วง**สงกรานต์ (13–15 เมษายน)** จะมีการแห่พระพุทธสิหิงค์รอบเมือง เป็นภาพที่น่าประทับใจมาก"
    },
    tips: [
      { en: "Early morning on weekdays is the quietest time for photos.", th: "เช้าวันธรรมดาคนน้อยที่สุด เหมาะกับการถ่ายรูป" }
    ]
  },

  {
    id: "umong",
    cat: "wellness",
    family: true,
    name: { en: "Wat Umong — the Tunnel Temple", th: "วัดอุโมงค์ (สวนพุทธธรรม)" },
    area: { en: "Forest at the foot of Doi Suthep, near Chiang Mai University", th: "ป่าเชิงดอยสุเทพ ใกล้มหาวิทยาลัยเชียงใหม่" },
    coords: [18.7832, 98.9513],
    maps: "Wat Umong Suan Phutthatham",
    rating: 4.6,
    photos: ["umong-1", "umong-2"],
    facts: {
      hours:    { en: "Daily, about 6:00–17:00", th: "ทุกวัน ประมาณ 06:00–17:00" },
      price:    { en: "Free entry — donations welcome", th: "ไม่เก็บค่าเข้า ทำบุญได้ตามศรัทธา" },
      time:     { en: "1–2 hours", th: "1–2 ชั่วโมง" },
      distance: { en: "15 min by car from the Old City", th: "ขับรถจากคูเมือง 15 นาที" }
    },
    what: {
      en: "A **forest temple** with **brick tunnels from the late 14th century**, built as meditation spaces for monks. Walk the cool, lamp-lit passages to small Buddha shrines, then wander the shaded grounds with the **\"talking trees\"** — wise sayings nailed to the trunks — and a large pond.",
      th: "**วัดป่า**ที่มี**อุโมงค์อิฐสมัยปลายศตวรรษที่ 14** สร้างไว้เป็นที่ปฏิบัติธรรมของพระ เดินในอุโมงค์เย็น ๆ ที่มีตะเกียงส่องไปยังพระพุทธรูป แล้วเดินเล่นในบริเวณวัดที่ร่มรื่น มี**\"ต้นไม้พูดได้\"** ซึ่งติดป้ายคำสอนไว้ตามลำต้น และสระน้ำขนาดใหญ่"
    },
    who: {
      en: "Anyone who wants **calm and shade**; great for families and for **meditation beginners**.",
      th: "ผู้ที่ต้องการ**ความสงบและร่มเงา** เหมาะกับครอบครัวและ**ผู้เริ่มฝึกสมาธิ**"
    },
    prepare: {
      en: "Modest clothes, mosquito repellent, and quiet voices inside the tunnels.",
      th: "แต่งกายสุภาพ ทายากันยุง และพูดเบา ๆ ภายในอุโมงค์"
    },
    join: {
      en: "**Walk-in.** Ask at the temple office about meditation instruction; some sessions are offered in English.",
      th: "**เดินเข้าได้เลย** สอบถามสำนักงานวัดเรื่องการสอนสมาธิ บางช่วงมีการสอนเป็นภาษาอังกฤษ"
    },
    getting: {
      en: "Grab/Bolt to the temple, or pair it with a visit to Chiang Mai University and Nimman.",
      th: "เรียก Grab/Bolt ไปที่วัด หรือไปต่อจากมหาวิทยาลัยเชียงใหม่และย่านนิมมาน"
    },
    review: {
      en: "The most peaceful temple within reach of the city. Come in the **late afternoon**, sit by the pond for ten minutes, and the traffic of Chiang Mai simply falls away.",
      th: "วัดที่สงบที่สุดใกล้ตัวเมือง มาช่วง**บ่ายแก่ ๆ** นั่งริมสระสักสิบนาที แล้วความวุ่นวายของเมืองจะหายไป"
    },
    tips: [
      { en: "The tunnels are dim — let your eyes adjust before walking deeper.", th: "ในอุโมงค์ค่อนข้างมืด ให้สายตาปรับสักครู่ก่อนเดินลึกเข้าไป" }
    ]
  },

  {
    id: "suan-dok",
    cat: "wellness",
    name: { en: "Wat Suan Dok — Monk Chat & Meditation", th: "วัดสวนดอก — Monk Chat และปฏิบัติธรรม" },
    area: { en: "Suthep Road, between the Old City and Nimman", th: "ถนนสุเทพ ระหว่างคูเมืองกับย่านนิมมาน" },
    coords: [18.7882, 98.9677],
    maps: "Wat Suan Dok Chiang Mai",
    rating: 4.5,
    photos: ["suan-dok-1"],
    facts: {
      hours:    { en: "Grounds daily · Monk Chat Mon, Wed, Fri 17:00–19:00", th: "เปิดทุกวัน · Monk Chat จันทร์ พุธ ศุกร์ 17:00–19:00" },
      price:    { en: "Monk Chat free · Retreat by donation", th: "Monk Chat ไม่เสียค่าใช้จ่าย · คอร์สปฏิบัติธรรมตามศรัทธา" },
      time:     { en: "1–2 hours (retreat: 2 days)", th: "1–2 ชั่วโมง (คอร์สปฏิบัติธรรม 2 วัน)" },
      distance: { en: "10 min by car from the Old City", th: "ขับรถจากคูเมือง 10 นาที" }
    },
    what: {
      en: "A 14th-century royal temple with a field of **white chedis** holding the ashes of Chiang Mai's royal family. The Buddhist university on site runs a regular **Monk Chat** in English and a **two-day introductory meditation retreat** for foreigners.",
      th: "วัดหลวงสมัยศตวรรษที่ 14 มี**กู่สีขาว**จำนวนมากที่บรรจุอัฐิเจ้านายฝ่ายเหนือ มหาวิทยาลัยสงฆ์ภายในวัดจัด **Monk Chat** ภาษาอังกฤษเป็นประจำ และ**คอร์สปฏิบัติธรรมเบื้องต้น 2 วัน**สำหรับชาวต่างชาติ"
    },
    who: {
      en: "**Foreign residents and long-stay visitors** who want to learn meditation properly; curious first-timers for the Monk Chat.",
      th: "**ชาวต่างชาติที่พำนักอยู่และผู้ที่พักระยะยาว** ที่อยากเรียนสมาธิอย่างจริงจัง และผู้สนใจทั่วไปสำหรับ Monk Chat"
    },
    prepare: {
      en: "For the retreat: **white or light, modest clothing**, and a willingness to follow temple rules overnight.",
      th: "สำหรับคอร์สปฏิบัติธรรม: **เสื้อผ้าสีขาวหรือสีอ่อนที่สุภาพ** และพร้อมปฏิบัติตามระเบียบของวัดตลอดการค้างคืน"
    },
    join: {
      en: "Monk Chat: **walk-in**, no appointment. Retreat: **register in advance** with the Monk Chat office; the weekly schedule can change around religious holidays.",
      th: "Monk Chat: **เดินเข้าได้เลย** ไม่ต้องนัดหมาย คอร์สปฏิบัติธรรม: **ลงทะเบียนล่วงหน้า**ที่สำนักงาน Monk Chat ตารางอาจเปลี่ยนในช่วงวันสำคัญทางศาสนา"
    },
    getting: {
      en: "Red songthaew or Grab along Suthep Road, about 1 km west of Suan Dok Gate.",
      th: "นั่งรถสองแถวแดงหรือ Grab ไปตามถนนสุเทพ ห่างจากประตูสวนดอกประมาณ 1 กม."
    },
    review: {
      en: "Come for the Monk Chat at five and stay for **sunset on the white chedis**, with Doi Suthep behind them. It is the most welcoming place in Chiang Mai to start a meditation practice.",
      th: "มาร่วม Monk Chat ตอนห้าโมงเย็น แล้วอยู่ต่อชม**พระอาทิตย์ตกกระทบกู่สีขาว**โดยมีดอยสุเทพเป็นฉากหลัง เป็นสถานที่ที่เปิดรับที่สุดในเชียงใหม่สำหรับการเริ่มฝึกสมาธิ"
    },
    tips: [
      { en: "Monks may be busy during ceremonies — sessions are informal and times can shift.", th: "พระอาจติดกิจในช่วงพิธีกรรม เวลาอาจเปลี่ยนได้" }
    ]
  },

  {
    id: "sri-suphan",
    cat: "culture",
    name: { en: "Wat Sri Suphan — the Silver Temple", th: "วัดศรีสุพรรณ (อุโบสถเงิน)" },
    area: { en: "Wua Lai Road silversmith district, south of the Old City", th: "ย่านช่างเงินถนนวัวลาย ทางใต้ของคูเมือง" },
    coords: [18.7791, 98.9836],
    maps: "Wat Sri Suphan Chiang Mai",
    rating: 4.6,
    photos: ["sri-suphan-1"],
    facts: {
      hours:    { en: "Daily about 6:00–21:00; later on Saturdays", th: "ทุกวัน ประมาณ 06:00–21:00 วันเสาร์ปิดดึกกว่า" },
      price:    { en: "50 THB foreigners", th: "ชาวต่างชาติ 50 บาท" },
      time:     { en: "45–60 minutes", th: "45–60 นาที" },
      distance: { en: "5 min walk from Chiang Mai Gate", th: "เดินจากประตูเชียงใหม่ 5 นาที" }
    },
    what: {
      en: "An ordination hall covered inside and out in **hand-embossed silver and aluminium panels**, made by the silversmiths of the Wua Lai community. It is a living craft project — you can often see artisans at work, and the temple offers **hands-on silver-embossing sessions**.",
      th: "อุโบสถที่ประดับด้วย**แผ่นเงินและอะลูมิเนียมดุนลายด้วยมือ**ทั้งภายในและภายนอก โดยฝีมือช่างเงินชุมชนวัวลาย เป็นงานหัตถศิลป์ที่ยังมีชีวิต มักเห็นช่างกำลังทำงาน และวัดมี**กิจกรรมทดลองดุนลายเงิน**ให้ผู้มาเยือน"
    },
    who: {
      en: "Craft and design lovers, photographers — and everyone visiting the **Saturday Walking Street** outside.",
      th: "ผู้ที่ชอบงานคราฟต์และการออกแบบ ช่างภาพ และทุกคนที่มา**ถนนคนเดินวันเสาร์**หน้าวัด"
    },
    prepare: {
      en: "By Lanna tradition **women may not enter the silver ubosot** itself, but can view and photograph it from outside and visit the rest of the temple.",
      th: "ตามคติล้านนา **ผู้หญิงไม่สามารถเข้าภายในอุโบสถเงินได้** แต่ชมและถ่ายรูปจากภายนอก รวมถึงเข้าชมส่วนอื่นของวัดได้"
    },
    join: {
      en: "**Walk-in.** Ask at the temple about the silver-embossing workshop (fee varies).",
      th: "**เดินเข้าได้เลย** สอบถามกิจกรรมดุนลายเงินที่วัด (ค่าใช้จ่ายแตกต่างกัน)"
    },
    getting: {
      en: "Walk out of Chiang Mai Gate on the south side of the moat and into Wua Lai Road Soi 2.",
      th: "เดินออกจากประตูเชียงใหม่ทางใต้ของคูเมือง แล้วเข้าซอยวัวลาย 2"
    },
    review: {
      en: "Visit on a **Saturday evening**: the hall is lit up, the walking street is right outside, and the whole neighbourhood of silversmiths comes alive.",
      th: "แนะนำให้มา**เย็นวันเสาร์** อุโบสถเปิดไฟสวยงาม ถนนคนเดินอยู่หน้าวัด และทั้งชุมชนช่างเงินคึกคักมาก"
    },
    tips: [
      { en: "Small silver souvenirs sold nearby support the local craft community.", th: "ของที่ระลึกเครื่องเงินชิ้นเล็กแถวนั้นช่วยสนับสนุนชุมชนช่างฝีมือ" }
    ]
  },

  {
    id: "sunday-street",
    cat: "markets",
    family: true,
    name: { en: "Sunday Walking Street", th: "ถนนคนเดินวันอาทิตย์ (ท่าแพ–ราชดำเนิน)" },
    area: { en: "Tha Phae Gate along Ratchadamnoen Road, Old City", th: "จากประตูท่าแพไปตามถนนราชดำเนิน ในคูเมือง" },
    coords: [18.7878, 98.9933],
    maps: "Tha Phae Gate Chiang Mai",
    rating: 4.7,
    photos: ["sunday-1", "sunday-2", "sunday-3"],
    facts: {
      hours:    { en: "Sundays only, about 16:00–23:00 (busiest 18:00–21:00)", th: "เฉพาะวันอาทิตย์ ประมาณ 16:00–23:00 (คนเยอะที่สุด 18:00–21:00)" },
      price:    { en: "Free to enter · Street food from about 20–80 THB", th: "เข้าฟรี · อาหารริมทางประมาณ 20–80 บาท" },
      time:     { en: "2–3 hours", th: "2–3 ชั่วโมง" },
      distance: { en: "Starts at Tha Phae Gate", th: "เริ่มที่ประตูท่าแพ" }
    },
    what: {
      en: "Around **1 km of stalls** fills the Old City's main street every Sunday: Lanna textiles, hill-tribe crafts, wood carving, paper lanterns and **street food in the temple courtyards** along the way, with buskers and foot-massage chairs lined up on the pavement.",
      th: "**แผงร้านค้ายาวราว 1 กม.** เต็มถนนหลักของคูเมืองทุกวันอาทิตย์ มีผ้าล้านนา หัตถกรรมชาวเขา งานแกะสลักไม้ โคมกระดาษ และ**อาหารริมทางในลานวัด**ตลอดเส้นทาง พร้อมนักดนตรีเปิดหมวกและเก้าอี้นวดเท้าเรียงรายบนทางเท้า"
    },
    who: {
      en: "Everyone — families, food lovers, souvenir hunters. Strollers are hard work in the crowds.",
      th: "ทุกคน ทั้งครอบครัว คนรักอาหาร และนักล่าของที่ระลึก รถเข็นเด็กเข็นลำบากเพราะคนแน่น"
    },
    prepare: {
      en: "**Cash in small notes**, comfortable shoes, and a bag you can keep in front of you.",
      th: "**เงินสดแบงก์ย่อย** รองเท้าเดินสบาย และกระเป๋าที่สะพายไว้ด้านหน้าได้"
    },
    join: {
      en: "**Walk in** from Tha Phae Gate. Gentle bargaining is fine for crafts; food prices are fixed.",
      th: "**เดินเข้าได้เลย** จากประตูท่าแพ ต่อราคาสินค้าหัตถกรรมได้อย่างสุภาพ แต่อาหารราคาคงที่"
    },
    getting: {
      en: "Roads close to traffic in the evening — get dropped at Tha Phae Gate and walk in.",
      th: "ถนนปิดการจราจรช่วงเย็น ให้ลงรถที่ประตูท่าแพแล้วเดินเข้าไป"
    },
    review: {
      en: "The best market in the city for **real handmade goods**. Arrive around **17:00** to browse before the crowds peak, then eat your way through the temple food courts after dark.",
      th: "ตลาดที่ดีที่สุดในเมืองสำหรับ**สินค้าทำมือแท้** มาถึงราว **17:00** เพื่อเดินดูก่อนคนแน่น แล้วตระเวนชิมอาหารในลานวัดหลังฟ้ามืด"
    },
    tips: [
      { en: "At 18:00 the national anthem plays over the speakers — stop and stand still until it ends.", th: "เวลา 18:00 จะเปิดเพลงชาติ ควรหยุดยืนนิ่งจนจบเพลง" }
    ]
  },

  {
    id: "saturday-street",
    cat: "markets",
    family: true,
    name: { en: "Saturday Walking Street, Wua Lai", th: "ถนนคนเดินวัวลาย (วันเสาร์)" },
    area: { en: "Wua Lai Road, just south of Chiang Mai Gate", th: "ถนนวัวลาย ใกล้ประตูเชียงใหม่" },
    coords: [18.7801, 98.9860],
    maps: "Wualai Walking Street Chiang Mai",
    rating: 4.5,
    photos: ["saturday-1"],
    facts: {
      hours:    { en: "Saturdays only, about 17:00–23:00", th: "เฉพาะวันเสาร์ ประมาณ 17:00–23:00" },
      price:    { en: "Free to enter", th: "เข้าฟรี" },
      time:     { en: "1.5–2 hours", th: "1.5–2 ชั่วโมง" },
      distance: { en: "5 min walk from Chiang Mai Gate", th: "เดินจากประตูเชียงใหม่ 5 นาที" }
    },
    what: {
      en: "The **silversmith street** turns into a night market every Saturday. It is smaller and a little more local than the Sunday market, with **silverware, handmade clothes and Northern snacks**, and the Silver Temple glowing halfway along.",
      th: "**ถนนช่างเงิน**กลายเป็นตลาดกลางคืนทุกวันเสาร์ ขนาดเล็กกว่าและบรรยากาศท้องถิ่นกว่าตลาดวันอาทิตย์ มี**เครื่องเงิน เสื้อผ้าทำมือ และขนมพื้นเมือง** และวัดศรีสุพรรณที่เปิดไฟสวยงามอยู่กลางถนน"
    },
    who: {
      en: "Everyone, and a good choice if you only have a **Saturday** in town.",
      th: "ทุกคน และเป็นตัวเลือกที่ดีหากอยู่ในเมืองแค่**วันเสาร์**"
    },
    prepare: {
      en: "Cash in small notes and an appetite.",
      th: "เงินสดแบงก์ย่อยและท้องว่าง ๆ"
    },
    join: {
      en: "**Walk-in**, no booking.",
      th: "**เดินเข้าได้เลย** ไม่ต้องจอง"
    },
    getting: {
      en: "Get dropped at Chiang Mai Gate market and cross the moat road.",
      th: "ลงรถที่ตลาดประตูเชียงใหม่ แล้วข้ามถนนริมคูเมือง"
    },
    review: {
      en: "A calmer alternative to Sunday, and the combination with **Wat Sri Suphan lit at night** makes it one of the most atmospheric evenings in Chiang Mai.",
      th: "ทางเลือกที่ผ่อนคลายกว่าวันอาทิตย์ และเมื่อรวมกับ**วัดศรีสุพรรณยามค่ำ** ก็เป็นค่ำคืนที่มีบรรยากาศที่สุดคืนหนึ่งในเชียงใหม่"
    },
    tips: [
      { en: "Chiang Mai Gate market next door is great for cheap dinner any night.", th: "ตลาดประตูเชียงใหม่ข้าง ๆ เหมาะกับมื้อเย็นราคาย่อมเยาทุกคืน" }
    ]
  },

  {
    id: "warorot",
    cat: "markets",
    family: true,
    name: { en: "Warorot Market (Kad Luang)", th: "ตลาดวโรรส (กาดหลวง)" },
    area: { en: "Wichayanon Road, near the Ping River", th: "ถนนวิชยานนท์ ใกล้แม่น้ำปิง" },
    coords: [18.7903, 99.0001],
    maps: "Warorot Market Chiang Mai",
    rating: 4.4,
    photos: ["warorot-1", "warorot-2"],
    facts: {
      hours:    { en: "Daily, early morning to about 18:00 (stalls vary)", th: "ทุกวัน เช้าตรู่ถึงประมาณ 18:00 (แต่ละร้านต่างกัน)" },
      price:    { en: "Free to enter · Local prices", th: "เข้าฟรี · ราคาท้องถิ่น" },
      time:     { en: "1–2 hours", th: "1–2 ชั่วโมง" },
      distance: { en: "15 min walk east of Tha Phae Gate", th: "เดินจากประตูท่าแพไปทางตะวันออก 15 นาที" }
    },
    what: {
      en: "Chiang Mai's **\"big market\"**, where locals shop. Three floors of **Northern specialities** — sai ua sausage, nam prik noom chilli dip, khaep mu pork crackling, dried fruit and tea — plus fabric, household goods and the **Ton Lamyai flower market** next door.",
      th: "**\"กาดหลวง\"** ตลาดที่คนเชียงใหม่มาจับจ่ายจริง สามชั้นเต็มไปด้วย**ของดีภาคเหนือ** ทั้งไส้อั่ว น้ำพริกหนุ่ม แคบหมู ผลไม้อบแห้ง และชา รวมถึงผ้า ของใช้ในบ้าน และ**ตลาดดอกไม้ต้นลำไย**ที่อยู่ติดกัน"
    },
    who: {
      en: "Food lovers and **foreign residents** stocking up on everyday things at local prices.",
      th: "คนรักอาหาร และ**ชาวต่างชาติที่พำนักอยู่**ที่ต้องการซื้อของใช้ในราคาท้องถิ่น"
    },
    prepare: {
      en: "Cash, a reusable bag, and a few Thai words — **\"tao rai?\"** (how much?) goes a long way.",
      th: "เงินสด ถุงผ้า และภาษาไทยสักเล็กน้อย เช่น **\"เท่าไร?\"** ช่วยได้มาก"
    },
    join: {
      en: "**Walk-in.** Prices are mostly fixed on food; bargaining is fine for clothes and fabric.",
      th: "**เดินเข้าได้เลย** อาหารส่วนใหญ่ราคาคงที่ เสื้อผ้าและผ้าต่อราคาได้"
    },
    getting: {
      en: "Walk east along Tha Phae Road, or take any red songthaew heading to \"Kad Luang\".",
      th: "เดินไปทางตะวันออกตามถนนท่าแพ หรือนั่งรถสองแถวแดงที่ไป \"กาดหลวง\""
    },
    review: {
      en: "Loud, crowded and completely real. Go in the **morning** when everything is fresh, and bring home a bag of sai ua and nam prik noom — the taste of Lanna.",
      th: "เสียงดัง คนแน่น และเป็นของจริงทุกอย่าง มา**ช่วงเช้า**ที่ของยังสด แล้วซื้อไส้อั่วกับน้ำพริกหนุ่มกลับไป — รสชาติแห่งล้านนา"
    },
    tips: [
      { en: "The riverside flower stalls are at their most beautiful early in the morning and late at night.", th: "แผงดอกไม้ริมน้ำสวยที่สุดตอนเช้าตรู่และดึก ๆ" }
    ]
  },

  {
    id: "night-bazaar",
    cat: "markets",
    family: true,
    name: { en: "Chiang Mai Night Bazaar", th: "ไนท์บาซาร์เชียงใหม่" },
    area: { en: "Chang Klan Road, between the Old City and the river", th: "ถนนช้างคลาน ระหว่างคูเมืองกับแม่น้ำปิง" },
    coords: [18.7859, 99.0007],
    maps: "Chiang Mai Night Bazaar",
    rating: 4.1,
    photos: ["night-bazaar-1"],
    facts: {
      hours:    { en: "Every night, about 18:00–midnight", th: "ทุกคืน ประมาณ 18:00–เที่ยงคืน" },
      price:    { en: "Free to enter · Bargaining expected", th: "เข้าฟรี · ต่อราคาได้" },
      time:     { en: "1–2 hours", th: "1–2 ชั่วโมง" },
      distance: { en: "15 min walk from Tha Phae Gate", th: "เดินจากประตูท่าแพ 15 นาที" }
    },
    what: {
      en: "A long-running **nightly market** spread over several buildings and pavements: clothes, souvenirs, art prints and food courts with live music. It runs **every night of the week**, so it's the fallback when there is no walking street.",
      th: "**ตลาดกลางคืน**เก่าแก่ที่กระจายอยู่หลายอาคารและทางเท้า มีเสื้อผ้า ของที่ระลึก ภาพพิมพ์ศิลปะ และศูนย์อาหารพร้อมดนตรีสด เปิด**ทุกคืน** จึงเป็นทางเลือกเมื่อไม่มีถนนคนเดิน"
    },
    who: {
      en: "Visitors with a free weeknight, families and souvenir shoppers.",
      th: "ผู้มาเยือนที่ว่างวันธรรมดา ครอบครัว และผู้ที่ซื้อของฝาก"
    },
    prepare: {
      en: "Cash, patience, and a friendly smile when **bargaining**.",
      th: "เงินสด ความอดทน และรอยยิ้มเมื่อ**ต่อราคา**"
    },
    join: {
      en: "**Walk-in**, every night.",
      th: "**เดินเข้าได้เลย** ทุกคืน"
    },
    getting: {
      en: "Walk from Tha Phae Gate along Tha Phae Road, then turn right onto Chang Klan Road.",
      th: "เดินจากประตูท่าแพตามถนนท่าแพ แล้วเลี้ยวขวาเข้าถนนช้างคลาน"
    },
    review: {
      en: "More tourist-focused and less handmade than the walking streets — our honest rating reflects that. Still fun for an evening of **food-court dinners and live music**; compare prices before you buy.",
      th: "เน้นนักท่องเที่ยวและมีสินค้าทำมือน้อยกว่าถนนคนเดิน คะแนนของเราจึงสะท้อนตามนั้น แต่ก็ยังสนุกสำหรับ**มื้อเย็นในศูนย์อาหารและดนตรีสด** ควรเทียบราคาก่อนซื้อ"
    },
    tips: [
      { en: "Start bargaining at around two-thirds of the asking price, and keep it friendly.", th: "เริ่มต่อราคาราวสองในสามของราคาที่ตั้ง และต่ออย่างเป็นมิตร" }
    ]
  },

  {
    id: "inthanon",
    cat: "nature",
    family: true,
    name: { en: "Doi Inthanon National Park", th: "อุทยานแห่งชาติดอยอินทนนท์" },
    area: { en: "Chom Thong district, ~100 km south-west of the city", th: "อำเภอจอมทอง ห่างตัวเมืองประมาณ 100 กม." },
    coords: [18.5875, 98.4867],
    maps: "Doi Inthanon summit",
    rating: 4.8,
    photos: ["inthanon-1", "inthanon-2"],
    facts: {
      hours:    { en: "Daily; plan a full day and leave by 7:00", th: "เปิดทุกวัน ควรใช้เวลาทั้งวันและออกเดินทางก่อน 07:00" },
      price:    { en: "300 THB foreign adults, 150 THB children + 30 THB per car · Twin royal pagodas and Kew Mae Pan guide extra", th: "ชาวต่างชาติ ผู้ใหญ่ 300 บาท เด็ก 150 บาท + รถยนต์ 30 บาท · พระมหาธาตุฯ และไกด์กิ่วแม่ปานมีค่าใช้จ่ายเพิ่ม" },
      time:     { en: "Full day", th: "เต็มวัน" },
      distance: { en: "About 2 hours by car", th: "ขับรถประมาณ 2 ชั่วโมง" }
    },
    what: {
      en: "**Thailand's highest peak (2,565 m)**. Stand at the summit in cloud forest, visit the **twin royal pagodas** in their flower gardens, walk the **Kew Mae Pan nature trail** along an open ridge, and stop at **Wachirathan Falls** on the way up. Hmong and Karen villages sell coffee and produce along the road.",
      th: "**ยอดเขาที่สูงที่สุดในประเทศไทย (2,565 ม.)** ยืนบนยอดดอยท่ามกลางป่าเมฆ ชม**พระมหาธาตุนภเมทนีดลและนภพลภูมิสิริ**ในสวนดอกไม้ เดิน**เส้นทางศึกษาธรรมชาติกิ่วแม่ปาน**บนสันเขา และแวะ**น้ำตกวชิรธาร**ระหว่างทาง ชาวม้งและกะเหรี่ยงขายกาแฟและผลผลิตริมถนน"
    },
    who: {
      en: "Nature lovers and families. The Kew Mae Pan loop is **easy to moderate** (about 3 km) but at high altitude.",
      th: "คนรักธรรมชาติและครอบครัว เส้นทางกิ่วแม่ปาน**ง่ายถึงปานกลาง** (ประมาณ 3 กม.) แต่อยู่บนที่สูง"
    },
    prepare: {
      en: "**Warm layers** — the summit can be near freezing at dawn in December–January. Rain jacket, walking shoes, cash for fees.",
      th: "**เสื้อกันหนาวหลายชั้น** เพราะยอดดอยอาจเกือบถึงจุดเยือกแข็งตอนเช้ามืดในเดือนธันวาคม–มกราคม พกเสื้อกันฝน รองเท้าเดินป่า และเงินสดสำหรับค่าธรรมเนียม"
    },
    join: {
      en: "Drive yourself, **hire a car with driver**, or join a day tour. **Kew Mae Pan is guide-only (about 200 THB per group) and closed June–October** for forest recovery.",
      th: "ขับรถเอง **เช่ารถพร้อมคนขับ** หรือร่วมทัวร์รายวัน **เส้นทางกิ่วแม่ปานต้องมีไกด์ท้องถิ่น (ประมาณ 200 บาทต่อกลุ่ม) และปิดช่วงมิถุนายน–ตุลาคม**เพื่อฟื้นฟูป่า"
    },
    getting: {
      en: "Highway 108 south to Chom Thong, then Route 1009 up the mountain. There is **no convenient public transport** to the summit.",
      th: "ทางหลวง 108 ไปอำเภอจอมทอง แล้วต่อทางหลวง 1009 ขึ้นดอย **ไม่มีขนส่งสาธารณะที่สะดวก**ขึ้นถึงยอด"
    },
    review: {
      en: "The best day trip from Chiang Mai. Go in the **cool season (Nov–Feb)** for clear ridges and the Kew Mae Pan trail — and start early; clouds often roll in by midday.",
      th: "ทริปวันเดียวที่ดีที่สุดจากเชียงใหม่ ไปช่วง**หน้าหนาว (พ.ย.–ก.พ.)** เพื่อชมสันเขาที่ชัดเจนและเดินกิ่วแม่ปาน ควรออกแต่เช้า เพราะเมฆมักลงมาก่อนเที่ยง"
    },
    tips: [
      { en: "Mountain roads are steep and winding — only ride a scooter if you are experienced.", th: "ถนนบนดอยชันและคดเคี้ยว ขับมอเตอร์ไซค์เฉพาะผู้ที่มีประสบการณ์" }
    ]
  },

  {
    id: "bua-tong",
    cat: "nature",
    family: true,
    name: { en: "Bua Tong \"Sticky\" Waterfalls", th: "น้ำตกบัวตอง – น้ำพุเจ็ดสี" },
    area: { en: "Mae Taeng district, ~60 km north of the city", th: "อำเภอแม่แตง ห่างตัวเมืองประมาณ 60 กม." },
    coords: [19.0673, 99.0754],
    maps: "Bua Tong Waterfall Chet Si Fountain",
    rating: 4.7,
    photos: ["bua-tong-1"],
    facts: {
      hours:    { en: "Daily, 8:00–17:00", th: "ทุกวัน 08:00–17:00" },
      price:    { en: "Free entry (at time of checking)", th: "ไม่เก็บค่าเข้า (ณ วันที่ตรวจสอบ)" },
      time:     { en: "Half day including travel", th: "ครึ่งวันรวมการเดินทาง" },
      distance: { en: "About 1–1.5 hours by car", th: "ขับรถประมาณ 1–1.5 ชั่วโมง" }
    },
    what: {
      en: "Mineral deposits make the limestone of these falls **rough and grippy instead of slippery**, so you can **walk straight up the waterfall barefoot**. At the top, the turquoise **Chet Si Fountain** spring feeds the falls.",
      th: "แร่ธาตุทำให้หินปูนของน้ำตกนี้**หยาบและเกาะติดแทนที่จะลื่น** จึง**เดินปีนขึ้นน้ำตกด้วยเท้าเปล่าได้** ด้านบนคือ**น้ำพุเจ็ดสี**สีฟ้าอมเขียวที่เป็นต้นน้ำของน้ำตก"
    },
    who: {
      en: "Families with kids old enough to climb, and anyone who likes **easy adventure**. Ropes help on steeper sections.",
      th: "ครอบครัวที่มีเด็กโตพอจะปีนได้ และผู้ที่ชอบ**การผจญภัยแบบง่าย ๆ** มีเชือกช่วยในช่วงที่ชัน"
    },
    prepare: {
      en: "**Quick-dry clothes**, a towel, a dry bag for your phone, and a change of clothes. Climb barefoot.",
      th: "**เสื้อผ้าแห้งเร็ว** ผ้าเช็ดตัว ถุงกันน้ำใส่โทรศัพท์ และเสื้อผ้าเปลี่ยน ปีนด้วยเท้าเปล่า"
    },
    join: {
      en: "**Walk-in.** Go on a weekday morning to avoid weekend crowds.",
      th: "**เดินเข้าได้เลย** ไปเช้าวันธรรมดาเพื่อเลี่ยงคนเยอะช่วงสุดสัปดาห์"
    },
    getting: {
      en: "Route 1001 north towards Phrao. **Hire a driver or songthaew for the round trip** — return rides are hard to find.",
      th: "ทางหลวง 1001 มุ่งหน้าอำเภอพร้าว **ควรเหมารถหรือรถสองแถวไป-กลับ** เพราะหารถขากลับยาก"
    },
    review: {
      en: "Pure joy, and genuinely unusual. Climbing up through the falls feels like it shouldn't be possible. The water is at its fullest from **late rainy season into early cool season**.",
      th: "สนุกและแปลกใหม่จริง ๆ การเดินขึ้นผ่านสายน้ำตกให้ความรู้สึกเหมือนเป็นไปไม่ได้ น้ำมากที่สุดช่วง**ปลายฤดูฝนถึงต้นฤดูหนาว**"
    },
    tips: [
      { en: "Please don't use soap or sunscreen in the spring — it's a protected water source.", th: "ไม่ควรใช้สบู่หรือครีมกันแดดในน้ำพุ เพราะเป็นแหล่งน้ำที่ได้รับการอนุรักษ์" }
    ]
  },

  {
    id: "elephant-park",
    cat: "wildlife",
    family: true,
    name: { en: "Elephant Nature Park", th: "ปางช้างอีเลเฟ่นท์ เนเจอร์ พาร์ค" },
    area: { en: "Mae Taeng valley, ~60 km north of the city", th: "หุบเขาแม่แตง ห่างตัวเมืองประมาณ 60 กม." },
    coords: [19.2150, 98.8606],
    maps: "Elephant Nature Park Mae Taeng",
    rating: 4.8,
    photos: ["enp-1", "enp-2"],
    facts: {
      hours:    { en: "Day visit with hotel pick-up in the morning, back late afternoon", th: "ทริปรายวัน รับจากที่พักตอนเช้า กลับถึงช่วงบ่ายแก่" },
      price:    { en: "Single-day visit 2,500 THB adults, 1,250 THB children (transport, lunch, guide included)", th: "ทริปวันเดียว ผู้ใหญ่ 2,500 บาท เด็ก 1,250 บาท (รวมรถรับส่ง อาหารกลางวัน และไกด์)" },
      time:     { en: "Full day", th: "เต็มวัน" },
      distance: { en: "About 1.5 hours by minivan", th: "รถตู้ประมาณ 1.5 ชั่วโมง" }
    },
    what: {
      en: "A **rescue and rehabilitation sanctuary** for elephants retired from logging, trekking and street begging. There is **no riding and no performing**: you watch the herd bathe, graze and socialise in the river valley, and learn how the elephants came to be here.",
      th: "**ศูนย์ช่วยเหลือและฟื้นฟู**ช้างที่เคยใช้งานชักลากไม้ พานักท่องเที่ยวขี่ และเร่ร่อนในเมือง **ไม่มีการขี่ช้างและไม่มีการแสดง** ผู้มาเยือนจะได้ชมช้างอาบน้ำ กินหญ้า และใช้ชีวิตในหุบเขาริมแม่น้ำ พร้อมเรียนรู้เรื่องราวของช้างแต่ละตัว"
    },
    who: {
      en: "All ages, and anyone who wants to see elephants **ethically**.",
      th: "ทุกวัย และทุกคนที่ต้องการชมช้างอย่าง**มีจริยธรรม**"
    },
    prepare: {
      en: "Clothes that can get dirty, sun protection, insect repellent, and **closed-toe shoes**.",
      th: "เสื้อผ้าที่เปื้อนได้ ครีมกันแดด ยากันยุง และ**รองเท้าหุ้มส้น**"
    },
    join: {
      en: "**Book in advance** on the official website (elephantnaturepark.org). Popular dates sell out, especially in the cool season.",
      th: "**จองล่วงหน้า**ทางเว็บไซต์ทางการ (elephantnaturepark.org) วันยอดนิยมเต็มเร็ว โดยเฉพาะหน้าหนาว"
    },
    getting: {
      en: "Round-trip minivan from your accommodation is **included** in the day-visit price.",
      th: "ราคาทริปรายวัน**รวมรถตู้รับส่ง**จากที่พักแล้ว"
    },
    review: {
      en: "If you want to see elephants in Thailand, this is the model to support. The day is **observation-first**, and hearing each elephant's story changes how you see every \"elephant camp\" sign on the road.",
      th: "หากต้องการชมช้างในประเทศไทย นี่คือต้นแบบที่ควรสนับสนุน กิจกรรมทั้งวัน**เน้นการสังเกต** และเรื่องราวของช้างแต่ละตัวจะเปลี่ยนมุมมองที่คุณมีต่อป้าย \"ปางช้าง\" ริมทาง"
    },
    tips: [
      { en: "Book only through the official site to be sure you're at the real park, not a look-alike.", th: "จองผ่านเว็บไซต์ทางการเท่านั้นเพื่อให้แน่ใจว่าเป็นปางช้างตัวจริง ไม่ใช่ที่ชื่อคล้ายกัน" }
    ],
    link: "https://www.elephantnaturepark.org/"
  }
];
