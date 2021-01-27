DROP TABLE IF EXISTS OSOBA;
GO

DROP TABLE IF EXISTS MIEJSCE_PRACY;
GO

CREATE TABLE MIEJSCE_PRACY (
	ID int IDENTITY(0,1) PRIMARY KEY,
	WorkspaceName [nvarchar](150) NOT NULL,
	);
GO


INSERT INTO MIEJSCE_PRACY VALUES('ADC'),('CVB');
GO

SELECT * FROM MIEJSCE_PRACY
GO

CREATE TABLE OSOBA (
	ID int IDENTITY(0,1) PRIMARY KEY,
	FirstName [nvarchar](150) NOT NULL,
	LastName [nvarchar](150) NOT NULL,
	MiejscePracyId int FOREIGN KEY REFERENCES MIEJSCE_PRACY(ID),
	);
GO

INSERT INTO OSOBA VALUES('Adrian', 'Czuchaj', 0),('Jan', 'Kowalski', 1),('Marcin', 'Malinowski', 0);

SELECT FirstName, LastName, MIEJSCE_PRACY.WorkspaceName
FROM OSOBA JOIN MIEJSCE_PRACY 
ON OSOBA.MiejscePracyID = MIEJSCE_PRACY.ID