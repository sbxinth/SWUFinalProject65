-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 20, 2022 at 02:57 PM
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
('1342022211640', 'ปาร์ตี้ริมสระ', ' \r\n   พวกเรามาปาร์ตี้กัน โย่วๆ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s', '2022-04-01', '2022-04-30', '2022-04-19 16:39:08', 1, '../img/act/file-1649859838303.jpg', '../img/act/file-1649859838303.jpg', '2565'),
('1342022211727', 'เชิดสิงโต', 'กุ้งแช่ กุ้งแช่ กุ้งแช่ กุ้งแช่ กุ้งแช่ กุ้งแช่ กุ้งแช่ ', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s', '2022-04-07', '2022-04-22', '2022-04-19 16:39:11', 2, '../img/act/file-1649871728226.jpg', '../img/act/file-1649871728226.jpg', '2565'),
('134202221185', 'นั่งดูพระอาทิตย์', ' \r\n   ถ้าพระอาทิตย์เลือนหาย', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s', '2022-04-20', '2022-04-29', '2022-04-19 16:39:12', 1, '../img/act/file-1649859861924.jpg', '../img/act/file-1649859861924.jpg', '2565'),
('1342022213229', 'ตัดหญ้าเพื่อพ่อ', ' \r\n   ตัดตัดตัด', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry since the 1500s', '2022-04-12', '2022-04-22', '2022-04-19 16:39:15', 3, '../img/act/file-1649861586388.jpg', '../img/act/file-1649861586388.jpg', '2565');

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
  `file_pdf` varchar(255) NOT NULL,
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
('123123123', 'co611010035', 1, '1342022211640', '../imgedi/file-1649888929592.png', '../imgedi/file-1649888929623.png', '2022-04-19 12:19:23', 4, '1', '2022-04-14', '2022-04-15'),
('144202205943961', 'co611010035', 2, '1342022211727', '../imgedi/file-1649872783950.jpg,../imgedi/file-1649872783952.jpg', '../imgedi/file-1649872783955.jpg', '2022-04-18 07:46:11', 1, '2', '2022-04-09', '2022-04-27'),
('144202252849649', 'co611010035', 1, '1342022211640', '../imgedi/file-1649888929592.png', '../imgedi/file-1649888929623.png', '2022-04-20 04:11:14', 4, '1', '2022-04-14', '2022-04-15'),
('154202213832564', 'co611010035', 1, '134202221185', '../imgedi/file-1649961512507.png,../imgedi/file-1649961512526.png,../imgedi/file-1649961512538.png', '../imgedi/file-1649961512548.png', '2022-04-17 17:07:02', 2, '2', '2022-04-07', '2022-04-12'),
('154202213956584', 'co611010035', 2, '1342022213229', '../imgedi/file-1649961596534.png,../imgedi/file-1649961596549.png,../imgedi/file-1649961596563.png', '../imgedi/file-1649961596572.png', '2022-04-17 17:07:02', 2, '3', '2022-04-20', '2022-04-27'),
('154202233349609', 'co611010035', 2, '134202221185', '../imgedi/file-1649968429342.png,../imgedi/file-1649968429425.png', '../imgedi/file-1649968429563.png', '2022-04-18 07:46:00', 1, '0', '2022-04-14', '2022-04-26'),
('1642022191959590', 'co611010039', 1, '1342022213229', '../imgedi/file-1650111599338.png,../imgedi/file-1650111599406.png,../imgedi/file-1650111599461.png', '../imgedi/file-1650111599544.png', '2022-04-17 17:07:02', 2, '5', '2022-04-22', '2022-04-21'),
('20420220402566', 'co611010035', 1, '1342022213229', '../imgedi/file-1650390025047.jpeg,../imgedi/file-1650390025049.jpeg', '../imgedi/file-1650390025052.pdf', '2022-04-19 17:40:25', 1, '6', '2022-04-20', '2022-04-20'),
('23212131', 'co611010035', 1, '1342022211640', '../imgedi/file-1649888929592.png', '../imgedi/file-1649888929623.png', '2022-04-17 17:07:02', 2, '1', '2022-04-14', '2022-04-15');

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
  `secMaj` int(2) NOT NULL,
  `Year` varchar(2) NOT NULL,
  `Permission` int(2) NOT NULL,
  `img_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `Password`, `ID_Student`, `user_phone`, `Firstname`, `Lastname`, `gender_id`, `Major`, `secMaj`, `Year`, `Permission`, `img_user`) VALUES
('co611000000', '123', '61100000000', '0000000000', 'namsx', 'nsusq', '1', 3, 1, '3', 2, ''),
('co611010035', 'co611010035', '61130010035', '0611725321', 'Rachapol', 'Burinwatthana', '1', 3, 2, '4', 1, '../img/file-1649969187702.png'),
('co611010039', '123', '61130010039', '0999999999', 'Kamonlapat', 'Phaenthong', '2', 3, 2, '4', 1, '../img/file-1650111562834.png'),
('year3', 'year3', '516156156', '0888888888', 'Namaewa', 'Ltnamse', '1', 2, 1, '2', 2, '../img/file-1649882272018.png');

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
