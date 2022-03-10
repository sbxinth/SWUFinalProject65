-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2022 at 09:00 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `swufinal`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `uid` int(20) NOT NULL,
  `uusername` varchar(20) NOT NULL,
  `upassword` varchar(20) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `ulastname` varchar(100) NOT NULL,
  `ustudentid` varchar(50) NOT NULL,
  `ugroup` varchar(30) NOT NULL,
  `ubranch` varchar(30) NOT NULL,
  `umainteacher` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`uid`, `uusername`, `upassword`, `uname`, `ulastname`, `ustudentid`, `ugroup`, `ubranch`, `umainteacher`) VALUES
(1, 'co611010035', 'co611010035', 'รชพล', 'บุรินทร์วัฒนา', '61130010035', ' วิทยาลัยนวัตกรรมสื่อสารสังคม', '', 'อ.อัญชนา กลิ่นเทียน');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
