-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2022 at 06:37 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thesisz`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `ID_event` int(11) NOT NULL,
  `Name_Event` varchar(100) NOT NULL,
  `Detail_Event` text NOT NULL,
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

INSERT INTO `event` (`ID_event`, `Name_Event`, `Detail_Event`, `start_Event`, `end_Event`, `Posted_Event`, `idType_Event`, `thamnail`, `Detail_Img`, `school_year`) VALUES
(260320, 'record rest', 'Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม', '2022-03-26', '2022-04-13', '2022-04-06 06:42:22', 2, 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', '2564'),
(6042022, 'avtivity test', 'Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม', '2022-04-06', '2022-04-28', '2022-04-06 06:41:42', 3, 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', '2564'),
(26032022, 'จิตอาสา', 'Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม Sub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม\r\nSub details รายละเอียดกิจกรรม รายละเอียดกิจกรรมราย ละเอียดกิจกรรมอรายละเอียดกิจกรรม', '2022-03-26', '2022-04-08', '2022-04-05 21:44:07', 1, 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', 'http://127.0.0.1:5500/public/images/bg-cosci-login.png', '2564');

-- --------------------------------------------------------

--
-- Table structure for table `evidence`
--

CREATE TABLE `evidence` (
  `idEvidence` int(11) NOT NULL,
  `idRequest` int(11) NOT NULL,
  `idRegister` int(11) NOT NULL,
  `img_Evid` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `evidence`
--

INSERT INTO `evidence` (`idEvidence`, `idRequest`, `idRegister`, `img_Evid`) VALUES
(1111, 3000, 1234, 'http://127.0.0.1:5500/public/images/history-1705x960--1.jpeg'),
(2222, 3100, 5678, 'https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg'),
(3333, 3500, 3456, 'llll'),
(4444, 3456, 3456, 'kkkkkk'),
(5555, 2000, 2345, 'lll'),
(6666, 2001, 2347, 'lll'),
(7777, 2002, 8765, ';;;;;;');

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
  `idRequest` int(11) NOT NULL,
  `Username` varchar(11) NOT NULL,
  `idType_req` int(2) NOT NULL,
  `ID_event` int(11) NOT NULL,
  `idEvidence` int(11) NOT NULL,
  `date_req` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Status_req` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`idRequest`, `Username`, `idType_req`, `ID_event`, `idEvidence`, `date_req`, `Status_req`) VALUES
(2000, 'co611010039', 1, 260320, 5555, '2022-04-06 07:07:10', 1),
(2001, 'co611010039', 1, 26032022, 6666, '2022-04-06 07:07:47', 1),
(2002, 'co611010039', 1, 6042022, 7777, '2022-04-06 07:07:47', 1),
(3000, 'co611010035', 1, 6042022, 1111, '2022-04-06 07:08:16', 1),
(3100, 'co611010035', 1, 260320, 2222, '2022-04-06 07:08:22', 1),
(3456, 'co611010035', 2, 26032022, 4444, '2022-04-06 07:06:19', 1),
(3500, 'co611010035', 1, 26032022, 3333, '2022-04-06 07:08:31', 1);

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
  `Major` int(2) NOT NULL,
  `secMaj` int(2) NOT NULL,
  `Year` varchar(2) NOT NULL,
  `Permission` int(2) NOT NULL,
  `img_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `Password`, `ID_Student`, `user_phone`, `Firstname`, `Lastname`, `Major`, `secMaj`, `Year`, `Permission`, `img_user`) VALUES
('co611010035', 'co611010035', '61130010035', '0611725321', 'Rachapol', 'Burinwatthana', 3, 2, '4', 1, '../img/file-1649262704223.png'),
('co611010039', '123', '61130010039', '0999999999', 'Kamonlapat', 'Phaenthong', 3, 2, '4', 1, '../img/file-1649179618413.png'),
('year3', 'year3', '516156156', '0888888888', 'Namaewa', 'Ltnamse', 2, 1, '2', 1, '../img/file-1649281894740.png');

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
  ADD UNIQUE KEY `Username` (`Username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
