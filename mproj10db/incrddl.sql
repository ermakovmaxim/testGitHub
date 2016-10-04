DROP TABLE IF EXISTS `PublicApi`;

DROP TABLE IF EXISTS `JwtConfig`;

DROP TABLE IF EXISTS `UserRoleBridge`;

DROP TABLE IF EXISTS `RoleMenuBridge`;

DROP TABLE IF EXISTS `AppMenus`;

DROP TABLE IF EXISTS `Roles`;

DROP TABLE IF EXISTS `SessionData`;

DROP TABLE IF EXISTS `UserData`;

DROP TABLE IF EXISTS `PassRecovery`;

DROP TABLE IF EXISTS `LoginSession`;

DROP TABLE IF EXISTS `Login`;

DROP TABLE IF EXISTS `UserDetail`;

DROP TABLE IF EXISTS `UserAccessDomain`;

DROP TABLE IF EXISTS `UserAccessLevel`;

DROP TABLE IF EXISTS `Question`;

DROP TABLE IF EXISTS `PasswordPolicy`;

DROP TABLE IF EXISTS `PasswordAlgo`;

DROP TABLE IF EXISTS `SocialContactMap`;

DROP TABLE IF EXISTS `PhoneContactMap`;

DROP TABLE IF EXISTS `EmailContactMap`;

DROP TABLE IF EXISTS `SocialCommunication`;

DROP TABLE IF EXISTS `PhoneCommunication`;

DROP TABLE IF EXISTS `EmailCommunication`;

DROP TABLE IF EXISTS `SocialCategory`;

DROP TABLE IF EXISTS `PhoneCategory`;

DROP TABLE IF EXISTS `EmailCategory`;

DROP TABLE IF EXISTS `AddressMap`;

DROP TABLE IF EXISTS `CoreContacts`;

DROP TABLE IF EXISTS `Title`;

DROP TABLE IF EXISTS `Gender`;

DROP TABLE IF EXISTS `ContactType`;

DROP TABLE IF EXISTS `Address`;

DROP TABLE IF EXISTS `AddressType`;

DROP TABLE IF EXISTS `City`;

DROP TABLE IF EXISTS `State`;

DROP TABLE IF EXISTS `Country`;

DROP TABLE IF EXISTS `Language`;

DROP TABLE IF EXISTS `Timezone`;

CREATE TABLE `Timezone` ( `timeZoneId` VARCHAR(64) NOT NULL, `utcdifference` INT(11) NOT NULL, `gmtLabel` VARCHAR(256) NULL DEFAULT NULL, `timeZoneLabel` VARCHAR(256) NULL DEFAULT NULL, `country` VARCHAR(256) NULL DEFAULT NULL, `cities` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`timeZoneId`));

CREATE TABLE `Language` ( `languageId` VARCHAR(64) NOT NULL, `language` VARCHAR(256) NOT NULL, `languageType` VARCHAR(32) NULL DEFAULT NULL, `languageDescription` VARCHAR(256) NULL DEFAULT NULL, `languageIcon` VARCHAR(128) NULL DEFAULT NULL, `alpha2` VARCHAR(2) NULL DEFAULT NULL, `alpha3` VARCHAR(3) NULL DEFAULT NULL, `alpha4` VARCHAR(4) NULL DEFAULT NULL, `alpha4parentid` INT(11) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`languageId`));

CREATE TABLE `Country` ( `countryId` VARCHAR(64) NOT NULL, `countryName` VARCHAR(128) NOT NULL, `countryCode1` VARCHAR(3) NULL DEFAULT NULL, `countryCode2` VARCHAR(3) NULL DEFAULT NULL, `countryFlag` VARCHAR(64) NULL DEFAULT NULL, `capital` VARCHAR(32) NULL DEFAULT NULL, `currencyCode` VARCHAR(3) NULL DEFAULT NULL, `currencyName` VARCHAR(128) NULL DEFAULT NULL, `currencySymbol` VARCHAR(32) NULL DEFAULT NULL, `capitalLatitude` INT(11) NULL DEFAULT NULL, `capitalLongitude` INT(11) NULL DEFAULT NULL, `isoNumeric` INT(11) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`countryId`));

