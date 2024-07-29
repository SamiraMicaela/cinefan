// src/services/clubs.service.js

const club = [
    {
        id: 1,
        name: "Club de Cine Clásico",
        description: "Explora los grandes clásicos del cine de todos los tiempos.",
    },
    {
        id: 2,
        name: "Club de Cine de Ciencia Ficción",
        description: "Sumérgete en el mundo de la ciencia ficción y los viajes espaciales.",
    },
    {
        id: 3,
        name: "Club de Cine Independiente",
        description: "Disfruta y apoya las producciones de cine independiente.",
    },
];

// Función para obtener todos los clubes
export const getAllClubs = () => {
    return club;
};

// Función para obtener un club por su ID
export const getClubById = (id) => {
    return club.find(club => club.id === id);
};

// Función para agregar un nuevo club
export const addClub = (newClub) => {
    const clubId = club.length > 0 ? club[club.length - 1].id + 1 : 1;
    const club = { id: clubId, ...newClub };
    club.push(club);
    return club;
};


