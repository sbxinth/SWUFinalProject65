-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2022 at 08:40 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `realrealdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `ID_event` varchar(20) NOT NULL,
  `Name_Event` varchar(100) NOT NULL,
  `Detail_Event` text NOT NULL,
  `main_detail` text NOT NULL,
  `start_Event` date NOT NULL,
  `end_Event` date NOT NULL,
  `Posted_Event` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idType_Event` int(2) NOT NULL,
  `thamnail` varchar(255) NOT NULL,
  `Detail_Img` varchar(255) NOT NULL,
  `school_year` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`ID_event`, `Name_Event`, `Detail_Event`, `main_detail`, `start_Event`, `end_Event`, `Posted_Event`, `idType_Event`, `thamnail`, `Detail_Img`, `school_year`) VALUES
('1342022211727', 'COSCI Festival 2022', 'กลับมาอีกครั้งกับ “COSCI Festival 2022” เตรียมย้อนวันวานอันหวานชื่นไปกับ “CoKiD 90s!” ที่จะพาทุกคนร่วมสนุกไปกับกิจกรรมต่างๆในความทรงจำของทุกๆคน เตรียมสตางค์ในกระเป๋าให้ดีกับร้านค้าออนไลน์ COSCI MARKET และการประกวดวงดนตรีสุดมันส์ COSCi Band', 'มาแล้ววว วัยรุ่นโคซายสุดเท่กับเกณฑ์การรับประทับตราชั่วโมงกิจกรรม สำหรับนิสิตวิทยาลัยนวัตกรรมสื่อสารสังคม สำหรับกิจกรรม \"COSCI FESTIVAL : CoKiDs 90s\"  เเลกรับชั่วโมงกิจกรรมง่ายๆ!! เพียงเเคปหน้าจอในช่วงที่พิธีกรกล่าวถึง 31 มีนาคม รับตรา “หมวดบังคับ” 1 เมษายน รับตรา “หมวดเลือก” เข้าร่วมกิจกรรมได้ทาง Facebook LIVE : Smo Cosci ในวันกล่าวตั้งแต่เวลา 16:00 น. เป็นต้นไป', '2022-03-31', '2022-04-01', '2022-05-02 04:36:44', 2, '../img/act/file-1651466164648.png', '../img/act/file-1651466164648.png', '2565'),
('252022111957', 'New Normal to The Next ', ' \r\n   การนำสื่อ นวัตกรรม และการสื่อสารกับการปรับตัวในยุคหลังCOVID - 19 มาร่วมพูดคุย แลกเปลี่ยน แสดงความคิดเห็นสุดโก้กันได้ กับแก๊งผู้ร่วมเสวนาสุดพิเศษ ได้แก่ 1. คุณณัฐวุฒิ ปิ่นทองคำ ผู้อำนวยการฝ่ายการตลาดและสื่อสารองค์กร กลุ่มบริษัทเบญจจินดา\r\n2. คุณชัยนนท์ หาญคีรีรัตน์ ผู้ประกาศข่าวช่อง GMM25 และ THE STANDARD 3. คุณณัฏฐ์วรจิต อุดมลิขิตวงศ์ Co-Founder : CEO of Real Bangkok\r\n\r\n\r\n', ' การนำสื่อ นวัตกรรม และการสื่อสารกับการปรับตัวในยุคหลังCOVID - 19 มาร่วมพูดคุย แลกเปลี่ยน แสดงความคิดเห็นสุดโก้กันได้ กับแก๊งผู้ร่วมเสวนาสุดพิเศษ ', '2022-05-02', '2022-05-02', '2022-05-01 17:00:00', 2, '../img/act/file-1651465196985.png', '../img/act/file-1651465196985.png', '2565'),
('25202211418', 'Lovae and share ปี 2 : Eco life - ยิ่งแยก ยิ่งได้', 'ศูนย์นิสิตจิตอาสา มศว ขอเชิญชวนนิสิต ทุกคณะ ทุกชั้นปี ร่วมกิจกรรม อบรมเชิงปฏิบัติการ “Eco life - ยิ่งแยก ยิ่งได้ ในวันเสาร์ที่ 26 กุมภาพันธ์ 2565 ตั้งแต่เวลา 12.00 – 15.40 น.  โดยวิทยากรมากความสามารถ “คุณนุ่น ศิรพันธ์ วัฒนจินดา” รับสมัครเพียง 250 คนเท่านั้น!!!\r\n***วิธีเข้าร่วมกิจกรรม***\r\n1. นิสิตผู้สนใจเข้าร่วมกิจกรรมต้องสมัครผ่าน form https://forms.gle/PaxMSRkqznADNWtY8 ตามลิ้งค์นี้ หรือ QR code ในโปสเตอร์นี้\r\n2. สแกนคิวอาร์โค้ดเข้ากลุ่มไลน์หลังสมัครลงทะเบียนเสร็จ\r\n3. เข้าร่วมผ่านแอปพลิเคชั่น ZOOM (รายละเอียดแจ้งในกลุ่มไลน์เท่านั้น)\r\nได้รับบันทึกกิจกรรมเลือก จำนวน 1 กิจกรรม หรือ\r\nกิจกรรมจิตอาสา จำนวน 4 ชั่วโมง\r\n(หลังเสร็จสิ้นกิจกรรม)', ' อบรมเชิงปฏิบัติการ “Eco life - ยิ่งแยก ยิ่งได้ ในวันเสาร์ที่ 26 กุมภาพันธ์ 2565 ตั้งแต่เวลา 12.00 – 15.40 น.  โดยวิทยากรมากความสามารถ “คุณนุ่น ศิรพันธ์ วัฒนจินดา” รับสมัครเพียง 250 คนเท่านั้น!!!', '2022-02-26', '2022-02-26', '2022-05-01 17:00:00', 3, '../img/act/file-1651466468181.jpeg', '../img/act/file-1651466468181.jpeg', '2565'),
('25202254626', 'Ready Warm up Workout! ', 'เตรียมพบกับการถ่ายทอดสด การพูดคุยเพื่อสร้างเสริมสุขภาวะนวัตกรรมที่ดี ในหัวข้อ \"Ready Warm up Workout! ก่อนไปเวิร์คเอาท์ เราขอวอร์มอัพ\" กับวิทยากรที่จะมาสร้างแรงบันดาลในการพัฒนาร่างกายอย่างมีประสิทธิภาพกับ พี่กิ๊ฟท์-ปาริชา, พี่บอย-ปิยะ, และ ครูจ๊อด-เอกราชและพบกับผู้ร่วมรายการสุดพิเศษ ที่จะมาอัพเกรดการสร้างเสริมสุขภาพอย่างเป็นกันเอง กับ พี่น้ำตาล-ชลิตา และ พี่แฟ้ม-พรกวิษย์ สำหรับนิสิตวิทยาลัยนวัตกรรมสื่อสารสังคมที่รับชม จะได้รับตราประทับกิจกรรมในหมวดเลือก!\r\n', 'กิจกรรมสุดพิเศษ   เเลกรับชั่วโมงกิจกรรมง่ายๆ!! เพียงเเคปหน้าจอในช่วงที่พิธีกรกล่าวถึง แต่จะเป็นช่วงไหน ต้องรอติดตามอย่าลืมมากันเยอะๆน้าาา', '2022-05-02', '2022-05-02', '2022-05-01 22:52:25', 2, '../img/act/file-1651445186272.png', '../img/act/file-1651445186272.png', '2565');

