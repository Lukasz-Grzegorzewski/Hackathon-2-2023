

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema hackathon2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `hackathon` ;

-- -----------------------------------------------------
-- Table `hackathon`.`vehicules`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `hackathon`.`vehicules` ;

CREATE TABLE IF NOT EXISTS `hackathon`.`vehicules` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `kmH` INT NOT NULL,
  `url` VARCHAR(500) NOT NULL,
  `dispo` BOOLEAN DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 1
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
  `hackathon`.`vehicules` (name, kmH, url )
VALUES
  ( 'trotinete', 10,'/assets/images/removedBG/trotinete.png' ),
  ( 'bike-1', 40,'/assets/images/removedBG/bike-1.jpeg' ),
  ( 'car-blue-2', 110, '/assets/images/removedBG/car-blue-2.jpg' ),
  ( 'car-blue-1', 120, '/assets/images/removedBG/car-blue-1.jpeg' ),
  ( 'car-red-1', 150, '/assets/images/removedBG/car-red-1.jpeg' ),
  ( 'scateboard', 15, '/assets/images/removedBG/scateboard.jpeg' );


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