CREATE TABLE `State` ( `stateId` VARCHAR(64) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `stateName` VARCHAR(256) NOT NULL, `stateCode` INT(2) NULL DEFAULT NULL, `stateCodeChar2` VARCHAR(32) NOT NULL, `stateCodeChar3` VARCHAR(32) NULL DEFAULT NULL, `stateDescription` VARCHAR(256) NULL DEFAULT NULL, `stateFlag` VARCHAR(128) NULL DEFAULT NULL, `stateCapital` VARCHAR(128) NULL DEFAULT NULL, `stateCapitalLatitude` INT(11) NULL DEFAULT NULL, `stateCapitalLongitude` INT(11) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`stateId`));

CREATE TABLE `City` ( `cityId` VARCHAR(64) NOT NULL, `countryId` VARCHAR(64) NOT NULL, `stateId` VARCHAR(64) NOT NULL, `cityName` VARCHAR(256) NOT NULL, `cityCodeChar2` VARCHAR(32) NOT NULL, `cityCode` INT(3) NOT NULL, `cityDescription` VARCHAR(128) NULL DEFAULT NULL, `cityFlag` VARCHAR(128) NULL DEFAULT NULL, `cityLatitude` INT(11) NULL DEFAULT NULL, `cityLongitude` INT(11) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`cityId`));

CREATE TABLE `AddressType` ( `addressTypeId` VARCHAR(64) NOT NULL, `addressType` VARCHAR(128) NOT NULL, `addressTypeDesc` VARCHAR(256) NULL DEFAULT NULL, `addressTypeIcon` VARCHAR(128) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`addressTypeId`));

CREATE TABLE `Address` ( `addressId` VARCHAR(64) NOT NULL, `addressTypeId` VARCHAR(64) NOT NULL, `addressLabel` VARCHAR(11) NULL DEFAULT NULL, `address1` VARCHAR(256) NULL DEFAULT NULL, `address2` VARCHAR(256) NULL DEFAULT NULL, `address3` VARCHAR(256) NULL DEFAULT NULL, `countryId` VARCHAR(64) NOT NULL, `stateId` VARCHAR(64) NOT NULL, `cityId` VARCHAR(64) NOT NULL, `zipcode` VARCHAR(6) NOT NULL, `latitude` VARCHAR(64) NULL DEFAULT NULL, `longitude` VARCHAR(64) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`addressId`));

CREATE TABLE `ContactType` ( `contactTypeId` VARCHAR(64) NOT NULL, `contactType` VARCHAR(128) NOT NULL, `contactTypeDesc` VARCHAR(256) NULL DEFAULT NULL, `contactTypeIcon` VARCHAR(128) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`contactTypeId`));

CREATE TABLE `Gender` ( `genderId` VARCHAR(64) NOT NULL, `gender` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`genderId`));

CREATE TABLE `Title` ( `titleId` VARCHAR(64) NOT NULL, `titles` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`titleId`));

CREATE TABLE `CoreContacts` ( `contactId` VARCHAR(64) NOT NULL, `titleId` VARCHAR(64) NOT NULL, `firstName` VARCHAR(256) NOT NULL, `middleName` VARCHAR(256) NULL DEFAULT NULL, `lastName` VARCHAR(256) NOT NULL, `nativeLanguageCode` VARCHAR(64) NULL DEFAULT NULL, `nativeTitle` VARCHAR(128) NULL DEFAULT NULL, `nativeFirstName` VARCHAR(256) NULL DEFAULT NULL, `nativeMiddleName` VARCHAR(256) NULL DEFAULT NULL, `nativeLastName` VARCHAR(256) NULL DEFAULT NULL, `genderId` VARCHAR(64) NOT NULL, `dateofbirth` TIMESTAMP NULL DEFAULT NULL, `age` INT(11) NULL DEFAULT NULL, `approximateDOB` TIMESTAMP NULL DEFAULT NULL, `emailId` VARCHAR(256) NOT NULL, `phoneNumber` VARCHAR(20) NOT NULL, `timeZoneId` VARCHAR(64) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`contactId`));

