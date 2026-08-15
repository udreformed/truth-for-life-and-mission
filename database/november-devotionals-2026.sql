-- Generated from the reviewed monthly devotional HTML.
PRAGMA foreign_keys = ON;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-01', 'published', '2026-11-01', 1, 'thaigodpleasing@naver.com', '2026-11-01T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 1 พฤศจิกายน', '', 'พระเจ้าทรงตีสอนลูกของพระองค์ ไม่ใช่เพื่อผลักเราออกไป แต่เพื่อดึงเราให้กลับมาสู่ทางแห่งชีวิต การตีสอนของพระองค์ไม่ใช่การลงโทษเพื่อชดใช้บาป เพราะพระคริสต์ทรงรับโทษแทนเราแล้วบนไม้กางเขน

บางครั้งเรากลัวการแก้ไขของพระเจ้า เพราะเราคิดว่าพระองค์กำลังโกรธและปฏิเสธเรา แต่พระกิตติคุณบอกว่า ผู้ที่อยู่ในพระคริสต์ได้รับการยอมรับแล้ว การแก้ไขของพระบิดาจึงเป็นผลของความรัก ไม่ใช่ผลของการปฏิเสธ

วันนี้ ถ้าพระเจ้าทรงเปิดเผยบาปหรือความอ่อนแอของเรา อย่าวิ่งหนีพระองค์ จงเข้ามาหาพระบิดาด้วยความไว้วางใจ พระองค์ทรงกำลังเปลี่ยนเราให้รักความชอบธรรมมากขึ้น

คำอธิษฐาน

พระบิดาผู้ทรงรักและทรงสัตย์ซื่อ ข้าพระองค์สรรเสริญพระองค์ เพราะการตีสอนของพระองค์ไม่ใช่การผลักไส แต่เป็นความรักของพระบิดาที่ไม่ยอมปล่อยให้ลูกของพระองค์ติดอยู่ในบาป โปรดอภัยเมื่อข้าพระองค์กลัวการแก้ไขของพระองค์และคิดว่าพระองค์กำลังลงโทษข้าพระองค์ ขอบพระคุณพระเยซูคริสต์ ผู้ทรงรับโทษแทนข้าพระองค์อย่างครบถ้วนบนไม้กางเขน โปรดให้พระวิญญาณบริสุทธิ์ทำให้ใจของข้าพระองค์อ่อนลง ยอมรับการแก้ไข และเติบโตในความชอบธรรมด้วยความไว้วางใจในพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-01'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-02', 'published', '2026-11-02', 1, 'thaigodpleasing@naver.com', '2026-11-02T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 2 พฤศจิกายน', '', 'โลกที่แตกหักทำให้เราคิดว่าความบาป ความตาย และความพ่ายแพ้เป็นคำตอบสุดท้าย แต่ไม้กางเขนของพระเยซูบอกเราว่า ความพ่ายแพ้ที่ดูเหมือนจบสิ้น กลายเป็นชัยชนะของพระคุณ

ที่ไม้กางเขน พระบุตรของพระเจ้าทรงตายแทนคนบาป สิ่งนี้ไม่ใช่แผนของพระเจ้าที่ล้มเหลว แต่เป็นทางที่พระเจ้าทรงกำหนดเพื่อช่วยเรา ความตายกลายเป็นประตูสู่ชีวิต และความสิ้นหวังกลายเป็นทางเข้าสู่ความหวัง

ดังนั้น เราจึงไม่อวดความดีของตนเอง แต่โอ้อวดในไม้กางเขน เพราะที่นั่นเราเห็นการอภัย การเปลี่ยนแปลง และชีวิตใหม่ที่เป็นไปได้จริงในพระคริสต์

คำอธิษฐาน

พระเจ้าแห่งความรอด ข้าพระองค์นมัสการพระองค์ เพราะไม้กางเขนไม่ใช่ความพ่ายแพ้ แต่เป็นชัยชนะของพระคุณ โปรดอภัยเมื่อข้าพระองค์โอ้อวดความดี ความสามารถ หรือความสำเร็จของตนเองมากกว่าพระคริสต์ ขอบพระคุณที่พระเยซูทรงตายแทนคนบาป และทรงเปิดทางแห่งชีวิต ความหวัง และการอภัย โปรดให้หัวใจของข้าพระองค์ภูมิใจในไม้กางเขน และดำเนินชีวิตด้วยความยินดีในชัยชนะของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-02'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-03', 'published', '2026-11-03', 1, 'thaigodpleasing@naver.com', '2026-11-03T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 3 พฤศจิกายน', '', 'เรามักประเมินตนเองจากอดีต ความสำเร็จ ความล้มเหลว และความอ่อนแอที่เคยเกิดขึ้น สิ่งเหล่านี้ช่วยให้เราถ่อมใจได้ แต่ไม่ควรเป็นมาตรฐานสุดท้ายในการมองชีวิตของผู้เชื่อ

ในพระคริสต์ เราไม่ได้ถูกทิ้งไว้กับกำลังของตนเอง พระองค์ประทานตัวพระองค์เองแก่เรา พระวิญญาณทรงสถิตอยู่ในเรา และพระคุณของพระเจ้าทำให้เราได้รับกำลังและทางใหม่ในการดำเนินชีวิต

วันนี้ อย่าพูดกับตนเองว่า “ฉันทำไม่ได้” ราวกับลืมว่าพระคริสต์ทรงอยู่กับเรา จงยอมรับความอ่อนแอ แต่ให้ความเชื่อหันไปพึ่งพระคุณของพระเจ้าซึ่งเพียงพอสำหรับสิ่งที่พระเจ้าทรงเรียกให้เราทำ

คำอธิษฐาน

องค์พระผู้เป็นเจ้าผู้ทรงสถิตกับประชากรของพระองค์ ข้าพระองค์ขอบพระคุณที่พระคุณของพระองค์ไม่ปล่อยให้ข้าพระองค์อยู่กับกำลังอันจำกัดของตนเอง โปรดอภัยเมื่อข้าพระองค์ประเมินชีวิตจากความล้มเหลวในอดีต จนลืมว่าพระคริสต์ทรงสถิตอยู่ในข้าพระองค์ ขอให้พระวิญญาณบริสุทธิ์สอนข้าพระองค์ให้ยอมรับความอ่อนแออย่างสัตย์ซื่อ แต่ไม่สิ้นหวัง เพราะพระองค์ประทานกำลังเพียงพอสำหรับสิ่งที่ทรงเรียกให้ทำ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-03'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-04', 'published', '2026-11-04', 1, 'thaigodpleasing@naver.com', '2026-11-04T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 4 พฤศจิกายน', '', 'ความเหงาเป็นความเจ็บปวดจริงในโลกที่ตกอยู่ในบาป ความตาย การจากลา การถูกปฏิเสธ และความสัมพันธ์ที่แตกหักทำให้เรารู้สึกเหมือนถูกทิ้งไว้คนเดียว

แต่พระกิตติคุณบอกเราว่า ในพระคริสต์ เราถูกนำให้เข้าใกล้พระเจ้าและถูกรวมเข้ากับครอบครัวของพระองค์ เราไม่ใช่คนแปลกหน้าอีกต่อไป แต่เป็นประชากรของพระเจ้า

แม้มนุษย์จะเดินออกจากชีวิตเรา พระบิดาไม่ทรงละทิ้งเรา วันนี้ให้เราบอกใจตนเองว่า “ฉันอาจรู้สึกโดดเดี่ยว แต่ในพระคริสต์ ฉันไม่เคยถูกทิ้งไว้ลำพัง”

คำอธิษฐาน

