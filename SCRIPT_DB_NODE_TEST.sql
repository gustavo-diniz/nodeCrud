CREATE DATABASE DB_NODE_TEST;

USE DB_NODE_TEST;

CREATE TABLE CLIENTES(
	ID_CLIENTE BIGINT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(200) NOT NULL,
    
    CONSTRAINT PK_ID_CLIENTE  PRIMARY KEY (ID_CLIENTE)    
);

INSERT INTO CLIENTES(NOME, EMAIL)
VALUES ('GUSTAVO DINIZ DOS SANTOS','GDINSANTOS1@GMAIL.COM');

SELECT * FROM CLIENTES