-- Generated from the reviewed Thai July devotional PDF.
PRAGMA foreign_keys = ON;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-01', 'published', '2026-07-01', 1, 'thaigodpleasing@naver.com', '2026-07-01T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'อย่าฟังเสียงความท้อแท้', '', 'ความท้อแท้มักพูดกับหัวใจของเราราวกับเป็นความจริง เมื่อเราต่อสู้กับบาป เจ็บปวดในความสัมพันธ์เหนื่อยกับครอบครัว หรือพบความล้มเหลว เราอาจรู้สึกเหมือนพระเจ้าทรงลืมเราแล้ว แต่เสียงของความท้อแท้ไม่ใช่เสียงของความจริง

ทุกวันในชีวิตของเราไม่ใช่เรื่องบังเอิญสำหรับพระเจ้า ก่อนที่เราจะมีชีวิต พระองค์ทรงรู้จักวันเวลาของเราแล้ว และทรงถือเรื่องราวชีวิตของเราไว้ด้วยพระปัญญาและพระคุณ แม้ความทุกข์ที่เราไม่คาดคิด ก็ไม่เคยทำให้พระเจ้าตกพระทัย

ผู้เชื่อในพระคริสต์ไม่ได้เขียนเรื่องราวชีวิตของตนเองตามลำพัง พระผู้ช่วยให้รอดของเราทรงเป็นองค์พระผู้เป็นเจ้า ผู้ทรงครอบครองทุกสิ่ง พระองค์ทรงรู้ว่าอะไรดีที่สุด และทรงทำให้สิ่งนั้นสำเร็จตามพระประสงค์ของพระองค์

ดังนั้น เมื่อความท้อแท้เข้ามาเขย่าหัวใจ อย่ามองเพียงสถานการณ์ตรงหน้า แต่จงมองไปที่พระเจ้าผู้ทรงครอบครองชีวิตของเรา อนาคตของเราไม่ได้อยู่ในมือของความกลัว แต่อยู่ในพระหัตถ์ของพระเจ้าผู้ทรงสัตย์ซื่อ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงครอบครองทุกสิ่ง ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงรู้จักทุกวันในชีวิตของข้าพระองค์ และทรงนำชีวิตของข้าพระองค์ด้วยพระปัญญาและพระคุณ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ฟังเสียงความท้อแท้มากกว่าฟังพระสัญญาของพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงสิ้นพระชนม์และทรงเป็นขึ้นจากความตาย เพื่อประทานความหวังที่มั่นคงแก่ข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงเปิดตาของข้าพระองค์ ให้มองเห็นพระคุณของพระองค์ในวันนี้ และดำเนินชีวิตด้วยความหวังในข่าวประเสริฐ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-01'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-02', 'published', '2026-07-02', 1, 'thaigodpleasing@naver.com', '2026-07-02T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'มองผ่านสิ่งทรงสร้างไปยังพระผู้สร้าง', '', 'โลกนี้เต็มไปด้วยสิ่งดีงามที่พระเจ้าประทานให้ อาหาร บ้าน ธรรมชาติ ทรัพย์สิน ความสัมพันธ์ และความสำเร็จ ล้วนเป็นของประทานจากพระเจ้าผู้ทรงดี ปัญหาไม่ได้อยู่ที่ของประทานเหล่านี้ แต่อยู่ที่หัวใจของเรา

เรามักรักของประทานมากกว่าพระเจ้าผู้ประทานสิ่งเหล่านั้น เมื่อชีวิตสบายและมีมากพอ เราอาจลืมพระเจ้า และพยายามหาความพอใจ ความมั่นคง และความหมายจากสิ่งที่พระองค์ทรงสร้าง นี่คือการนมัสการที่เดินผิดทาง

พระเจ้าไม่ได้ประทานความงดงามของโลกนี้เพื่อให้สิ่งเหล่านั้นมาแทนที่พระองค์ แต่เพื่อให้สิ่งดีเหล่านั้นชี้นำหัวใจของเราไปยังพระเจ้าผู้ทรงเป็นแหล่งแห่งชีวิตและความดีทั้งสิ้น

ในพระเยซูคริสต์ พระคุณเปิดตาของเราอีกครั้ง เราจึงไม่หยุดอยู่ที่สง่าราศีอันเล็กน้อยของสิ่งทรงสร้างแต่เรียนรู้ที่จะมองเห็นพระสิริของพระเจ้า ผู้เดียวที่สามารถทำให้หัวใจของเราอิ่มเอมอย่างแท้จริง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเต็มด้วยพระสิริ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงสร้างทุกสิ่งและประทานสิ่งดีมากมายแก่ข้าพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์รักของประทานมากกว่ารักพระองค์ และแสวงหาความพอใจจากสิ่งทรงสร้างแทนพระเจ้า

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงนำข้าพระองค์กลับมาสู่การนมัสการที่แท้จริง ขอให้พระวิญญาณบริสุทธิ์ทรงรักษาหัวใจของข้าพระองค์ ให้ใช้สิ่งดีในโลกนี้ด้วยความขอบพระคุณ และให้สิ่งเหล่านั้นนำข้าพระองค์ไปสรรเสริญพระองค์มากขึ้น

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-02'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-03', 'published', '2026-07-03', 1, 'thaigodpleasing@naver.com', '2026-07-03T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระเยซูทรงชำระหนี้บาปทั้งหมดแล้ว', '', 'เรามักคิดว่าเราต้องทำดีมากพอ เพื่อจะได้รับความรัก การยอมรับ หรือความใกล้ชิดจากพระเจ้า เราอาจรู้สึกว่าต้องพิสูจน์ตัวเองให้ดีพอก่อนจึงจะเข้ามาหาพระองค์ได้ แต่ความคิดแบบนี้ไม่ใช่ข่าวประเสริฐต่อหน้าพระเจ้า ไม่มีใครสามารถชำระหนี้บาปของตนเองได้ ธรรมบัญญัติไม่ได้เป็นใบเสร็จที่บอกว่าเราชอบธรรมแล้ว แต่เป็นกระจกที่ทำให้เราเห็นว่าเราเป็นคนบาปที่ต้องการพระคุณอย่างยิ่ง

แต่พระเยซูคริสต์ทรงชำระหนี้บาปของเราอย่างสมบูรณ์บนไม้กางเขน พระองค์ไม่ได้เพียงปกปิดบาปของเราไว้ชั่วคราว แต่ทรงรับโทษบาปแทนเราอย่างแท้จริง ดังนั้น ผู้ที่อยู่ในพระคริสต์จึงไม่มีหนี้บาปเหลืออยู่ต่อหน้าพระเจ้า

เพราะฉะนั้น เราไม่จำเป็นต้องซ่อนตัวด้วยความกลัว เมื่อเราทำบาป เราไม่ต้องสิ้นหวังหรือแกล้งทำเหมือนไม่มีอะไรเกิดขึ้น แต่สามารถเข้ามาหาพระเยซู ผู้ทรงชำระหนี้บาปแล้ว และรับพระเมตตาจากพระองค์

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงชอบธรรมและเปี่ยมด้วยพระเมตตา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงชำระหนี้บาปของข้าพระองค์อย่างสมบูรณ์ในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์พยายามได้รับความรักของพระองค์ด้วยการกระทำของตนเอง หรือซ่อนตัวด้วยความกลัวเมื่อทำบาป

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงรับโทษบาปแทนข้าพระองค์บนไม้กางเขน ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้ข้าพระองค์มั่นใจในข่าวประเสริฐ และดำเนินชีวิตด้วยความเชื่อ ความถ่อมใจ และการเชื่อฟัง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-03'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-04', 'published', '2026-07-04', 1, 'thaigodpleasing@naver.com', '2026-07-04T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระเจ้าผู้ไม่ทรงอ่อนล้าทรงเป็นกำลังของเรา', '', 'ชีวิตในโลกที่ตกอยู่ในบาปทำให้เราเหน็ดเหนื่อยได้ง่าย การต่อสู้กับบาป การดูแลครอบครัว การรักและให้อภัยผู้อื่น และการรับผิดชอบในแต่ละวัน ล้วนทำให้หัวใจและร่างกายของเราอ่อนแรง บางครั้งแม้แต่การดำเนินชีวิตคริสเตียนก็ดูยากและหนัก

แต่ความหวังของเราอยู่ในพระเจ้าผู้ไม่ทรงอ่อนล้า พระคัมภีร์สอนว่า ความช่วยเหลือของเรามาจากพระยาห์เวห์ ผู้ทรงสร้างฟ้าสวรรค์และแผ่นดินโลก พระองค์ไม่ทรงง่วงและไม่ทรงหลับ แต่ทรงเฝ้าดูแลประชากรของพระองค์เสมอ

เราอ่อนแอและเหนื่อยง่าย แต่พระเจ้าไม่เคยหมดแรง เราต้องพักผ่อน แต่การดูแลของพระองค์ไม่เคยหยุด พระองค์ทรงรักษาการเข้าออกของประชากรของพระองค์ ตั้งแต่บัดนี้จนถึงนิรันดร์

ดังนั้น เมื่อเราเหนื่อย อย่าพยายามบีบกำลังจากตนเองให้มากขึ้น แต่จงวิ่งเข้าหาพระเจ้า พระผู้รักษาของเราไม่เคยหลับ และพระเยซูคริสต์ พระผู้ช่วยให้รอดของเรา ทรงเป็นกำลังของเราในวันนี้

คำอธิษฐาน

