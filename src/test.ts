import { PortfolioManager } from './services/PortfolioManager';
import { Persona } from './models/Persona';

// Crear instancia del manager
const manager = new PortfolioManager();

try {
    const persona1 = new Persona({
        dni: "23456789",
        nombre: "maría josé",
        apellido: "garcía",
        email: "maria@email.com",
        telefono: "123456789"
    });

    // Habilidades
    persona1.agregarHabilidad({
        nombre: "Python",
        nivel: "Avanzado"
    });
    persona1.agregarHabilidad({
        nombre: "JavaScript",
        nivel: "Intermedio"
    });
    persona1.agregarHabilidad({
        nombre: "SQL",
        nivel: "Avanzado"
    });

    // Estudios
    persona1.agregarEstudio({
        titulo: "Ingeniería en Sistemas",
        institucion: "Universidad Nacional",
        fechaInicio: new Date("2018-03-01"),
        fechaFin: new Date("2023-12-15")
    });
    persona1.agregarEstudio({
        titulo: "Máster en Inteligencia Artificial",
        institucion: "Universidad Tecnológica",
        fechaInicio: new Date("2024-03-01"),
        fechaFin: undefined // En curso
    });

    // Experiencias
    persona1.agregarExperiencia({
        empresa: "TechCorp",
        puesto: "Desarrolladora Backend",
        fechaInicio: new Date("2022-01-01"),
        fechaFin: new Date("2023-12-31"),
        descripcion: "Desarrollo de APIs REST y microservicios con Python y Node.js"
    });
    persona1.agregarExperiencia({
        empresa: "Innovation Labs",
        puesto: "Tech Lead",
        fechaInicio: new Date("2024-01-01"),
        fechaFin: undefined, // Trabajo actual
        descripcion: "Liderazgo de equipo de desarrollo y arquitectura de soluciones"
    });

    manager.agregarPersona(persona1);
    manager.listarPersonas();

} catch (error) {
    console.error('Error:', (error as Error).message);
}

// Crear otra persona
const persona2 = new Persona({
    dni: "87654321",
    nombre: "Carlos",
    apellido: "Rodríguez",
    email: "carlos@email.com",
    telefono: "987654321"
});

// Agregar habilidades
persona2.agregarHabilidad({
    nombre: "JavaScript",
    nivel: "Intermedio"
});

// Agregar estudios
persona2.agregarEstudio({
    titulo: "Ingeniería en Sistemas",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2019-09-01"),
    fechaFin: new Date("2023-06-15")
});

// Agregar experiencia
persona2.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Frontend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con React y JavaScript"
});

// Agregar expectativas
persona2.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 40000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona2);

// Crear otra persona
const persona3 = new Persona({
    dni: "56789012",
    nombre: "María",
    apellido: "López",
    email: "maria@email.com",
    telefono: "567890123"
});

// Agregar habilidades
persona3.agregarHabilidad({
    nombre: "Java",
    nivel: "Avanzado"
});

// Agregar estudios
persona3.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2018-09-01"),
    fechaFin: new Date("2022-06-15")
});

// Agregar experiencia
persona3.agregarExperiencia({
    empresa: "TechCorp",
    puesto: "Desarrollador Backend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Java y Spring"
});

// Agregar expectativas
persona3.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 60000,
    modalidad: "Híbrido"
});

// Guardar persona
manager.agregarPersona(persona3);

// Crear otra persona
const persona4 = new Persona({
    dni: "21098765",
    nombre: "Pedro",
    apellido: "González",
    email: "pedro@email.com",
    telefono: "210987654"
});

// Agregar habilidades
persona4.agregarHabilidad({
    nombre: "Python",
    nivel: "Intermedio"
});

// Agregar estudios
persona4.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2019-09-01"),
    fechaFin: new Date("2023-06-15")
});

// Agregar experiencia
persona4.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Full Stack",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Python y Django"
});

// Agregar expectativas
persona4.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona4);

