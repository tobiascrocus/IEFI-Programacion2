import { IPersona, IHabilidad, IEstudio, IExperiencia, IExpectativa } from '../interfaces/IPortfolio';
import * as fs from 'fs';

export class Persona implements IPersona {
    dni: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    habilidades: IHabilidad[] = [];
    estudios: IEstudio[] = [];
    experiencias: IExperiencia[] = [];
    expectativas: IExpectativa[] = [];

    constructor(data: IPersona) {
        // Validar DNI
        if (!this.validarDNI(data.dni)) {
            throw new Error('DNI inválido. Debe tener 8 dígitos numéricos.');
        }

        // Validar email
        if (!this.validarEmail(data.email)) {
            throw new Error('Email inválido.');
        }

        // Validar teléfono
        if (!this.validarTelefono(data.telefono)) {
            throw new Error('Teléfono inválido. Debe tener entre 8 y 15 dígitos.');
        }

        this.dni = data.dni;
        this.nombre = this.capitalizarNombre(data.nombre);
        this.apellido = this.capitalizarNombre(data.apellido);
        this.email = data.email.toLowerCase();
        this.telefono = data.telefono;
    }

    private validarDNI(dni: string): boolean {
        return /^\d{8}$/.test(dni);
    }

    private validarEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    private validarTelefono(telefono: string): boolean {
        return /^\d{8,15}$/.test(telefono);
    }

    private capitalizarNombre(nombre: string): string {
        return nombre
            .trim()
            .toLowerCase()
            .replace(/\b\w/g, l => l.toUpperCase());
    }

    agregarHabilidad(habilidad: IHabilidad): void {
        this.habilidades.push(habilidad);
    }

    agregarEstudio(estudio: IEstudio): void {
        this.estudios.push(estudio);
    }

    agregarExperiencia(experiencia: IExperiencia): void {
        this.experiencias.push(experiencia);
    }

    agregarExpectativa(expectativa: IExpectativa): void {
        this.expectativas.push(expectativa);
    }

    guardarEnArchivo(): void {
        const data = JSON.stringify(this, null, 2);
        fs.writeFileSync(`./portfolios/${this.dni}.json`, data);
    }
}