พระบิดาเจ้าผู้ไม่ทรงง่วงและไม่ทรงหลับ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเฝ้าดูแลและประคองลูกของพระองค์เสมอ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์เหนื่อยแล้วพยายามพึ่งกำลังของตนเองมากกว่าพึ่งพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงรักษาข้าพระองค์ไว้ในพระคุณของพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงฟื้นกำลังใจของข้าพระองค์ และช่วยให้ข้าพระองค์วางใจในพระเจ้าผู้ไม่ทรงอ่อนล้า

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-04'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-05', 'published', '2026-07-05', 1, 'thaigodpleasing@naver.com', '2026-07-05T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ความอ่อนแอเปิดทางให้เรามองเห็นพระคุณ', '', 'ปัญหาใหญ่ที่สุดของเราไม่ใช่ความอ่อนแอ แต่คือการหลอกตัวเองว่าเราเข้มแข็งพอ เราไม่อยากยอมรับว่าอ่อนแอ ไม่อยากให้คนอื่นเห็นว่าเราต้องการความช่วยเหลือ และมักทำเหมือนว่าเราจัดการชีวิตได้ด้วยตนเอง

แต่พระเจ้าไม่ได้ทรงสร้างเราให้เป็นคนที่อยู่ได้โดยไม่ต้องพึ่งพระองค์ เราถูกสร้างมาให้พึ่งพระเจ้า และในพระเยซูคริสต์ เราถูกนำกลับมาสู่ชีวิตที่พึ่งพระคุณของพระองค์ พระเจ้าไม่ทรงตกพระทัยเมื่อเห็นความอ่อนแอของเรา

ข่าวประเสริฐคือเรื่องของพระผู้ช่วยให้รอดผู้ทรงเข้มแข็ง ผู้ประทานพระคุณและกำลังให้แก่คนอ่อนแอบางครั้งพระเจ้าทรงให้เรายืนอยู่ต่อหน้าสิ่งที่เราแบกรับเองไม่ได้ เพื่อให้เราหยุดพึ่งตนเองและหันไปพึ่งฤทธิ์อำนาจของพระคริสต์

ดังนั้น อย่ากลัวที่จะยอมรับความอ่อนแอ การยอมรับว่าเราอ่อนแอไม่ใช่ความสิ้นหวัง แต่เป็นประตูที่พาเราไปพบพระคุณ เมื่อกำลังของเราสิ้นสุดลง เราสามารถพบพระผู้ช่วยให้รอดผู้ทรงเข้มแข็งและเปี่ยมด้วยพระเมตตา

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงฤทธิ์ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ประทานพระคุณแก่คนอ่อนแอ และทรงเป็นกำลังแท้จริงของข้าพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ปิดบังความอ่อนแอและพึ่งกำลังของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเข้ามาหาข้าพระองค์ในความอ่อนแอ และประทานพระคุณที่เพียงพอขอให้พระวิญญาณบริสุทธิ์ทรงทำให้ข้าพระองค์ถ่อมใจ ยอมรับความอ่อนแอ และพึ่งกำลังของพระองค์ในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-05'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-06', 'published', '2026-07-06', 1, 'thaigodpleasing@naver.com', '2026-07-06T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระคุณไม่เพียงอภัย แต่ประทานกำลัง', '', 'พระคุณของข่าวประเสริฐไม่ได้หยุดอยู่แค่การอภัยบาปและการรับเราไว้เท่านั้น พระคุณเดียวกันนี้ยังยกเราให้ลุกขึ้น และประทานกำลังให้เราดำเนินชีวิตตามการทรงเรียกของพระเจ้าในวันนี้

เรามักกลัวเมื่อพระเจ้าทรงเรียกให้เราเชื่อฟัง เรารู้สึกว่าเราอ่อนแอ ไม่พร้อม และไม่สามารถทำได้ แต่พระเจ้าไม่ทรงเรียกเราแล้วปล่อยให้เราต้องพึ่งทรัพยากรของตนเองตามลำพัง

พระเจ้าไม่ได้บอกให้เรารอจนมองเห็นกำลังทั้งหมดก่อน แล้วค่อยเชื่อฟัง แต่ทรงเรียกเราให้ก้าวออกไปด้วยความเชื่อ เพราะพระองค์ทรงอยู่กับเรา ทรงอยู่เพื่อเรา และทรงทำงานในเราโดยพระวิญญาณบริสุทธิ์

ฤทธิ์อำนาจของพระเจ้าเป็นฤทธิ์อำนาจที่ครอบครองทั่วทั้งโลก พระเจ้าผู้ทรงยิ่งใหญ่นี้ทรงรู้จักลูกของพระองค์ และทรงประทานพระคุณที่จำเป็นในเวลาที่จำเป็น ดังนั้น วันนี้จงลุกขึ้นและติดตามพระองค์ด้วยการพึ่งพระคุณ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสัตย์ซื่อและทรงฤทธิ์ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่เพียงอภัยบาปแต่ยังประทานกำลังให้ข้าพระองค์เชื่อฟัง โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองความไม่พร้อมของตนเองมากกว่ามองพระสัญญาของพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงช่วยข้าพระองค์ให้รอด และประทานพระวิญญาณบริสุทธิ์ให้ทรงสถิตอยู่ในข้าพระองค์ ขอให้ข้าพระองค์ก้าวเดินด้วยความเชื่อ ไม่ใช่ด้วยความกลัว และเชื่อฟังพระองค์ในสิ่งที่พระองค์ทรงเรียกในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-06'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-07', 'published', '2026-07-07', 1, 'thaigodpleasing@naver.com', '2026-07-07T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ความหวังได้เสด็จมาแล้ว', '', 'เรามักคิดว่าความหวังจะมาเมื่อสถานการณ์เปลี่ยนไป เมื่อปัญหาถูกแก้ไข หรือเมื่อเราเห็นหลักฐานชัดเจนว่าเรื่องทุกอย่างจะดีขึ้น แต่ความหวังที่พระคัมภีร์สอนไม่ได้เริ่มจากสภาพแวดล้อม

ความหวังแท้จริงคือบุคคลหนึ่ง และพระนามของพระองค์คือพระเยซูคริสต์ พระเยซูเสด็จมาในโลกนี้ทรงเผชิญสิ่งที่เราต้องเผชิญ และทรงชนะสิ่งที่ทำลายเรา เพื่อช่วยเราให้รอด

ผู้ที่อยู่ในพระคริสต์ไม่ใช่คนไร้ความหวัง ปัญหาของเรามักไม่ใช่การขาดความหวัง แต่เป็นการมองไม่เห็นความหวังที่พระเจ้าประทานแล้ว เราอาจมองไม่เห็นมรดกและฤทธิ์อำนาจอันยิ่งใหญ่ที่เราได้รับในพระคริสต์

ดังนั้น เราต้องขอให้พระเจ้าทรงเปิดตาใจของเรา เมื่อพระวิญญาณบริสุทธิ์เปิดตาเราให้เห็นข่าวประเสริฐ เราจะพบว่าแม้ในความทุกข์วันนี้ ความหวังในพระคริสต์ก็เป็นความหวังที่จริงและเพียงพอ

คำอธิษฐาน

พระบิดาเจ้าผู้เป็นความหวังของเรา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ประทานความหวังที่มั่นคงในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองแต่สถานการณ์ตรงหน้าและดำเนินชีวิตเหมือนคนไม่มีความหวัง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเป็นความหวังแท้จริงของข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงเปิดตาใจของข้าพระองค์ ให้เห็นมรดก พระคุณ และฤทธิ์อำนาจที่มีอยู่ในพระคริสต์ และให้ข้าพระองค์ดำเนินชีวิตด้วยความหวังในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-07'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-08', 'published', '2026-07-08', 1, 'thaigodpleasing@naver.com', '2026-07-08T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'จงคิดถึงสิ่งที่อยู่เบื้องบน', '', 'มนุษย์มองชีวิตผ่านมุมมองบางอย่างเสมอ ความคิดของเราไม่เคยเป็นกลาง สิ่งที่เราเชื่อเกี่ยวกับพระเจ้าเกี่ยวกับตัวเรา และเกี่ยวกับเป้าหมายของชีวิต จะมีอิทธิพลต่อคำพูด การตัดสินใจ และการกระทำของเราพระคัมภีร์พูดถึงสองทาง คือการคิดถึงสิ่งฝ่ายโลก และการคิดถึงสิ่งที่อยู่เบื้องบน ถ้าเรามองเพียงสิ่งฝ่ายโลก ความต้องการ ความสำเร็จ ความกลัว และสิ่งที่มองเห็นได้ในวันนี้ จะดูเหมือนเป็นทั้งหมดของชีวิต

แต่ผู้ที่เป็นขึ้นใหม่กับพระคริสต์ถูกเรียกให้แสวงหาสิ่งที่อยู่เบื้องบน นี่ไม่ได้หมายความว่าเราปฏิเสธความจริงของชีวิตประจำวัน แต่หมายความว่าเรามองทุกสิ่งผ่านเรื่องราวที่ใหญ่กว่า คือข่าวประเสริฐของพระเยซูคริสต์

วันนี้ ตารางเวลา การ ตัดสินใจ ความสัมพันธ์ และลำดับความสำคัญของเราถูกขับเคลื่อนด้วยอะไรพระคุณไม่ปล่อยให้ความคิดของเราถูกผูกไว้กับโลกนี้ แต่เปลี่ยนเราให้มองชีวิตจากมุมมองของพระคริสต์ผู้ทรงครอบครอง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นความจริง ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเปลี่ยนความคิดและทิศทางชีวิตของข้าพระองค์ในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองเพียงสิ่งฝ่ายโลกและดำเนินชีวิตตามความกลัวหรือความต้องการของตนเอง

ขอบพระคุณที่พระองค์ประทานชีวิตใหม่ในพระคริสต์ผู้ทรงเป็นขึ้นจากความตาย ขอให้พระวิญญาณบริสุทธิ์ทรงครอบครองความคิดของข้าพระองค์ ให้ข้าพระองค์คิดถึงสิ่งที่อยู่เบื้องบน และเลือกดำเนินชีวิตตามข่าวประเสริฐในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-08'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-09', 'published', '2026-07-09', 1, 'thaigodpleasing@naver.com', '2026-07-09T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บาปมักไม่ดูเหมือนบาป', '', 'ความหลอกลวงที่น่ากลัวของบาปคือ เมื่อเรากำลังทำบาป บาปมักไม่ดูเหมือนบาป มันมักทำให้ตัวเองดูเล็ก ธรรมดา และมีเหตุผล เราจึงอาจมองข้ามความน่าเกลียดและผลทำลายของมัน

