import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda: string;
  @Input() data: MultiDataSet;
  @Input() labels: Label[];
  @Input() charttype: ChartType;

  constructor() { }

  ngOnInit(): void {
  }

}
