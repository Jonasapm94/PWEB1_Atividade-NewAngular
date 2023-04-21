export class Veiculo{
  placa: string;
  nomeModelo: string;
  cor: string;
  editavel = false;


  constructor(placa:string, nomeModelo:string, cor:string){
    this.placa = placa;
    this.nomeModelo = nomeModelo;
    this.cor = cor;
  }

}
