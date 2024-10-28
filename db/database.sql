CREATE DATABASE IF NOT EXISTS sistema_reservas_udem;

USE sistema_reservas_udem;

CREATE TABLE reservas (
    id_reserva INT AUTO_INCREMENT,
    id_usuario VARCHAR(25) NOT NULL,
    fecha_hora_reserva DATETIME NOT NULL,
    espacio_reserva VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_reserva, id_usuario),
    FOREIGN KEY (id_usuario) REFERENCES Users(identification)
);


CREATE TABLE Users (
    identification VARCHAR(30) PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO Users (identification,email,password) 
VALUES ('1020222955','fvilla955@soyudemedellin.edu.co', 'contrasena123');

'DELETE FROM Users WHERE identification = ?'