// Crear otra persona
const persona5 = new Persona({
    dni: "65432109",
    nombre: "Laura",
    apellido: "Martínez",
    email: "laura@email.com",
    telefono: "654321098"
});

// Agregar habilidades
persona5.agregarHabilidad({
    nombre: "React",
    nivel: "Avanzado"
});

// Agregar estudios
persona5.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2018-09-01"),
    fechaFin: new Date("2022-06-15")
});

// Agregar experiencia
persona5.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Frontend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con React y JavaScript"
});

// Agregar expectativas
persona5.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona5);

// Crear otra persona
const persona6 = new Persona({
    dni: "90123456",
    nombre: "Miguel",
    apellido: "García",
    email: "miguel@email.com",
    telefono: "901234567"
});

// Agregar habilidades
persona6.agregarHabilidad({
    nombre: "Java",
    nivel: "Intermedio"
});

// Agregar estudios
persona6.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2019-09-01"),
    fechaFin: new Date("2023-06-15")
});

// Agregar experiencia
persona6.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Backend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Java y Spring"
});

// Agregar expectativas
persona6.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona6);

// Crear otra persona
const persona7 = new Persona({
    dni: "34567890",
    nombre: "Sofía",
    apellido: "Rodríguez",
    email: "sofia@email.com",
    telefono: "345678901"
});

// Agregar habilidades
persona7.agregarHabilidad({
    nombre: "Python",
    nivel: "Intermedio"
});

// Agregar estudios
persona7.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2018-09-01"),
    fechaFin: new Date("2022-06-15")
});

// Agregar experiencia
persona7.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Full Stack",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Python y Django"
});

// Agregar expectativas
persona7.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona7);

// Crear otra persona
const persona8 = new Persona({
    dni: "78901234",
    nombre: "Javier",
    apellido: "González",
    email: "javier@email.com",
    telefono: "789012345"
});

// Agregar habilidades
persona8.agregarHabilidad({
    nombre: "React",
    nivel: "Avanzado"
});

// Agregar estudios
persona8.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2018-09-01"),
    fechaFin: new Date("2022-06-15")
});

// Agregar experiencia
persona8.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Frontend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con React y JavaScript"
});

// Agregar expectativas
persona8.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona8);

// Crear otra persona
const persona9 = new Persona({
    dni: "09876543",
    nombre: "Lucía",
    apellido: "Martínez",
    email: "lucia@email.com",
    telefono: "098765432"
});

// Agregar habilidades
persona9.agregarHabilidad({
    nombre: "Java",
    nivel: "Intermedio"
});

// Agregar estudios
persona9.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2019-09-01"),
    fechaFin: new Date("2023-06-15")
});

// Agregar experiencia
persona9.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Backend",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Java y Spring"
});

// Agregar expectativas
persona9.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona9);

// Crear otra persona
const persona10 = new Persona({
    dni: "43210987",
    nombre: "Mario",
    apellido: "García",
    email: "mario@email.com",
    telefono: "432109876"
});

// Agregar habilidades
persona10.agregarHabilidad({
    nombre: "Python",
    nivel: "Intermedio"
});

// Agregar estudios
persona10.agregarEstudio({
    titulo: "Ingeniería Informática",
    institucion: "Universidad Tecnológica",
    fechaInicio: new Date("2018-09-01"),
    fechaFin: new Date("2022-06-15")
});

// Agregar experiencia
persona10.agregarExperiencia({
    empresa: "Innovatech",
    puesto: "Desarrollador Full Stack",
    fechaInicio: new Date("2022-07-01"),
    fechaFin: new Date("2023-06-30"),
    descripcion: "Desarrollo de aplicaciones web con Python y Django"
});

// Agregar expectativas
persona10.agregarExpectativa({
    descripcion: "Busco trabajo en empresa de tecnología",
    salarioEsperado: 50000,
    modalidad: "Remoto"
});

// Guardar persona
manager.agregarPersona(persona10); 