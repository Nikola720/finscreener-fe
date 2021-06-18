//External imports
import { Component, OnInit } from '@angular/core';
import { FinscreenerTaskService } from '../shared/services/finscreener-task.service';
//Internal imports
import { APINAME } from '../shared/constants/finscreener.constant';
@Component({
  selector: 'app-finscreener',
  templateUrl: './finscreener.component.html',
  styleUrls: ['./finscreener.component.scss']
})
export class FinscreenerComponent implements OnInit {
  //Public variable
  public BDSResData:any; //this variable is use to store api data
  public dropDownLookup = [ 
    { value: 1, displayName: 'US Markets' },
    { value: 2, displayName: 'S&P 500' }, 
    { value: 3, displayName: 'NASDAQ' },
    { value: 4, displayName: 'DOW 30' },
    { value: 15, displayName: 'Russell 1000'}
  ]; //this variable is use to store dropdown lookup

  constructor(public finscreenerTaskService:FinscreenerTaskService) { }

  ngOnInit() {
    this.getCall(1);
  }

  //This function is use to call api
  private getCall(mapType: number){
      this.finscreenerTaskService.getURL(`${APINAME.BDS}?mapTyp=${mapType}&idu=7661`).subscribe((response:any)=>{
        if(response?.body?.length){
          this.BDSResData = response.body;
        }
      },(error)=>{
        console.log(error);
      })
  }

  handleClickOption(event): void {
    this.getCall(event.target.value);
  }

}