พระบิดาผู้ไม่ทรงทอดทิ้งลูกของพระองค์ ข้าพระองค์สรรเสริญพระองค์ เพราะในพระคริสต์ ข้าพระองค์ไม่ได้เป็นคนแปลกหน้าอีกต่อไป แต่เป็นคนในครอบครัวของพระเจ้า โปรดปลอบใจข้าพระองค์ในเวลาที่รู้สึกโดดเดี่ยว ถูกลืม หรือถูกปฏิเสธ ขอบพระคุณพระเยซูที่ทรงนำข้าพระองค์ให้กลับมาใกล้พระองค์ โปรดให้พระวิญญาณย้ำเตือนใจว่า แม้คนอื่นจะจากไป พระองค์ยังทรงอยู่กับข้าพระองค์เสมอ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-04'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-05', 'published', '2026-11-05', 1, 'thaigodpleasing@naver.com', '2026-11-05T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 5 พฤศจิกายน', '', 'เรามักขอให้สิ่งทรงสร้างทำสิ่งที่มีแต่พระเจ้าทรงทำได้ เราอยากให้คน ความสำเร็จ เงิน งาน หรือครอบครัวให้ตัวตน ความสุข และความมั่นคงแก่เรา

แต่สิ่งทรงสร้างเป็นของประทานที่ดีและเป็นเหมือนป้ายบอกทาง ไม่ใช่ปลายทาง มันชี้ให้เรามองไปยังพระผู้สร้าง ผู้ทรงเป็นแหล่งชีวิตแท้

วันนี้ อย่าวางภาระที่หนักเกินไปบนคนหรือสิ่งของรอบตัว พระเยซูตรัสว่า พระองค์คือทางนั้น ความจริง และชีวิต จงมาหาพระองค์เพื่อรับชีวิตที่สิ่งอื่นให้ไม่ได้

คำอธิษฐาน

พระผู้สร้างและพระผู้ไถ่ ข้าพระองค์สรรเสริญพระองค์ เพราะชีวิตแท้มีอยู่ในพระองค์เท่านั้น โปรดอภัยเมื่อข้าพระองค์คาดหวังให้คน งาน เงิน ความสำเร็จ หรือครอบครัวทำหน้าที่แทนพระผู้ช่วยให้รอด ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเป็นทางนั้น ความจริง และชีวิต โปรดจัดระเบียบความรักในใจของข้าพระองค์ใหม่ ให้สิ่งทรงสร้างเป็นของประทานที่ชี้ไปหาพระองค์ ไม่ใช่พระเจ้าที่ข้าพระองค์ยึดไว้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-05'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-06', 'published', '2026-11-06', 1, 'thaigodpleasing@naver.com', '2026-11-06T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 6 พฤศจิกายน', '', 'บาปทำให้เราตั้งตนเองเป็นกษัตริย์เล็ก ๆ เราอยากให้ความต้องการ แผนการ และชื่อเสียงของเราเป็นศูนย์กลาง แม้ในเวลาที่พูดว่าเรารับใช้พระเจ้า ใจของเราก็ยังอาจแสวงหาอาณาจักรของตนเอง

พระคุณของพระเจ้าไม่ได้ถูกประทานมาเพื่อทำให้อาณาจักรเล็ก ๆ ของเราสำเร็จ แต่เพื่อพาเราลงจากบัลลังก์เล็ก ๆ ของตนเอง และเชิญเราเข้าสู่แผ่นดินของพระเจ้า

วันนี้ ให้เราถามใจว่า เรากำลังแสวงหาความยิ่งใหญ่ของใคร พระคริสต์ทรงเรียกเราให้เป็นผู้รับใช้ ไม่ใช่กษัตริย์ของตนเอง

คำอธิษฐาน

พระเจ้าผู้ทรงเป็นกษัตริย์แท้ ข้าพระองค์สรรเสริญพระองค์ เพราะพระคุณของพระองค์ไม่ได้รับใช้ความต้องการเล็ก ๆ ของข้าพระองค์ แต่ช่วยข้าพระองค์ออกจากอาณาจักรของตนเอง โปรดอภัยเมื่อข้าพระองค์แสวงหาชื่อเสียง การยอมรับ และความสำคัญของตนมากกว่าพระสิริของพระองค์ ขอบพระคุณพระเยซู ผู้ทรงถ่อมพระองค์ลงและทรงเรียกข้าพระองค์ให้เป็นผู้รับใช้ โปรดให้ใจของข้าพระองค์รักแผ่นดินของพระองค์มากกว่าอาณาจักรของตนเอง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-06'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-07', 'published', '2026-11-07', 1, 'thaigodpleasing@naver.com', '2026-11-07T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 7 พฤศจิกายน', '', 'พระเจ้าทรงเรียกเราให้พูดว่า “ไม่” ไม่ใช่ต่อพระองค์หรือผู้อื่น แต่ต่อความปรารถนาผิด ความคิดผิด และอารมณ์ที่พาเราออกจากทางของพระเจ้า

ถ้าปล่อยไว้ตามลำพัง เราไม่มีทั้งใจและกำลังพอที่จะปฏิเสธบาป เราอยากควบคุมสิ่งที่มีเพียงพระเจ้าทรงควบคุมได้ และอยากตามใจตนเองมากกว่ายอมจำนน

ข่าวดีคือ พระเจ้าไม่ได้เพียงสั่งเรา แต่ประทานพระวิญญาณบริสุทธิ์ให้สถิตในเรา วันนี้ เมื่อเราต้องพูดว่า “ไม่” ต่อบาป เราสามารถพึ่งฤทธิ์เดชของพระองค์ได้

คำอธิษฐาน

พระบิดาผู้ประทานพระวิญญาณบริสุทธิ์ ข้าพระองค์ขอบพระคุณที่พระองค์ไม่เพียงสั่งให้ข้าพระองค์ปฏิเสธบาป แต่ยังประทานกำลังให้พูดว่า ‘ไม่’ ต่อความปรารถนาผิด โปรดอภัยเมื่อข้าพระองค์ปล่อยใจตามความคิด อารมณ์ และการควบคุมของตนเอง ขอบพระคุณที่พระวิญญาณทรงสถิตอยู่ในข้าพระองค์ โปรดช่วยให้วันนี้ข้าพระองค์ปฏิเสธสิ่งที่พาออกจากทางของพระองค์ และเลือกเชื่อฟังด้วยความรัก

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-07'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-08', 'published', '2026-11-08', 1, 'thaigodpleasing@naver.com', '2026-11-08T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 8 พฤศจิกายน', '', 'ชีวิตของลูกพระเจ้าไม่เคยอยู่นอกการควบคุม แม้หลายสิ่งจะอยู่นอกมือเรา แต่ไม่มีสิ่งใดอยู่นอกพระหัตถ์ของพระคริสต์ผู้ทรงครอบครอง

เรื่องราวของเราถูกถักเข้ากับเรื่องราวใหญ่แห่งการไถ่ พระเจ้าทรงนำทุกเหตุการณ์ไปสู่เป้าหมายของพระองค์ แม้เราจะยังไม่เข้าใจทุกอย่าง

วันนี้ เมื่อใจเต็มไปด้วยคำว่า “ถ้าเกิดว่า...” จงพักในความจริงว่า พระคริสต์ทรงปกครองทุกสิ่งเพื่อความดีของเราและพระสิริของพระองค์

คำอธิษฐาน

พระคริสต์ผู้ทรงปกครองเหนือทุกสิ่ง ข้าพระองค์สรรเสริญพระองค์ เพราะชีวิตของข้าพระองค์ไม่เคยหลุดจากพระหัตถ์ของพระองค์ โปรดอภัยเมื่อความกลัวและคำว่า ‘ถ้าเกิดว่า’ ครอบงำใจ จนข้าพระองค์ลืมเรื่องราวใหญ่แห่งการไถ่ ขอบพระคุณที่พระองค์ทรงนำทุกเหตุการณ์เพื่อความดีของประชากรของพระองค์ โปรดให้ข้าพระองค์พักใจในการครอบครองที่เปี่ยมด้วยพระคุณของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-08'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-09', 'published', '2026-11-09', 1, 'thaigodpleasing@naver.com', '2026-11-09T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 9 พฤศจิกายน', '', 'เราต้องซื่อสัตย์ว่าบาปยังเหลืออยู่ในเรา ผู้เชื่อไม่ควรปฏิเสธหรือทำให้บาปดูเล็กลง แต่ก็ไม่ควรให้บาปกลายเป็นสิ่งที่เราครุ่นคิดจนสิ้นหวัง

สิ่งที่เราต้องใคร่ครวญทุกวันคือความสมบูรณ์ของงานพระคริสต์ ชีวิต การตาย และการเป็นขึ้นของพระองค์เพียงพอสำหรับการอภัยและการยอมรับของเรา

