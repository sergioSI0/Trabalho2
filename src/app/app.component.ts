import { Component, OnInit , ViewChild } from '@angular/core';
import { Tr2 } from './tr2'; 
import { Tr2Service } from './tr2.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  newTr2 : Tr2;
  tr2: Tr2[] = [];

  constructor(private tr2Service: Tr2Service){
   
  }
  ngOnInit(){
    this.newTr2 = new Tr2();
    this.getAll();
  }

  getAll(){
    this.tr2Service.getAll().subscribe(
      data => this.tr2 = data
    );
  }

  save(){
    if (!this.newTr2.id){
      this.tr2Service.save(this.newTr2).subscribe(
        data =>this.getAll()
      );
    }else{
      this.tr2Service.edit(this.newTr2).subscribe(
        data => this.getAll()
      );
    }
  }
  delete(tr2 : Tr2){
    this.tr2Service.delete(tr2).subscribe(
      data => this.getAll()
    );
  }

  edit(tr2 : Tr2){
    this.newTr2 = new Tr2(tr2.id, tr2.title, tr2.author,);

  }


  
}
