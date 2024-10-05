import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
})
export class GatosPage implements OnInit {
  fatoGato: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFatoGato();
  }

  getFatoGato() {
    this.http.get<any>('https://catfact.ninja/fact').subscribe(data => {
      this.fatoGato = data.fact;
    });
  }
}