พระคัมภีร์ไม่ปิดบังความร้ายแรงของบาปและความชั่ว บาปทำลายมนุษย์ บิดเบือนชีวิตที่พระเจ้าประทาน และทำให้เราห่างจากพระเจ้า บาปไม่ใช่ของเล่นและไม่ใช่เรื่องเล็ก

แต่พระคัมภีร์ไม่ได้พูดถึงความน่ากลัวของบาปเท่านั้น ไม่ว่าบาปจะใหญ่เพียงใด และความชั่วจะดูมีกำลังเพียงใด พระคุณแห่งความรอดของพระเยซูคริสต์ยิ่งใหญ่กว่า เราควรเกลียดบาปอย่างจริงจัง แต่ไม่ต้องสิ้นหวังเหมือนคนพ่ายแพ้

พระคริสต์ทรงชนะบาปและความตายแล้ว ดังนั้น เราจึงไม่ควรเล่นกับบาป แต่ก็ไม่ต้องกลัวว่าบาปจะมีอำนาจเหนือพระผู้ช่วยให้รอดของเรา ในพระคุณของพระองค์ เรามีความหวังแท้จริง

คำอธิษฐาน

พระบิดาเจ้าผู้บริสุทธิ์และทรงช่วยให้รอด ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเปิดเผยความร้ายแรงของบาป และทรงช่วยข้าพระองค์ให้พ้นจากบาปในพระคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองบาปเป็นเรื่องเล็กและแก้ตัวให้ความต้องการของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงชนะบาปและความตาย ขอให้พระวิญญาณบริสุทธิ์ประทานหัวใจที่เกลียดบาป และในเวลาเดียวกันก็มีความเชื่อที่มั่นคงในพระคุณของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-09'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-10', 'published', '2026-07-10', 1, 'thaigodpleasing@naver.com', '2026-07-10T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'เมื่อความอยากกลายเป็นความจำเป็น', '', 'เรามักเปลี่ยนสิ่งที่เราอยากได้ให้กลายเป็นสิ่งที่เราคิดว่าจำเป็น ตอนแรกมันอาจเป็นเพียงความปรารถนา แต่เมื่อเราเริ่มรู้สึกว่าอยู่ไม่ได้ถ้าไม่มีสิ่งนั้น ความปรารถนานั้นก็เริ่มครอบครองหัวใจของเรา

เมื่อความอยากกลายเป็นความจำเป็น เราจะเริ่มเรียกร้องจากพระเจ้า เราอาจคิดว่า พระเจ้าต้องประทานสิ่งนี้ให้ฉัน และเริ่มตัดสินความรักหรือความสัตย์ซื่อของพระองค์จากการที่พระองค์ประทานสิ่งนั้นให้เราหรือไม่

แต่พระเจ้าไม่เคยสัญญาว่าจะประทานทุกสิ่งที่เราอยากได้ พระองค์ทรงเป็นพระบิดาผู้รู้ว่าสิ่งใดจำเป็นอย่างแท้จริงสำหรับเรา เพราะเรามักสับสนระหว่างความอยากกับความจำเป็น เราจึงต้องการพระปัญญาและพระคุณของพระองค์

พระเยซูเสด็จมาเพื่อปลดปล่อยเราจากการนมัสการรูปเคารพในหัวใจ ข่าวประเสริฐปลดหัวใจที่ถูกความอยากผูกมัด และสอนให้เราวางใจพระบิดาผู้ทรงรู้และจัดเตรียมสิ่งที่เราต้องการจริง ๆ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงปัญญา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงรู้ว่าสิ่งใดจำเป็นสำหรับข้าพระองค์อย่างแท้จริง และทรงจัดเตรียมด้วยความดีของพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์เรียกความอยากของตนเองว่าเป็นความจำเป็น และสงสัยในความรักของพระองค์เมื่อไม่ได้สิ่งที่ต้องการ

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงปลดปล่อยข้าพระองค์จากการเป็นทาสของความอยาก ขอให้พระวิญญาณบริสุทธิ์ทรงเปลี่ยนหัวใจของข้าพระองค์ ให้ไว้วางใจพระปัญญาของพระบิดามากกว่าความต้องการของตนเอง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-10'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-11', 'published', '2026-07-11', 1, 'thaigodpleasing@naver.com', '2026-07-11T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระเจ้าทรงเป็นศูนย์กลาง ไม่ใช่เรา', '', 'ศูนย์กลางของจักรวาลไม่ใช่เรา แต่คือพระเจ้า พระองค์ทรงครอบครองฟ้าสวรรค์และแผ่นดินโลก และทรงเป็นผู้กำหนดว่า ความรัก พระปัญญา ความชอบธรรม และพระคุณคืออะไร ทุกสิ่งมาจากพระองค์ โดยพระองค์ และเพื่อพระองค์

แต่บาปทำให้เราอยากนั่งในที่ของพระเจ้า เราต้องการให้ชีวิตเป็นไปตามความต้องการของเรา ให้แผนของเราสำเร็จ และให้คนรอบข้างปรับตัวเข้ากับเรา นี่เป็นทางที่นำไปสู่ความสัมพันธ์ที่แตกร้าวและความผิดหวังในใจ

การเห็นแก่ตัวเป็นการทำงานสำคัญของบาป ยิ่งเราพยายามเป็นศูนย์กลางมากเท่าใด เราก็ยิ่งรักพระเจ้าและรักเพื่อนบ้านอย่างถูกต้องได้น้อยลงเท่านั้น ด้วยเหตุนี้เราจึงต้องการพระคุณที่ช่วยให้รอด

ในพระเยซูคริสต์ พระคุณนำเรากลับสู่ที่ที่ถูกต้อง พระเจ้าทรงเป็นศูนย์กลาง และเราเป็นผู้ที่ถูกสร้างมาให้นมัสการและพึ่งพระองค์ เมื่อเรายอมรับความจริงนี้ ชีวิตของเราก็เริ่มกลับเข้าสู่ระเบียบที่ถูกต้อง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นศูนย์กลางของทุกสิ่ง ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์สมควรได้รับพระเกียรติ อำนาจ และคำสรรเสริญทั้งหมด โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์อยากให้ชีวิตหมุนรอบความต้องการและแผนการของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงนำข้าพระองค์กลับมาสู่การนมัสการที่ถูกต้อง ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้หัวใจของข้าพระองค์ถ่อมลง และดำเนินชีวิตโดยมีพระเจ้าเป็นศูนย์กลางในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-11'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-12', 'published', '2026-07-12', 1, 'thaigodpleasing@naver.com', '2026-07-12T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'เราต้องการชุมชนแห่งความรัก', '', 'ชีวิตในโลกที่ตกอยู่ในบาปไม่ง่ายเลย ด้วยเหตุนี้ พระเจ้าไม่ได้ออกแบบชีวิตคริสเตียนให้เราเดินคนเดียว เราถูกเรียกให้เป็นกายเดียวกันในพระเยซู และถูกตั้งไว้ให้เป็นเครื่องมือแห่งพระคุณต่อกันและกัน

แต่เรามักคิดว่าคริสตจักรเป็นเพียงสถานที่ที่เราไปเข้าร่วม หรือเป็นกิจกรรมทางศาสนาบางอย่าง เราไม่อยากให้ใครรู้จักเราลึกเกินไป จึงรักษาภาพลักษณ์ว่าทุกอย่างเรียบร้อย และทำให้ความสัมพันธ์อยู่ในระดับที่ปลอดภัย

แต่สิ่งที่ไม่ถูกเปิดเผยก็ไม่สามารถรับการช่วยเหลือได้ พระเจ้าทรงใช้ชุมชนที่มีพระคริสต์เป็นศูนย์กลางเพื่อเตือนเรา ปกป้องเรา หนุนใจเรา และช่วยให้เรากลับคืนสู่พระองค์

ชุมชนคริสตจักรจึงไม่ใช่ทางเลือกเล็ก ๆ แต่เป็นความจำเป็นฝ่ายวิญญาณ ความรักและพระคุณของพระเยซูปรากฏให้เห็นในชีวิตของเราผ่านกายของพระองค์ คือคริสตจักร

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นความรัก ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเรียกข้าพระองค์เข้าสู่กายของพระคริสต์ และให้ข้าพระองค์ได้รับพระคุณผ่านชุมชนของพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์คิดว่าสามารถดำเนินชีวิตฝ่ายวิญญาณตามลำพังได้ หรือไม่ยอมเปิดใจในความสัมพันธ์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงทำให้ข้าพระองค์เป็นอวัยวะหนึ่งในกายของพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงเปิดหัวใจของข้าพระองค์ ให้รับพระคุณและแบ่งปันพระคุณในชุมชนแห่งความรัก

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-12'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-13', 'published', '2026-07-13', 1, 'thaigodpleasing@naver.com', '2026-07-13T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ตัวตนของเราไม่ได้มาจากความสำเร็จ', '', 'เรามักพยายามพิสูจน์ว่าเราเป็นใครผ่านงาน ความสำเร็จ และการยอมรับจากคนอื่น เราทำงานหนักเพื่อหาความหมาย จุดประสงค์ ความสงบ และความชื่นชมยินดี และรอให้ใครสักคนยืนยันว่าเรามีคุณค่า

แต่ในพระคริสต์ เราไม่ต้องเดินหาตัวตนของเราอีกต่อไป พระคุณของพระเจ้าเชื่อมเราเข้ากับพระองค์และพระเจ้าทรงเรียกเราว่าเป็นลูกของพระองค์

เราจึงไม่ได้ทำงานเพื่อให้ได้ตัวตน แต่ทำงานด้วยความชื่นชมยินดีในตัวตนที่พระเจ้าประทานให้แล้วคุณค่าของเราไม่ได้ตั้งอยู่บนความสำเร็จ แต่อยู่บนพระคุณที่ได้รับในพระคริสต์

