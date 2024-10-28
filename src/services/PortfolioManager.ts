import { Persona } from '../models/Persona';
import * as fs from 'fs';

export class PortfolioManager {
    private portfolios: Map<string, Persona> = new Map();

    constructor() {
        this.cargarPortfolios();
    }

    private cargarPortfolios(): void {
        if (!fs.existsSync('./portfolios')) {
            fs.mkdirSync('./portfolios');
        }
        
        const archivos = fs.readdirSync('./portfolios');
        archivos.forEach(archivo => {
            const data = fs.readFileSync(`./portfolios/${archivo}`, 'utf-8');
            const persona = JSON.parse(data);
            this.portfolios.set(persona.dni, new Persona(persona));
        });
    }

    agregarPersona(persona: Persona): void {
        // Validaciones mínimas
        if (persona.habilidades.length < 3) {
            throw new Error(`La persona con DNI ${persona.dni} debe tener al menos 3 habilidades registradas.`);
        }

        if (persona.estudios.length < 1) {
            throw new Error(`La persona con DNI ${persona.dni} debe tener al menos 1 estudio registrado.`);
        }

        if (persona.experiencias.length < 1) {
            throw new Error(`La persona con DNI ${persona.dni} debe tener al menos 1 experiencia registrada.`);
        }

        this.portfolios.set(persona.dni, persona);
        persona.guardarEnArchivo();
    }

    borrarPersona(dni: string): boolean {
        if (this.portfolios.has(dni)) {
            this.portfolios.delete(dni);
            fs.unlinkSync(`./portfolios/${dni}.json`);
            return true;
        }
        return false;
    }

    obtenerPersona(dni: string): Persona | undefined {
        return this.portfolios.get(dni);
    }

    listarPersonas(): void {
        console.log('\n=== Lista de Portfolios ===');
        if (this.portfolios.size === 0) {
            console.log('No hay portfolios registrados.');
            return;
        }

        this.portfolios.forEach(persona => {
            console.log(`
╔═══════════════════════════════════════════════
║ DATOS PERSONALES
║ DNI: ${persona.dni}
║ Nombre completo: ${persona.apellido}, ${persona.nombre}
║ Email: ${persona.email}
║ Teléfono: ${persona.telefono}
║
║ HABILIDADES (${persona.habilidades.length}):
${persona.habilidades.map(h => `║    • ${h.nombre} - ${h.nivel}`).join('\n')}
║
║ ESTUDIOS (${persona.estudios.length}):
${persona.estudios.map(e => `║    • ${e.titulo}
║      ${e.institucion}
║      ${this.formatearFecha(e.fechaInicio)} - ${e.fechaFin ? this.formatearFecha(e.fechaFin) : 'Actual'}`).join('\n')}
║
║ EXPERIENCIA LABORAL (${persona.experiencias.length}):
${persona.experiencias.map(exp => `║    • ${exp.empresa} - ${exp.puesto}
║      ${this.formatearFecha(exp.fechaInicio)} - ${exp.fechaFin ? this.formatearFecha(exp.fechaFin) : 'Actual'}
║      ${exp.descripcion}`).join('\n')}
╚═══════════════════════════════════════════════`);
        });
    }

    private formatearFecha(fecha: Date): string {
        return new Date(fecha).toLocaleDateString('es-ES', {
            month: 'long',
            year: 'numeric'
        });
    }
}