วันนี้ จงยอมรับความจริงเรื่องบาป แต่ให้ใจฉลองพระคุณที่เปลี่ยนตัวตน ศักยภาพ และปลายทางของเราอย่างสิ้นเชิง

คำอธิษฐาน

พระผู้ช่วยให้รอดผู้ทรงสมบูรณ์ ข้าพระองค์สรรเสริญพระองค์ เพราะพระคุณของพระคริสต์ใหญ่กว่าบาปที่ยังเหลืออยู่ในข้าพระองค์ โปรดอภัยเมื่อข้าพระองค์ปฏิเสธบาป ทำให้บาปดูเล็กลง หรือหมกมุ่นกับความผิดจนลืมพระคุณ ขอบพระคุณที่ชีวิต การตาย และการเป็นขึ้นจากความตายของพระเยซูเพียงพอแล้ว โปรดให้ข้าพระองค์ซื่อสัตย์ต่อความจริงเรื่องบาป และยินดีในความจริงเรื่องพระคุณ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-09'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-10', 'published', '2026-11-10', 1, 'thaigodpleasing@naver.com', '2026-11-10T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 10 พฤศจิกายน', '', 'พระเจ้าไม่ได้เปิดเผยความจริงเพื่อให้เราเป็นเพียงผู้ชมงานของพระองค์ แต่ทรงเรียกลูกทุกคนให้มีส่วนในงานแห่งแผ่นดินของพระองค์

คริสตจักรไม่ใช่เวทีที่บางคนแสดงและคนอื่นนั่งดู พระเจ้าทรงเรียกทุกคนให้เป็นทูตของพระองค์ ทำให้พระคุณที่มองไม่เห็นกลายเป็นสิ่งที่คนอื่นสัมผัสได้

วันนี้ ชีวิต ความสัมพันธ์ คำพูด และการรับใช้ของเราเป็นพื้นที่สำหรับสำแดงพระเมตตาและความสัตย์ซื่อของพระเจ้า

คำอธิษฐาน

พระเจ้าผู้ทรงใช้ประชากรของพระองค์ ข้าพระองค์ขอบพระคุณที่พระองค์ไม่ได้เรียกข้าพระองค์ให้เป็นเพียงผู้ชมงานแห่งพระคุณ แต่ให้เป็นเครื่องมือของพระคุณนั้น โปรดอภัยเมื่อข้าพระองค์คิดว่าชีวิตเป็นของตนเอง และมองการรับใช้เป็นเรื่องพิเศษที่แยกจากชีวิตประจำวัน ขอบพระคุณพระคริสต์ผู้ทรงซื้อข้าพระองค์ด้วยราคาอันล้ำค่า โปรดใช้คำพูด ท่าที ความสัมพันธ์ และสิ่งที่มีทั้งหมดของข้าพระองค์เพื่อสำแดงพระคุณของพระองค์แก่ผู้อื่น

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-10'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-11', 'published', '2026-11-11', 1, 'thaigodpleasing@naver.com', '2026-11-11T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 11 พฤศจิกายน', '', 'บางครั้งเรารอให้รู้สึกพร้อมก่อนจึงจะเชื่อฟัง แต่พระเจ้ามักประทานพระคุณในขณะที่เราก้าวตามพระองค์ ไม่ใช่ก่อนที่เราจะต้องการมันจริง ๆ

เมื่ออิสราเอลยืนอยู่หน้าทะเลแดง พระเจ้าไม่ได้อธิบายทุกอย่างล่วงหน้า พระองค์เรียกให้พวกเขาก้าวไป แล้วทรงสำแดงฤทธิ์เดชของพระองค์

วันนี้ ถ้าพระเจ้าทรงเรียกให้เราเชื่อฟัง อย่ารอจนใจไม่กลัวเลย จงก้าวไปด้วยความเชื่อ พระคุณที่จำเป็นจะมาถึงในเวลาที่จำเป็น

คำอธิษฐาน

พระเจ้าผู้ทรงนำหน้าและทรงอยู่กับเรา ข้าพระองค์สรรเสริญพระองค์ เพราะพระคุณของพระองค์มาถึงในเวลาที่ต้องการจริง ๆ โปรดอภัยเมื่อข้าพระองค์อยากเห็นคำตอบทั้งหมดก่อนจึงจะก้าวตามพระองค์ ขอบพระคุณที่พระองค์ทรงสัตย์ซื่อเหมือนวันที่ทรงนำอิสราเอลผ่านทะเลแดง โปรดสอนให้ข้าพระองค์เชื่อฟังทีละก้าว และวางใจว่าพระคุณจะเพียงพอในขณะเดินตามพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-11'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-12', 'published', '2026-11-12', 1, 'thaigodpleasing@naver.com', '2026-11-12T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 12 พฤศจิกายน', '', 'เรามักเชื่อคำโกหกว่า ชีวิตแท้อยู่ข้างนอกขอบเขตของพระเจ้า แต่ทุกครั้งที่เราเดินตามทางของตนเอง ใจก็ยิ่งกระสับกระส่ายมากขึ้น

ความสงบแท้ไม่ได้อยู่ที่การได้ทำตามใจตนเอง แต่อยู่ที่การยอมให้แผ่นดินของพระเจ้ามาครอบครองความคิด ความปรารถนา คำพูด งาน และครอบครัวของเรา

วันนี้ ให้เราทูลว่า “ขอให้แผ่นดินของพระองค์มาตั้งอยู่ในใจของข้าพระองค์” เพราะใจที่ยอมจำนนต่อพระคริสต์คือใจที่พบการพักสงบแท้

คำอธิษฐาน

พระบิดาผู้ทรงปัญญาและทรงดี ข้าพระองค์สรรเสริญพระองค์ เพราะความสงบแท้ไม่ได้อยู่หลังการกบฏ แต่อยู่ในการยอมจำนนต่อพระองค์ โปรดอภัยเมื่อข้าพระองค์เชื่อคำโกหกว่า ชีวิตจะดีกว่าถ้าได้ทำตามใจตนเอง ขอบพระคุณพระเยซูผู้ทรงเป็นกษัตริย์ที่ดี โปรดให้แผ่นดินของพระองค์มาในความคิด ความปรารถนา ครอบครัว งาน และเวลาพักของข้าพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-12'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-13', 'published', '2026-11-13', 1, 'thaigodpleasing@naver.com', '2026-11-13T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 13 พฤศจิกายน', '', 'คำอธิษฐานแท้ไม่ใช่การประกาศว่าเราดีกว่าคนอื่น ฟาริสีในคำอุปมาของพระเยซูพูดกับพระเจ้า แต่แท้จริงเขาไม่ได้อธิษฐาน เพราะเขาไม่ได้เห็นว่าตนเองต้องการพระเมตตา

คนเก็บภาษีกลับยืนห่าง ๆ และร้องว่า “ข้าแต่พระเจ้า ขอทรงพระเมตตาแก่ข้าพระองค์ผู้เป็นคนบาป” นี่คือหัวใจของคำอธิษฐานแท้

วันนี้ เราไม่เข้ามาหาพระเจ้าด้วยความชอบธรรมของตนเอง แต่เข้ามาด้วยความต้องการการอภัยและด้วยความหวังในพระคุณแห่งไม้กางเขน

คำอธิษฐาน

พระเจ้าผู้ทรงเมตตาต่อคนบาป ข้าพระองค์เข้ามาหาพระองค์ไม่ใช่เพราะความชอบธรรมของตนเอง แต่เพราะพระคุณแห่งไม้กางเขน โปรดอภัยเมื่อข้าพระองค์เปรียบเทียบตนเองกับผู้อื่น และใช้ความดีของตนเป็นเหตุให้รู้สึกมั่นใจ ขอบพระคุณพระเยซูคริสต์ ผู้ทรงเป็นความชอบธรรมแทนข้าพระองค์ โปรดให้คำอธิษฐานของข้าพระองค์เป็นเสียงร้องขอความเมตตา ไม่ใช่การประกาศความดีของตนเอง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-13'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-14', 'published', '2026-11-14', 1, 'thaigodpleasing@naver.com', '2026-11-14T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 14 พฤศจิกายน', '', 'เราฝันถึงความสัมพันธ์ที่สมบูรณ์แบบ แต่ความจริงคือ ความสัมพันธ์เต็มไปด้วยความเข้าใจผิด การป้องกันตัว ความเงียบ ความเจ็บปวด และความไม่อดทน