ดังนั้น ความล้มเหลวไม่จำเป็นต้องทำลายเรา และความสำเร็จก็ไม่จำเป็นต้องทำให้เราหยิ่ง ในพระคริสต์ เราเป็นลูกของพระเจ้าแล้ว นี่คือความจริงที่มั่นคงกว่าสิ่งที่เราทำได้หรือทำไม่ได้

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงรับเราเป็นลูก ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ประทานตัวตนที่แท้จริงแก่ข้าพระองค์ในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์พยายามพิสูจน์คุณค่าของตนเองด้วยความสำเร็จหรือการยอมรับจากคนอื่น

ขอบพระคุณที่พระองค์ทรงเรียกข้าพระองค์ว่าเป็นลูกในพระคริสต์ ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้หัวใจของข้าพระองค์มั่นคงในพระคุณ และให้ข้าพระองค์ทำงาน รับใช้ และดำเนินชีวิตด้วยความขอบพระคุณ ไม่ใช่ด้วยความกลัวว่าจะไม่มีคุณค่า

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-13'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-14', 'published', '2026-07-14', 1, 'thaigodpleasing@naver.com', '2026-07-14T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ปัญญาแท้มาจากความสัมพันธ์กับพระคริสต์', '', 'บาปทำให้เราโง่เขลา เรามักคิดว่าเราฉลาดพอที่จะนำชีวิตของตนเอง และตีความชีวิตจากความต้องการ ประสบการณ์ หรือมาตรฐานของโลก แต่หัวใจของคนบาปบิดเบี้ยวมากกว่าที่เราคิด

ปัญญาแท้ไม่ได้มาจากประสบการณ์มากมายหรือการเรียนรู้เพียงอย่างเดียว เพราะแม้ประสบการณ์และความรู้ของเราก็ยังถูกตีความผ่านหัวใจที่ไม่สมบูรณ์ เราจึงต้องการการช่วยให้รอดจากตัวเราเองก่อน

ปัญญาเป็นผลของความสัมพันธ์ ในพระเยซูคริสต์มีขุมทรัพย์แห่งปัญญาและความรู้ทั้งหมดซ่อนอยู่พระคุณนำเราให้เข้ามามีความสัมพันธ์กับพระคริสต์ ผู้ทรงเป็นปัญญาของเรา

บัดนี้ องค์พระผู้เป็นเจ้าผู้ทรงปัญญาทรงนำเรา ตักเตือนเรา สอนเรา ปลอบโยนเรา และเปลี่ยนความต้องการกับความคิดของเราใหม่ วันนี้เราจึงควรแสวงหาปัญญาจากพระองค์ด้วยใจถ่อมและขอบพระคุณ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงปัญญา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงวางขุมทรัพย์แห่งปัญญาและความรู้ทั้งหมดไว้ในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์พึ่งประสบการณ์ ความคิด และมาตรฐานของตนเองมากกว่าพึ่งพระองค์

ขอบพระคุณพระคริสต์ ผู้ทรงเป็นปัญญาของข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้ข้าพระองค์ถ่อมใจ แสวงหาปัญญาจากเบื้องบน และเดินตามการนำของพระองค์ในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-14'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-15', 'published', '2026-07-15', 1, 'thaigodpleasing@naver.com', '2026-07-15T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'เราถูกสร้างมาให้พึ่งพระเจ้า', '', 'เรามักรู้สึกยากที่จะขอความช่วยเหลือ เราไม่อยากพูดว่าไม่รู้ ไม่อยากยอมรับว่าอ่อนแอ และอยากให้คนอื่นเห็นว่าเราพออยู่ได้ด้วยตนเอง นี่ไม่ใช่เพียงเรื่องนิสัย แต่เป็นสิ่งที่บาปทำในหัวใจของเรา

บาปปลูกความฝันเรื่องความเป็นอิสระในใจเรา มันหลอกเราว่าเราไม่จำเป็นต้องพึ่งพระเจ้าและไม่ต้องพึ่งพี่น้อง มันทำให้เราคิดว่าเรามีปัญญา กำลัง และความชอบธรรมในตัวเองมากกว่าความจริง

แต่เราไม่ได้ถูกสร้างมาให้พึ่งตนเอง เราถูกสร้างมาให้พึ่งพระเจ้า ความฝันที่จะพอเพียงในตัวเองไม่ได้เป็นเสรีภาพ แต่กลายเป็นฝันร้าย ชีวิตที่พยายามพอโดยไม่มีพระเจ้าจะเกิดผลเป็นความไม่ชอบธรรมความเท็จ และความตาย

พระคุณของพระเยซูคริสต์ช่วยเราออกจากภาพลวงตาแห่งความเป็นอิสระ พระองค์นำเรากลับเข้าสู่ความสัมพันธ์กับพระเจ้าผู้ทรงมีทุกสิ่งที่เราต้องการอย่างแท้จริง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสร้างข้าพระองค์ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงสร้างข้าพระองค์มาให้พึ่งพระองค์ และในพระคริสต์ทรงนำข้าพระองค์กลับมาหาพระองค์อีกครั้ง โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ทำเหมือนตนเองพอแล้วและไม่ต้องการพระคุณ

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงช่วยข้าพระองค์ให้พ้นจากการพึ่งตนเอง ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้ข้าพระองค์ถ่อมใจ และรู้จักพึ่งพระเจ้า รวมทั้งรับความช่วยเหลือผ่านเครื่องมือแห่งพระคุณที่พระองค์ประทาน

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-15'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-16', 'published', '2026-07-16', 1, 'thaigodpleasing@naver.com', '2026-07-16T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'การถูกนับว่าชอบธรรมเป็นรากฐานของการเปลี่ยนแปลง', '', 'การที่พระเจ้าทรงรับเรา ไม่ได้เกิดจากการที่เราปรับปรุงตัวเองจนดีพอ ตรงกันข้าม พระเจ้าทรงนับเราว่าชอบธรรมโดยพระคุณก่อน และสิ่งนี้จึงกลายเป็นรากฐานของการเปลี่ยนแปลงในชีวิตเรา การเปลี่ยนแปลงฝ่ายวิญญาณไม่ได้ทำให้เราได้รับการนับว่าชอบธรรม แต่การถูกนับว่าชอบธรรมต่างหากที่นำไปสู่การเปลี่ยนแปลง

เราไม่ได้ปฏิรูปชีวิตของตนเองก่อนแล้วจึงเข้ามาหาพระเจ้า แต่พระเจ้าทรงประทานพระบุตรของพระองค์ก่อน ทรงไถ่เรา ทรงทำให้เราเป็นประชากรของพระองค์ และทรงชำระเราให้บริสุทธิ์ จุดเริ่มต้นทั้งหมดไม่ใช่ความตั้งใจของเรา แต่คือพระคุณอันทรงอำนาจของพระเจ้า

พระคุณนี้สอนให้เราหันจากความอธรรมและตัณหาฝ่ายโลก และฝึกเราให้ดำเนินชีวิตด้วยการรู้จักบังคับตน ความชอบธรรม และความยำเกรงพระเจ้า ดังนั้น การเปลี่ยนแปลงไม่ใช่เงื่อนไขของพระคุณ แต่เป็นผลของพระคุณ

ถ้าพระเยซูคริสต์ไม่ได้ประทานพระองค์เองเพื่อเรา เราคงไม่สามารถมีความสัมพันธ์กับพระเจ้าและไม่สามารถมีชีวิตใหม่ได้ สิ่งที่ล้ำค่าที่สุดในชีวิตคริสเตียนจึงไม่ใช่สิ่งที่เราได้มาด้วยตนเอง แต่เป็นของประทานแห่งพระคุณที่เปลี่ยนเราอย่างแท้จริง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงนับคนบาปว่าชอบธรรมในพระคริสต์ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงรับข้าพระองค์ก่อน แล้วทรงเปลี่ยนชีวิตของข้าพระองค์ด้วยพระคุณ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์พยายามใช้ความดีหรือการเปลี่ยนแปลงของตนเองเป็นพื้นฐานในการเข้าหาพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงประทานพระองค์เองเพื่อข้าพระองค์ และทรงทำให้ข้าพระองค์ได้รับการนับว่าชอบธรรมโดยพระคุณ ขอให้พระวิญญาณบริสุทธิ์ทรงเปลี่ยนชีวิตของข้าพระองค์ต่อไป ให้ข้าพระองค์เกิดผลแห่งพระคุณ ไม่ใช่พยายามสร้างเหตุผลเพื่อให้พระองค์รัก

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-16'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-17', 'published', '2026-07-17', 1, 'thaigodpleasing@naver.com', '2026-07-17T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระคุณทำให้เราเห็นบาปของตนเอง', '', 'บาปทำให้เราตาบอดฝ่ายวิญญาณ เรามักอยากมองตนเองว่าเป็นคนดีและชอบธรรมกว่าความจริง จึงเห็นบาปของคนอื่นชัดกว่าบาปของตนเอง

เหมือนคริสตจักรเลาดีเซีย เราอาจคิดว่าเรามั่งมีและไม่ขาดสิ่งใด แต่ต่อหน้าพระเจ้า สภาพแท้จริงของเราอาจยากจน ตาบอด และเปลือยเปล่า บาปหลอกเรา และเราก็มักร่วมมือกับการหลอกลวงนั้นโดยไม่รู้ตัว

สายตาฝ่ายวิญญาณที่แท้จริงไม่ได้ทำให้เราชอบตัดสินคนอื่นมากขึ้น แต่ทำให้เราเสียใจต่อบาปของตนเองและกลับใจ ถ้าเราตื่นตัวต่อบาปของคนอื่นมากกว่าบาปของตนเอง นั่นเป็นสัญญาณเตือนที่สำคัญ

