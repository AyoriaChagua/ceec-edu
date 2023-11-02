CREATE TABLE Courses (
    course_id SERIAL PRIMARY KEY,
    name varchar(100),
    description text,
    state varchar(10),
    duration time,
    is_active boolean,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);


CREATE TABLE QuizzTypes (
    quizztype_id SERIAL PRIMARY KEY,
    name varchar(50),
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);


CREATE TABLE DocumentTypes (
    document_id SERIAL PRIMARY KEY,
    name varchar(50),
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Modules (
    module_id SERIAL PRIMARY KEY,
    course_id int REFERENCES Courses(course_id),
    is_finish boolean,
    is_active boolean,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Evaluations (
    evaluation_id SERIAL PRIMARY KEY,
    name varchar(50),
    description varchar(50),
    note int,
    module_id int REFERENCES Modules(module_id),
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Roles (
    role_id SERIAL PRIMARY KEY,
    name varchar(50),
    description text,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    email varchar(100),
    password varchar(100),
    role_id int REFERENCES Roles(role_id),
    expired_at date,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE CourseStudent (
    id SERIAL PRIMARY KEY,
    course_id int REFERENCES Courses(course_id),
    user_id int REFERENCES Users(user_id),
    progress int,
    is_approved boolean,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Quizzes (
    quizz_id SERIAL PRIMARY KEY,
    evaluation_id SERIAL REFERENCES Evaluations(evaluation_id),
    quizz_text text,
	image_url varchar(255),
    module_id int REFERENCES Modules(module_id),
    quizz_type int REFERENCES QuizzTypes(quizztype_id),
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);


CREATE TABLE Options (
    option_id SERIAL PRIMARY KEY,
    quizz_id int REFERENCES Quizzes(quizz_id),
	option_text text,
	explantion text,
    is_correct boolean,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE StudentResponses (
    id_response SERIAL PRIMARY KEY,
    student_id int REFERENCES Users(user_id),
    option_id int REFERENCES Options(option_id),
    is_active boolean,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

CREATE TABLE Profiles (
    profile_id SERIAL PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    document_id int REFERENCES DocumentTypes(document_id),
	user_id int REFERENCES Users(user_id),
    document_number int,
    phone int,
	created_at timestamp NOT NULL DEFAULT current_timestamp,
    updated_at timestamptz NOT NULL DEFAULT current_timestamp
);

ALTER SEQUENCE modules_module_id_seq RESTART WITH 1000;


--Añadir campos de UNIQUE
INSERT INTO Roles ( name, description)
VALUES 
	('Student', 'Role for standard students'),
	('Admin', 'Role for administrators');

INSERT INTO DocumentTypes (name)
VALUES
    ('DNI'),
    ('Carné de Extranjería'),
    ('Pasaporte'),
    ('Partida de Nacimiento'),
    ('Carné de FFAA'),
    ('Carné de PNP');
	
	
INSERT INTO QuizzTypes (name)
VALUES
    ('Una Opción'),
    ('Opción Múltiple'),
    ('Verdadero/Falso'),
    ('Completar el Espacio en Blanco'),
    ('Ordenar'),
    ('Emparejamiento'),
    ('Pregunta con Imágen');


ALTER TABLE users
ADD COLUMN failed_login_attempts INT DEFAULT 0,
ADD COLUMN last_failed_login TIMESTAMPTZ, 
ADD COLUMN is_blocked BOOLEAN DEFAULT FALSE;