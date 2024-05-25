import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FigureNames.KING;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;

		console.log("target: ", target);
		console.log("y: ", this.cell.y);
		console.log("x: ", this.cell.x);
		console.log("x: ", target.x - this.cell.x);

		const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;

		if (
			(target.y === this.cell.y + direction ||
				target.y === this.cell.y + direction) &&
			target.x === this.cell.x &&
			this.cell.board.getCell(target.x, target.y)
		) {
			return true;
		}

		// if (this.cell.isEmptyVertical(target)) return true;
		// if (this.cell.isEmptyHorizontal(target)) return true;
		// if (this.cell.isEmptyDiagonal(target)) return true;

		return false;
	}
}