CREATE TABLE `AddressMap` ( `addMapId` INT(11) NOT NULL AUTO_INCREMENT, `contactId` VARCHAR(64) NOT NULL, `addressId` VARCHAR(64) NOT NULL, PRIMARY KEY (`addMapId`));

CREATE TABLE `EmailCategory` ( `emailCatId` VARCHAR(256) NOT NULL, `emailCatName` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`emailCatId`));

CREATE TABLE `PhoneCategory` ( `phoneCatId` VARCHAR(256) NOT NULL, `phoneCatName` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`phoneCatId`));

CREATE TABLE `SocialCategory` ( `socialCatId` VARCHAR(256) NOT NULL, `socialCatName` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`socialCatId`));

CREATE TABLE `EmailCommunication` ( `emailCommId` VARCHAR(256) NOT NULL, `commType` VARCHAR(256) NOT NULL, `email` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`emailCommId`));

CREATE TABLE `PhoneCommunication` ( `phoneId` VARCHAR(256) NOT NULL, `commType` VARCHAR(256) NOT NULL, `phoneNo` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`phoneId`));

CREATE TABLE `SocialCommunication` ( `socialId` VARCHAR(256) NOT NULL, `commType` VARCHAR(256) NOT NULL, `social` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`socialId`));

CREATE TABLE `EmailContactMap` ( `emailcontactmapPkey` INT(11) NOT NULL AUTO_INCREMENT, `contactId` VARCHAR(64) NOT NULL, `emailCommId` VARCHAR(256) NOT NULL, PRIMARY KEY (`emailcontactmapPkey`));

CREATE TABLE `PhoneContactMap` ( `phonecontactmapPkey` INT(11) NOT NULL AUTO_INCREMENT, `contactId` VARCHAR(64) NOT NULL, `phoneId` VARCHAR(256) NOT NULL, PRIMARY KEY (`phonecontactmapPkey`));

CREATE TABLE `SocialContactMap` ( `socialcontactmapPkey` INT(11) NOT NULL AUTO_INCREMENT, `contactId` VARCHAR(64) NOT NULL, `socialId` VARCHAR(256) NOT NULL, PRIMARY KEY (`socialcontactmapPkey`));

CREATE TABLE `PasswordAlgo` ( `algoId` VARCHAR(64) NOT NULL, `algorithm` INT(11) NOT NULL, `algoName` VARCHAR(256) NOT NULL, `algoDescription` VARCHAR(256) NULL DEFAULT NULL, `algoIcon` VARCHAR(64) NULL DEFAULT NULL, `algoHelp` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`algoId`));

CREATE TABLE `PasswordPolicy` ( `policyId` VARCHAR(64) NOT NULL, `policyName` VARCHAR(256) NOT NULL, `policyDescription` VARCHAR(512) NULL DEFAULT NULL, `maxPwdLength` INT(11) NULL DEFAULT NULL, `minPwdLength` INT(11) NOT NULL, `minCapitalLetters` INT(11) NULL DEFAULT NULL, `minSmallLetters` INT(11) NULL DEFAULT NULL, `minNumericValues` INT(11) NULL DEFAULT NULL, `minSpecialLetters` INT(11) NULL DEFAULT NULL, `allowedSpecialLetters` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`policyId`));

CREATE TABLE `Question` ( `questionId` VARCHAR(64) NOT NULL, `levelid` INT(11) NOT NULL, `question` VARCHAR(256) NOT NULL, `questionDetails` TEXT NULL DEFAULT NULL, `questionIcon` VARCHAR(64) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`questionId`));

