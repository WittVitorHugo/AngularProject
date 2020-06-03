import { Component, OnInit } from '@angular/core';
import { Tab_Cest } from 'src/app/services/cest';
import { CestService } from 'src/app/services/cest-service';

@Component({
  selector: 'app-cest',
  templateUrl: './cest.component.html',
  styleUrls: ['./cest.component.css']
})
export class CestComponent implements OnInit {
    public cests: Tab_Cest[] = new Array();



  constructor(private cestsService: CestService) { }

  ngOnInit() {
      this.cestsService.list().subscribe(response => this.cests = response)

  }

}