ปัญหาของความสัมพันธ์ไม่ใช่เพียงนิสัยหรือการสื่อสาร แต่ลึกลงไปคือบาปที่ทำให้เราเห็นแก่ตัว เรียกร้อง และตัดสินเร็วกว่าให้อภัย

ข่าวดีคือ พระคริสต์เสด็จมาเพื่อช่วยเราออกจากความเป็นตัวเองนี้ มีพระคุณสำหรับทุกช่วงเวลาที่ความสัมพันธ์ยุ่งเหยิง และเราเข้าสู่พระคุณนั้นเมื่อเรายอมรับว่าเราต้องการมันจริง ๆ

คำอธิษฐาน

พระบิดาผู้ทรงอดทนและเปี่ยมด้วยพระเมตตา ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ทรงมีพระคุณสำหรับความยุ่งเหยิงในความสัมพันธ์ของเรา โปรดอภัยเมื่อข้าพระองค์เห็นแก่ตัว ปกป้องตนเอง เรียกร้อง หรือไม่ยอมให้อภัยในช่วงเวลาเล็ก ๆ ของชีวิต ขอบพระคุณพระเยซูที่ทรงมาเพื่อช่วยเราออกจากการมีชีวิตเพื่อตนเอง โปรดให้พระวิญญาณสร้างใจที่ถ่อมลง พร้อมสารภาพ ให้อภัย และรักผู้อื่นด้วยพระคุณ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-14'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-15', 'published', '2026-11-15', 1, 'thaigodpleasing@naver.com', '2026-11-15T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 15 พฤศจิกายน', '', 'ในโลกที่แตกหัก เราไม่สามารถหาความหวังมั่นคงจากสถานการณ์ คน สุขภาพ เงิน หรือความง่ายของชีวิต สิ่งเหล่านี้เปลี่ยนแปลงและอาจทำให้ผิดหวังได้

พระกิตติคุณบอกว่า ความหวังไม่ใช่สถานที่ ความรู้สึก หรือความสัมพันธ์ แต่คือพระเยซู พระองค์ทรงตายเพื่อให้เรามีชีวิต และทรงอยู่กับเราเพื่อประทานสิ่งที่จำเป็น

วันนี้ แม้สถานการณ์ไม่ง่าย เรามีเหตุผลที่จะหวัง เพราะความรักของพระคริสต์ไม่สั่นคลอนและเราเชื่อมต่อกับพระองค์ตลอดไป

คำอธิษฐาน

พระเจ้าผู้ทรงเป็นความหวังที่ไม่สั่นคลอน ข้าพระองค์สรรเสริญพระองค์ เพราะความหวังของข้าพระองค์ไม่ได้ขึ้นอยู่กับสถานการณ์ที่ง่าย หรือการยอมรับจากคนอื่น แต่อยู่ในพระเยซูคริสต์ โปรดอภัยเมื่อข้าพระองค์ค้นหาความหวังจากโลกที่แตกหัก ขอบพระคุณที่พระองค์ไม่ทรงทอดทิ้ง ไม่ทรงเหน็ดเหนื่อยกับข้าพระองค์ และทรงรักอย่างมั่นคง โปรดให้ใจของข้าพระองค์พักในพระคริสต์ ผู้ทรงเป็นความหวังแท้

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-15'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-16', 'published', '2026-11-16', 1, 'thaigodpleasing@naver.com', '2026-11-16T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 16 พฤศจิกายน', '', 'มนุษย์ถูกสร้างมาเพื่ออยู่ในความสัมพันธ์ ดังนั้นการถูกทิ้ง การถูกปฏิเสธ หรือการสูญเสียคนที่รักจึงเจ็บลึกมาก

แต่พระเยซูทรงรู้จักความโดดเดี่ยว และยังตรัสว่า พระองค์ไม่ทรงอยู่ลำพัง เพราะพระบิดาทรงอยู่กับพระองค์ ในพระคริสต์ เราก็มีพระบิดาผู้ไม่ทรงละทิ้งเราเช่นกัน

วันนี้ แม้บางคนเดินออกจากชีวิตเรา ความโดดเดี่ยวพื้นฐานไม่ใช่ความจริงสุดท้ายของเราอีกต่อไป ลูกของพระเจ้าถูกล้อมไว้ด้วยความรักของพระบิดา

คำอธิษฐาน

พระบิดาผู้ทรงอยู่ใกล้ผู้โดดเดี่ยว ข้าพระองค์ขอบพระคุณที่ความรักของพระองค์ไม่ขึ้นอยู่กับจำนวนคนที่อยู่รอบตัวข้าพระองค์ โปรดปลอบใจเมื่อข้าพระองค์รู้สึกถูกทิ้ง ถูกลืม หรือไม่มีใครเข้าใจ ขอบพระคุณพระเยซู ผู้ทรงถูกทิ้งไว้ลำพัง แต่ยังทรงวางใจพระบิดา โปรดให้ข้าพระองค์จำไว้ว่า ในฐานะลูกของพระองค์ ข้าพระองค์ไม่เคยอยู่ลำพังอย่างแท้จริง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-16'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-17', 'published', '2026-11-17', 1, 'thaigodpleasing@naver.com', '2026-11-17T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 17 พฤศจิกายน', '', 'เมื่อทำผิด เรามักตั้งใจว่าจะทำให้ดีขึ้น แต่การพยายามปรับพฤติกรรมด้วยกำลังตนเองไม่ใช่การกลับใจแท้ เพราะบาปลึกกว่าพฤติกรรม

การสารภาพแท้ไม่เพียงพูดว่า “ฉันผิด” แต่ยังยอมรับว่า “ฉันช่วยตัวเองให้พ้นจากบาปนี้ไม่ได้” แล้วร้องขอพระคุณจากพระเจ้า

วันนี้ เมื่อบาปถูกเปิดเผย อย่าเพียงวางแผนจะทำดีขึ้น จงเข้ามาหาพระคริสต์ด้วยหัวใจถ่อม เพื่อรับการอภัยและกำลังที่เปลี่ยนใจจริง ๆ

คำอธิษฐาน

พระเจ้าผู้ทรงเปลี่ยนหัวใจ ข้าพระองค์ยอมรับว่าบาปของข้าพระองค์ลึกกว่าพฤติกรรมภายนอก โปรดอภัยเมื่อข้าพระองค์เพียงตั้งใจว่าจะทำให้ดีขึ้น แต่ไม่ยอมสารภาพความจำเป็นที่ต้องพึ่งพระคุณ ขอบพระคุณพระเยซู ผู้ทรงช่วยคนที่ช่วยตนเองไม่ได้ โปรดให้ข้าพระองค์ไม่หยุดอยู่ที่การปรับปรุงตนเอง แต่ร้องขอพระคุณที่เปลี่ยนหัวใจและนำไปสู่การกลับใจจริง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-17'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-18', 'published', '2026-11-18', 1, 'thaigodpleasing@naver.com', '2026-11-18T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 18 พฤศจิกายน', '', 'ความบาปทำให้เราไม่มีความชอบธรรมต่อหน้าพระเจ้า ปัญหานี้ลึกกว่าการทำผิดบางครั้ง เพราะหัวใจของมนุษย์ถูกบาปบิดเบือนอย่างรุนแรง

แต่พระเจ้าทรงจัดเตรียมทางแห่งการพิพากษาและการไถ่ พระเยซูคริสต์ผู้ชอบธรรมทรงรับการพิพากษาแทนเรา เพื่อความชอบธรรมของพระองค์จะถูกนับเป็นของเรา

วันนี้ ความหวังของเราไม่ได้อยู่ที่ความดีของตนเอง แต่อยู่ที่พระคริสต์ ผู้ทรงเป็นความชอบธรรมเดียวที่ทำให้เรายืนอยู่ต่อหน้าพระเจ้าได้

คำอธิษฐาน