CREATE TABLE `UserAccessLevel` ( `userAccessLevelId` VARCHAR(64) NOT NULL, `userAccessLevel` INT(11) NOT NULL, `levelName` VARCHAR(256) NOT NULL, `levelDescription` VARCHAR(256) NOT NULL, `levelHelp` VARCHAR(2048) NULL DEFAULT NULL, `levelIcon` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`userAccessLevelId`), UNIQUE KEY (`userAccessLevel`));

CREATE TABLE `UserAccessDomain` ( `userAccessDomainId` VARCHAR(64) NOT NULL, `userAccessDomain` INT(11) NOT NULL, `domainName` VARCHAR(256) NOT NULL, `domainDescription` VARCHAR(256) NOT NULL, `domainHelp` VARCHAR(2048) NULL DEFAULT NULL, `domainIcon` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`userAccessDomainId`), UNIQUE KEY (`userAccessDomain`));

CREATE TABLE `UserDetail` ( `userId` VARCHAR(64) NOT NULL, `userAccessCode` INT(11) NULL DEFAULT NULL, `userAccessLevelId` VARCHAR(64) NULL DEFAULT NULL, `userAccessDomainId` VARCHAR(64) NULL DEFAULT NULL, `multiFactorAuthEnabled` INT(1) NULL DEFAULT NULL, `genTempOneTimePassword` INT(1) NULL DEFAULT NULL, `allowMultipleLogin` INT(1) NULL DEFAULT NULL, `isLocked` INT(1) NULL DEFAULT NULL, `isDeleted` INT(1) NULL DEFAULT NULL, `changePasswordNextLogin` INT(1) NULL DEFAULT NULL, `passwordExpiryDate` TIMESTAMP NULL DEFAULT NULL, `passwordAlgo` VARCHAR(64) NULL DEFAULT '1', `lastPasswordChangeDate` TIMESTAMP NULL DEFAULT NULL, `sessionTimeout` INT(11) NULL DEFAULT '1800', `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`userId`));

CREATE TABLE `Login` ( `loginPk` VARCHAR(64) NOT NULL, `loginId` VARCHAR(200) NOT NULL, `serverAuthImage` VARCHAR(64) NULL DEFAULT NULL, `serverAuthText` VARCHAR(32) NULL DEFAULT NULL, `userId` VARCHAR(64) NOT NULL, `contactId` VARCHAR(64) NOT NULL, `failedLoginAttempts` INT(11) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`loginPk`));

CREATE TABLE `LoginSession` ( `AppSessionId` VARCHAR(256) NOT NULL, `userId` VARCHAR(64) NOT NULL, `AppServerSessionId` VARCHAR(256) NOT NULL, `loginTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `lastAccessTime` TIMESTAMP NULL DEFAULT NULL, `logoutTime` TIMESTAMP NULL, `clientIPAddress` VARCHAR(128) NOT NULL, `clientIPAddressInt` BIGINT NULL DEFAULT NULL, `clientNetworkAddress` INT(11) NULL DEFAULT NULL, `clientBrowser` VARCHAR(256) NOT NULL, `sessionData` TEXT NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`AppSessionId`));

CREATE TABLE `PassRecovery` ( `passRecoveryId` VARCHAR(64) NOT NULL, `userId` VARCHAR(64) NOT NULL, `questionId` VARCHAR(64) NOT NULL, `answer` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`passRecoveryId`));

CREATE TABLE `UserData` ( `userDataId` VARCHAR(64) NOT NULL, `userId` VARCHAR(64) NOT NULL, `password` VARCHAR(512) NOT NULL, `oneTimePassword` VARCHAR(32) NULL DEFAULT NULL, `oneTimePasswordExpiry` INT(11) NULL DEFAULT NULL, `oneTimePasswordGenDate` TIMESTAMP NULL DEFAULT NULL, `last5Passwords` VARCHAR(500) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`userDataId`));

