use malero;

CREATE TABLE Packegs(
  packageImage VARCHAR(400) NOT NULL,
  packageName VARCHAR(20) PRIMARY KEY,
  pricePmonth INT NOT NULL,
  pricepyear INT NOT NULL,
  features LONGTEXT NOT NULL,
  numberOfupload INT NOT NULL
) ;

CREATE TABLE Users (
  fullName VARCHAR(60) NOT NULL,
  userName VARCHAR(30) PRIMARY KEY,
  email VARCHAR(50) NOT NULL,
  userRole VARCHAR(20) NOT NULL DEFAULT 'user',
  userPassword VARCHAR(8) NOT NULL,
  userPackage VARCHAR(20) NOT NULL DEFAULT 'Free',
  FOREIGN KEY (userPackage) REFERENCES Packegs(packageName)
);
DROP TABLE Users;
DROP TABLE Packegs;