พระเจ้าผู้บริสุทธิ์และเที่ยงธรรม ข้าพระองค์สรรเสริญพระองค์ เพราะแม้ข้าพระองค์ไม่มีความชอบธรรมของตนเอง พระคริสต์ทรงเป็นความชอบธรรมของข้าพระองค์ โปรดอภัยเมื่อข้าพระองค์ลดความร้ายแรงของบาป หรือพยายามยืนต่อหน้าพระองค์ด้วยความดีของตน ขอบพระคุณพระเยซู ผู้ทรงรับการพิพากษาแทนข้าพระองค์ และประทานความชอบธรรมของพระองค์แก่ข้าพระองค์ โปรดให้ข้าพระองค์พักอยู่ในพระองค์ด้วยความถ่อมใจและความขอบพระคุณ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-18'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-19', 'published', '2026-11-19', 1, 'thaigodpleasing@naver.com', '2026-11-19T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 19 พฤศจิกายน', '', 'ของประทานที่ดีจากพระเจ้าอาจค่อย ๆ กลายเป็นรูปเคารพในใจเรา ความสัมพันธ์ บ้าน ความรู้ศาสนศาสตร์ ความสำเร็จ หรือความสะดวกสบายอาจเข้ามาแทนที่พระผู้ประทาน

ปัญหาไม่ใช่การรักสิ่งดีเสมอไป แต่คือเมื่อความปรารถนาดี ๆ กลายเป็นสิ่งที่ครอบครองหัวใจ สิ่งนั้นก็เริ่มแย่งที่ของพระเจ้า

วันนี้ ให้เราขอบคุณสำหรับของประทาน แต่กลับไปนมัสการพระผู้ประทาน อย่าแลกน้ำพุแห่งชีวิตกับบ่อแตกที่ไม่มีน้ำ

คำอธิษฐาน

พระผู้ประทานของประทานทุกอย่าง ข้าพระองค์สรรเสริญพระองค์ เพราะทุกสิ่งดีมาจากพระหัตถ์ของพระองค์ โปรดอภัยเมื่อข้าพระองค์รักของประทานมากกว่าพระผู้ประทาน และปล่อยให้สิ่งดีครอบครองใจแทนพระองค์ ขอบพระคุณที่พระเยซูทรงเป็นน้ำแห่งชีวิตที่ไม่มีวันแห้ง โปรดเปิดตาให้ข้าพระองค์เห็นบ่อน้ำแตกในใจ และนำใจกลับมาหาพระองค์ผู้เดียว

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-19'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-20', 'published', '2026-11-20', 1, 'thaigodpleasing@naver.com', '2026-11-20T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 20 พฤศจิกายน', '', 'เรามักแก้ตัวให้บาปของตนเอง บอกว่าคนอื่นเข้าใจผิด เราแค่เหนื่อย เราแค่มีนิสัยแรง หรือเราแค่ต้องปกป้องตนเอง แต่ไม้กางเขนบอกว่าบาปของเราจริงและร้ายแรง

พระเจ้าทรงส่งพระบุตรจริง ๆ ให้มามีชีวิตจริง ตายจริง และเป็นขึ้นจริง เพื่อประทานการอภัยและความหวังจริงแก่คนบาปจริง

วันนี้ อย่าทำให้บาปดูเล็กลง จงสารภาพอย่างซื่อสัตย์ และวิ่งไปหาพระคุณจริงที่มีอยู่ในพระคริสต์

คำอธิษฐาน

พระเจ้าผู้ทรงจริงและเปี่ยมด้วยพระคุณ ข้าพระองค์ยอมรับว่าบาปของข้าพระองค์เป็นเรื่องจริง ไม่ใช่สิ่งที่ควรแก้ตัวหรือทำให้ดูเล็กลง โปรดอภัยเมื่อข้าพระองค์ปกป้องตนเอง โทษสถานการณ์ หรือใช้คำพูดสวยงามเพื่อซ่อนบาป ขอบพระคุณพระเยซูที่เสด็จมาจริง ทรงตายจริง และทรงเป็นขึ้นจริงเพื่อบาปจริงของข้าพระองค์ โปรดให้ข้าพระองค์สารภาพอย่างสัตย์ซื่อและวิ่งเข้าหาพระคุณจริงของพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-20'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-21', 'published', '2026-11-21', 1, 'thaigodpleasing@naver.com', '2026-11-21T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 21 พฤศจิกายน', '', 'โลกมองเรื่องบาป ไม้กางเขน และพระคุณว่าเป็นความโง่ แต่ผู้ที่กำลังได้รับความรอดรู้ว่า คำเรื่องไม้กางเขนคือฤทธิ์เดชของพระเจ้า

เพราะเราลืมง่าย พระเจ้าจึงทรงให้ประชากรของพระองค์มารวมกันนมัสการ เพื่อจำอีกครั้งว่าเราเป็นคนที่ต้องการพระคุณ และพระเจ้าประทานพระคริสต์ให้เราแล้ว

วันนี้ การนมัสการไม่ใช่เพียงกิจกรรมศาสนา แต่เป็นพระคุณที่ทำให้ใจเราถ่อมลง เต็มด้วยความขอบพระคุณ และกลับไปยึดไม้กางเขนเป็นความหวัง

คำอธิษฐาน

พระเจ้าผู้ทรงเลือกสิ่งที่โลกเห็นว่าอ่อนแอ ข้าพระองค์สรรเสริญพระองค์ เพราะไม้กางเขนซึ่งโลกมองว่าโง่เขลา คือฤทธิ์เดชและพระปัญญาของพระองค์ โปรดอภัยเมื่อข้าพระองค์รับเอาความคิดของโลกมาวัดคุณค่าของตนเองและของพระกิตติคุณ ขอบพระคุณที่การนมัสการร่วมกันเตือนใจให้ถ่อมลงและขอบพระคุณอีกครั้ง โปรดให้ใจของข้าพระองค์ยึดไม้กางเขนเป็นรากฐานแห่งความหวัง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-21'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-22', 'published', '2026-11-22', 1, 'thaigodpleasing@naver.com', '2026-11-22T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 22 พฤศจิกายน', '', 'เรามักเรียกความปรารถนาของตนเองว่า “ความจำเป็น” เมื่อเราคิดว่าขาดสิ่งนั้นแล้วจะมีความสุขไม่ได้ ใจเราจะรู้สึกว่ามีสิทธิเรียกร้องและเริ่มตัดสินความรักของพระเจ้า

แต่พระเจ้าไม่ได้สัญญาจะให้ทุกสิ่งที่เราต้องการ พระองค์ทรงสัญญาจะประทานสิ่งที่เราจำเป็นจริง ๆ

วันนี้ ให้เราแยกความปรารถนาออกจากความจำเป็น และวางใจในพระบิดาผู้ทรงรู้ดีกว่าเราว่าอะไรจำเป็นต่อชีวิตและความเชื่อของเรา

คำอธิษฐาน

พระบิดาผู้ทรงรู้ความจำเป็นแท้จริงของลูก ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์ไม่ทรงหวงสิ่งดีสำหรับผู้ที่เดินกับพระองค์ โปรดอภัยเมื่อข้าพระองค์เรียกความอยากของตนว่า ‘ความจำเป็น’ แล้วตัดสินความรักของพระองค์จากสิ่งที่ได้รับหรือไม่ได้รับ ขอบพระคุณที่พระองค์ทรงรู้ดีกว่าข้าพระองค์ว่าข้าพระองค์ต้องการอะไร โปรดสอนให้ข้าพระองค์วางใจในการจัดเตรียมของพระองค์และพอใจในพระคุณที่พอเพียง

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-22'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-23', 'published', '2026-11-23', 1, 'thaigodpleasing@naver.com', '2026-11-23T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 23 พฤศจิกายน', '', 'เราไม่สามารถเชื่อฟังเพื่อซื้อความโปรดปรานจากพระเจ้าได้ มาตรฐานของพระองค์สูงเกินกว่าที่คนบาปจะทำได้ด้วยตนเอง

ข่าวดีคือ พระคริสต์ทรงทำสิ่งที่เราทำไม่ได้ พระองค์ทรงดำเนินชีวิตสมบูรณ์แบบ และถวายพระองค์เป็นเครื่องบูชาลบพระพิโรธ เพื่อเราจะได้รับการยอมรับโดยพระคุณ