CREATE TABLE `SessionData` ( `dataId` VARCHAR(256) NOT NULL, `customerId` VARCHAR(64) NULL DEFAULT NULL, `userId` VARCHAR(64) NOT NULL, `sessionKey` VARCHAR(64) NOT NULL, `dataType` INT(10) NOT NULL, `numberValue` INT(10) NULL DEFAULT NULL, `dateTimeValue` TIMESTAMP NULL DEFAULT NULL, `stringValue` VARCHAR(2000) NULL DEFAULT NULL, `booleanValue` TINYINT(1) NULL DEFAULT NULL, `jsonValue` TEXT NULL DEFAULT NULL, `appSessionId` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`dataId`));

CREATE TABLE `Roles` ( `roleId` VARCHAR(64) NOT NULL, `RoleName` VARCHAR(256) NOT NULL, `RoleDescription` VARCHAR(256) NOT NULL, `RoleIcon` VARCHAR(64) NULL DEFAULT NULL, `roleHelp` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`roleId`));

CREATE TABLE `AppMenus` ( `menuId` VARCHAR(64) NOT NULL, `menuTreeId` VARCHAR(256) NOT NULL, `menuIcon` VARCHAR(256) NULL DEFAULT NULL, `menuAction` VARCHAR(256) NULL DEFAULT NULL, `menuCommands` VARCHAR(64) NULL DEFAULT NULL, `menuDisplay` TINYINT(1) NOT NULL, `menuHead` TINYINT(1) NOT NULL, `menuLabel` VARCHAR(256) NOT NULL, `uiType` VARCHAR(3) NULL DEFAULT NULL, `RefObjectId` VARCHAR(256) NULL DEFAULT NULL, `menuAccessRights` INT(11) NOT NULL, `appType` INT(1) NULL DEFAULT NULL, `appId` VARCHAR(256) NULL DEFAULT NULL, `autoSave` TINYINT(1) NOT NULL, `startDate` TIMESTAMP NULL DEFAULT NULL, `expiryDate` TIMESTAMP NULL DEFAULT NULL, `goLiveDate` TIMESTAMP NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`menuId`));

CREATE TABLE `RoleMenuBridge` ( `roleMenuMapId` VARCHAR(64) NOT NULL, `roleId` VARCHAR(64) NOT NULL, `menuId` VARCHAR(64) NOT NULL, `isRead` TINYINT(1) NOT NULL, `isWrite` TINYINT(1) NOT NULL, `isExecute` TINYINT(1) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`roleMenuMapId`));

CREATE TABLE `UserRoleBridge` ( `roleUserMapId` VARCHAR(64) NOT NULL, `roleId` VARCHAR(64) NOT NULL, `userId` VARCHAR(64) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`roleUserMapId`));

CREATE TABLE `JwtConfig` ( `configId` VARCHAR(256) NOT NULL, `jwtAlgorithm` VARCHAR(256) NOT NULL, `expiration` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `tokenKey` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`configId`));