ดังนั้น เราต้องขอการตักเตือนอันเปี่ยมด้วยพระคุณจากพระวิญญาณบริสุทธิ์ เมื่อพระองค์เปิดตาของเราเราจะไม่ถูกผลักเข้าสู่ความสิ้นหวัง แต่ถูกนำมาหาพระเยซูคริสต์ด้วยการกลับใจและความเชื่อ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นความสว่าง ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเปิดตาของข้าพระองค์ให้เห็นบาปของตนเองโดยพระวิญญาณบริสุทธิ์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มั่นใจในความชอบธรรมของตนเอง และสนใจบาปของคนอื่นมากกว่าบาปของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงฟื้นฟูคนบาปด้วยพระคุณ ขอให้พระวิญญาณบริสุทธิ์ทรงตักเตือนและปลุกข้าพระองค์ ให้เสียใจต่อบาปของตนเอง กลับใจอย่างจริงใจ และเข้ามาหาพระคริสต์ด้วยความหวัง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-17'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-18', 'published', '2026-07-18', 1, 'thaigodpleasing@naver.com', '2026-07-18T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ในความทุกข์ เราไม่ได้อยู่ลำพัง', '', 'พระคัมภีร์ไม่ได้ปฏิเสธความทุกข์ของโลกนี้ และไม่ได้ทำให้ความเจ็บปวดดูเล็กลง พระคัมภีร์พูดความจริงเกี่ยวกับความยากลำบากของชีวิต แต่ในเวลาเดียวกันก็ประทานความหวังแก่เรา

เหมือนคำอธิษฐานในสดุดี ประชากรของพระเจ้าร้องทูลต่อพระองค์ท่ามกลางความทุกข์ บางครั้งดูเหมือนพระเจ้าทรงเงียบ และความจริงของคนชั่วอาจทำให้ใจเราสั่นไหว แต่คำอธิษฐานของผู้เชื่อไม่ได้จบลงด้วยความสิ้นหวัง

องค์พระผู้เป็นเจ้าทรงเป็นกำลังและโล่ของประชากรของพระองค์ ทรงเป็นที่ลี้ภัยแห่งความรอด เมื่อหัวใจของเราวางใจในพระองค์ เราได้รับความช่วยเหลือ และสามารถกลับมาสรรเสริญพระองค์ได้อีก

พระคุณอาจนำเราเข้าสู่ความทุกข์และการรอคอย แต่พระเจ้าไม่เคยเรียกเราให้ยืนลำพังด้วยกำลังของตนเอง พระคริสต์ผู้ทรงเป็นที่ลี้ภัยแห่งความรอดทรงอยู่กับเราเสมอ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นที่ลี้ภัย ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่ทรงปล่อยให้ประชากรของพระองค์อยู่ลำพังในความทุกข์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ลืมว่าพระองค์ทรงอยู่ด้วย และพยายามอดทนด้วยกำลังของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเป็นที่ลี้ภัยแห่งความรอดของข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงประคองหัวใจของข้าพระองค์ ให้ร้องทูลต่อพระองค์ในความทุกข์ และได้รับความหวังจากพระองค์อีกครั้ง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-18'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-19', 'published', '2026-07-19', 1, 'thaigodpleasing@naver.com', '2026-07-19T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'การปลอบโยนที่ได้รับควรไหลไปสู่ผู้อื่น', '', 'เมื่อเราเห็นคนที่กำลังทุกข์ เราอาจตอบสนองด้วยการตัดสินมากกว่าการปลอบโยน เราอาจมองความอ่อนแอของเขาแล้วรีบประเมินว่าเขาทำอะไรผิด หรือทำไมเขาจึงตกอยู่ในสภาพนั้น นี่เป็นผลของความชอบธรรมในตนเองที่ยังอยู่ในหัวใจเรา

บางครั้งพระเจ้าทรงนำเราเข้าสู่สถานการณ์ยากลำบากที่เผยให้เห็นความอ่อนแอและความโง่เขลาของเรา พระองค์ไม่ได้ทำเช่นนั้นเพื่อทำลายเรา แต่เพื่อทำให้เราถ่อมใจ และมีหัวใจอ่อนโยนต่อคนอื่นที่กำลังเจ็บปวด

พระเจ้าทรงเป็นพระเจ้าแห่งการปลอบโยนทั้งสิ้น พระองค์ทรงปลอบโยนเราในความทุกข์ เพื่อเราจะสามารถปลอบโยนผู้อื่นด้วยการปลอบโยนที่เราได้รับจากพระองค์ ความทุกข์จึงไม่ใช่เพียงเพื่อการเติบโตของเราเท่านั้น แต่ยังทำให้เราเป็นเครื่องมือแห่งพระคุณต่อผู้อื่น

การปลอบโยนที่เราได้รับในพระคริสต์ไม่ได้ถูกประทานมาเพื่อเก็บไว้กับตัวเองเท่านั้น พระบิดาผู้มองไม่เห็นทรงทำให้การปลอบโยนของพระองค์ปรากฏผ่านคำพูด การรับฟัง และการรับใช้ของเรา

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเป็นพระเจ้าแห่งการปลอบโยน ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงปลอบโยนข้าพระองค์ในความทุกข์ และเรียกให้ข้าพระองค์แบ่งปันการปลอบโยนนั้นแก่ผู้อื่น โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ตัดสินคนที่เจ็บปวดมากกว่ารักและหนุนใจเขา

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเมตตาและปลอบโยนข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์ทรงทำให้หัวใจของข้าพระองค์อ่อนโยน เพื่อวันนี้ข้าพระองค์จะส่งต่อพระคุณและการปลอบโยนของพระองค์แก่คนที่ต้องการ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-19'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-20', 'published', '2026-07-20', 1, 'thaigodpleasing@naver.com', '2026-07-20T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระคุณเปลี่ยนหัวใจ', '', 'พระคุณของพระเจ้าไม่ได้หยุดอยู่แค่การช่วยให้เราทำสิ่งที่แตกต่างจากเดิม พระคุณเปลี่ยนเราในระดับลึกของหัวใจ จนเรากลายเป็นคนใหม่อย่างแท้จริง

ในสดุดี 51 ดาวิดไม่ได้อธิษฐานเพียงให้พระเจ้าช่วยเขาแก้ไขพฤติกรรม แต่เขาร้องทูลให้พระเจ้าทรงสร้างใจสะอาดในตัวเขา ปัญหาของบาปไม่ได้อยู่แค่สภาพแวดล้อมหรือการกระทำภายนอก แต่เริ่มจากหัวใจ

เราไม่ได้ต้องการเพียงสถานการณ์ที่ดีขึ้น แต่ต้องการหัวใจใหม่ เพราะเราเป็นคนบาปที่ไม่สามารถสร้างหัวใจใหม่ให้ตนเองได้ หัวใจใหม่เป็นสิ่งที่พระเจ้าเท่านั้นทรงสร้างได้

พระเยซูคริสต์ไม่ได้สิ้นพระชนม์เพียงเพื่อปรับปรุงภาพลักษณ์ภายนอกของเรา พระองค์ทรงประทานพระองค์เองเพื่อให้เราได้รับหัวใจใหม่ และเพื่อจะทรงเปลี่ยนหัวใจนั้นอย่างต่อเนื่องโดยพระคุณของพระองค์

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสร้างใจใหม่ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเปลี่ยนหัวใจของข้าพระองค์ในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์พยายามแก้ไขเพียงภายนอก แต่ไม่ยอมมองบาปในหัวใจอย่างจริงจัง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงประทานชีวิตใหม่แก่ข้าพระองค์โดยไม้กางเขนและการเป็นขึ้นจากความตาย ขอให้พระวิญญาณบริสุทธิ์ทรงเปลี่ยนหัวใจของข้าพระองค์อย่างลึกซึ้ง เพื่อข้าพระองค์จะรักและเชื่อฟังพระองค์จากใจจริง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-20'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-21', 'published', '2026-07-21', 1, 'thaigodpleasing@naver.com', '2026-07-21T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ทางของพระเจ้าดีกว่าทางของเรา', '', 'เรามักรู้สึกว่าแผนของเราดีกว่าพระประสงค์ของพระเจ้า ถ้าหลุดจากความยากลำบากตอนนี้ได้ เราคงมีความสุขมากขึ้น หรือถ้าเลือกทางอื่น ชีวิตคงดีกว่านี้ แต่สายตาของเรามองเห็นเพียงช่วงเวลาสั้น ๆ ส่วนพระเจ้าทรงเห็นทั้งชีวิตของเราและนิรันดร์กาล

บางครั้งการออกจากสถานการณ์ที่ยากอาจดูเหมือนเป็นทางเลือกที่ฉลาดที่สุด แต่เมื่อเวลาผ่านไป เราอาจเห็นว่าพระเจ้าทรงใช้ความยากลำบากนั้นเพื่อฝึกความเชื่อของเรา และหล่อหลอมเราให้เติบโตมากขึ้นแม้ช่วงเวลาที่เราคิดว่าเป็นความล้มเหลว พระเจ้าก็สามารถใช้เป็นเครื่องมือแห่งพระคุณได้

ชีวิตของเราไม่ใช่เรื่องราวที่ไหลไปโดยบังเอิญ พระเจ้าทรงวางแผนวันเวลาทั้งหมดของเราด้วยพระปัญญาและความรัก แม้ทางที่เราไม่เข้าใจ เวลาที่ต้องรอคอยยาวนาน และช่วงเวลาที่เต็มไปด้วยน้ำตา ก็อยู่ภายใต้พระประสงค์อันดีของพระองค์

เหนือสิ่งอื่นใด พระเจ้าได้ทำสิ่งดีที่สุดเพื่อเราแล้ว พระองค์ประทานพระบุตรองค์เดียว คือพระเยซูคริสต์ให้ทรงรับบาปของเราบนไม้กางเขน และประทานชีวิตนิรันดร์แก่เราโดยการเป็นขึ้นจากความตาย พระเจ้าผู้ไม่ทรงหวงพระบุตรของพระองค์ จะทรงนำชีวิตของเราในทางที่ดีที่สุดด้วย

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงปัญญาและเปี่ยมด้วยความรัก ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงนำลูกของพระองค์ในทางที่ดีที่สุดเสมอ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ไว้วางใจความคิดและแผนการของตนเองมากกว่าพระประสงค์ของพระองค์

