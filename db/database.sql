CREATE DATABASE IF NOT EXISTS sistema_reservas_udem;

USE sistema_reservas_udem;

CREATE TABLE Reserva (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    hora TIME,
    id_usuario INT,
    id_recurso INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
    FOREIGN KEY (id_recurso) REFERENCES Recurso(id)
);

CREATE TABLE Users (
    identification VARCHAR(30) PRIMARY KEY,
    email VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO Users (identification,email,password) 
VALUES ('1020222955','fvilla955@soyudemedellin.edu.co', 'contrasena123');

'DELETE FROM Users WHERE identification = ?'