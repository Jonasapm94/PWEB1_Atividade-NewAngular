import { Veiculo } from "src/models/veiculo.model";

export class VeiculosRepositorio{
  private veiculos: Array<Veiculo> = new Array<Veiculo>();

  constructor(){

  }

  adicionarVeiculo(veiculo: Veiculo){
    this.veiculos.push(veiculo);
  }

  listarVeiculos(){
    return this.veiculos;
  }
}
