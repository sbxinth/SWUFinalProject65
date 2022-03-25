-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2022 at 12:15 PM
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
-- Database: `thesis`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `ID_event` int(11) NOT NULL,
  `Name_Event` varchar(100) NOT NULL,
  `Detail_Event` text NOT NULL,
  `Period_Event` datetime NOT NULL,
  `Posted_Event` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idType_Event` int(2) NOT NULL,
  `thamnail` blob NOT NULL,
  `Detail_Img` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `evidence`
--

CREATE TABLE `evidence` (
  `idEvidence` int(11) NOT NULL,
  `idRequest` int(11) NOT NULL,
  `idRegist` int(11) NOT NULL,
  `img_Evid` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Table structure for table `missevent`
--

CREATE TABLE `missevent` (
  `ME_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idRequest` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `passevent`
--

CREATE TABLE `passevent` (
  `PE_Date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `idRequest` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `idEvent` int(11) NOT NULL,
  `date_reg` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `idRequest` int(11) NOT NULL,
  `Username` varchar(11) NOT NULL,
  `idType_req` int(2) NOT NULL,
  `idEvent` int(11) NOT NULL,
  `Evidence` int(11) NOT NULL,
  `date_req` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Status_req` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
-- Table structure for table `type_event`
--

CREATE TABLE `type_event` (
  `idType_Event` int(2) NOT NULL,
  `Detail_type-E` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `type_event`
--

INSERT INTO `type_event` (`idType_Event`, `Detail_type-E`) VALUES
(1, 'กิจกรรมบังคับ'),
(2, 'กิจกรรมเลือก'),
(3, 'กิจกรรมบําเพ็ญสาธารณะประโยชน์');

-- --------------------------------------------------------

--
-- Table structure for table `type_req`
--

CREATE TABLE `type_req` (
  `idType_Req` int(2) NOT NULL,
  `Detail_Type-R` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `type_req`
--

INSERT INTO `type_req` (`idType_Req`, `Detail_Type-R`) VALUES
(1, 'บันทึกกิจกรรม'),
(2, 'คกหล่น');

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
  `Firstname` varchar(255) NOT NULL,
  `Lastname` varchar(255) NOT NULL,
  `Major` int(2) NOT NULL,
  `Year` varchar(2) NOT NULL,
  `Permission` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`Username`, `Password`, `ID_Student`, `Firstname`, `Lastname`, `Major`, `Year`, `Permission`) VALUES
('co611010035', 'co611010035', '61130010035', 'Rachapol', 'Burinwatthana', 3, '4', 1),
('co611010039', '123', '61130010039', 'Kamonlapat', 'Phaenthong', 3, '4', 1);

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
