CREATE TABLE Usuarios (
    ID INT SERIAL PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Matricula VARCHAR(50) UNIQUE NOT NULL,
    Senha_Hash VARCHAR(255) NOT NULL,
    Saldo_Tickets_Almoco INT DEFAULT 0 NOT NULL
    Saldo_Tickets_Onibus INT DEFAULT 0 NOT NULL
);

CREATE TABLE Transacoes (
    ID INT SERIAL PRIMARY KEY,
    ID_Usuario INT NOT NULL,
    Quantidade_Tickets INT NOT NULL,
    Valor_Total DECIMAL(10, 2) NOT NULL,
    Codigo_PIX VARCHAR(100) NOT NULL,
    Status ENUM('pendente', 'confirmada') DEFAULT 'pendente' NOT NULL,
    Data_Transacao DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES Usuarios(ID)
);
