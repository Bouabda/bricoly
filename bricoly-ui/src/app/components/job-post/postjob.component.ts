import { Client } from './../../models/client/client.model';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { JobDraft } from '../../models/jobDraft/jobDraft.model';
import { Service } from '../../models/service/service.model';
import { Category } from '../../models/category/category.model';


@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.scss']
})
export class PostjobComponent implements OnInit {
  // category : Category
  jobDraft: JobDraft = new JobDraft();
  constructor() { 

  }
  onActivate(elementRef) {
    console.log(elementRef)
    if (elementRef.selectCategoryEvent){
      elementRef.selectCategoryEvent.subscribe((event :Category) => {
        
      });
    } else if (elementRef.selectServiceEvent){
      elementRef.selectServiceEvent.subscribe((event:Service)=> {
        // this.jobDraft.service_type = even
      });
    }
    else if (elementRef.selectClientTypeEvent) {
      elementRef.selectClientTypeEvent.subscribe((event)=> {
        this.jobDraft.client_type = event
        console.log('saye :' , event)
      });
    } else if (elementRef.selectServiceTypeEvent) {
      elementRef.selectServiceTypeEvent.subscribe((event)=> {
        this.jobDraft.service_type = event
        console.log('saye :' , event)
      });
  }
}

  ngOnInit(): void {}

}