ดังนั้น การเชื่อฟังของผู้เชื่อไม่ใช่ค่าจ่ายด้วยความกลัว แต่เป็นเพลงขอบพระคุณต่อพระเจ้าผู้ทรงพบเราในที่ที่เราอยู่และช่วยเราในสิ่งที่เราทำเองไม่ได้

คำอธิษฐาน

พระเจ้าผู้ทรงประทานความโปรดปรานในพระคริสต์ ข้าพระองค์สรรเสริญพระองค์ เพราะข้าพระองค์ไม่ต้องเชื่อฟังเพื่อซื้อความรักของพระองค์ พระเยซูทรงทำสิ่งที่ข้าพระองค์ทำไม่ได้แล้ว โปรดอภัยเมื่อข้าพระองค์เชื่อฟังด้วยความกลัว หรือคิดว่าความดีของตนจะทำให้พระองค์รับมากขึ้น ขอบพระคุณสำหรับเครื่องบูชาลบพระพิโรธของพระคริสต์ โปรดให้การเชื่อฟังของข้าพระองค์เป็นการนมัสการด้วยความขอบพระคุณ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-23'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-24', 'published', '2026-11-24', 1, 'thaigodpleasing@naver.com', '2026-11-24T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 24 พฤศจิกายน', '', 'หัวใจของเราถูกสร้างมาให้ยำเกรงพระเจ้าอย่างแท้จริง ให้พระสิริของพระองค์กำหนดความคิด ความปรารถนา และพฤติกรรมของเรา

แต่บาปทำให้ใจถูกดึงไปยำเกรงสิ่งอื่น ยำเกรงสิ่งทรงสร้าง คนอื่น หรือแม้แต่ตนเอง เมื่อสิ่งเหล่านี้เข้ามาแทนที่พระเจ้า ชีวิตฝ่ายวิญญาณย่อมสับสน

วันนี้ เราต้องการพระคุณให้เห็นอีกครั้ง สั่นสะท้านอีกครั้ง และก้มลงนมัสการพระองค์ผู้เดียวที่สมควรได้รับความยำเกรงของเรา

คำอธิษฐาน

พระเจ้าผู้สมควรแก่ความยำเกรง ข้าพระองค์สรรเสริญพระองค์ เพราะพระสิริของพระองค์ควรครอบครองความคิด ความปรารถนา และการกระทำของข้าพระองค์ โปรดอภัยเมื่อใจของข้าพระองค์ถูกความสำคัญของตนเอง คนอื่น หรือสิ่งทรงสร้างดึงไปจากพระองค์ ขอบพระคุณที่พระคุณช่วยเปิดตาให้เห็นอีกครั้งว่า พระองค์ใหญ่และงดงามเพียงใด โปรดทำให้ข้าพระองค์ยำเกรงพระองค์ ถ่อมลง และนมัสการพระองค์เหนือสิ่งอื่นใด

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-24'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-25', 'published', '2026-11-25', 1, 'thaigodpleasing@naver.com', '2026-11-25T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 25 พฤศจิกายน', '', 'มนุษย์ทุกคนเป็นผู้นมัสการ แม้คนที่ไม่เคร่งศาสนาก็ยังมอบหัวใจให้บางสิ่ง สิ่งที่เรารักที่สุดจะกำหนดคำพูด การเลือก และการตอบสนองของเรา

เมื่อพระเจ้าไม่ได้อยู่ในที่ที่ถูกต้องในหัวใจ เราจะเอาตนเองหรือสิ่งทรงสร้างเข้าไปแทนที่ บางครั้งความหงุดหงิด ความใจร้อน หรือการปกป้องตนเองก็เผยให้เห็นว่าใจเรากำลังนมัสการสิ่งอื่น

วันนี้ ให้เรากลับมาที่พระคริสต์ พระองค์ไม่เพียงอภัยการไหว้รูปเคารพของเรา แต่ทรงเรียกเรากลับมาเพื่อสิ่งที่เราถูกสร้างมา คือการนมัสการพระเจ้า

คำอธิษฐาน

พระผู้สร้างผู้สมควรรับการนมัสการ ข้าพระองค์ยอมรับว่าใจของข้าพระองค์นมัสการบางสิ่งอยู่เสมอ โปรดอภัยเมื่อข้าพระองค์ปล่อยให้ความสะดวก ความถูกต้องของตน ความเคารพจากคนอื่น หรือความพอใจของตนขึ้นครองใจแทนพระองค์ ขอบพระคุณพระเยซูที่ทรงสิ้นพระชนม์เพื่อยึดหัวใจของข้าพระองค์กลับคืนมา โปรดให้ความรักต่อพระองค์เป็นรากของคำพูด การตัดสินใจ และความสัมพันธ์ของข้าพระองค์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-25'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-26', 'published', '2026-11-26', 1, 'thaigodpleasing@naver.com', '2026-11-26T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 26 พฤศจิกายน', '', 'เรื่องราวของมนุษย์เริ่มต้นด้วยพระเจ้าผู้ทรงสร้างทุกสิ่งให้ดี แต่บาปของอาดัมและเอวาทำลายชาลอมที่พระเจ้าทรงตั้งไว้ มนุษย์ถูกขับออกจากสวน

แต่พระเจ้าผู้ทรงพิพากษาบาปก็ทรงประกาศพระสัญญาแห่งพระคุณ พระองค์จะส่งเชื้อสายของหญิงมาบดขยี้ศัตรู นี่คือข่าวดีที่ชี้ไปยังพระเยซูคริสต์

บนไม้กางเขน พระเยซูทรงถูกบาดเจ็บ แต่ศัตรูพ่ายแพ้ตลอดกาล วันนี้เราไม่ใช่คนที่ถูกขับออกไปอย่างสิ้นหวัง แต่เป็นคนที่พระคุณพากลับสู่อ้อมแขนของพระบิดา

คำอธิษฐาน

พระเจ้าผู้ทรงเมตตาต่อกบฏ ข้าพระองค์สรรเสริญพระองค์ เพราะเรื่องราวของการไถ่ไม่จบลงด้วยการถูกขับออกจากสวน แต่พาเรากลับเข้าสู่อ้อมแขนของพระบิดา โปรดอภัยเมื่อข้าพระองค์ลืมว่าบาปคือการกบฏต่อพระองค์ ขอบพระคุณพระเยซูคริสต์ ผู้ทรงถูกบดขยี้เพื่อชนะศัตรูและเปิดทางกลับสู่พระเจ้า โปรดให้ข่าวประเสริฐนี้ปลุกใจข้าพระองค์ให้มีความหวังในทุกเช้า

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-26'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-27', 'published', '2026-11-27', 1, 'thaigodpleasing@naver.com', '2026-11-27T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 27 พฤศจิกายน', '', 'ความอิจฉาทำให้เราคิดว่า “ฉันสมควรได้รับมากกว่านี้” ใจที่อิจฉามองชีวิตจากศูนย์กลางของตนเอง และเริ่มตัดสินความดี ความสัตย์ซื่อ และพระปัญญาของพระเจ้า

เมื่อเราเชื่อว่าพระเจ้าควรให้สิ่งที่คนอื่นมีแก่เรา เราไม่ได้มีปัญหากับคนนั้นเท่านั้น แต่กำลังมีปัญหากับพระเจ้า

วันนี้ ให้พระคุณช่วยเราออกจากการนับสิ่งที่ไม่มี และหันมาชื่นชมพระคุณที่เราไม่เคยสมควรได้รับแต่พระเจ้าได้ประทานอย่างมากมาย

คำอธิษฐาน