ขอบพระคุณที่พระองค์ประทานพระเยซูคริสต์เพื่อช่วยข้าพระองค์ให้รอด ขอให้พระวิญญาณบริสุทธิ์ประทานความเชื่อแก่ข้าพระองค์ ให้ไว้วางใจแผนการของพระเจ้าแม้ในสถานการณ์ที่ยังไม่เข้าใจ และยินดีติดตามพระองค์ในวันนี้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-21'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-22', 'published', '2026-07-22', 1, 'thaigodpleasing@naver.com', '2026-07-22T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'จากการบ่นสู่การสรรเสริญ', '', 'ในแต่ละวัน เราสามารถหาเหตุผลที่จะบ่นได้ และเราก็สามารถหาเหตุผลที่จะขอบพระคุณได้เช่นกัน ท่าทีที่เราใช้ดำเนินชีวิตไม่ได้ขึ้นอยู่กับสถานการณ์เท่านั้น แต่ขึ้นอยู่กับหัวใจของเราว่ากำลังหันไปทางไหน

การบ่นเริ่มขึ้นเมื่อเราวางตนเองไว้ที่ศูนย์กลางของชีวิต เมื่อความต้องการของเราไม่สำเร็จ ความคาดหวังของเราไม่ถูกเติมเต็ม หรือความรู้สึกของเราถูกกระทบ เรามักเริ่มโกรธและบ่น บาปทำให้เราคิดว่าเราสมควรได้รับสิ่งต่าง ๆ และทำให้เรามองไม่เห็นพระคุณมากมายที่พระเจ้าประทานแล้ว

แต่ข่าวประเสริฐหันสายตาของเราออกจากตนเองไปหาพระเจ้า ต่อหน้าพระเจ้า เราไม่มีสิ่งใดจะอวด แต่พระองค์ทรงเมตตาเราอย่างยิ่ง โดยประทานพระเยซูคริสต์ พระบุตรองค์เดียว เพื่ออภัยบาปและรับเราเป็นลูกของพระองค์

ความขอบพระคุณไม่ใช่อารมณ์ที่เกิดขึ้นเมื่อสถานการณ์ดีขึ้นเท่านั้น แต่เป็นผลของชีวิตที่รู้จักพระคุณของพระเจ้า ยิ่งเรามองไปที่ไม้กางเขน การบ่นก็ลดลง และการขอบพระคุณกับการสรรเสริญก็เติบโตขึ้น

คำอธิษฐาน

พระบิดาเจ้าผู้เปี่ยมด้วยพระคุณและพระเมตตา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ประทานสิ่งดีมากมายแก่ข้าพระองค์ ทั้งที่ข้าพระองค์ไม่สมควรได้รับ โดยเฉพาะพระคุณแห่งความรอดในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์บ่นง่ายและลืมพระคุณที่ได้รับแล้ว

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงทำให้คนบาปได้เป็นลูกของพระเจ้า ขอให้พระวิญญาณบริสุทธิ์ทรงเปลี่ยนหัวใจของข้าพระองค์ ให้จดจำพระคุณแห่งไม้กางเขน และยกย่องพระองค์ด้วยการขอบพระคุณและการสรรเสริญในทุกสถานการณ์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-22'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-23', 'published', '2026-07-23', 1, 'thaigodpleasing@naver.com', '2026-07-23T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระเจ้าประทานสิ่งจำเป็นแก่ผู้ที่พระองค์ทรงเรียก', '', 'พระเจ้ามักทรงเรียกเราให้ทำสิ่งที่เราไม่สามารถทำได้ด้วยกำลังของตนเอง โนอาห์ไม่สามารถนำสัตว์ทั้งหมดเข้าไปในเรือได้ด้วยตัวเอง โมเสสไม่สามารถช่วยชนชาติอิสราเอลออกจากอียิปต์ได้ด้วยกำลังของตนเอง และดาวิดก็ไม่สามารถชนะโกลิอัทได้ด้วยพลังของตนเอง

แต่พระเจ้าทรงเรียกพวกเขา และพระองค์ก็ทรงจัดเตรียมทุกสิ่งที่จำเป็นให้พวกเขา พระคัมภีร์ไม่ได้สอนว่าคนของพระเจ้าเข้มแข็งมากพอที่จะทำงานของพระเจ้าได้เอง แต่สอนว่า พระเจ้าทรงใช้คนอ่อนแอ และประทานพระคุณกับกำลังที่จำเป็นให้แก่เขา

ชีวิตของเราก็เช่นเดียวกัน เราไม่สามารถรักผู้อื่นเหมือนที่พระเยซูทรงรักเราได้ด้วยกำลังของตนเอง เราไม่สามารถรักษาหัวใจให้บริสุทธิ์ได้ด้วยตนเอง แต่พระเจ้าทรงประทานพระวิญญาณบริสุทธิ์แก่ผู้เชื่อ และทรงประทานทุกสิ่งที่จำเป็นสำหรับชีวิตและความเชื่อ

ดังนั้น เมื่อพระเจ้าทรงเรียกเราให้เชื่อฟัง อย่ามองเพียงความอ่อนแอของตนเอง แต่จงมองไปที่พระเยซูคริสต์ ผู้ทรงเป็นกำลังของเรา วันนี้เราสามารถก้าวเดินด้วยความเชื่อได้ เพราะพระเจ้าผู้ทรงเรียกเรา จะทรงประทานกำลังให้เราเสมอ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงฤทธิ์และเปี่ยมด้วยพระคุณ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเรียกคนอ่อนแอ และทรงประทานทุกสิ่งที่จำเป็นให้แก่ลูกของพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองแต่ความอ่อนแอของตนเอง และลืมวางใจในฤทธิ์อำนาจของพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงช่วยข้าพระองค์ให้รอด และประทานพระวิญญาณบริสุทธิ์ให้ทรงสถิตอยู่กับข้าพระองค์ โปรดช่วยให้ข้าพระองค์ไม่พึ่งกำลังของตนเอง แต่พึ่งพระคุณของพระองค์ และเดินในทางที่พระองค์ทรงเรียกด้วยความเชื่อ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-23'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-24', 'published', '2026-07-24', 1, 'thaigodpleasing@naver.com', '2026-07-24T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระบิดาไม่ทรงหักต้นอ้อที่ช้ำ', '', 'บางครั้งเราอาจรู้สึกโดดเดี่ยว เหนื่อยล้า และเหมือนไม่มีใครเข้าใจหัวใจของเรา เราอาจรู้สึกว่าบาดแผลของเราไม่มีใครเห็น และไม่มีใครสนใจ แต่ลูกของพระเจ้าไม่เคยอยู่ลำพังอย่างแท้จริง เพราะพระบิดาทรงอยู่กับเราเสมอด้วยความรัก

อิสยาห์ 42:3 กล่าวว่า พระองค์จะไม่ทรงหักต้นอ้อที่ช้ำ และจะไม่ทรงดับไส้ตะเกียงที่ริบหรี่ ภาพนี้แสดงให้เราเห็นพระทัยอันอ่อนโยนของพระเจ้า มนุษย์อาจรีบตัดสินคนอ่อนแอ หรือทำให้คนที่เจ็บปวดรู้สึกแย่ลงแต่พระบิดาไม่ทรงเป็นเช่นนั้น

พระเจ้าทรงสำแดงความรักนี้อย่างชัดเจนในพระเยซูคริสต์ พระเยซูทรงรู้จักความอ่อนแอของเราพระองค์ทรงเป็นพระผู้ช่วยให้รอดผู้ทรงเมตตา และทรงฟื้นฟูคนบาปที่แตกสลาย เมื่อเราอ่อนแอ พระองค์ไม่ทรงเยาะเย้ยเรา เมื่อเราท้อใจ พระองค์ไม่ทรงทอดทิ้งเรา

เพราะฉะนั้น วันนี้ถ้าความเหงาและความท้อแท้เข้ามาในใจ จงระลึกถึงความรักอันอ่อนโยนและสัตย์ซื่อของพระบิดา แม้คนอื่นอาจไม่เข้าใจเรา แต่ในพระเยซูคริสต์ เราไม่เคยถูกทอดทิ้งเลย

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงเปี่ยมด้วยพระเมตตาและความรัก ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่ทรงหักต้นอ้อที่ช้ำ และไม่ทรงดับไส้ตะเกียงที่ริบหรี่ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ลืมความรักของพระองค์และจมอยู่กับความโดดเดี่ยวของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงรู้จักความอ่อนแอของข้าพระองค์ และทรงช่วยข้าพระองค์ให้เป็นลูกของพระเจ้า โปรดให้พระวิญญาณบริสุทธิ์ทรงปลอบใจข้าพระองค์ และช่วยให้ข้าพระองค์วางใจในความรักอันสัตย์ซื่อของพระบิดา

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-24'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-25', 'published', '2026-07-25', 1, 'thaigodpleasing@naver.com', '2026-07-25T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระเจ้าจะทรงจัดเตรียม', '', 'เรากำลังมีชีวิตอยู่ระหว่างสิ่งที่พระเจ้าทรงทำสำเร็จแล้วกับสิ่งที่ยังรอความสมบูรณ์ พระเยซูคริสต์ทรงสิ้นพระชนม์และทรงเป็นขึ้นจากความตายเพื่อช่วยเราให้รอดแล้ว พระวิญญาณบริสุทธิ์ทรงสถิตอยู่ในผู้เชื่อแล้ว แต่การต่อสู้กับบาปยังไม่จบสิ้น

ในหัวใจของเรา ยังมีสงครามฝ่ายวิญญาณอยู่เสมอ เป็นสงครามระหว่างความเชื่อกับความสงสัยระหว่างการเชื่อฟังกับการกบฏ ระหว่างความกังวลกับการวางใจ และคำถามสำคัญที่มักเกิดขึ้นคือ พระเจ้าจะทรงจัดเตรียมให้เราจริงหรือ

