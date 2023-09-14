import { Component, OnInit } from '@angular/core';
import { NopService } from './nop.service';
import { NOPResponse, NOPItem, NOPEnvironment } from './nop.interface';

@Component({
  selector: 'app-nop',
  templateUrl: './nop.component.html',
  styleUrls: ['./nop.component.scss']
})
export class NopComponent implements OnInit {

  nopResponse?: NOPResponse;

  constructor(private nopService: NopService) { }

  ngOnInit(): void {
    this.nopService.getData().subscribe((response) => {
      console.log(response);
      this.nopResponse = response;
      console.log(this.nopResponse?.NopEnvironment?.sessionID);
    });
  }

  formatTableBody(x: number, y: number) {
    let data: string | undefined;
    //console.log(this.nopResponse?.NopData?.NopList.tBody[x][y]);
    if (typeof this.nopResponse?.NopData?.NopList.tBody[x][y] === 'object' &&
    this.nopResponse?.NopData?.NopList.tBody[x][y] !== null)  {
      const obj = this.nopResponse?.NopData?.NopList.tBody[x][y] as unknown as NOPItem;
      data = obj.key;
    } else {
      data = this.nopResponse?.NopData?.NopList.tBody[x][y];
    }

    return data;
  }

}
