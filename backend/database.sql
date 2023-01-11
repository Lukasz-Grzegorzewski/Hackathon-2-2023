

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
  ( 'bicyclette', 8,'/assets/images/bicyclette.jpg' ),
  ( 'rollers', 6, '/assets/images/rollers.jpg' ),
  (  '2CV', 70, '/assets/images/2CV.jpg' );


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
