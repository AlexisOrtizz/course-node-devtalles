
interface Hero {
    id: number;
    nombre: string;
    poder: string;
};

export const heroes: Hero[] = [
    { id: 1, nombre: 'Superman', poder: 'Superfuerza' },
    { id: 2, nombre: 'Batman', poder: 'Dinámica' },
    { id: 3, nombre: 'Wonder Woman', poder: 'Fuerza' },
];