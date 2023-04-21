import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Veiculo} from "../models/veiculo.model";
import {VeiculosRepositorio} from "../repositorio/veiculosRepositorio";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rastreiaVeiculoApp';
  placaTemp: string = '';
  modeloTemp: string = '';
  corTemp: string = '';
  veiculos:Veiculo[] = [];
  insercao = false;
  listagem = false;
  edicao = false;


  constructor() {

  }
  salvaDados():void{
    const novoVeiculo = new Veiculo(this.placaTemp, this.modeloTemp, this.corTemp);
    this.placaTemp = '';
    this.modeloTemp ='';
    this.corTemp = '';
    this.veiculos.push(novoVeiculo);
  }

  mostraVeiculos():Veiculo[]{
    return this.veiculos;
  }

  mostraCardInsercao(){
    this.listagem = false;
    this.insercao = true;
  }

  mostraCardListagem(){
    this.insercao = false;
    this.listagem = true;
  }

  editarVeiculo(veiculo: Veiculo){
    veiculo.editavel = true;
  }

  excluirVeiculo(veiculo: Veiculo){
    const index = this.veiculos.findIndex(obj => obj.placa == veiculo.placa );
    this.veiculos.splice(index, 1);
  }
}