เมื่อเราพบความยากลำบาก หรือเมื่อเห็นความอ่อนแอของตนเอง เราอาจกลัวว่าเราจะไม่พอ เราอาจสงสัยว่าเราจะมีกำลังพอไหม จะมีสิ่งจำเป็นพอไหม และพระเจ้าจะทรงอยู่กับเราจริงหรือไม่

แต่พระกิตติคุณเตือนเราว่า พระเจ้าไม่ทรงทอดทิ้งประชากรของพระองค์ พระองค์ประทานพระเยซูคริสต์ให้เราแล้ว ซึ่งเป็นพระคุณที่ยิ่งใหญ่ที่สุด ดังนั้น เราจึงวางใจได้ว่า พระองค์จะทรงประทานพระคุณที่จำเป็นสำหรับวันนี้ด้วย

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสัตย์ซื่อและทรงจัดเตรียมทุกสิ่ง ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่ทรงทอดทิ้งลูกของพระองค์ และประทานพระคุณที่จำเป็นในเวลาที่เหมาะสม โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์มองความอ่อนแอของตนเองมากกว่าพระสัญญาของพระองค์

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงช่วยข้าพระองค์ให้รอด และขอบพระคุณที่พระวิญญาณบริสุทธิ์ทรงสถิตอยู่กับข้าพระองค์ โปรดช่วยให้ข้าพระองค์เชื่อว่า พระองค์ผู้ประทานพระคุณอันยิ่งใหญ่ที่สุดแล้ว จะทรงประทานพระคุณที่จำเป็นสำหรับวันนี้ด้วย

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-25'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-26', 'published', '2026-07-26', 1, 'thaigodpleasing@naver.com', '2026-07-26T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ในพระคริสต์ เราไม่ต้องกลัว', '', 'ลึก ๆ ในหัวใจของมนุษย์มีความกลัวอยู่เสมอ เรากลัวว่าจะไม่มีใครรักเรา เรากลัวว่าถ้าคนอื่นรู้จักเราจริง ๆ เขาอาจไม่ยอมรับเรา และเรากลัวว่าเราจะไม่มีสิ่งที่จำเป็นสำหรับชีวิต

แต่พระกิตติคุณตอบความกลัวเหล่านี้อย่างชัดเจน พระเจ้าทรงรักคนที่ไม่สมควรได้รับความรัก พระองค์ไม่ได้รักเราเพียงด้วยคำพูด แต่ทรงสำแดงความรักโดยประทานพระเยซูคริสต์ พระบุตรของพระองค์ เพื่อช่วยเราให้รอด ในพระคริสต์ เราได้รับการต้อนรับอย่างสมบูรณ์ และได้เป็นลูกของพระเจ้า

พระกิตติคุณยังเป็นเรื่องของการอภัยบาปอย่างสมบูรณ์ พระเยซูผู้ทรงชอบธรรม สิ้นพระชนม์แทนคนบาปบนไม้กางเขน เพราะฉะนั้น ผู้ที่อยู่ในพระคริสต์จึงไม่ต้องอยู่ภายใต้การลงโทษของพระเจ้าอีกต่อไปไม่ใช่เพราะบาปของเราถูกมองข้าม แต่เพราะพระเยซูทรงรับโทษบาปแทนเราแล้วจริงๆ

พระกิตติคุณยังเป็นเรื่องของการจัดเตรียมอย่างอุดมสมบูรณ์ พระเจ้าผู้ทรงสร้างและครอบครองทุกสิ่งทรงประทานพระคุณที่จำเป็นแก่ลูกของพระองค์เสมอ ดังนั้น ผู้เชื่อไม่จำเป็นต้องมีชีวิตอยู่ด้วยความกลัวเพราะในพระเยซูคริสต์ เราได้รับความรัก ได้รับการอภัย และได้รับพระคุณที่จำเป็นสำหรับชีวิต

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงรัก ทรงอภัย และทรงจัดเตรียมทุกสิ่ง ข้าพระองค์สรรเสริญพระองค์ เพราะในพระเยซูคริสต์ พระองค์ทรงรับคนบาปเป็นลูกของพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ลืมพระกิตติคุณและปล่อยให้ความกลัวครอบครองหัวใจ

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงรับโทษบาปแทนข้าพระองค์บนไม้กางเขน และทรงเป็นขึ้นจากความตายเพื่อประทานชีวิตใหม่ โปรดให้พระวิญญาณบริสุทธิ์ทรงทำให้หัวใจของข้าพระองค์มั่นคงในความรักการอภัย และพระคุณของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-26'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-27', 'published', '2026-07-27', 1, 'thaigodpleasing@naver.com', '2026-07-27T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'อย่าซ่อนตัว แต่จงมาหาพระคุณ', '', 'เมื่อความบาปของเราถูกเปิดเผย สิ่งแรกที่เรามักอยากทำคือซ่อนตัว เราอาจแก้ตัว โยนความผิดให้คนอื่น หรือบอกตัวเองว่าสิ่งที่เราทำนั้นไม่ได้ร้ายแรงมากนัก แต่การตอบสนองแบบนี้มักมาจากความกลัว เรากลัวว่าจะถูกปฏิเสธ ถูกตำหนิ หรือถูกลงโทษ

แต่พระกิตติคุณเรียกเราให้มาหาพระเจ้าด้วยความหวัง ไม่ใช่ด้วยความกลัว พระเยซูคริสต์ทรงรับความผิดของเราไว้แล้ว พระองค์ทรงแบกความอับอายของเรา และทรงรับพระพิโรธของพระเจ้าแทนเราบนไม้กางเขน ดังนั้น ผู้ที่อยู่ในพระคริสต์ไม่จำเป็นต้องซ่อนบาปของตน

นี่ไม่ได้หมายความว่าบาปเป็นเรื่องเล็กน้อย แต่หมายความว่า พระผู้ช่วยให้รอดของเรายิ่งใหญ่กว่าบาปของเรา เมื่อเราปิดบัง แก้ตัว หรือโยนความผิดให้คนอื่น เรากำลังลืมความจริงของพระกิตติคุณ พระคุณของพระเจ้าไม่ได้ทำให้เราหลอกตัวเอง แต่ทำให้เรากล้าซื่อสัตย์ต่อพระเจ้า

เพราะฉะนั้น เมื่อพระวิญญาณบริสุทธิ์ทรงทำให้เราเห็นความบาปของตน อย่าหนี อย่าปฏิเสธ และอย่าแก้ตัว จงมาหาพระเยซูคริสต์ด้วยใจถ่อม เพราะในพระองค์มีการอภัยและการฟื้นฟูอย่างเพียงพอสำหรับคนบาปเสมอ

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงบริสุทธิ์และเปี่ยมด้วยพระเมตตา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงเปิดทางแห่งการอภัยและการฟื้นฟูในพระเยซูคริสต์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์เห็นความบาปของตนเองแล้วกลับซ่อนตัว แก้ตัว หรือโยนความผิดให้ผู้อื่น

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงแบกความผิดและความอับอายของข้าพระองค์บนไม้กางเขน โปรดให้พระวิญญาณบริสุทธิ์ทรงทำให้ข้าพระองค์เกลียดชังบาป และในเวลาเดียวกันก็มั่นใจในพระคุณของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-27'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-28', 'published', '2026-07-28', 1, 'thaigodpleasing@naver.com', '2026-07-28T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระคุณทำให้เราไม่ต้องเสแสร้ง', '', 'หัวใจที่ตกอยู่ในบาปมักอยากให้คนอื่นเห็นว่าเราดีกว่าความจริง เราอยากดูเหมือนฉลาดกว่า เข้มแข็งกว่า และชอบธรรมกว่าที่เราเป็นจริง ๆ ดังนั้น บางครั้งเราจึงปิดบังความอ่อนแอ ซ่อนความบาป และทำเหมือนว่าเราไม่ต้องการความช่วยเหลือ

แต่พระกิตติคุณไม่ได้เรียกเราให้มีชีวิตแบบเสแสร้ง พระเจ้าไม่ได้ทรงรับเราเพราะภาพลักษณ์ที่เราสร้างขึ้น แต่เพราะสิ่งที่พระเยซูคริสต์ทรงทำเพื่อเรา เราได้รับความรอดโดยพระคุณ ไม่ใช่โดยการกระทำของเราเอง ดังนั้น เราจึงไม่มีสิ่งใดที่จะอวด และไม่จำเป็นต้องแสร้งเป็นคนที่เราไม่ได้เป็น

พระคุณประทานสิ่งที่เราไม่ได้หามาเอง และพระคุณให้อภัยบาปที่เราทำจริง ๆ เพราะฉะนั้น พระคุณทำให้เรากล้าซื่อสัตย์ เราไม่ต้องสร้างตัวตนจากความสำเร็จของเรา หรือจากความคิดเห็นของคนอื่นอีกต่อไป ตัวตนที่แท้จริงของเราอยู่ในพระคริสต์ คือเราเป็นลูกของพระเจ้าโดยพระคุณ

