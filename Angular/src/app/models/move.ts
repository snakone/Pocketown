export class Move {
      _id: string  // MongoDB ID
      name: string;  // Move Name
      z: string;  // Its Z, R2, Normal Move?
      power: number;  // Move Power
      hit: number;  // Hit Rate
      pp: number;  // PP of Pokemon Move
      type: string;  // Type Grass/Fire/Water..
      attack: string;  // Physical/Special
      info: string;  // Info about the Move
}

// Pokemon Move Model
