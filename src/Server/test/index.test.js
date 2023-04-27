const app = require('../src/app');
const axios = require('axios');
const session = require('supertest');
const api = require('../src/controllers/getCharById');
const agent = session(app);
require('dotenv').config();



describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id',  () => {
    it('Responde con status: 200', async () => {
      await agent.get('/rickandmorty/character/1').expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', () => {
      expect.assertions(7);
      return agent.get('/rickandmorty/character/1').then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('species');
        expect(response.body).toHaveProperty('gender');
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('image');
      });
    });  
  });
});

describe('GET /rickandmorty/login', () => {
  it('Si se envía la información de login correcta, se obtiene un objeto { access: true }', async () => {
    const response = await agent.get(`/rickandmorty/login?email=${process.env.EMAIL}&password=${process.env.PASSWORD}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ access: true });
  });

  it('Si se envía la información de login incorrecta, la propiedad access es false', async () => {
    const response = await agent.get('/rickandmorty/login?email=correo_incorrecto&password=password_incorrecto');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ access: false });
  });
});

describe('POST /rickandmorty/fav', () => {
  
    it('Debería devolver en un arreglo lo que se envía por body', async () => {
      const response = await agent.post('/rickandmorty/favorite').send({ 
        id: 1,
        name: 'Rick Sanchez',
        gender: 'Male',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ 
        id: 1,
        name: 'Rick Sanchez',
        gender: 'Male',
        species: 'Human',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      });
    });
  
  

  it('Debería devolver en un arreglo todos los elementos enviados previamente', async () => {
    let response = await agent.post('/rickandmorty/favorite').send({ 
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ 
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    });

    response = await agent.post('/rickandmorty/favorite').send({ 
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ 
      id: 1,
      name: 'Rick Sanchez',
      gender: 'Male',
      species: 'Human',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    });
  });
});

describe('DELETE /rickandmorty/favorite:id', () => {
  it('Elimina un personaje existente', async () => {
    // Agregamos un personaje
    const personaje = {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male',
      status: 'Alive',
      origin: 'Earth (C-137)',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    };
    await agent.post('/rickandmorty/favorite').send(personaje).expect(200);

    // Eliminamos el personaje agregado
    const response = await agent.delete('/rickandmorty/favorite/1').expect(200);

    // Verificamos que el personaje ha sido eliminado
    expect(response.body).toEqual({
      "gender": "Male", 
      "id": 1, 
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", 
      "name": "Rick Sanchez", 
      "species": "Human"});
  });

  it('No elimina nada cuando el ID no existe', async () => {
    // Enviamos una solicitud para eliminar un personaje inexistente
    const response = await agent.delete('/rickandmorty/fav/1000').expect(404);

    // Verificamos que no se haya eliminado nada
    expect(response.body).toEqual({});
  });
});