พระบิดาผู้ประทานพระคุณอย่างเหลือล้น ข้าพระองค์สรรเสริญพระองค์ เพราะข้าพระองค์ได้รับพระคุณมากกว่าที่สมควรได้รับ โปรดอภัยเมื่อความอิจฉาทำให้ข้าพระองค์นับสิ่งที่ตนไม่มีมากกว่านับพระพรที่พระองค์ให้ ขอบพระคุณที่พระองค์ทรงปัญญา ดี และสัตย์ซื่อในการจัดสรรทุกสิ่ง โปรดช่วยให้ข้าพระองค์ละจากความคิดว่า ‘ฉันสมควรได้’ และกลับมายินดีว่า ‘ฉันได้รับพระคุณแล้ว’

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-27'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-28', 'published', '2026-11-28', 1, 'thaigodpleasing@naver.com', '2026-11-28T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 28 พฤศจิกายน', '', 'เรามักเห็นบาปของคนอื่นชัดกว่าบาปของตนเอง และเมื่อเปรียบเทียบเช่นนั้น เรามักสรุปว่าเราดีกว่าเขา แต่พระคัมภีร์บอกว่า ทุกคนทำบาปและเสื่อมจากพระสิริของพระเจ้า

คนข้าง ๆ ไม่ได้ต้องการพระกิตติคุณมากกว่าเรา เขาเพียงต้องการพระกิตติคุณในแบบที่ต่างจากเรา เราทุกคนอยู่ในเรือลำเดียวกัน คือเป็นคนบาปที่ต้องการพระคุณ

วันนี้ ให้เราหยุดเปรียบเทียบฝ่ายวิญญาณ และขอบพระคุณที่พระคริสต์ทรงรับโทษแทนเรา เพื่อเราจะอยู่ใต้พระคุณของพระเจ้า

คำอธิษฐาน

พระเจ้าผู้ทรงช่วยคนบาปทุกคน ข้าพระองค์สรรเสริญพระองค์ เพราะไม่มีใครชอบธรรมด้วยตนเอง และทุกคนต้องการพระคุณของพระเยซู โปรดอภัยเมื่อข้าพระองค์มองบาปของผู้อื่นชัดกว่าบาปของตนเอง และเปรียบเทียบเพื่อให้ตนดูดีกว่า ขอบพระคุณที่พระคริสต์ทรงรับโทษแทนข้าพระองค์ โปรดให้ข้าพระองค์ถ่อมใจ ไม่ดูหมิ่นผู้อื่น และรักคนบาปด้วยพระคุณเดียวกันที่ข้าพระองค์ได้รับ

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-28'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-29', 'published', '2026-11-29', 1, 'thaigodpleasing@naver.com', '2026-11-29T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 29 พฤศจิกายน', '', 'เรามีปัญหาใหญ่สองอย่าง คือเราอยู่ในโลกที่แตกหัก และบาปยังเหลืออยู่ในใจเรา ความชั่วภายนอกล่อลวงเราได้ เพราะในใจเรายังมีความปรารถนาผิด

ถ้าเราไม่ยอมรับความจริงนี้ เราจะมีความคาดหวังที่ไม่สมจริงและไม่ระวังการทดลอง แต่ถ้าเรามองด้วยพระกิตติคุณ เราจะเห็นว่าพระคุณของพระคริสต์ใหญ่กว่าทั้งสองปัญหา

วันนี้ พระเยซูทรงอยู่กับเรา พระองค์ทรงมีพระคุณและสัตย์ซื่อ ที่ใดบาปเพิ่มขึ้น พระคุณของพระเจ้าก็ยิ่งมากขึ้น

คำอธิษฐาน

