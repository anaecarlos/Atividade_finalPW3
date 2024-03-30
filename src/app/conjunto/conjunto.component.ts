import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-conjunto',
  templateUrl: './conjunto.component.html',
  styleUrls: ['./conjunto.component.css']
})
export class ConjuntoComponent {
  @Input() imagem: string = '';
  @Input() imagem2: string = '';
  @Output() evento = new EventEmitter<string>();

  Imagematual: string = 'assets/biscoito.png';
  mostrarFrase: boolean = false;
  botaoQuebrarHabilitado: boolean = true;
  botaoQuebrado: boolean = false;

  Quebrarimagem(): void {
    if (!this.botaoQuebrado) {
      this.Imagematual = this.imagem2;
      this.selecionarFraseAleatoria();
      this.mostrarFrase = true;
      this.botaoQuebrarHabilitado = false;
      this.botaoQuebrado = true;
    }
  }

  Reiniciarimagem(): void {
    this.Imagematual = this.imagem;
    this.mostrarFrase = false;
    this.botaoQuebrarHabilitado = true;
    this.botaoQuebrado = false;
  }

  frases: string[] = [
    "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
    "Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!",
    "Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!",
    "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
    "Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!",
    "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
    "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
    "Cada dia traz uma nova oportunidade para cultivar a gratidão e lutar pelo que se quer!",
    "A gratidão é uma grande aliada do sucesso!"
  ];

  fraseSelecionada: string = '';

  constructor() {
    this.selecionarFraseAleatoria();
  }

  selecionarFraseAleatoria(): void {
    const indice = Math.floor(Math.random() * this.frases.length);
    this.fraseSelecionada = this.frases[indice];
  }
}
