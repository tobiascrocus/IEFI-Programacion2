import { PortfolioManager } from './services/PortfolioManager';
import { Persona } from './models/Persona';

const manager = new PortfolioManager();

try {
    // Crear primera persona
    const persona1 = new Persona({
        dni: "23456789",
        nombre: "maría josé",
        apellido: "garcía",
        email: "maria@email.com",
        telefono: "123456789"
    });

    // Habilidades persona 1
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

    // Estudios persona 1
    persona1.agregarEstudio({
        titulo: "Ingeniería en Sistemas",
        institucion: "Universidad Nacional",
        fechaInicio: new Date("2018-03-01"),
        fechaFin: new Date("2023-12-15")
    });

    // Experiencias persona 1
    persona1.agregarExperiencia({
        empresa: "TechCorp",
        puesto: "Desarrolladora Backend",
        fechaInicio: new Date("2022-01-01"),
        fechaFin: new Date("2023-12-31"),
        descripcion: "Desarrollo de APIs y microservicios"
    });

    // Crear segunda persona
    const persona2 = new Persona({
        dni: "34567890",
        nombre: "carlos",
        apellido: "rodríguez",
        email: "carlos@email.com",
        telefono: "987654321"
    });

    // Habilidades persona 2
    persona2.agregarHabilidad({
        nombre: "React",
        nivel: "Avanzado"
    });
    persona2.agregarHabilidad({
        nombre: "Node.js",
        nivel: "Intermedio"
    });
    persona2.agregarHabilidad({
        nombre: "TypeScript",
        nivel: "Avanzado"
    });

    // Estudios persona 2
    persona2.agregarEstudio({
        titulo: "Licenciatura en Informática",
        institucion: "Universidad Tecnológica",
        fechaInicio: new Date("2019-03-01"),
        fechaFin: undefined // En curso
    });

    // Experiencias persona 2
    persona2.agregarExperiencia({
        empresa: "Innovation Labs",
        puesto: "Frontend Developer",
        fechaInicio: new Date("2023-01-01"),
        fechaFin: undefined, // Trabajo actual
        descripcion: "Desarrollo de aplicaciones web con React y TypeScript"
    });

    // Agregar personas al manager
    manager.agregarPersona(persona1);
    manager.agregarPersona(persona2);

    // Mostrar todos los portfolios
    console.log("\n=== Listado de todos los portfolios ===");
    manager.listarPersonas();

    // Buscar una persona específica
    console.log("\n=== Búsqueda por DNI ===");
    const personaEncontrada = manager.obtenerPersona("23456789");
    if (personaEncontrada) {
        console.log("Persona encontrada:", personaEncontrada.nombre, personaEncontrada.apellido);
    }

    // Borrar una persona
    console.log("\n=== Borrar persona y mostrar listado actualizado ===");
    manager.borrarPersona("34567890");
    manager.listarPersonas();

} catch (error) {
    console.error('Error:', (error as Error).message);
}