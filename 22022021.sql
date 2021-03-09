-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: _bsas
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_audittrails`
--

DROP TABLE IF EXISTS `_audittrails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_audittrails` (
  `AuditID` bigint NOT NULL AUTO_INCREMENT,
  `Date` datetime DEFAULT CURRENT_TIMESTAMP,
  `Username` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Category` varchar(50) NOT NULL,
  `IpAddress` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`AuditID`),
  KEY `_audittrails_ibfk_1` (`Username`),
  CONSTRAINT `_audittrails_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `_users` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=192 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_audittrails`
--

LOCK TABLES `_audittrails` WRITE;
/*!40000 ALTER TABLE `_audittrails` DISABLE KEYS */;
/*!40000 ALTER TABLE `_audittrails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_bank`
--

DROP TABLE IF EXISTS `_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_bank` (
  `id_bank` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_bank`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_bank`
--

LOCK TABLES `_bank` WRITE;
/*!40000 ALTER TABLE `_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_basicinfo`
--

DROP TABLE IF EXISTS `_basicinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_basicinfo` (
  `id_basicinfo` int NOT NULL AUTO_INCREMENT,
  `year` varchar(255) NOT NULL,
  `constituency` varchar(50) DEFAULT NULL,
  `subcounty` varchar(50) DEFAULT NULL,
  `division` varchar(50) DEFAULT NULL,
  `location` varchar(50) DEFAULT NULL,
  `sublocation` varchar(50) DEFAULT NULL,
  `ward` varchar(50) DEFAULT NULL,
  `village` varchar(50) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_basicinfo`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_basicinfo`
--

LOCK TABLES `_basicinfo` WRITE;
/*!40000 ALTER TABLE `_basicinfo` DISABLE KEYS */;
INSERT INTO `_basicinfo` VALUES (48,'2019','mavoko','syokimau','mlolongo','syokimau','mavoko','mavokos','githu','toshs','2021-02-22 11:42:14',0);
/*!40000 ALTER TABLE `_basicinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_constituencies`
--

DROP TABLE IF EXISTS `_constituencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_constituencies` (
  `id_constituencies` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_constituencies`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_constituencies`
--

LOCK TABLES `_constituencies` WRITE;
/*!40000 ALTER TABLE `_constituencies` DISABLE KEYS */;
/*!40000 ALTER TABLE `_constituencies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_division`
--

DROP TABLE IF EXISTS `_division`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_division` (
  `id_division` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_division`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_division`
--

LOCK TABLES `_division` WRITE;
/*!40000 ALTER TABLE `_division` DISABLE KEYS */;
/*!40000 ALTER TABLE `_division` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_familyinfo`
--

DROP TABLE IF EXISTS `_familyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_familyinfo` (
  `id_familyinfo` int NOT NULL AUTO_INCREMENT,
  `parental_status` varchar(255) DEFAULT NULL,
  `parent_disability` varchar(255) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_familyinfo`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_familyinfo`
--

LOCK TABLES `_familyinfo` WRITE;
/*!40000 ALTER TABLE `_familyinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `_familyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_location`
--

DROP TABLE IF EXISTS `_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_location` (
  `id_location` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_location`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_location`
--

LOCK TABLES `_location` WRITE;
/*!40000 ALTER TABLE `_location` DISABLE KEYS */;
/*!40000 ALTER TABLE `_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_siblingsinfo`
--

DROP TABLE IF EXISTS `_siblingsinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_siblingsinfo` (
  `id_siblingsinfo` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `institution` varchar(255) DEFAULT NULL,
  `year_of_study` varchar(255) NOT NULL,
  `total_fees` int NOT NULL,
  `fees_paid` int NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_siblingsinfo`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_siblingsinfo`
--

LOCK TABLES `_siblingsinfo` WRITE;
/*!40000 ALTER TABLE `_siblingsinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `_siblingsinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_studentdetails`
--

DROP TABLE IF EXISTS `_studentdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_studentdetails` (
  `id_studentdetails` int NOT NULL AUTO_INCREMENT,
  `fullnames` varchar(255) NOT NULL,
  `dob` date DEFAULT NULL,
  `adminnumber` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `schoolname` varchar(255) NOT NULL,
  `disability` varchar(255) NOT NULL,
  `year` varchar(2555) NOT NULL,
  `completionenddate` date NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_studentdetails`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_studentdetails`
--

LOCK TABLES `_studentdetails` WRITE;
/*!40000 ALTER TABLE `_studentdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `_studentdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_studentsdeclaration`
--

DROP TABLE IF EXISTS `_studentsdeclaration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_studentsdeclaration` (
  `id_declaration` int NOT NULL AUTO_INCREMENT,
  `bursarybeneficiary` varchar(255) NOT NULL,
  `fund` varchar(255) DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `schoolbankaccount` varchar(255) NOT NULL,
  `bankname` varchar(255) NOT NULL,
  `branch` varchar(255) DEFAULT NULL,
  `totalfeespaid` int NOT NULL,
  `feebalance` int NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_declaration`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_studentsdeclaration`
--

LOCK TABLES `_studentsdeclaration` WRITE;
/*!40000 ALTER TABLE `_studentsdeclaration` DISABLE KEYS */;
/*!40000 ALTER TABLE `_studentsdeclaration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_subcounties`
--

DROP TABLE IF EXISTS `_subcounties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_subcounties` (
  `id_subcounties` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_subcounties`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_subcounties`
--

LOCK TABLES `_subcounties` WRITE;
/*!40000 ALTER TABLE `_subcounties` DISABLE KEYS */;
/*!40000 ALTER TABLE `_subcounties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_sublocation`
--

DROP TABLE IF EXISTS `_sublocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_sublocation` (
  `id_sublocation` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_sublocation`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_sublocation`
--

LOCK TABLES `_sublocation` WRITE;
/*!40000 ALTER TABLE `_sublocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `_sublocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_users`
--

DROP TABLE IF EXISTS `_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_users` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Password` text,
  `Phone` varchar(255) DEFAULT NULL,
  `Create_at` datetime DEFAULT NULL,
  `Update_at` datetime DEFAULT NULL,
  `Deleted` tinyint(1) DEFAULT NULL,
  `IsActive` tinyint(1) DEFAULT NULL,
  `IsEmailverified` tinyint(1) DEFAULT NULL,
  `ActivationCode` varchar(255) DEFAULT NULL,
  `UserGroupID` bigint DEFAULT NULL,
  `Photo` text,
  `IDnumber` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `peid` int DEFAULT NULL,
  `branchid` int DEFAULT NULL,
  PRIMARY KEY (`Id`,`Username`),
  UNIQUE KEY `Username` (`Username`),
  KEY `UserGroupID` (`UserGroupID`)
) ENGINE=InnoDB AUTO_INCREMENT=6409 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_users`
--

LOCK TABLES `_users` WRITE;
/*!40000 ALTER TABLE `_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_ward`
--

DROP TABLE IF EXISTS `_ward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_ward` (
  `id_ward` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdby` varchar(50) DEFAULT NULL,
  `createdat` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint DEFAULT '0',
  PRIMARY KEY (`id_ward`),
  KEY `fkcreatedby_idx` (`createdby`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_ward`
--

LOCK TABLES `_ward` WRITE;
/*!40000 ALTER TABLE `_ward` DISABLE KEYS */;
/*!40000 ALTER TABLE `_ward` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-22 15:52:39
