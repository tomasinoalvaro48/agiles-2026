import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al iniciar, enmascara la palabra completa", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });
});
