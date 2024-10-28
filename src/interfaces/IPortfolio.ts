export interface IPersona {
    dni: string;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
}

export interface IHabilidad {
    nombre: string;
    nivel: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface IEstudio {
    titulo: string;
    institucion: string;
    fechaInicio: Date;
    fechaFin?: Date;
}

export interface IExperiencia {
    empresa: string;
    puesto: string;
    fechaInicio: Date;
    fechaFin?: Date;
    descripcion: string;
}

export interface IExpectativa {
    descripcion: string;
    salarioEsperado: number;
    modalidad: 'Presencial' | 'Remoto' | 'Híbrido';
} 