CREATE TABLE `PublicApi` ( `apiId` VARCHAR(256) NOT NULL, `apiData` VARCHAR(256) NOT NULL, `schedulerDetails` VARCHAR(256) NULL DEFAULT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` TIMESTAMP NULL DEFAULT '2000-01-01 10:10:10', `versionId` INT(10) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(10) NULL DEFAULT NULL, PRIMARY KEY (`apiId`));

ALTER TABLE `State` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `Country`(`countryId`);

ALTER TABLE `City` ADD CONSTRAINT FOREIGN KEY (`stateId`) REFERENCES `State`(`stateId`);

ALTER TABLE `City` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `Country`(`countryId`);

ALTER TABLE `Address` ADD CONSTRAINT FOREIGN KEY (`stateId`) REFERENCES `State`(`stateId`);

ALTER TABLE `Address` ADD CONSTRAINT FOREIGN KEY (`countryId`) REFERENCES `Country`(`countryId`);

ALTER TABLE `Address` ADD CONSTRAINT FOREIGN KEY (`cityId`) REFERENCES `City`(`cityId`);

ALTER TABLE `Address` ADD CONSTRAINT FOREIGN KEY (`addressTypeId`) REFERENCES `AddressType`(`addressTypeId`);

ALTER TABLE `CoreContacts` ADD CONSTRAINT FOREIGN KEY (`timeZoneId`) REFERENCES `Timezone`(`timeZoneId`);

ALTER TABLE `CoreContacts` ADD CONSTRAINT FOREIGN KEY (`nativeLanguageCode`) REFERENCES `Language`(`languageId`);

ALTER TABLE `CoreContacts` ADD CONSTRAINT FOREIGN KEY (`titleId`) REFERENCES `Title`(`titleId`);

ALTER TABLE `CoreContacts` ADD CONSTRAINT FOREIGN KEY (`genderId`) REFERENCES `Gender`(`genderId`);

ALTER TABLE `AddressMap` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `CoreContacts`(`contactId`);

ALTER TABLE `AddressMap` ADD CONSTRAINT FOREIGN KEY (`addressId`) REFERENCES `Address`(`addressId`);

ALTER TABLE `EmailCommunication` ADD CONSTRAINT FOREIGN KEY (`commType`) REFERENCES `EmailCategory`(`emailCatId`);

ALTER TABLE `PhoneCommunication` ADD CONSTRAINT FOREIGN KEY (`commType`) REFERENCES `PhoneCategory`(`phoneCatId`);

ALTER TABLE `SocialCommunication` ADD CONSTRAINT FOREIGN KEY (`commType`) REFERENCES `SocialCategory`(`socialCatId`);

ALTER TABLE `EmailContactMap` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `CoreContacts`(`contactId`);

ALTER TABLE `EmailContactMap` ADD CONSTRAINT FOREIGN KEY (`emailCommId`) REFERENCES `EmailCommunication`(`emailCommId`);

ALTER TABLE `PhoneContactMap` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `CoreContacts`(`contactId`);

ALTER TABLE `PhoneContactMap` ADD CONSTRAINT FOREIGN KEY (`phoneId`) REFERENCES `PhoneCommunication`(`phoneId`);

ALTER TABLE `SocialContactMap` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `CoreContacts`(`contactId`);

ALTER TABLE `SocialContactMap` ADD CONSTRAINT FOREIGN KEY (`socialId`) REFERENCES `SocialCommunication`(`socialId`);

ALTER TABLE `UserDetail` ADD CONSTRAINT FOREIGN KEY (`userAccessLevelId`) REFERENCES `UserAccessLevel`(`userAccessLevelId`);

ALTER TABLE `UserDetail` ADD CONSTRAINT FOREIGN KEY (`userAccessDomainId`) REFERENCES `UserAccessDomain`(`userAccessDomainId`);

ALTER TABLE `Login` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `UserDetail`(`userId`);

ALTER TABLE `Login` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `CoreContacts`(`contactId`);

ALTER TABLE `LoginSession` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `UserDetail`(`userId`);

ALTER TABLE `PassRecovery` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `UserDetail`(`userId`);

ALTER TABLE `PassRecovery` ADD CONSTRAINT FOREIGN KEY (`questionId`) REFERENCES `Question`(`questionId`);

ALTER TABLE `UserData` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `UserDetail`(`userId`);

ALTER TABLE `RoleMenuBridge` ADD CONSTRAINT FOREIGN KEY (`menuId`) REFERENCES `AppMenus`(`menuId`);

ALTER TABLE `RoleMenuBridge` ADD CONSTRAINT FOREIGN KEY (`roleId`) REFERENCES `Roles`(`roleId`);

ALTER TABLE `UserRoleBridge` ADD CONSTRAINT FOREIGN KEY (`userId`) REFERENCES `UserDetail`(`userId`);

ALTER TABLE `UserRoleBridge` ADD CONSTRAINT FOREIGN KEY (`roleId`) REFERENCES `Roles`(`roleId`);

