globalThis.process ??= {};
globalThis.process.env ??= {};
import { n as __exportAll } from "./rolldown-runtime_Upwk45wU.mjs";
import { E as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DzJkc2yi.mjs";
import { t as createComponent } from "./compiler_BiDVP5L8.mjs";
import { n as isLanguage, t as copy } from "./i18n_B790PXAF.mjs";
import { t as $$SiteLayout } from "./SiteLayout_Gc4_WH87.mjs";
import { t as $$ShareButtons } from "./ShareButtons_C5mVJSyH.mjs";
import { n as listPublishedResources } from "./resources_CloFJv4w.mjs";
import { t as localizedGospelDevotionalBody } from "./devotional-text_CMnN6j2p.mjs";
//#region src/lib/dering-prayers.ts
var deringPrayerIntro = {
	ko: "Edward Dering(1540–1576)은 16세기 영국의 개혁파 목회자이자 설교자였습니다. 그는 성도들이 말씀 안에서 믿음을 굳게 하고, 가정과 일상 속에서 하나님께 기도하며 살아가도록 돕는 글을 남겼습니다. 이곳에서는 그의 기도문 가운데 평범한 날에도 사용할 수 있는 내용을 선별하여 태국어와 한국어로 자연스럽게 옮겨 소개합니다.",
	th: "Edward Dering (ค.ศ. 1540–1576) เป็นศิษยาภิบาลและนักเทศน์สายปฏิรูปชาวอังกฤษในศตวรรษที่ 16 ท่านเขียนคำอธิษฐานเพื่อช่วยให้ผู้เชื่อดำเนินชีวิตด้วยความเชื่อในพระวจนะ และอธิษฐานต่อพระเจ้าในครอบครัวและชีวิตประจำวัน หน้านี้คัดเลือกคำอธิษฐานที่ใช้ได้ในวันธรรมดา และแปลเป็นภาษาไทยกับภาษาเกาหลีให้อ่านอย่างเป็นธรรมชาติ.",
	en: "Edward Dering (1540–1576) was an English Reformed pastor and preacher. His prayers were written to help believers seek God in ordinary household life, with repentance, faith, humility, perseverance, and trust in Christ. For copyright and source clarity, the English text is not reproduced here. Please download and read the original English edition from Monergism."
};
var deringPrayerLabels = {
	ko: {
		title: "오늘의 기도",
		subtitle: "Edward Dering 기도문 31일 선별",
		previous: "어제 기도 보기",
		next: "내일 기도 보기",
		sourcePrefix: "영어 원제",
		monergism: "Monergism에서 원문 기도책 다운로드"
	},
	th: {
		title: "คำอธิษฐานวันนี้",
		subtitle: "คัดเลือกคำอธิษฐานของ Edward Dering สำหรับ 31 วัน",
		previous: "ดูคำอธิษฐานเมื่อวาน",
		next: "ดูคำอธิษฐานพรุ่งนี้",
		sourcePrefix: "ชื่อภาษาอังกฤษเดิม",
		monergism: "ดาวน์โหลดหนังสือคำอธิษฐานต้นฉบับที่ Monergism"
	},
	en: {
		title: "Today’s Prayer",
		subtitle: "Edward Dering’s original English prayer book",
		previous: "Previous prayer",
		next: "Next prayer",
		sourcePrefix: "Source title",
		monergism: "Download the original prayer book at Monergism"
	}
};
var deringPrayerSourceUrl = "https://www.monergism.com/godly-private-prayers-householders-meditate-ebook";
var deringPrayers = [
	{
		day: 1,
		sourceTitle: "A Prayer Containing the Effect of the Householder's Catechism",
		koTitle: "가정의 신앙고백을 담은 기도",
		thTitle: "คำอธิษฐานจากคำสอนคริสเตียนสำหรับครอบครัว",
		koBody: "거룩하신 하나님 아버지, 주께서 우리를 지으시고 돌보시며 예수 그리스도 안에서 구원의 길을 열어 주셨음을 고백합니다. 우리 가정이 사람의 지혜나 세상의 습관을 따라 살지 않게 하시고, 주님의 말씀을 배우고 믿으며 순종하게 하소서. 부모와 자녀와 모든 식구가 각자의 자리에서 주님을 경외하고 서로 사랑하게 하시며, 오늘 하루도 우리의 생각과 말과 행동이 복음에 합당하게 하소서. 예수 그리스도의 이름으로 기도합니다. 아멘.",
		thBody: "ข้าแต่พระบิดาผู้บริสุทธิ์ ข้าพระองค์ทั้งหลายยอมรับว่าพระองค์ทรงสร้าง ทรงดูแล และทรงเปิดทางแห่งความรอดในพระเยซูคริสต์ ขอให้ครอบครัวของเราไม่ดำเนินตามปัญญาของโลกหรือความเคยชินของมนุษย์ แต่ให้เรียนรู้ เชื่อ และเชื่อฟังพระวจนะของพระองค์ ขอให้พ่อแม่ ลูกหลาน และทุกคนในบ้านยำเกรงพระเจ้า รักกัน และดำเนินชีวิตให้สมกับข่าวประเสริฐในวันนี้ อธิษฐานในพระนามพระเยซูคริสต์ อาเมน."
	},
	{
		day: 2,
		sourceTitle: "A Prayer Upon the Lord's Prayer",
		koTitle: "주기도문을 묵상하는 기도",
		thTitle: "คำอธิษฐานจากคำอธิษฐานขององค์พระผู้เป็นเจ้า",
		koBody: "하늘에 계신 우리 아버지, 주께서 자녀 된 우리에게 기도하는 법을 가르쳐 주셨습니다. 우리의 이름보다 주님의 이름이 거룩히 여김을 받게 하시고, 우리의 뜻보다 주님의 나라와 뜻이 먼저 이루어지게 하소서. 오늘 필요한 양식을 공급하시며, 우리의 죄를 용서하시고 우리도 남을 용서하게 하소서. 시험 가운데 버려두지 마시고 악에서 건져 주셔서, 모든 영광이 주께 돌아가게 하소서. 아멘.",
		thBody: "ข้าแต่พระบิดาของข้าพระองค์ทั้งหลายผู้สถิตในสวรรค์ พระองค์ทรงสอนบุตรของพระองค์ให้รู้จักอธิษฐาน ขอให้พระนามของพระองค์เป็นที่เคารพนับถือยิ่งกว่าชื่อเสียงของเรา ขอให้อาณาจักรและพระประสงค์ของพระองค์มาก่อนความต้องการของเรา โปรดประทานอาหารประจำวัน อภัยบาปของเรา และทำให้เรายกโทษแก่ผู้อื่น อย่าทรงปล่อยเราไว้ในการทดลอง แต่ช่วยให้พ้นจากความชั่ว เพื่อพระสิริทั้งหมดเป็นของพระองค์ อาเมน."
	},
	{
		day: 3,
		sourceTitle: "Confession of Sins with Faith and Repentance",
		koTitle: "믿음과 회개로 죄를 고백하는 기도",
		thTitle: "คำอธิษฐานสารภาพบาปด้วยความเชื่อและการกลับใจ",
		koBody: "자비로우신 하나님, 우리는 생각과 말과 행실로 주께 죄를 지었습니다. 주님의 은혜를 가볍게 여기고, 사랑해야 할 사람을 사랑하지 못했으며, 믿음으로 살기보다 두려움과 욕심을 따라 살았습니다. 그러나 예수 그리스도의 피가 죄인을 깨끗하게 하심을 믿습니다. 우리의 마음을 찢고 회개하게 하시며, 죄를 숨기지 않고 주께 나아가게 하소서. 용서의 은혜로 우리를 새롭게 하시고 오늘 다시 순종의 길로 걷게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้เปี่ยมด้วยพระเมตตา ข้าพระองค์ทำบาปต่อพระองค์ทั้งในความคิด คำพูด และการกระทำ ข้าพระองค์มักดูเบาพระคุณ ไม่รักคนที่ควรรัก และดำเนินชีวิตตามความกลัวกับความโลภมากกว่าความเชื่อ แต่ข้าพระองค์เชื่อว่าพระโลหิตของพระเยซูคริสต์ชำระคนบาปให้สะอาดได้ ขอทรงให้ใจของข้าพระองค์สำนึกผิด กลับใจ ไม่ปิดบังบาป แต่เข้ามาหาพระองค์ ขอทรงสร้างข้าพระองค์ใหม่ด้วยพระคุณแห่งการอภัย และนำให้เดินในทางเชื่อฟังวันนี้ อาเมน."
	},
	{
		day: 4,
		sourceTitle: "Against Infidelity and Despair",
		koTitle: "불신앙과 절망을 이기는 기도",
		thTitle: "คำอธิษฐานต่อต้านความไม่เชื่อและความสิ้นหวัง",
		koBody: "긍휼의 하나님, 마음이 어두워져 주님의 약속을 믿기 어려울 때 우리를 붙들어 주소서. 절망은 우리의 죄와 약함만 보게 하지만, 복음은 그리스도의 십자가와 빈 무덤을 보게 합니다. 우리를 불신앙에 내버려 두지 마시고, 낙심한 영혼을 다시 일으켜 주소서. 가장 어두운 날에도 주님의 자비가 끝나지 않았음을 믿게 하시며, 오늘 한 걸음이라도 주께 나아가게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งพระเมตตา เมื่อใจมืดลงจนยากจะเชื่อพระสัญญาของพระองค์ ขอทรงยึดเราไว้ ความสิ้นหวังทำให้เราเห็นแต่บาปและความอ่อนแอของตน แต่ข่าวประเสริฐทำให้เรามองไปที่กางเขนและอุโมงค์ว่างเปล่าของพระคริสต์ ขออย่าทรงปล่อยเราไว้ในความไม่เชื่อ แต่โปรดยกจิตวิญญาณที่ท้อแท้ขึ้นใหม่ แม้ในวันที่มืดที่สุด ขอให้เชื่อว่าพระเมตตาของพระองค์ยังไม่สิ้นสุด และวันนี้ให้เราก้าวเข้าหาพระองค์แม้เพียงหนึ่งก้าว อาเมน."
	},
	{
		day: 5,
		sourceTitle: "Morning Prayer for Private Houses and Families",
		koTitle: "아침에 드리는 가정 기도",
		thTitle: "คำอธิษฐานตอนเช้าสำหรับครอบครัว",
		koBody: "주님, 새 아침을 주셔서 감사합니다. 밤새 우리를 지키신 손길을 기억하며 오늘도 주님의 은혜로 하루를 시작합니다. 우리의 마음이 아침부터 헛된 생각에 빼앗기지 않게 하시고, 먼저 주님을 바라보게 하소서. 각자의 일터와 학교와 가정에서 정직하고 성실하게 살게 하시며, 만나는 사람에게 친절과 진실을 보이게 하소서. 오늘의 기쁨과 어려움을 모두 주께 맡기며, 우리 집을 평안 가운데 지켜 주소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ขอบพระคุณสำหรับเช้าวันใหม่ พระองค์ทรงปกป้องเราตลอดคืนที่ผ่านมา และวันนี้เราขอเริ่มต้นวันด้วยพระคุณของพระองค์ ขออย่าให้ใจของเราถูกความคิดไร้สาระครอบงำตั้งแต่เช้า แต่ให้มองไปที่พระองค์ก่อน ขอให้เราดำเนินชีวิตด้วยความสัตย์ซื่อและขยันในบ้าน ที่ทำงาน และโรงเรียน ให้แสดงความเมตตาและความจริงต่อผู้ที่พบในวันนี้ เรามอบทั้งความยินดีและความยากลำบากไว้กับพระองค์ ขอทรงรักษาครอบครัวของเราในสันติสุข อาเมน."
	},
	{
		day: 6,
		sourceTitle: "Evening Prayer for Private Houses and Families",
		koTitle: "저녁에 드리는 가정 기도",
		thTitle: "คำอธิษฐานตอนเย็นสำหรับครอบครัว",
		koBody: "은혜로우신 하나님, 하루를 마치며 주 앞에 나아옵니다. 오늘 우리를 지키시고 필요한 것을 공급하신 은혜에 감사합니다. 그러나 우리가 말과 행동으로 범한 죄와 마음의 게으름과 불평을 고백합니다. 예수 그리스도 안에서 용서하여 주시고, 우리의 양심을 평안하게 하소서. 밤 동안 우리의 몸과 마음을 쉬게 하시며, 걱정과 두려움을 주께 맡기게 하소서. 내일도 새 마음으로 주님을 섬기게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้ทรงพระคุณ เมื่อสิ้นสุดวันนี้ ข้าพระองค์เข้ามาเฝ้าพระองค์ ขอบพระคุณที่ทรงปกป้องและประทานสิ่งจำเป็นตลอดวัน แต่ข้าพระองค์สารภาพบาปที่ทำด้วยคำพูด การกระทำ ความเกียจคร้านในใจ และการบ่น ขอทรงอภัยในพระเยซูคริสต์ และประทานสันติสุขแก่จิตสำนึกของเรา ขอให้ร่างกายและใจได้พักในคืนนี้ และให้เรามอบความกังวลกับความกลัวไว้กับพระองค์ พรุ่งนี้ขอให้เรารับใช้พระองค์ด้วยใจใหม่ อาเมน."
	},
	{
		day: 7,
		sourceTitle: "Daily Prayer For All Faithful Christians",
		koTitle: "모든 신자가 매일 드리는 기도",
		thTitle: "คำอธิษฐานประจำวันสำหรับผู้เชื่อทุกคน",
		koBody: "신실하신 하나님, 오늘도 그리스도 안에서 우리를 부르신 은혜를 기억하게 하소서. 우리의 믿음이 말뿐인 고백에 머물지 않고 삶의 열매로 나타나게 하시며, 작은 일에서도 주님을 기쁘시게 하려는 마음을 주소서. 말씀을 사랑하고 죄를 미워하며, 이웃을 섬기고 원망을 버리게 하소서. 약할 때 성령께서 도우시고, 넘어질 때 다시 일으켜 주소서. 오늘 하루가 주님의 은혜를 증언하는 날이 되게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้สัตย์ซื่อ ขอให้วันนี้ข้าพระองค์ระลึกถึงพระคุณที่ทรงเรียกเราในพระคริสต์ ขอให้ความเชื่อของเราไม่หยุดอยู่เพียงคำสารภาพ แต่ปรากฏเป็นผลในชีวิต ขอประทานใจที่ปรารถนาจะทำให้พระองค์พอพระทัยแม้ในเรื่องเล็ก ๆ ให้เรารักพระวจนะ เกลียดบาป รับใช้เพื่อนบ้าน และละทิ้งการบ่น เมื่ออ่อนแอ ขอพระวิญญาณทรงช่วย เมื่อล้มลง ขอทรงยกขึ้นใหม่ ให้วันนี้เป็นวันที่ชีวิตของเราเป็นพยานถึงพระคุณของพระองค์ อาเมน."
	},
	{
		day: 8,
		sourceTitle: "For Constant Perseverance in Praying",
		koTitle: "꾸준히 기도하도록 구하는 기도",
		thTitle: "คำอธิษฐานขอให้เพียรอธิษฐาน",
		koBody: "주님, 우리는 기도해야 함을 알면서도 쉽게 게을러지고 낙심합니다. 응답이 더딜 때 마음이 식고, 바쁠 때 주님을 뒤로 미룹니다. 우리에게 꾸준히 기도하는 은혜를 주소서. 기도가 의무만이 아니라 아버지께 나아가는 기쁨임을 알게 하시고, 말이 부족해도 성령께서 우리를 도우심을 믿게 하소서. 기쁠 때 감사로, 슬플 때 탄식으로, 흔들릴 때 믿음으로 주께 나아가게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ข้าพระองค์รู้ว่าควรอธิษฐาน แต่กลับเกียจคร้านและท้อใจได้ง่าย เมื่อคำตอบมาช้า ใจก็เย็นลง เมื่อยุ่งมาก ก็เลื่อนพระองค์ไว้ภายหลัง ขอประทานพระคุณให้เราอธิษฐานอย่างสม่ำเสมอ ให้รู้ว่าการอธิษฐานไม่ใช่เพียงหน้าที่ แต่เป็นความยินดีที่ได้เข้าหาพระบิดา แม้ถ้อยคำของเราจะอ่อนแอ ขอให้เชื่อว่าพระวิญญาณทรงช่วยเรา ให้เรามาหาพระองค์ด้วยคำขอบคุณในยามสุข ด้วยเสียงคร่ำครวญในยามเศร้า และด้วยความเชื่อในยามหวั่นไหว อาเมน."
	},
	{
		day: 9,
		sourceTitle: "For All Times",
		koTitle: "모든 때를 위한 기도",
		thTitle: "คำอธิษฐานสำหรับทุกเวลา",
		koBody: "영원하신 하나님, 우리의 때가 주님의 손에 있음을 믿습니다. 평안할 때 교만하지 않게 하시고, 어려울 때 절망하지 않게 하소서. 얻을 때 감사하게 하시고, 잃을 때 주님을 더 붙들게 하소서. 사람의 평가와 상황의 변화에 마음이 흔들리지 않고, 변하지 않는 주님의 약속 위에 서게 하소서. 오늘이 어떤 날이든 주님께 속한 날임을 기억하며 충성되게 살게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้านิรันดร์ ข้าพระองค์เชื่อว่าเวลาทั้งหมดของเราอยู่ในพระหัตถ์ของพระองค์ เมื่อมีสันติสุข ขออย่าให้เราหยิ่ง เมื่อมีความยากลำบาก ขออย่าให้สิ้นหวัง เมื่อได้รับ ขอให้ขอบพระคุณ เมื่อสูญเสีย ขอให้ยึดพระองค์แน่นยิ่งขึ้น อย่าให้ใจของเราหวั่นไหวตามคำชมของคนหรือสถานการณ์ที่เปลี่ยนไป แต่ให้ยืนอยู่บนพระสัญญาที่ไม่เปลี่ยนแปลงของพระองค์ ไม่ว่าวันนี้จะเป็นวันอย่างไร ขอให้ระลึกว่าเป็นวันของพระองค์และดำเนินชีวิตอย่างสัตย์ซื่อ อาเมน."
	},
	{
		day: 10,
		sourceTitle: "For All Estates",
		koTitle: "모든 처지를 위한 기도",
		thTitle: "คำอธิษฐานสำหรับทุกสภาพชีวิต",
		koBody: "주님, 사람마다 처지가 다르고 짐도 다릅니다. 건강한 자와 병든 자, 풍족한 자와 부족한 자, 책임이 큰 자와 외로운 자를 불쌍히 여기소서. 우리로 남과 비교하여 교만하거나 낙심하지 않게 하시고, 각자 맡겨진 자리에서 주님을 신뢰하게 하소서. 높은 자리에서는 겸손을, 낮은 자리에서는 소망을, 풍요 속에서는 절제를, 부족 속에서는 인내를 주소서. 모든 형편 속에서 그리스도가 우리의 참된 만족이 되게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า มนุษย์แต่ละคนมีสภาพชีวิตและภาระต่างกัน ขอทรงเมตตาคนแข็งแรงและคนเจ็บป่วย คนที่มีเพียงพอและคนที่ขัดสน คนที่มีความรับผิดชอบมากและคนที่โดดเดี่ยว ขออย่าให้เราเปรียบเทียบตนเองกับผู้อื่นจนหยิ่งหรือท้อใจ แต่ให้วางใจพระองค์ในที่ที่ทรงมอบหมายให้เรา ในตำแหน่งสูงขอให้ถ่อมใจ ในที่ต่ำขอให้มีความหวัง ในความอุดมสมบูรณ์ขอให้รู้จักยับยั้ง ในความขัดสนขอให้มีความอดทน ขอให้พระคริสต์เป็นความพอใจแท้ในทุกสภาพชีวิต อาเมน."
	},
	{
		day: 11,
		sourceTitle: "To be Confirmed in the Knowledge of God",
		koTitle: "하나님을 아는 지식에 굳게 서는 기도",
		thTitle: "คำอธิษฐานขอให้มั่นคงในการรู้จักพระเจ้า",
		koBody: "하나님, 우리에게 주님을 아는 참된 지식을 주소서. 머리로만 아는 지식이 아니라 마음을 낮추고 삶을 변화시키는 지식이 되게 하소서. 주님의 거룩하심 앞에서 죄를 두려워하고, 주님의 사랑 안에서 담대히 은혜를 붙들게 하소서. 성경을 통해 주님의 성품과 뜻을 더욱 알게 하시며, 잘못된 생각과 헛된 상상에서 우리를 지켜 주소서. 하나님을 아는 지식이 매일의 예배와 순종으로 이어지게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้า ขอประทานความรู้แท้เกี่ยวกับพระองค์แก่ข้าพระองค์ ไม่ใช่ความรู้ที่อยู่เพียงในความคิด แต่เป็นความรู้ที่ทำให้ใจถ่อมลงและชีวิตเปลี่ยนแปลง ต่อหน้าความบริสุทธิ์ของพระองค์ ขอให้เกรงกลัวบาป และในความรักของพระองค์ ขอให้กล้ายึดพระคุณไว้ ขอให้เรารู้จักพระลักษณะและพระประสงค์ของพระองค์มากขึ้นผ่านพระคัมภีร์ และปกป้องเราจากความคิดผิดกับจินตนาการที่ไร้สาระ ขอให้ความรู้จักพระเจ้านำไปสู่การนมัสการและการเชื่อฟังในทุกวัน อาเมน."
	},
	{
		day: 12,
		sourceTitle: "For the Obtaining of Saving Faith",
		koTitle: "구원하는 믿음을 구하는 기도",
		thTitle: "คำอธิษฐานขอความเชื่อที่ช่วยให้รอด",
		koBody: "자비의 하나님, 우리 안에는 스스로를 구원할 능력이 없습니다. 예수 그리스도께서 죄인을 위해 죽으시고 다시 살아나신 복음을 믿게 하소서. 믿음이 우리의 공로나 감정에 의지하지 않고, 주님의 약속과 그리스도의 의에 의지하게 하소서. 의심과 두려움이 찾아올 때에도 십자가를 바라보게 하시고, 빈손으로 은혜를 받는 법을 배우게 하소서. 우리와 우리 가정이 참으로 그리스도를 믿고 생명을 얻게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งพระเมตตา ในตัวข้าพระองค์ไม่มีอำนาจที่จะช่วยตนเองให้รอดได้ ขอให้เราเชื่อข่าวประเสริฐว่าพระเยซูคริสต์ทรงสิ้นพระชนม์เพื่อคนบาปและทรงเป็นขึ้นมาใหม่ ขอให้ความเชื่อของเราไม่พึ่งความดีหรือความรู้สึกของตนเอง แต่พึ่งพระสัญญาของพระองค์และความชอบธรรมของพระคริสต์ เมื่อความสงสัยและความกลัวเข้ามา ขอให้มองไปที่กางเขน และเรียนรู้ที่จะรับพระคุณด้วยมือเปล่า ขอให้เราและครอบครัวเชื่อพระคริสต์อย่างแท้จริงและได้รับชีวิต อาเมน."
	},
	{
		day: 13,
		sourceTitle: "To Feel in Heart Spiritual Comfort",
		koTitle: "마음에 영적 위로를 구하는 기도",
		thTitle: "คำอธิษฐานขอการปลอบใจฝ่ายวิญญาณ",
		koBody: "위로의 하나님, 우리의 마음이 메마르고 무거울 때가 많습니다. 죄책감과 두려움과 피곤함 속에서 주님의 얼굴을 잊지 않게 하소서. 성령께서 우리 마음에 그리스도의 사랑을 새롭게 비추어 주시고, 말씀의 약속을 살아 있는 위로로 받게 하소서. 세상이 주는 가벼운 위안이 아니라, 하나님과 화목하게 된 자에게 주시는 깊은 평안을 주소서. 슬픔 속에서도 소망을 잃지 않고 주님께 머물게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งการปลอบใจ ใจของข้าพระองค์มักแห้งแล้งและหนักอึ้ง ในความรู้สึกผิด ความกลัว และความเหน็ดเหนื่อย ขออย่าให้ลืมพระพักตร์ของพระองค์ ขอพระวิญญาณบริสุทธิ์ส่องความรักของพระคริสต์เข้ามาใหม่ในใจ และให้รับพระสัญญาในพระวจนะเป็นการปลอบใจที่มีชีวิต ขอประทานสันติสุขลึกซึ้งที่พระองค์ประทานแก่ผู้ที่ได้คืนดีกับพระเจ้า ไม่ใช่เพียงความสบายใจตื้น ๆ จากโลก แม้อยู่ในความเศร้า ขอให้เรายังคงมีความหวังและอยู่ใกล้พระองค์ อาเมน."
	},
	{
		day: 14,
		sourceTitle: "Against Doubting, to Strengthen a Weak Faith, and Persevere Therein",
		koTitle: "의심 속에서 약한 믿음을 붙드는 기도",
		thTitle: "คำอธิษฐานเมื่อสงสัยและต้องการให้ความเชื่ออ่อนแอเข้มแข็งขึ้น",
		koBody: "주님, 우리의 믿음은 자주 약하고 흔들립니다. 주님의 선하심을 의심하고, 말씀보다 눈앞의 형편을 더 크게 봅니다. 우리를 책망만 하지 마시고 불쌍히 여겨 주소서. 꺼져 가는 심지를 끄지 않으시는 그리스도를 바라보게 하시며, 작은 믿음이라도 주님께 붙어 있으면 헛되지 않음을 믿게 하소서. 의심이 찾아올 때 말씀으로 우리를 붙드시고, 끝까지 믿음 안에 머물게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ความเชื่อของข้าพระองค์มักอ่อนแอและหวั่นไหว เราสงสัยความดีของพระองค์ และมองสถานการณ์ตรงหน้าว่าใหญ่กว่าพระวจนะ ขออย่าทรงเพียงตำหนิเรา แต่โปรดเมตตาเรา ให้เรามองไปที่พระคริสต์ผู้ไม่ทรงดับไส้ตะเกียงที่ริบหรี่ และให้เชื่อว่าแม้ความเชื่อเล็กน้อย หากยึดพระองค์ไว้ ก็ไม่ไร้ผล เมื่อความสงสัยเข้ามา ขอทรงยึดเราไว้ด้วยพระวจนะ และให้เรายืนหยัดในความเชื่อจนถึงที่สุด อาเมน."
	},
	{
		day: 15,
		sourceTitle: "For Obtaining Trial and Cherishing of the Holy Spirit of God",
		koTitle: "성령의 은혜를 분별하고 소중히 여기는 기도",
		thTitle: "คำอธิษฐานขอรู้จักและทะนุถนอมพระคุณของพระวิญญาณ",
		koBody: "거룩하신 성령님, 우리 안에 참된 믿음의 열매를 살피게 하소서. 헛된 확신으로 스스로를 속이지 않게 하시고, 동시에 연약함 때문에 주님의 은혜를 의심하지 않게 하소서. 죄를 깨닫게 하시고 회개하게 하시며, 그리스도를 사랑하고 말씀에 순종하려는 마음을 자라게 하소서. 우리 안에서 역사하시는 성령의 은혜를 소중히 여기고 근심하게 하지 않게 하시며, 오늘도 주님의 인도하심에 민감하게 하소서. 아멘.",
		thBody: "ข้าแต่พระวิญญาณบริสุทธิ์ ขอให้เราตรวจดูผลของความเชื่อแท้ในใจ อย่าให้หลอกตนเองด้วยความมั่นใจที่ว่างเปล่า และอย่าให้สงสัยพระคุณของพระองค์เพราะความอ่อนแอ ขอทรงทำให้รู้สึกถึงบาป กลับใจ รักพระคริสต์ และเติบโตในความปรารถนาที่จะเชื่อฟังพระวจนะ ขอให้เราทะนุถนอมพระคุณของพระวิญญาณที่ทำงานอยู่ในเรา ไม่ทำให้พระองค์เสียพระทัย และไวต่อการทรงนำของพระองค์ในวันนี้ อาเมน."
	},
	{
		day: 16,
		sourceTitle: "For the Obtaining of a Lively Hope",
		koTitle: "살아 있는 소망을 구하는 기도",
		thTitle: "คำอธิษฐานขอความหวังที่มีชีวิต",
		koBody: "소망의 하나님, 눈에 보이는 것들이 우리 마음을 쉽게 사로잡습니다. 그러나 이 세상의 기쁨은 지나가고, 고난도 영원하지 않음을 기억하게 하소서. 예수 그리스도의 부활 안에서 살아 있는 소망을 주소서. 죽음보다 강한 생명, 죄보다 큰 은혜, 현재의 눈물보다 확실한 영광을 바라보게 하소서. 오늘의 작은 순종이 헛되지 않음을 믿고, 낙심한 마음을 다시 들어 주님을 기다리게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งความหวัง สิ่งที่มองเห็นได้มักจับใจเราได้ง่าย แต่ขอให้ระลึกว่าความยินดีของโลกนี้ผ่านไป และความทุกข์ก็ไม่คงอยู่ตลอดไป ขอประทานความหวังที่มีชีวิตในพระเยซูคริสต์ผู้ทรงเป็นขึ้นจากตาย ให้เรามองเห็นชีวิตที่แข็งแรงกว่าความตาย พระคุณที่ใหญ่กว่าบาป และพระสิริที่แน่นอนกว่าน้ำตาในปัจจุบัน ขอให้เชื่อว่าการเชื่อฟังเล็ก ๆ วันนี้ไม่ไร้ค่า และยกใจที่ท้อแท้ให้รอคอยพระองค์อีกครั้ง อาเมน."
	},
	{
		day: 17,
		sourceTitle: "For the Obtaining and Increase of Love",
		koTitle: "사랑을 얻고 자라게 해 달라는 기도",
		thTitle: "คำอธิษฐานขอให้ได้รับและเติบโตในความรัก",
		koBody: "사랑의 하나님, 우리 마음은 차갑고 자기중심적입니다. 그리스도께서 먼저 우리를 사랑하신 사랑을 깊이 알게 하시고, 그 사랑이 우리 안에서 이웃을 향한 사랑으로 흘러가게 하소서. 가까운 사람에게 무례하지 않게 하시고, 어려운 사람을 외면하지 않게 하시며, 원망보다 용서를 배우게 하소서. 말로만 사랑하지 않고 시간과 수고와 인내로 사랑하게 하소서. 오늘 우리 안에 주님의 사랑을 더하여 주소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งความรัก ใจของข้าพระองค์มักเย็นชาและเห็นแก่ตัว ขอให้รู้ลึกซึ้งถึงความรักที่พระคริสต์ทรงรักเราก่อน และให้ความรักนั้นไหลออกจากเราไปสู่เพื่อนบ้าน ขออย่าให้หยาบคายต่อคนใกล้ตัว อย่าให้เมินเฉยต่อคนลำบาก และให้เรียนรู้การให้อภัยมากกว่าการบ่นว่า ขอให้เราไม่รักเพียงด้วยคำพูด แต่รักด้วยเวลา แรงกาย และความอดทน วันนี้ขอทรงเพิ่มความรักของพระองค์ในเรา อาเมน."
	},
	{
		day: 18,
		sourceTitle: "To Obtain and Preserve the Fear of God",
		koTitle: "하나님을 경외하는 마음을 구하는 기도",
		thTitle: "คำอธิษฐานขอให้มีและรักษาความยำเกรงพระเจ้า",
		koBody: "거룩하신 하나님, 우리 마음에 주님을 경외하는 마음을 심어 주소서. 사람의 눈은 두려워하면서 하나님의 눈앞에서는 가볍게 행동하는 어리석음을 용서하소서. 주님의 거룩하심을 알기에 죄를 미워하고, 주님의 선하심을 알기에 기쁨으로 순종하게 하소서. 두려움이 우리를 멀어지게 하지 않고, 경외함이 우리를 더 가까이 주께 나아가게 하소서. 오늘 모든 선택 앞에서 하나님을 기억하게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้บริสุทธิ์ ขอทรงปลูกความยำเกรงพระองค์ไว้ในใจของเรา โปรดอภัยความโง่เขลาที่เรากลัวสายตาคน แต่กลับทำตัวเบา ๆ ต่อหน้าพระเจ้า เพราะรู้จักความบริสุทธิ์ของพระองค์ ขอให้เราเกลียดบาป และเพราะรู้จักความดีของพระองค์ ขอให้เราเชื่อฟังด้วยความยินดี อย่าให้ความกลัวผลักเราไกลจากพระองค์ แต่ให้ความยำเกรงนำเราเข้าใกล้พระองค์มากขึ้น วันนี้ในทุกการตัดสินใจ ขอให้เราระลึกถึงพระเจ้า อาเมน."
	},
	{
		day: 19,
		sourceTitle: "For Grace and Wisdom",
		koTitle: "은혜와 지혜를 구하는 기도",
		thTitle: "คำอธิษฐานขอพระคุณและปัญญา",
		koBody: "지혜의 하나님, 우리는 무엇이 옳은지 알면서도 자주 어리석게 선택합니다. 오늘 우리에게 은혜와 지혜를 주소서. 말해야 할 때와 침묵해야 할 때를 알게 하시고, 해야 할 일과 내려놓아야 할 일을 분별하게 하소서. 사람을 기쁘게 하려는 욕심보다 하나님을 기쁘시게 하려는 마음을 주소서. 지식은 겸손하게, 능력은 사랑으로, 자유는 절제로 사용하게 하소서. 우리의 길을 주님의 빛으로 인도하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าแห่งปัญญา ข้าพระองค์มักรู้ว่าอะไรถูกต้อง แต่ก็เลือกอย่างโง่เขลา ขอประทานพระคุณและปัญญาแก่เราในวันนี้ ให้รู้ว่าเมื่อใดควรพูดและเมื่อใดควรเงียบ ให้แยกแยะสิ่งที่ควรทำและสิ่งที่ควรวางลง ขอให้มีใจที่อยากทำให้พระเจ้าพอพระทัยมากกว่าทำให้คนพอใจ ให้ใช้ความรู้ด้วยความถ่อมใจ ใช้ความสามารถด้วยความรัก และใช้เสรีภาพด้วยความยับยั้ง ขอทรงนำทางของเราด้วยความสว่างของพระองค์ อาเมน."
	},
	{
		day: 20,
		sourceTitle: "To Walk Conscionably in our Civil and Personal Calling",
		koTitle: "일상의 부르심을 양심적으로 감당하는 기도",
		thTitle: "คำอธิษฐานขอให้ดำเนินชีวิตอย่างมีมโนธรรมในหน้าที่ประจำวัน",
		koBody: "주님, 우리가 맡은 일과 관계를 가볍게 여기지 않게 하소서. 가정과 일터와 사회 속에서 양심을 따라 정직하게 살게 하시고, 보이지 않는 자리에서도 주님 앞에 있는 사람처럼 행하게 하소서. 게으름과 속임수와 책임 회피에서 지켜 주소서. 작은 일에 충성하며, 사람을 이용하지 않고 섬기게 하소서. 우리의 직업과 일상이 예배와 분리되지 않게 하시고, 오늘의 수고가 주님께 드리는 순종이 되게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ขออย่าให้เราดูเบางานและความสัมพันธ์ที่ทรงมอบหมาย ในครอบครัว ที่ทำงาน และสังคม ขอให้ดำเนินชีวิตอย่างซื่อสัตย์ตามมโนธรรม และแม้อยู่ในที่ไม่มีใครเห็น ก็ให้ทำเหมือนอยู่ต่อหน้าพระองค์ ขอทรงปกป้องจากความเกียจคร้าน การหลอกลวง และการหลบเลี่ยงความรับผิดชอบ ให้เราซื่อสัตย์ในเรื่องเล็ก ๆ ไม่ใช้คนอื่นเพื่อประโยชน์ตน แต่รับใช้เขา ขอให้อาชีพและชีวิตประจำวันไม่แยกจากการนมัสการ และให้ความเหน็ดเหนื่อยวันนี้เป็นการเชื่อฟังที่ถวายแด่พระองค์ อาเมน."
	},
	{
		day: 21,
		sourceTitle: "Thanksgiving After Blessings Obtained",
		koTitle: "은혜를 받은 뒤 감사하는 기도",
		thTitle: "คำอธิษฐานขอบพระคุณหลังได้รับพระพร",
		koBody: "좋으신 하나님, 우리가 받은 모든 좋은 것은 주님의 손에서 왔습니다. 응답받은 기도와 필요한 공급과 사람들의 도움을 당연하게 여기지 않게 하소서. 감사가 입술의 말에 그치지 않고 삶의 태도가 되게 하시며, 받은 은혜를 자기 자랑으로 바꾸지 않게 하소서. 주신 복을 이웃과 나누고, 더 큰 신뢰와 순종으로 주께 돌려드리게 하소서. 모든 은혜의 근원이신 하나님께 감사드립니다. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้แสนดี สิ่งดีทุกอย่างที่เราได้รับมาจากพระหัตถ์ของพระองค์ ขออย่าให้เรามองคำอธิษฐานที่ได้รับคำตอบ การจัดเตรียมที่จำเป็น และความช่วยเหลือจากผู้คนว่าเป็นเรื่องธรรมดา ขอให้การขอบพระคุณไม่หยุดอยู่แค่คำพูด แต่เป็นท่าทีของชีวิต และอย่าให้เรานำพระคุณที่ได้รับไปเป็นความโอ้อวด ขอให้เราแบ่งปันพระพรแก่เพื่อนบ้าน และตอบสนองต่อพระองค์ด้วยความไว้วางใจและการเชื่อฟังมากขึ้น ขอบพระคุณพระเจ้าผู้เป็นแหล่งของพระคุณทั้งสิ้น อาเมน."
	},
	{
		day: 22,
		sourceTitle: "For Patience in Tribulation",
		koTitle: "환난 중 인내를 구하는 기도",
		thTitle: "คำอธิษฐานขอความอดทนในความทุกข์ยาก",
		koBody: "고난 중에 함께하시는 하나님, 어려움이 길어질 때 우리의 마음은 쉽게 지칩니다. 왜 이런 일이 있는지 다 알 수 없지만, 주께서 우리를 버리지 않으심을 믿게 하소서. 불평보다 기도를, 원망보다 인내를, 절망보다 소망을 배우게 하소서. 고난이 우리를 강퍅하게 하지 않고 그리스도를 더 닮게 하시며, 눈물 속에서도 주님의 선하심을 붙들게 하소서. 정한 때에 위로와 구원을 베풀어 주소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้ทรงอยู่กับเราในความทุกข์ เมื่อความยากลำบากยืดเยื้อ ใจของเราก็เหนื่อยง่าย แม้ไม่เข้าใจทุกเหตุผล ขอให้เชื่อว่าพระองค์ไม่ทอดทิ้งเรา ให้เราเรียนรู้การอธิษฐานมากกว่าการบ่น ความอดทนมากกว่าการต่อว่า และความหวังมากกว่าความสิ้นหวัง ขออย่าให้ความทุกข์ทำให้ใจแข็ง แต่ให้เราเป็นเหมือนพระคริสต์มากขึ้น และแม้มีน้ำตา ก็ยังยึดความดีของพระองค์ไว้ ขอประทานการปลอบใจและความช่วยกู้ในเวลาของพระองค์ อาเมน."
	},
	{
		day: 23,
		sourceTitle: "For Mortification and Holiness",
		koTitle: "죄 죽임과 거룩함을 구하는 기도",
		thTitle: "คำอธิษฐานขอการประหารบาปและความบริสุทธิ์",
		koBody: "거룩하신 주님, 우리 안에 아직도 살아 움직이는 죄를 가볍게 여기지 않게 하소서. 숨겨진 욕심, 교만, 분노, 정욕, 불신앙을 성령의 빛으로 드러내 주소서. 우리 힘으로 거룩해질 수 없음을 고백하오니, 그리스도의 십자가와 부활의 능력으로 죄를 죽이고 새 생명 가운데 살게 하소서. 거룩함을 무거운 짐이 아니라 하나님을 기쁘시게 하는 자유로 배우게 하소서. 오늘 작은 순종에서부터 우리를 새롭게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้าผู้บริสุทธิ์ ขออย่าให้เราดูเบาบาปที่ยังเคลื่อนไหวอยู่ในใจ ขอแสงของพระวิญญาณเปิดเผยความโลภ ความหยิ่ง ความโกรธ ตัณหา และความไม่เชื่อที่ซ่อนอยู่ ข้าพระองค์ยอมรับว่าเราไม่อาจบริสุทธิ์ได้ด้วยกำลังของตนเอง ขอให้โดยฤทธิ์เดชแห่งกางเขนและการฟื้นคืนพระชนม์ของพระคริสต์ เราประหารบาปและดำเนินชีวิตใหม่ ขอให้เรียนรู้ความบริสุทธิ์ไม่ใช่เป็นภาระหนัก แต่เป็นเสรีภาพที่ทำให้พระเจ้าพอพระทัย วันนี้ขอทรงสร้างเราใหม่ตั้งแต่การเชื่อฟังเล็ก ๆ อาเมน."
	},
	{
		day: 24,
		sourceTitle: "For the Feeling of the Sin of Hypocrisy",
		koTitle: "위선을 깨닫고 버리는 기도",
		thTitle: "คำอธิษฐานให้รู้สึกถึงบาปของความหน้าซื่อใจคด",
		koBody: "진실하신 하나님, 우리의 겉모습과 속마음이 다를 때가 많습니다. 사람 앞에서는 경건해 보이려 하지만, 주님 앞에서는 마음이 멀어져 있을 때가 있음을 고백합니다. 위선의 죄를 가볍게 여기지 않게 하시고, 남의 칭찬보다 주님의 기쁨을 구하게 하소서. 숨은 동기를 정결하게 하시며, 말과 삶이 하나 되게 하소서. 우리를 꾸미는 사람이 아니라 진실한 회개와 믿음으로 사는 사람으로 빚어 주소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้สัตย์จริง หลายครั้งภายนอกกับภายในของเราไม่ตรงกัน เราสารภาพว่าอยากดูเคร่งครัดต่อหน้าคน แต่ใจกลับห่างจากพระองค์ ขออย่าให้เราดูเบาบาปของความหน้าซื่อใจคด และให้แสวงหาความพอพระทัยของพระองค์มากกว่าคำชมของคน ขอทรงชำระแรงจูงใจที่ซ่อนอยู่ และให้คำพูดกับชีวิตเป็นหนึ่งเดียวกัน ขอปั้นเราให้เป็นคนที่ดำเนินชีวิตด้วยการกลับใจและความเชื่ออย่างจริงใจ ไม่ใช่คนที่เพียงตกแต่งภาพลักษณ์ของตนเอง อาเมน."
	},
	{
		day: 25,
		sourceTitle: "Against the Secret Venom and Great Danger of Prosperity",
		koTitle: "형통함의 숨은 위험을 경계하는 기도",
		thTitle: "คำอธิษฐานระวังภัยลับของความเจริญรุ่งเรือง",
		koBody: "주님, 어려움만이 우리를 흔드는 것이 아니라 형통함도 우리 영혼을 잠들게 할 수 있음을 깨닫게 하소서. 일이 잘될 때 주님을 잊지 않게 하시고, 편안함 속에서 교만과 무감각에 빠지지 않게 하소서. 가진 것을 의지하지 않고 주신 분을 의지하게 하시며, 복을 받았을수록 더 겸손하고 더 너그럽게 하소서. 세상의 성공이 우리의 주인이 되지 않게 하시고, 그리스도만 우리의 보화가 되게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ขอให้เรารู้ว่าไม่ใช่เพียงความยากลำบากที่ทำให้ใจหวั่นไหว แต่ความเจริญรุ่งเรืองก็อาจทำให้วิญญาณหลับได้ เมื่อสิ่งต่าง ๆ เป็นไปด้วยดี ขออย่าให้ลืมพระองค์ และอย่าให้ตกในความหยิ่งกับความชาในความสบาย ขอให้เราไม่พึ่งสิ่งที่มี แต่พึ่งพระองค์ผู้ประทาน ยิ่งได้รับพระพรมากเท่าใด ขอให้ยิ่งถ่อมใจและใจกว้างมากขึ้น อย่าให้ความสำเร็จของโลกเป็นนายของเรา แต่ให้พระคริสต์เท่านั้นเป็นสมบัติล้ำค่าของเรา อาเมน."
	},
	{
		day: 26,
		sourceTitle: "Against Covetousness and Ambition",
		koTitle: "탐심과 야망을 이기는 기도",
		thTitle: "คำอธิษฐานต่อต้านความโลภและความทะเยอทะยาน",
		koBody: "하나님, 더 가지려는 욕심과 더 높아지려는 마음이 우리를 끌고 갈 때가 많습니다. 필요한 것을 구하되 탐욕에 사로잡히지 않게 하시고, 책임을 감당하되 헛된 야망에 지배되지 않게 하소서. 남의 것을 부러워하기보다 주께서 주신 몫에 감사하게 하시며, 성공을 위해 양심을 팔지 않게 하소서. 우리의 마음이 재물과 명예가 아니라 하나님 나라와 의를 먼저 구하게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้า ความอยากมีมากขึ้นและความอยากสูงขึ้นมักดึงเราไป ขอให้เราทูลขอสิ่งจำเป็นโดยไม่ถูกความโลภครอบงำ และรับผิดชอบงานโดยไม่ถูกความทะเยอทะยานไร้สาระปกครอง ให้เราขอบพระคุณในส่วนที่พระองค์ประทานมากกว่าริษยาสิ่งของผู้อื่น และอย่าให้ขายมโนธรรมเพื่อความสำเร็จ ขอให้ใจของเราแสวงหาอาณาจักรและความชอบธรรมของพระเจ้าก่อน ไม่ใช่ทรัพย์สมบัติและเกียรติยศ อาเมน."
	},
	{
		day: 27,
		sourceTitle: "Against Pride",
		koTitle: "교만을 이기는 기도",
		thTitle: "คำอธิษฐานต่อต้านความหยิ่ง",
		koBody: "겸손하신 그리스도여, 우리의 마음속 교만을 불쌍히 여기소서. 우리는 받은 은사를 자기 것처럼 여기고, 남보다 낫다고 생각하며, 책망을 듣기 싫어합니다. 십자가 앞에서 우리가 은혜 없이는 아무것도 아님을 보게 하소서. 칭찬을 받을 때 하나님께 영광을 돌리고, 책망을 받을 때 배울 마음을 주소서. 낮아져 섬기신 주님을 닮아, 오늘도 겸손히 사랑하고 순종하게 하소서. 아멘.",
		thBody: "ข้าแต่พระคริสต์ผู้ถ่อมพระทัย ขอทรงเมตตาความหยิ่งในใจของเรา เรามักคิดว่าของประทานที่ได้รับเป็นของตนเอง คิดว่าตนดีกว่าผู้อื่น และไม่ชอบฟังคำตักเตือน ขอให้ต่อหน้ากางเขน เราเห็นว่าไม่มีอะไรเลยหากปราศจากพระคุณ เมื่อได้รับคำชม ขอให้ถวายพระสิริแด่พระเจ้า เมื่อได้รับคำตักเตือน ขอให้มีใจเรียนรู้ ขอให้เราเป็นเหมือนองค์พระผู้เป็นเจ้าผู้ทรงถ่อมลงเพื่อรับใช้ และวันนี้ให้รักกับเชื่อฟังอย่างถ่อมใจ อาเมน."
	},
	{
		day: 28,
		sourceTitle: "Against Idleness and Sloth",
		koTitle: "게으름을 이기는 기도",
		thTitle: "คำอธิษฐานต่อต้านความเกียจคร้านและความเฉื่อยชา",
		koBody: "부지런하신 하나님, 우리를 게으름과 무기력에서 건져 주소서. 해야 할 선한 일을 미루고, 시간을 헛되이 쓰며, 책임을 남에게 넘기는 죄를 용서하소서. 쉼이 필요할 때는 겸손히 쉬게 하시되, 핑계로 도망치지 않게 하소서. 오늘 해야 할 일을 분별하고 성실히 감당할 힘을 주소서. 우리의 수고가 자기 의가 아니라 주님께 드리는 감사의 열매가 되게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้าผู้ทรงกระทำงาน ขอทรงช่วยเราให้พ้นจากความเกียจคร้านและความเฉื่อยชา โปรดอภัยที่เรามักเลื่อนสิ่งดีที่ควรทำ ใช้เวลาเปล่าประโยชน์ และโยนความรับผิดชอบให้ผู้อื่น เมื่อจำเป็นต้องพัก ขอให้พักด้วยความถ่อมใจ แต่อย่าให้ใช้การพักเป็นข้ออ้างเพื่อหนีงาน ขอประทานกำลังให้รู้ว่าวันนี้ควรทำอะไรและทำอย่างสัตย์ซื่อ ขอให้ความเหน็ดเหนื่อยของเราไม่ใช่ความชอบธรรมของตนเอง แต่เป็นผลแห่งความขอบคุณที่ถวายแด่พระองค์ อาเมน."
	},
	{
		day: 29,
		sourceTitle: "For True Faith",
		koTitle: "참된 믿음을 구하는 기도",
		thTitle: "คำอธิษฐานขอความเชื่อแท้",
		koBody: "주님, 우리에게 말뿐인 믿음이 아니라 주님을 붙드는 참된 믿음을 주소서. 상황이 좋을 때만 믿는 믿음이 아니라, 어두운 날에도 그리스도를 신뢰하는 믿음을 주소서. 말씀을 듣고도 잊어버리는 사람이 되지 않게 하시고, 듣고 믿고 순종하는 사람이 되게 하소서. 우리의 믿음이 사랑으로 역사하고, 인내로 자라며, 마지막 날까지 주님 안에 머물게 하소서. 아멘.",
		thBody: "ข้าแต่องค์พระผู้เป็นเจ้า ขอประทานความเชื่อแท้ที่ยึดพระองค์ไว้ ไม่ใช่ความเชื่อที่มีเพียงคำพูด ขอให้เราไม่ได้เชื่อเฉพาะวันที่สถานการณ์ดี แต่ไว้วางใจพระคริสต์แม้ในวันที่มืดมน อย่าให้เราเป็นคนที่ฟังพระวจนะแล้วลืม แต่ให้ฟัง เชื่อ และเชื่อฟัง ขอให้ความเชื่อของเราทำงานผ่านความรัก เติบโตด้วยความอดทน และอยู่ในพระองค์จนถึงวันสุดท้าย อาเมน."
	},
	{
		day: 30,
		sourceTitle: "For the Acknowledging of Our Duties in Praising God and Trusting in Him",
		koTitle: "하나님을 찬양하고 의지하는 의무를 깨닫는 기도",
		thTitle: "คำอธิษฐานให้รู้หน้าที่ในการสรรเสริญและวางใจพระเจ้า",
		koBody: "하나님, 우리는 주님을 찬양하도록 지음 받았고 주님을 의지하도록 부름 받았습니다. 그러나 쉽게 사람과 재물과 자기 능력을 의지합니다. 우리의 연약함을 깨닫게 하시고, 동시에 주님의 보호하심을 깊이 알게 하소서. 입술로 찬양하고 마음으로 신뢰하며 삶으로 순종하게 하소서. 오늘 우리에게 맡겨진 작은 자리에서도 하나님이 하나님 되심을 인정하고, 주께 영광 돌리게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้า เราถูกสร้างมาเพื่อสรรเสริญพระองค์ และถูกเรียกให้วางใจพระองค์ แต่เรากลับพึ่งคน ทรัพย์สิน และความสามารถของตนเองได้ง่าย ขอให้เรารู้จักความอ่อนแอของตน และรู้ลึกถึงการปกป้องของพระองค์ ให้เราสรรเสริญด้วยริมฝีปาก วางใจด้วยใจ และเชื่อฟังด้วยชีวิต วันนี้แม้ในที่เล็ก ๆ ที่ทรงมอบหมาย ขอให้เรายอมรับว่าพระเจ้าทรงเป็นพระเจ้า และถวายพระสิริแด่พระองค์ อาเมน."
	},
	{
		day: 31,
		sourceTitle: "For the Prosperous Estate of the Whole Church",
		koTitle: "온 교회를 위한 기도",
		thTitle: "คำอธิษฐานเพื่อคริสตจักรทั้งสิ้น",
		koBody: "주 예수 그리스도의 머리 되심 아래 있는 교회를 불쌍히 여기소서. 온 땅의 성도들이 말씀 위에 굳게 서고, 거짓과 두려움에 흔들리지 않게 하소서. 목회자와 교사와 일꾼들에게 겸손과 지혜를 주시고, 교회가 세상의 영광을 구하지 않고 복음의 빛을 밝히게 하소서. 핍박받는 성도에게 위로를, 약한 교회에 힘을, 복음을 모르는 민족에게 생명의 말씀을 주소서. 주님의 교회를 지키시고 자라게 하소서. 아멘.",
		thBody: "ข้าแต่พระเจ้า ขอทรงเมตตาคริสตจักรที่อยู่ใต้พระเยซูคริสต์ผู้ทรงเป็นศีรษะ ขอให้ผู้เชื่อทั่วโลกยืนมั่นบนพระวจนะ ไม่หวั่นไหวต่อความเท็จและความกลัว โปรดประทานความถ่อมใจและสติปัญญาแก่ศิษยาภิบาล ครู และผู้รับใช้ ขอให้คริสตจักรไม่แสวงหาศักดิ์ศรีของโลก แต่ส่องสว่างด้วยข่าวประเสริฐ โปรดปลอบใจผู้ถูกข่มเหง เสริมกำลังคริสตจักรที่อ่อนแอ และประทานพระวจนะแห่งชีวิตแก่ชนชาติที่ยังไม่รู้จักพระองค์ อาเมน."
	}
];
function getDeringPrayerByDay(day) {
	return deringPrayers.find((prayer) => prayer.day === day) ?? deringPrayers[0];
}
function localizedDeringPrayerTitle(language, prayer) {
	if (language === "th") return prayer.thTitle;
	if (language === "ko") return prayer.koTitle;
	return prayer.sourceTitle;
}
function localizedDeringPrayerBody(language, prayer) {
	if (language === "th") return prayer.thBody;
	if (language === "ko") return prayer.koBody;
	return "";
}
//#endregion
//#region src/pages/[lang]/index.astro
var _lang__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://tflm.pages.dev");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const langParam = Astro.params.lang;
	if (!isLanguage(langParam)) return Astro.redirect("/th/", 302);
	const lang = langParam;
	const t = copy[lang];
	const dateParts = new Intl.DateTimeFormat("en-CA", {
		timeZone: "Asia/Bangkok",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).formatToParts(/* @__PURE__ */ new Date());
	const todayKey = `${dateParts.find((part) => part.type === "year")?.value}-${dateParts.find((part) => part.type === "month")?.value}-${dateParts.find((part) => part.type === "day")?.value}`;
	const isDateKey = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
	const dateParam = Astro.url.searchParams.get("date") ?? "";
	const prayerDateParam = Astro.url.searchParams.get("prayer") ?? "";
	const selectedDevotionalDate = isDateKey(dateParam) ? dateParam : todayKey;
	const selectedPrayerDate = isDateKey(prayerDateParam) ? prayerDateParam : todayKey;
	const shiftDate = (value, offset) => {
		const shifted = /* @__PURE__ */ new Date(`${value}T00:00:00Z`);
		shifted.setUTCDate(shifted.getUTCDate() + offset);
		return shifted.toISOString().slice(0, 10);
	};
	const previousDevotionalDate = shiftDate(selectedDevotionalDate, -1);
	const nextDevotionalDate = shiftDate(selectedDevotionalDate, 1);
	const previousPrayerDate = shiftDate(selectedPrayerDate, -1);
	const nextPrayerDate = shiftDate(selectedPrayerDate, 1);
	const selectedPrayer = getDeringPrayerByDay(Math.min(31, Math.max(1, Number(selectedPrayerDate.slice(8, 10)) || 1)));
	const prayerCopy = deringPrayerLabels[lang];
	const prayerTitle = localizedDeringPrayerTitle(lang, selectedPrayer);
	const prayerBody = localizedDeringPrayerBody(lang, selectedPrayer);
	const prayerDayLabel = lang === "th" ? `วันที่ ${selectedPrayer.day}` : lang === "ko" ? `${selectedPrayer.day}일차` : `Day ${selectedPrayer.day}`;
	const locale = lang === "th" ? "th-TH" : lang === "ko" ? "ko-KR" : "en-US";
	const selectedDateForLabel = /* @__PURE__ */ new Date(`${selectedDevotionalDate}T00:00:00+07:00`);
	const selectedDateLabel = new Intl.DateTimeFormat(locale, {
		timeZone: "Asia/Bangkok",
		dateStyle: "full"
	}).format(selectedDateForLabel);
	const formatDevotionalDateLabel = (value) => {
		const dateKey = value && isDateKey(value) ? value : selectedDevotionalDate;
		return new Intl.DateTimeFormat(locale, {
			timeZone: "Asia/Bangkok",
			dateStyle: "full"
		}).format(/* @__PURE__ */ new Date(`${dateKey}T00:00:00+07:00`));
	};
	const formatDevotionalShareDateLabel = (value) => {
		const dateKey = value && isDateKey(value) ? value : selectedDevotionalDate;
		const [, month = "", day = ""] = dateKey.split("-");
		if (lang === "ko") return `${Number(month)}월 ${Number(day)}일`;
		const date = /* @__PURE__ */ new Date(`${dateKey}T00:00:00+07:00`);
		return new Intl.DateTimeFormat(locale, {
			timeZone: "Asia/Bangkok",
			month: "long",
			day: "numeric"
		}).format(date);
	};
	const devotionals = await listPublishedResources(lang, {
		type: "devotional",
		date: selectedDevotionalDate,
		limit: 3
	});
	const devotionalUrl = (value) => `/${lang}/?date=${value}&prayer=${selectedPrayerDate}#daily-devotional`;
	const prayerUrl = (value) => `/${lang}/?date=${selectedDevotionalDate}&prayer=${value}#daily-prayer`;
	const c = {
		th: {
			welcome: "สำหรับผู้ที่อยากรู้จักพระเยซู",
			gospelTitle: "เรื่องจริง",
			gospelBody: "วิดีโอสั้นสำหรับผู้ที่ยังไม่เชื่อหรือเพิ่งเริ่มสนใจคริสเตียน เพื่อเข้าใจเรื่องราวสำคัญของพระเจ้า มนุษย์ บาป และความหวังในพระเยซูคริสต์",
			more: "รู้จักพระเยซูมากขึ้น",
			moreBody: "เรียนรู้เรื่องพระเยซูและข่าวประเสริฐอย่างเป็นขั้นตอนผ่านชุดวิดีโอภาษาไทย",
			playlistAction: "ดูเพลย์ลิสต์",
			today: "ใคร่ครวญพระกิตติคุณ 365 วัน",
			devotion: "ใคร่ครวญพระกิตติคุณ 365 วัน",
			prayerDownload: "ดาวน์โหลดคำอธิษฐาน 31 วัน",
			noDevotion: "ยังไม่มีบทใคร่ครวญสำหรับวันนี้ ผู้ดูแลสามารถลงเนื้อหาล่วงหน้าและระบบจะแสดงอัตโนมัติตามวันที่",
			prayerVideo: "ใคร่ครวญและอธิษฐาน",
			prayerVideoBody: "วิดีโอล่าสุดจากเพลย์ลิสต์ CGNtv จะแสดงโดยอัตโนมัติ",
			autoTranslation: "ฉบับแปลอัตโนมัติด้วย AI",
			archive: "ดูเนื้อหาวันก่อน",
			support: "ร่วมสนับสนุน",
			supportBody: "เงินสนับสนุนจะใช้สำหรับค่าใช้จ่ายในการดำเนินเว็บไซต์และการพัฒนาสื่อพระคัมภีร์",
			saveSupportQr: "บันทึกรูป QR สำหรับการสนับสนุน",
			contact: "ติดต่อทาง LINE",
			lineId: "LINE ID: sunnyyongjin",
			saveLineQr: "บันทึกรูป QR LINE",
			communityLabel: "ชุมชน Facebook สาธารณะ",
			communityTitle: "ชุมชน Truth for Life and Mission",
			communityBody: "พื้นที่สำหรับผู้ใช้ภาษาไทย ภาษาเกาหลี และภาษาอังกฤษ เพื่อแบ่งปันสื่อคริสเตียน ถามคำถาม และมีสามัคคีธรรมร่วมกัน",
			communityAction: "เข้าร่วมกลุ่ม Facebook"
		},
		ko: {
			welcome: "예수님을 처음 알아가는 분을 위해",
			gospelTitle: "특별한 이야기",
			gospelBody: "아직 믿음이 없거나 기독교가 처음인 분들을 위한 짧은 소개 영상입니다. 하나님, 인간, 죄, 그리고 예수 그리스도 안에 있는 소망의 이야기를 쉽게 들을 수 있습니다. 태국어 영상은 언어선택을 태국어로 하면 볼 수 있습니다.",
			more: "예수님을 더 알아가기",
			moreBody: "태국어 영상 재생목록을 통해 예수님과 복음에 대해 차근차근 배울 수 있습니다.",
			playlistAction: "재생목록 보기",
			today: "365일 복음 묵상",
			devotion: "365일 복음 묵상",
			prayerDownload: "31일 기도문 다운 받기",
			noDevotion: "오늘 등록된 묵상이 없습니다. 관리자가 미래 날짜로 미리 등록하면 해당 날짜에 자동으로 표시됩니다.",
			prayerVideo: "매일 말씀 묵상",
			prayerVideoBody: "CGNtv 재생목록의 최신 영상이 자동으로 표시됩니다.",
			autoTranslation: "AI 자동 번역본",
			archive: "지난 날짜 자료 보기",
			support: "사이트 후원",
			supportBody: "후원금은 사이트 운영과 성경·신학 자료 개발에 사용됩니다.",
			saveSupportQr: "후원 QR 그림 저장",
			contact: "LINE으로 연락하기",
			lineId: "LINE ID: sunnyyongjin",
			saveLineQr: "LINE QR 그림 저장",
			communityLabel: "공개 Facebook 그룹",
			communityTitle: "Truth for Life and Mission 사용자 모임",
			communityBody: "태국어, 한국어, 영어 사용자가 기독교 자료를 나누고 질문하며 함께 교제하는 공개 모임입니다.",
			communityAction: "Facebook 그룹 참여하기"
		},
		en: {
			welcome: "For those beginning to explore Jesus",
			gospelTitle: "The Story",
			gospelBody: "A short introduction for those who do not yet believe or are just beginning to explore Christianity, presenting the story of God, humanity, sin, and hope in Jesus Christ.",
			more: "Know Jesus more",
			moreBody: "Continue learning about Jesus and the Gospel through this Thai video series.",
			playlistAction: "View playlist",
			today: "365-Day Gospel Devotional",
			devotion: "365-Day Gospel Devotional",
			prayerDownload: "Download the 31-day prayer PDF",
			noDevotion: "No devotional is scheduled for today. An administrator can publish future dates in advance and they will appear automatically.",
			prayerVideo: "Devotion & Prayer",
			prayerVideoBody: "The newest video in the CGNtv playlist appears automatically.",
			autoTranslation: "AI automatic translation",
			archive: "Browse previous days",
			support: "Support the work",
			supportBody: "Support is used for website operation and biblical resource development.",
			saveSupportQr: "Save support QR image",
			contact: "Contact via LINE",
			lineId: "LINE ID: sunnyyongjin",
			saveLineQr: "Save LINE QR image",
			communityLabel: "Public Facebook group",
			communityTitle: "Truth for Life and Mission Community",
			communityBody: "A public community for Thai, Korean, and English-speaking users to share Christian resources, ask questions, and enjoy fellowship.",
			communityAction: "Join the Facebook group"
		}
	}[lang];
	const gospelVideo = {
		th: "ioaY2J-1NYI",
		ko: "DIIvLYM-6ig",
		en: "f0gfIvN9zv4"
	};
	const knowJesusPlaylistUrl = "https://www.youtube.com/playlist?list=PLT7MyT0j5722UpzJaoDW6_YjJ8HZ7ciMb";
	const cgnThaiDailyPlaylistUrl = "https://www.youtube.com/playlist?list=PL0CU1smVnz90Mhw_iuDkoOHr85UAsKg3q";
	function homeDevotionalBody(body) {
		return localizedGospelDevotionalBody(lang, body);
	}
	function plainText(value) {
		return (value ?? "").replace(/<[^>]+>/g, " ").replace(/\[[^\]]+\]\([^)]+\)/g, " ").replace(/[#*_>`~]/g, "").replace(/\s+/g, " ").trim();
	}
	function firstTwoSentences(value) {
		const text = plainText(value);
		if (!text) return "";
		const sentences = text.match(/[^.!?。！？]+[.!?。！？]+/g)?.map((item) => item.trim()).filter(Boolean) ?? [];
		if (sentences.length >= 2) return sentences.slice(0, 2).join(" ");
		if (sentences.length === 1) return sentences[0];
		return text.slice(0, 180).trim();
	}
	function devotionalShareLabel(value) {
		const dateLabel = formatDevotionalShareDateLabel(value);
		if (lang === "ko") return `[${dateLabel} 복음묵상]`;
		if (lang === "th") return `[${dateLabel} ใคร่ครวญพระกิตติคุณ]`;
		return `[${dateLabel} Gospel Devotional]`;
	}
	function devotionalShareTitle(title, value) {
		return `${devotionalShareLabel(value)} ${title}`;
	}
	function devotionalShareDescription(item) {
		const preview = firstTwoSentences(homeDevotionalBody(item.body) || item.summary);
		if (!preview) return lang === "ko" ? "[이어서 읽기]" : lang === "th" ? "[อ่านต่อ]" : "[Read more]";
		if (lang === "ko") return `${preview} ... [이어서 읽기]`;
		if (lang === "th") return `${preview} ... [อ่านต่อ]`;
		return `${preview} ... [Read more]`;
	}
	const featuredDevotional = devotionals[0];
	return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, {
		"lang": lang,
		"current": "home",
		"title": featuredDevotional ? devotionalShareTitle(featuredDevotional.title, selectedDevotionalDate) : void 0,
		"description": featuredDevotional ? devotionalShareDescription(featuredDevotional) : void 0
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="gospel-hero"><div class="container gospel-hero-grid"><div class="gospel-copy"><p class="eyebrow">${c.welcome}</p><h1>${c.gospelTitle}</h1><p>${c.gospelBody}</p></div><div class="hero-video-share"><div id="gospel-video" class="video-frame"><iframe${addAttribute(`https://www.youtube-nocookie.com/embed/${gospelVideo[lang]}?rel=0`, "src")}${addAttribute(c.gospelTitle, "title")} loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `https://www.youtube.com/watch?v=${gospelVideo[lang]}`,
		"title": c.gospelTitle
	})}</div></div></section><div class="container search-band home-search"><form class="search-form"${addAttribute(`/${lang}/search/`, "action")} method="get" role="search"><input name="q" type="search" required${addAttribute(t.searchPlaceholder, "placeholder")}${addAttribute(t.searchPlaceholder, "aria-label")}><button class="button" type="submit">${t.searchAction}</button></form></div><section class="section"><div class="container video-feature-grid"><div><p class="eyebrow">Next step</p><h2>${c.more}</h2><p>${c.moreBody}</p></div><div class="video-feature-media"><div class="video-frame"><iframe id="know-jesus-player" src="https://www.youtube-nocookie.com/embed/fM9LpkRLcuE?list=PLT7MyT0j5722UpzJaoDW6_YjJ8HZ7ciMb&index=1&rel=0"${addAttribute(c.more, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row"><a id="know-jesus-playlist-link" class="button secondary playlist-link-button" href="https://www.youtube.com/watch?v=fM9LpkRLcuE&list=PLT7MyT0j5722UpzJaoDW6_YjJ8HZ7ciMb&index=1" target="_blank" rel="noopener noreferrer">${c.playlistAction} <span class="playlist-external-mark" aria-hidden="true">↗</span></a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": knowJesusPlaylistUrl,
		"title": c.more
	})}</div></div></div></section><script>
    (() => {
      const playlistId = "PLT7MyT0j5722UpzJaoDW6_YjJ8HZ7ciMb";
      const videoIds = [
        "fM9LpkRLcuE", "lfHMNLz73Tk", "Wb-ijkUEctU", "knGTLoFZQ0k", "BBEyoQdRByA",
        "7OJ6Q-LWY2M", "VyEJeh4UCeU", "LuQrOja3RuU", "3gmhxg_AfKE", "DrPOlqpUyTg",
        "YG4n685qci4", "NUUpnhf2HXk", "kbJesQ0q9-Q", "oVqO4TmGloI", "NYJv2fULsKg",
        "yidZ0vjvduI", "Z5QrgUKNcbI", "SQ0c5aEzYkw", "whHhNjypbjA", "jLNwVMMUsDs",
        "iUteWiHompU", "HxizR2MfUGI", "z8dLm4PGmbw", "GKltXK4LOmY", "MbdeyeRSyMg",
        "yEoYRP-rf88", "kRpO6QwAoLY", "6SqVwqCWDvk", "cjlp1umNo5A"
      ];
      const frame = document.querySelector("#know-jesus-player");
      if (!(frame instanceof HTMLIFrameElement)) return;
      const randomIndex = Math.floor(Math.random() * videoIds.length);
      const selectedVideoId = videoIds[randomIndex];
      frame.src = \`https://www.youtube-nocookie.com/embed/\${selectedVideoId}?list=\${playlistId}&index=\${randomIndex + 1}&rel=0\`;
      const playlistLink = document.querySelector("#know-jesus-playlist-link");
      if (playlistLink instanceof HTMLAnchorElement) playlistLink.href = \`https://www.youtube.com/watch?v=\${selectedVideoId}&list=\${playlistId}&index=\${randomIndex + 1}\`;
    })();
  <\/script><section class="section soft today-section home-reflection-section"><div class="container"><div class="section-heading today-heading"><div><p class="eyebrow">${selectedDateLabel}</p><h2>${c.today}</h2></div></div><div class="home-devotional-stack"><article class="today-card devotional-today home-devotional-full" id="daily-devotional">${devotionals.length ? renderTemplate`<div class="devotional-archive-list home-devotional-archive-list">${devotionals.map((item) => renderTemplate`<section class="devotional-reading-card home-devotional-entry"${addAttribute(`home-devotional-${item.content_date ?? selectedDevotionalDate}-${item.series_slot ?? item.id}`, "id")}><p class="type-pill">${formatDevotionalDateLabel(selectedDevotionalDate)}</p><h4 class="devotional-entry-title">${item.title}</h4>${item.summary && renderTemplate`<p class="devotional-summary">${item.summary}</p>`}<div class="devotional-body">${homeDevotionalBody(item.body)}</div>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": `/${lang}/?date=${selectedDevotionalDate}#daily-devotional`,
		"title": `${devotionalShareLabel(selectedDevotionalDate)}\n${item.title}`,
		"description": devotionalShareDescription(item)
	})}</section>`)}</div>` : renderTemplate`<p class="empty-copy">${c.noDevotion}</p>`}<nav class="devotional-day-navigation devotional-bottom-navigation"${addAttribute(c.today, "aria-label")}><a class="button secondary"${addAttribute(devotionalUrl(previousDevotionalDate), "href")}${addAttribute(lang === "th" ? "วันก่อนหน้า" : lang === "ko" ? "이전 날짜" : "Previous day", "aria-label")}>← <span>${lang === "th" ? "วันก่อนหน้า" : lang === "ko" ? "이전 날짜" : "Previous day"}</span></a><a class="button secondary"${addAttribute(devotionalUrl(nextDevotionalDate), "href")}${addAttribute(lang === "th" ? "วันถัดไป" : lang === "ko" ? "다음 날짜" : "Next day", "aria-label")}><span>${lang === "th" ? "วันถัดไป" : lang === "ko" ? "다음 날짜" : "Next day"}</span> →</a></nav></article><section class="dering-prayer-section home-dering-prayer-section" id="daily-prayer" aria-labelledby="dering-prayer-heading"><div class="dering-prayer-heading"><p class="eyebrow">${prayerCopy.subtitle}</p><h2 id="dering-prayer-heading">${prayerCopy.title}</h2></div>${lang === "en" ? renderTemplate`<article class="dering-prayer-card"><h3>${prayerCopy.title}</h3><p class="dering-prayer-body">${deringPrayerIntro.en}</p><a class="button secondary playlist-link-button"${addAttribute(deringPrayerSourceUrl, "href")} target="_blank" rel="noopener noreferrer">${prayerCopy.monergism} <span class="playlist-external-mark" aria-hidden="true">↗</span></a><p class="dering-prayer-author-note">${deringPrayerIntro[lang]}</p><a class="button secondary download-button dering-prayer-download" href="/downloads/edward-dering-31-daily-prayers-ko-th.pdf" download>${c.prayerDownload}</a></article>` : renderTemplate`<article class="dering-prayer-card"${addAttribute(`dering-prayer-${selectedPrayer.day}`, "id")}><div class="dering-prayer-card-top"><span class="type-pill">${prayerDayLabel}</span><span class="source-attribution">${prayerCopy.sourcePrefix}: ${selectedPrayer.sourceTitle}</span></div><h3>${prayerTitle}</h3><div class="dering-prayer-body">${prayerBody}</div><nav class="dering-prayer-navigation"${addAttribute(prayerCopy.title, "aria-label")}><a class="button secondary"${addAttribute(prayerUrl(previousPrayerDate), "href")}${addAttribute(prayerCopy.previous, "aria-label")}>← <span>${prayerCopy.previous}</span></a><a class="button secondary"${addAttribute(prayerUrl(nextPrayerDate), "href")}${addAttribute(prayerCopy.next, "aria-label")}><span>${prayerCopy.next}</span> →</a></nav><p class="dering-prayer-author-note">${deringPrayerIntro[lang]}</p><a class="button secondary download-button dering-prayer-download" href="/downloads/edward-dering-31-daily-prayers-ko-th.pdf" download>${c.prayerDownload}</a></article>`}</section><article class="today-card home-prayer-video" id="cgn-thai-daily"><span class="type-pill">CGN THAI</span><h3>${c.prayerVideo}</h3><div class="video-frame compact"><iframe src="https://www.youtube-nocookie.com/embed/videoseries?list=PL0CU1smVnz90Mhw_iuDkoOHr85UAsKg3q"${addAttribute(c.prayerVideo, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="video-action-row"><a class="button secondary playlist-link-button cgn-playlist-link-button"${addAttribute(cgnThaiDailyPlaylistUrl, "href")} target="_blank" rel="noopener noreferrer">${c.playlistAction}</a>${renderComponent($$result, "ShareButtons", $$ShareButtons, {
		"lang": lang,
		"url": cgnThaiDailyPlaylistUrl,
		"title": c.prayerVideo
	})}</div></article></div></div></section>` })}`;
}, "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/index.astro", void 0);
var $$file = "/Users/udmission/Documents/Codex/2026-08-08/new-chat-3/truth-for-life-and-mission/src/pages/[lang]/index.astro";
var $$url = "/[lang]";
//#endregion
//#region \0virtual:astro:page:src/pages/[lang]/index@_@astro
var page = () => _lang__exports;
//#endregion
export { page };
