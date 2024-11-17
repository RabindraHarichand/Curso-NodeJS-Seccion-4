import { httpClient } from "../plugin";

export const getPokemonNameById = async (
  id: string | number
): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClient.get(url);
    //   throw new Error("Pokemon no existe");
    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }

  //   return (
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       // .then(() => {
  //       //   throw new Error("Pokemon no existe");
  //       // })
  //       .then((pokemon) => pokemon.name)
  //   );
};