ดังนั้น วันนี้อย่าพยายามปกป้องตนเองด้วยภาพลักษณ์ปลอม ๆ จงยอมรับความอ่อนแอ สารภาพบาปและขอความช่วยเหลือได้ เพราะในพระเยซูคริสต์ พระเจ้าทรงรู้จักเราอย่างแท้จริง ทรงอภัยเราอย่างสมบูรณ์ และทรงรักเราอย่างมั่นคง

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสัตย์จริงและเปี่ยมด้วยพระคุณ ข้าพระองค์สรรเสริญพระองค์ เพราะในพระเยซูคริสต์พระองค์ทรงรู้จักข้าพระองค์อย่างแท้จริง และยังทรงรักและอภัยข้าพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์อยากดูดีกว่าความจริง ปิดบังความอ่อนแอ และพยายามอวดสิ่งที่ไม่ได้มาจากตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงสิ้นพระชนม์แทนข้าพระองค์ และประทานความชอบธรรมที่ข้าพระองค์ไม่สามารถหามาเองได้ โปรดให้พระวิญญาณบริสุทธิ์ทรงปลดปล่อยหัวใจของข้าพระองค์จากการเสแสร้งและช่วยให้ข้าพระองค์ดำเนินชีวิตด้วยความจริงใจ ความถ่อมใจ และความไว้วางใจในพระคุณของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-28'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-29', 'published', '2026-07-29', 1, 'thaigodpleasing@naver.com', '2026-07-29T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'พระคุณนำเรากลับสู่การนมัสการ', '', 'ปลาถูกสร้างมาให้ว่ายน้ำ ดวงอาทิตย์ถูกสร้างมาให้ส่องแสง และมนุษย์ถูกสร้างมาให้นมัสการพระเจ้าชีวิตของเราไม่ได้ถูกสร้างมาเพื่อมีชีวิตอยู่เพื่อตนเอง แต่ถูกสร้างมาเพื่อรู้จักพระเจ้า รักพระเจ้า และถวายพระเกียรติแด่พระองค์

แต่ความบาปได้แย่งชิงการนมัสการของเราไป หัวใจที่ควรถวายแด่พระเจ้ากลับหันไปหาสิ่งที่พระเจ้าทรงสร้าง เราเริ่มมองหาชีวิต ความพอใจ และความหมายจากสิ่งอื่นแทนพระเจ้า นี่คือความเสียหายลึกที่สุดของความบาป

พระคุณของพระเจ้าไม่ได้เพียงทำให้เราเป็นคนดีขึ้นเท่านั้น แต่พระคุณนำเรากลับไปสู่จุดประสงค์เดิมที่พระเจ้าทรงสร้างเราไว้ คือการนมัสการพระองค์ พระคุณเปลี่ยนทิศทางหัวใจของเรา และทำให้พระเจ้ากลับมาอยู่ในที่ที่สมควรที่สุดในชีวิตของเรา

พระเยซูคริสต์ทรงสิ้นพระชนม์บนไม้กางเขนและทรงเป็นขึ้นจากความตาย ไม่เพียงเพื่ออภัยบาปของเราเท่านั้น แต่เพื่อฟื้นฟูเรากลับสู่การนมัสการพระเจ้า ในพระคริสต์ เราจึงสามารถเรียกพระเจ้าว่าเป็นพระบิดาและถวายเกียรติแด่พระองค์ด้วยหัวใจและชีวิตของเรา

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงสมควรได้รับพระเกียรติและคำสรรเสริญ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงสร้างข้าพระองค์มาเพื่อรู้จักและนมัสการพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์รักสิ่งที่พระองค์ทรงสร้างมากกว่าพระองค์ และแสวงหาความพอใจจากสิ่งอื่นแทนพระเจ้า

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงสิ้นพระชนม์และเป็นขึ้นจากความตาย เพื่ออภัยบาปและนำข้าพระองค์กลับมาหาพระบิดา โปรดให้พระวิญญาณบริสุทธิ์ทรงหันหัวใจของข้าพระองค์กลับมาหาพระองค์ และช่วยให้ชีวิตของข้าพระองค์เป็นการนมัสการที่ถวายพระเกียรติแด่พระเจ้าในทุกวัน

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-29'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-30', 'published', '2026-07-30', 1, 'thaigodpleasing@naver.com', '2026-07-30T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ผู้รับพระคุณถูกเรียกให้เป็นเครื่องมือแห่งพระคุณ', '', 'พระกิตติคุณของพระเยซูคริสต์ไม่ได้ทำให้เราเป็นเพียงผู้ได้รับความรอดเท่านั้น แต่ยังทรงเรียกเราให้เป็นเครื่องมือแห่งพระคุณด้วย พระเจ้าทรงช่วยประชากรของพระองค์ให้รอด และทรงใช้พวกเขาเพื่อนำข่าวประเสริฐไปถึงผู้อื่น

พระมหาบัญชาที่พระเยซูประทานแก่สาวก เป็นพระบัญชาที่ประทานแก่คริสตจักรทั้งหมด งานประกาศข่าวประเสริฐและการสร้างสาวกไม่ได้เป็นหน้าที่ของคนเพียงไม่กี่คนเท่านั้น แต่พระเจ้าทรงเรียกผู้เชื่อทุกคนให้สำแดงพระคุณของพระคริสต์ในที่ที่พระองค์ทรงวางเขาไว้

เรามักแยกชีวิตของเราออกจากงานรับใช้ แต่ผู้ที่พระคริสต์ทรงซื้อไว้ด้วยพระโลหิตของพระองค์ ไม่ได้เป็นเจ้าของชีวิตตนเองอีกต่อไป เวลา ความสัมพันธ์ คำพูด การรับใช้ และชีวิตประจำวันของเราล้วนเป็นขององค์พระผู้เป็นเจ้า

นี่ไม่ใช่ภาระหนักก่อนอื่น แต่เป็นเกียรติอันยิ่งใหญ่ พระเจ้าทรงใช้คนอ่อนแออย่างเราให้เป็นเครื่องมือในงานแห่งการไถ่ พระคุณไม่เพียงช่วยเราให้รอด แต่ยังเรียกเราให้มีส่วนในงานแห่งแผ่นดินของพระเจ้า

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงช่วยให้รอด ข้าพระองค์สรรเสริญพระองค์ เพราะในพระเยซูคริสต์ พระองค์ไม่เพียงทรงช่วยข้าพระองค์ให้รอด แต่ยังทรงเรียกข้าพระองค์ให้มีส่วนในงานแห่งการไถ่ โปรดอภัยข้าพระองค์เมื่อข้าพระองค์ใช้ชีวิตเหมือนเป็นของตนเอง และคิดว่างานข่าวประเสริฐเป็นหน้าที่ของคนบางคนเท่านั้น

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงซื้อข้าพระองค์ไว้ด้วยพระโลหิตของพระองค์ โปรดให้พระวิญญาณบริสุทธิ์ทรงเปลี่ยนหัวใจของข้าพระองค์ ให้จำได้ว่าทั้งชีวิตของข้าพระองค์เป็นของพระองค์ ขอให้คำพูดการรับใช้ และความสัมพันธ์ของข้าพระองค์สำแดงพระคุณของพระคริสต์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-30'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-07-31', 'published', '2026-07-31', 1, 'thaigodpleasing@naver.com', '2026-07-31T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'ออกจากอาณาจักรเล็ก ๆ ของตนเอง', '', 'พระคุณของพระเจ้าไม่เพียงอภัยบาปของเราเท่านั้น แต่ยังทำให้เรามีชีวิตอยู่เพื่อสิ่งที่ยิ่งใหญ่กว่าตัวเราเอง เราอาจคิดว่าชีวิตฝ่ายวิญญาณคือการทำกิจกรรมทางศาสนา เช่น อ่านพระคัมภีร์ ไปนมัสการ ถวายทรัพย์ หรือมีส่วนในงานรับใช้ แต่แม้เราจะทำสิ่งเหล่านี้ได้ เราก็ยังอาจมีชีวิตอยู่เพื่ออาณาจักรเล็ก ๆ ของตนเอง

ชีวิตคริสเตียนที่แท้จริงไม่ใช่เพียงเรื่องว่าเราทำอะไร แต่เป็นเรื่องว่าหัวใจของเราเป็นของใคร ภายนอกเราอาจดูเหมือนกำลังรับใช้พระเจ้า แต่ภายในเราอาจแสวงหาการยอมรับจากคนอื่น ความพอใจของตนเอง หรือเกียรติของตนเอง เราอาจพูดถึงแผ่นดินของพระเจ้า แต่ในชีวิตจริง ความต้องการและแผนการของเราเองอาจยังเป็นศูนย์กลาง

ปัญหาของพวกฟาริสีคือสิ่งนี้ พวกเขามีกิจกรรมทางศาสนามากมาย แต่หัวใจของพวกเขาไม่ได้มอบแด่พระเจ้าอย่างแท้จริง ภายนอกดูสะอาด แต่ภายในเต็มไปด้วยความโลภและการเห็นแก่ตัว ความชอบธรรมที่แท้จริงไม่ได้มาจากภาพลักษณ์ภายนอก แต่มาจากหัวใจที่ได้รับการเปลี่ยนแปลงโดยพระคุณ

ดังนั้น เราไม่ควรกลับไปมีชีวิตอยู่เพื่ออาณาจักรเล็ก ๆ ของตนเองอีก พระเยซูคริสต์ทรงช่วยเราออกจากความบาปและการเห็นแก่ตัว และทรงเรียกเราให้มีชีวิตอยู่เพื่อแผ่นดินของพระเจ้า พระคุณทำให้หัวใจของเรายอมจำนนต่อพระเจ้า และทำให้ชีวิตของเรามีเป้าหมายที่ใหญ่กว่าและงดงามกว่าเดิม

คำอธิษฐาน

พระบิดาเจ้าผู้ทรงบริสุทธิ์และเปี่ยมด้วยพระสิริ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่เพียงทรงอภัยบาปของข้าพระองค์ แต่ยังทรงเรียกข้าพระองค์ให้มีชีวิตอยู่เพื่อแผ่นดินของพระองค์ โปรดอภัยข้าพระองค์ เมื่อข้าพระองค์ทำเหมือนรับใช้พระองค์ แต่ในใจกลับแสวงหาเกียรติ ความพอใจ และความต้องการของตนเอง

ขอบพระคุณพระเยซูคริสต์ ผู้ทรงสิ้นพระชนม์และเป็นขึ้นจากความตาย เพื่อช่วยข้าพระองค์ออกจากบาปและการเห็นแก่ตัว โปรดให้พระวิญญาณบริสุทธิ์ทรงครอบครองหัวใจของข้าพระองค์ เพื่อชีวิตของข้าพระองค์จะไม่เป็นของตนเองอีกต่อไป แต่เป็นของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-07-31'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
