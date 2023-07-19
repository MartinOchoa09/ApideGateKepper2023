export class Alerta {
  hora: any;
  constructor(
    readonly id: number,
    readonly tipo: string,
    readonly descripcion: string
  ) {}
}