พระเยซูผู้ทรงอยู่ใกล้และสัตย์ซื่อ ข้าพระองค์สรรเสริญพระองค์ เพราะพระคุณของพระองค์มีมากยิ่งกว่าบาป ทั้งบาปในโลกและบาปในใจของข้าพระองค์ โปรดอภัยเมื่อข้าพระองค์ประมาทต่อความชั่วภายนอก หรือไม่ยอมเห็นความปรารถนาผิดภายใน ขอบพระคุณที่พระองค์ไม่ทรงปล่อยให้ข้าพระองค์ต่อสู้ลำพัง โปรดช่วยให้ข้าพระองค์ตื่นตัวต่อการทดลอง และพึ่งพระคุณที่ครอบครองนำไปสู่ชีวิตนิรันดร์

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-29'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resources (type, slug, status, content_date, series_slot, author_email, published_at, created_at, updated_at)
VALUES ('devotional', 'gospel-devotional-2026-11-30', 'published', '2026-11-30', 1, 'thaigodpleasing@naver.com', '2026-11-30T00:00:00.000Z', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET status = 'published', content_date = excluded.content_date, series_slot = 1, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'th', 'บทใคร่ครวญพระกิตติคุณ 30 พฤศจิกายน', '', 'งูหลอกมนุษย์ด้วยคำโกหกสองอย่าง คือเรามีอิสระจากพระเจ้าได้ และเราพึ่งตนเองได้ แต่การทรงสร้างทำลายคำโกหกเหล่านี้ เพราะผู้ที่ถูกสร้างย่อมเป็นของพระผู้สร้าง

เราไม่ได้เป็นเจ้าของชีวิต ความคิด อารมณ์ ร่างกาย หรือจิตวิญญาณของตนเอง เราถูกสร้างให้พึ่งพระเจ้า และพึ่งกันในความสัมพันธ์ที่พระองค์ทรงวางไว้

วันนี้ อย่าพยายามเดินคนเดียว การพึ่งพระเจ้าไม่ใช่ความอ่อนแอที่น่าอาย แต่เป็นรูปแบบชีวิตที่เราถูกสร้างมาให้มี และพระคุณของพระองค์ต้อนรับเราในความพึ่งพานั้น

คำอธิษฐาน

พระผู้สร้างและพระบิดาผู้ทรงพระคุณ ข้าพระองค์สรรเสริญพระองค์ เพราะพระองค์สร้างข้าพระองค์ให้พึ่งพาพระองค์ ไม่ใช่ให้ใช้ชีวิตตามลำพัง โปรดอภัยเมื่อข้าพระองค์เชื่อคำโกหกเรื่องการเป็นเจ้าของชีวิตตนเอง และคิดว่าตนมีพอโดยไม่ต้องการพระองค์ ขอบพระคุณที่พระเยซูทรงปลดปล่อยข้าพระองค์จากความเป็นอิสระจอมปลอม โปรดให้ข้าพระองค์ยอมรับความจำเป็นที่ต้องพึ่งพระคุณ และดำเนินชีวิตใกล้ชิดพระองค์ทุกวัน

อธิษฐานในพระนามพระเยซูคริสต์ อาเมน.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-30'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;

-- Generated from the reviewed monthly devotional HTML.
PRAGMA foreign_keys = ON;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '하나님의 징계는 사랑입니다', '', '하나님의 징계는 거절이 아니라 사랑의 표현입니다. 그리스도께서 죄의 형벌을 이미 담당하셨기 때문에, 하나님은 우리에게 다시 형벌을 지우시는 분이 아닙니다. 오히려 자녀 된 우리를 죄에서 건져 내시고 의의 열매를 맺게 하십니다. 오늘 하나님의 책망과 교정을 두려워하지 마십시오. 그것은 하나님이 우리를 버리셨다는 증거가 아니라, 우리를 받아 주셨다는 증거입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-01'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '십자가는 소망의 표지입니다', '', '십자가는 실패의 상징이 아니라 소망의 중심입니다. 세상은 죄와 죽음으로 무너졌지만, 하나님은 바로 그 십자가에서 생명과 용서와 변화를 여셨습니다. 우리는 자기 의를 자랑할 수 없지만, 그리스도의 십자가는 자랑할 수 있습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-02'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '은혜의 자원으로 자신을 보십시오', '', '우리는 자주 과거의 실패와 약함으로 자신의 가능성을 판단합니다. 그러나 그리스도 안에 있는 사람은 자기 기록에 갇혀 있지 않습니다. 하나님은 자신을 우리에게 주셨고, 그 은혜 안에서 우리는 새로운 정체성과 새로운 가능성을 받았습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-03'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '하나님의 자녀는 결코 혼자가 아닙니다', '', '타락한 세상에서 외로움은 실제적인 고통입니다. 그러나 하나님의 자녀는 근본적으로 혼자가 될 수 없습니다. 그리스도 안에서 우리는 하나님께 가까이 나아가게 되었고, 성령 안에서 하나님이 거하시는 처소가 되었습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-04'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '피조물은 구주가 될 수 없습니다', '', '피조물은 좋은 선물이지만 구주가 될 수 없습니다. 사람, 성공, 소유, 관계는 하나님이 주신 은혜일 수 있지만, 생명을 주는 자리는 오직 그리스도께 속합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-05'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '은혜는 작은 왕국에서 우리를 끌어냅니다', '', '죄는 우리를 자기 왕국의 왕으로 세우려 합니다. 그러나 은혜는 우리를 그 작은 왕국에서 끌어내어 하나님의 나라로 부릅니다. 우리는 중심이 아니라 주님의 통치 아래 있는 종입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-06'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '성령은 “아니오”라고 말할 힘을 주십니다', '', '하나님은 우리에게 자신을 부인하라고 부르십니다. 그러나 동시에 성령을 주셔서 죄와 자기중심적 욕망에 “아니오”라고 말할 힘을 주십니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-07'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '두려움의 “만약” 대신 주권적 돌보심에 쉬십시오', '', '우리 삶의 많은 것은 우리 통제 밖에 있습니다. 그러나 하나님의 자녀의 삶은 결코 통제 밖에 있지 않습니다. 그리스도는 모든 것을 교회를 위하여 다스리십니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-08'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '남아 있는 죄보다 은혜가 큽니다', '', '남아 있는 죄를 부정하지 말아야 합니다. 그러나 그 죄를 묵상의 중심으로 삼아서도 안 됩니다. 우리는 그리스도의 완전한 사역과 충분한 은혜를 바라보아야 합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-09'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '하나님은 우리를 은혜의 도구로 세우십니다', '', '하나님은 우리를 단순한 관람자로 부르지 않으셨습니다. 은혜를 받은 사람은 은혜의 도구로 보냄받습니다. 우리의 삶과 관계는 주님의 긍휼을 보이게 하는 자리입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-10'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '은혜는 순종의 걸음 속에서 주어집니다', '', '은혜는 순종의 길에서 우리를 만납니다. 우리는 먼저 모든 것을 알고 준비된 뒤 순종하는 것이 아니라, 부르심을 따라 걸어가며 필요한 은혜를 받습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-11'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '반역 너머에는 안식이 없습니다', '', '마음의 안식은 반역 너머에 있지 않습니다. 참된 안식은 구주께 복종하는 데 있습니다. 하나님의 뜻이 이루어지기를 구하는 마음이 평안을 배웁니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-12'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '기도는 자기 의를 내려놓는 것입니다', '', '기도는 자기 의를 내려놓는 일입니다. 하나님 앞에서 자신을 자랑하는 것이 아니라, 용서와 긍휼이 필요한 죄인으로 주께 나아가는 것입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-13'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '관계의 엉킴에도 은혜가 있습니다', '', '관계는 복잡하고 때로 실망스럽습니다. 그 이유는 우리 모두가 죄를 관계 안으로 가져가기 때문입니다. 그러나 그리스도의 은혜는 관계의 엉킴 속에서도 충분합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-14'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '소망은 상황이 아니라 예수님입니다', '', '소망은 상황이 아니라 예수 그리스도입니다. 사람과 환경은 흔들리지만, 그리스도의 사랑은 흔들리지 않습니다. 그래서 오늘도 우리는 절망하지 않습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-15'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '관계 속에서 혼자여도 사랑받고 있습니다', '', '사람들이 떠나도 하나님의 사랑은 떠나지 않습니다. 인간관계 속에서 혼자라고 느껴질 수 있지만, 하나님의 자녀는 아버지의 사랑 안에서 결코 버려지지 않습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-16'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '마음을 바꾸는 은혜만 우리를 구합니다', '', '죄는 행동보다 깊습니다. 그래서 더 나은 행동 계획만으로는 충분하지 않습니다. 참된 고백은 자신의 무능을 인정하고 마음을 바꾸시는 은혜를 구하는 것입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-17'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '그리스도는 우리의 의가 되셨습니다', '', '우리는 거룩하신 하나님 앞에 설 의가 없습니다. 그러나 그리스도께서 우리의 의가 되셨습니다. 우리의 소망은 자신의 선함이 아니라 그리스도의 완전한 의입니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-18'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '선물보다 주신 분을 예배하십시오', '', '좋은 선물도 하나님 자리에 앉으면 우상이 됩니다. 선물을 기뻐하되, 선물을 주신 분을 잊지 말아야 합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-19'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '죄가 실제이기에 참 은혜가 필요합니다', '', '우리는 죄를 작게 만들려고 핑계를 댑니다. 그러나 십자가는 죄가 실제이고 심각하다는 것을 보여 줍니다. 실제 죄에는 실제 은혜가 필요합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-20'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '예배는 우리를 겸손과 감사로 이끕니다', '', '공예배는 세상이 어리석게 여기는 십자가를 다시 붙들게 합니다. 예배는 우리를 겸손하게 하고, 하나님의 선물 앞에서 감사하게 합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-21'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '하나님은 참 필요를 아십니다', '', '우리는 욕망을 필요라고 부르기 쉽습니다. 그러나 하나님은 우리가 원하는 모든 것을 약속하지 않으셨고, 참으로 필요한 것을 아시는 아버지로 공급하십니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-22'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '순종은 감사의 예배입니다', '', '순종은 하나님의 사랑을 얻기 위한 대가가 아닙니다. 그리스도께서 이미 우리를 위해 은혜를 얻으셨으므로, 순종은 감사의 예배가 됩니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-23'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '하나님 경외가 사라지면 자기 경외가 들어섭니다', '', '하나님 경외가 마음을 사로잡지 않으면 자기 경외가 그 자리를 차지합니다. 우리는 다시 보게 하시는 은혜가 필요합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-24'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '문제는 예배 여부가 아니라 예배 대상입니다', '', '문제는 우리가 예배하는가가 아니라 무엇을 예배하는가입니다. 그리스도는 우리의 우상숭배를 용서하실 뿐 아니라, 우리를 하나님 예배로 되찾으십니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-25'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '복음 이야기는 은혜로 우리를 아버지께 이끕니다', '', '죄는 인간을 하나님과의 샬롬에서 몰아냈지만, 은혜는 우리를 아버지의 품으로 이끕니다. 창세기 3장의 약속은 그리스도의 십자가에서 성취되었습니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-26'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '시기는 은혜를 보지 못하게 합니다', '', '시기는 하나님의 선하심을 의심하게 합니다. 그러나 은혜는 우리가 받지 못한 것을 세기보다, 이미 받은 놀라운 은혜를 기뻐하게 합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-27'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '우리 모두에게 복음이 필요합니다', '', '우리는 다른 사람보다 복음이 덜 필요한 사람이 아닙니다. 모두 죄 아래 있으며, 모두 그리스도의 은혜가 필요합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-28'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '세상은 깨어졌지만 예수님은 신실하십니다', '', '세상은 깨어졌고 우리 안에도 죄가 남아 있습니다. 그러나 그리스도는 함께하시며, 죄가 더한 곳에 은혜가 더욱 넘칩니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-29'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
INSERT INTO resource_translations (resource_id, language, title, summary, body, created_at, updated_at)
SELECT id, 'ko', '우리는 의존하도록 창조되었습니다', '', '우리는 독립하도록 창조된 것이 아니라 하나님을 의존하도록 창조되었습니다. 은혜는 우리가 그 의존을 부끄러워하지 않고 하나님께 나아가게 합니다.

기도

은혜로우신 하나님 아버지, 주님의 사랑과 신실하심을 찬양합니다. 저는 자주 제 생각과 욕망을 따라 살며 복음의 은혜를 잊습니다. 저의 죄와 연약함을 용서해 주옵소서. 예수 그리스도께서 십자가와 부활로 저에게 용서와 생명을 주셔서 감사합니다. 성령께서 오늘도 제 마음을 새롭게 하셔서 믿음과 순종과 감사로 살게 하옵소서. 예수 그리스도의 이름으로 기도드립니다. 아멘.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP FROM resources WHERE slug = 'gospel-devotional-2026-11-30'
ON CONFLICT(resource_id, language) DO UPDATE SET title = excluded.title, summary = excluded.summary, body = excluded.body, updated_at = CURRENT_TIMESTAMP;