-- --------------------------------------------------------

--
-- Table structure for table `evidence`
--

CREATE TABLE `evidence` (
  `idEvidence` int(11) NOT NULL,
  `idRequest` int(11) NOT NULL,
  `idRegister` int(11) NOT NULL,
  `img_evid` varchar(255) NOT NULL,
  `file_evid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `evidence`
--

INSERT INTO `evidence` (`idEvidence`, `idRequest`, `idRegister`, `img_evid`, `file_evid`) VALUES
(111, 2222, 3333, '////', '////'),
(7777, 2002, 8765, '////', '////');

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `gender_id` varchar(2) NOT NULL,
  `detail_gen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`gender_id`, `detail_gen`) VALUES
('1', 'ชาย'),
('2', 'หญิง');

-- --------------------------------------------------------

--
-- Table structure for table `major`
--

CREATE TABLE `major` (
  `idMajor` int(2) NOT NULL,
  `name_maj` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `major`
--

INSERT INTO `major` (`idMajor`, `name_maj`) VALUES
(1, 'การออกแบบสื่อปฏิสัมพันธ์และมัลติมีเดีย'),
(2, 'การจัดการธุรกิจไซเบอร์'),
(3, 'คอมพิวเตอร์เพื่อการสื่อสาร'),
(4, 'การผลิตภาพยนตร์และสื่อดิจิทัล'),
(5, 'การแสดงและกำกับการแสดงภาพยนตร์'),
(6, 'การออกแบบเพื่องานภาพยนตร์และสื่อดิจิทัล'),
(7, 'การจัดการภาพยนตร์และสื่อดิจิทัล'),
(8, 'การสื่อสารเพื่อการท่องเที่ยว'),
(9, 'การสื่อสารเพื่อสุขภาพ'),
(10, 'การสื่อสารเพื่อการจัดการนวัตกรรม'),
(11, 'การสื่อสารเพื่อเศรษฐศาสตร์');

-- --------------------------------------------------------

--
-- Table structure for table `memorandum`
--

CREATE TABLE `memorandum` (
  `idMemorandum` int(11) NOT NULL,
  `idRequest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `memorandum`
--

INSERT INTO `memorandum` (`idMemorandum`, `idRequest`) VALUES
(65457, 2999);

-- --------------------------------------------------------

--
-- Table structure for table `missevent`
--

CREATE TABLE `missevent` (
  `ME_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idRequest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `missevent`
--

INSERT INTO `missevent` (`ME_date`, `idRequest`) VALUES
('2022-03-26 11:24:36', 2999);

-- --------------------------------------------------------

--
-- Table structure for table `passevent`
--

CREATE TABLE `passevent` (
  `PE_Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idRequest` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `passevent`
--

INSERT INTO `passevent` (`PE_Date`, `idRequest`) VALUES
('2022-03-26 11:24:18', 333333);

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `idPermission` int(2) NOT NULL,
  `Detail_per` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`idPermission`, `Detail_per`) VALUES
(1, 'student'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `idRegister` int(11) NOT NULL,
  `Username` varchar(11) NOT NULL,
  `ID_event` int(11) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`idRegister`, `Username`, `ID_event`, `date_reg`) VALUES
(1234, 'co611010035', 6042022, '2022-04-06 06:56:40'),
(2345, 'co611010039', 260320, '2022-04-06 06:59:27'),
(2347, 'co611010039', 26032002, '2022-03-26 11:11:23'),
(3456, 'co611010035', 26032022, '2022-04-06 06:56:40'),
(5678, 'co611010035', 260320, '2022-04-06 06:58:12'),
(8765, 'co611010039', 6042022, '2022-04-06 06:59:27');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `idRequest` varchar(20) NOT NULL,
  `Username` varchar(11) NOT NULL,
  `idType_req` int(2) NOT NULL,
  `ID_event` varchar(20) NOT NULL,
  `file_img` varchar(255) NOT NULL,
  `file_pdf` varchar(255) DEFAULT NULL,
  `date_req` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Status_req` int(2) NOT NULL,
  `hour` varchar(2) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`idRequest`, `Username`, `idType_req`, `ID_event`, `file_img`, `file_pdf`, `date_req`, `Status_req`, `hour`, `start_date`, `end_date`) VALUES
('2520221213275', 'co611010039', 1, '25202211418', '../imgedi/file-1651467663265.jpg,../imgedi/file-1651467663266.jpg', '../imgedi/file-1651467663268.pdf', '2022-05-02 08:41:15', 2, '4', '2022-05-02', '2022-05-02'),
('2520221228477', 'co611010039', 2, '25202254626', '../imgedi/file-1651467728455.png', '../imgedi/file-1651467728474.pdf', '2022-05-02 05:09:13', 3, '0', '2022-03-31', '2022-04-01'),
('2520221262215', 'co611010035', 1, '252022111957', '../imgedi/file-1651467962161.png', '../imgedi/file-1651467962211.pdf', '2022-05-02 05:06:02', 1, '0', '2022-05-02', '2022-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `idStatus` int(2) NOT NULL,
  `Detail_Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`idStatus`, `Detail_Status`) VALUES
(1, 'ยืนยันข้อมูล'),
(2, 'รับเรื่อง'),
(3, 'กำลังดำเนินการ'),
(4, 'ดำเนินการเสร็จสิ้น');

-- --------------------------------------------------------

--
-- Table structure for table `submajor`
--

CREATE TABLE `submajor` (
  `idsubMajor` int(2) NOT NULL,
  `name_submaj` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `submajor`
--

INSERT INTO `submajor` (`idsubMajor`, `name_submaj`) VALUES
(1, 'การออกแบบสื่อปฏิสัมพันธ์และมัลติมีเดีย'),
(2, 'การจัดการธุรกิจไซเบอร์'),
(3, 'คอมพิวเตอร์เพื่อการสื่อสาร'),
(4, 'การผลิตภาพยนตร์และสื่อดิจิทัล'),
(5, 'การแสดงและกำกับการแสดงภาพยนตร์'),
(6, 'การออกแบบเพื่องานภาพยนตร์และสื่อดิจิทัล'),
(7, 'การจัดการภาพยนตร์และสื่อดิจิทัล'),
(8, 'การสื่อสารเพื่อการท่องเที่ยว'),
(9, 'การสื่อสารเพื่อสุขภาพ'),
(10, 'การสื่อสารเพื่อการจัดการนวัตกรรม'),
(11, 'การสื่อสารเพื่อเศรษฐศาสตร์');

-- --------------------------------------------------------

--
-- Table structure for table `type_event`
--

CREATE TABLE `type_event` (
  `idType_Event` int(2) NOT NULL,
  `Detail_type_E` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `type_event`
--

INSERT INTO `type_event` (`idType_Event`, `Detail_type_E`) VALUES
(1, 'กิจกรรมบังคับ'),
(2, 'กิจกรรมเลือก'),
(3, 'กิจกรรมบําเพ็ญสาธารณะประโยชน์');

-- --------------------------------------------------------

--
-- Table structure for table `type_req`
--

CREATE TABLE `type_req` (
  `idType_Req` int(2) NOT NULL,
  `Detail_Type_R` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `type_req`
--

INSERT INTO `type_req` (`idType_Req`, `Detail_Type_R`) VALUES
(1, 'บันทึกกิจกรรม'),
(2, 'ตกหล่น');

-- --------------------------------------------------------

--
-- Table structure for table `update_status`
--

CREATE TABLE `update_status` (
  `idUpdate_Status` int(11) NOT NULL,
  `idRequest` int(11) NOT NULL,
  `IdStatus` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `Username` varchar(11) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `ID_Student` varchar(11) NOT NULL,
  `user_phone` varchar(10) NOT NULL,
  `Firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `gender_id` varchar(1) NOT NULL,
  `Major` int(2) NOT NULL,
  `secMaj` int(2) DEFAULT NULL,
  `Year` varchar(2) NOT NULL,
  `Permission` int(2) NOT NULL,
  `img_user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `Password`, `ID_Student`, `user_phone`, `Firstname`, `Lastname`, `gender_id`, `Major`, `secMaj`, `Year`, `Permission`, `img_user`) VALUES
('co611000000', '123', '61100000000', '0000000000', 'namsx', 'nsusq', '1', 3, 1, '3', 2, ''),
('co611010035', 'co611010035', '61130010035', '0611725321', 'Rachapol', 'Burinwatthana', '1', 3, 2, '4', 1, '../img/file-1651467911210.jpg'),
('co611010039', '123', '61130010039', '0999999999', 'Kamonlapat', 'Phaenthong', '2', 3, 2, '4', 1, '../img/file-1651467884005.jpg'),
('co611010188', '123', '61130010188', '0866666666', 'Rawisara ', 'Lerdchanpen', '2', 3, 3, '4', 1, '../img/file-1651467988987.jpg'),
('year3', 'year3', '516156156', '0888888888', 'Namaewa', 'Ltnamse', '1', 2, 1, '2', 2, '../img/file-1650465464327.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`ID_event`);

--
-- Indexes for table `evidence`
--
ALTER TABLE `evidence`
  ADD PRIMARY KEY (`idEvidence`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`gender_id`);

--
-- Indexes for table `major`
--
ALTER TABLE `major`
  ADD PRIMARY KEY (`idMajor`);

--
-- Indexes for table `memorandum`
--
ALTER TABLE `memorandum`
  ADD PRIMARY KEY (`idMemorandum`);

--
-- Indexes for table `missevent`
--
ALTER TABLE `missevent`
  ADD PRIMARY KEY (`ME_date`);

--
-- Indexes for table `passevent`
--
ALTER TABLE `passevent`
  ADD PRIMARY KEY (`PE_Date`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`idPermission`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`idRegister`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`idRequest`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`idStatus`);

--
-- Indexes for table `submajor`
--
ALTER TABLE `submajor`
  ADD PRIMARY KEY (`idsubMajor`);

--
-- Indexes for table `type_event`
--
ALTER TABLE `type_event`
  ADD PRIMARY KEY (`idType_Event`);

--
-- Indexes for table `type_req`
--
ALTER TABLE `type_req`
  ADD PRIMARY KEY (`idType_Req`);

--
-- Indexes for table `update_status`
--
ALTER TABLE `update_status`
  ADD PRIMARY KEY (`idUpdate_Status`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD UNIQUE KEY `Username` (`Username`),
  ADD KEY `fk_user_permission_idx` (`Permission`),
  ADD KEY `fk_user_major1_idx` (`Major`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_user_major1` FOREIGN KEY (`Major`) REFERENCES `major` (`idMajor`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_user_permission` FOREIGN KEY (`Permission`) REFERENCES `permission` (`idPermission`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
