import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor()
  {

    
  }

// --------------------------------------------------

IntervalMessage:any;

StopInterval:any = Subscription;

Notification:any =true;

ngOnInit(): void 
{

  // const Interval = timer(5000,1000);

  //  this.StopInterval = Interval.subscribe((Result)=>
  //   {
  //       this.IntervalMessage = Result;

  //       if(Result >= 5)
  //       {
  //           this.StopInterval.unsubscribe();
  //       }
  //   });

  const Interval = interval(1000);

   this.StopInterval = Interval.subscribe((Result)=>
    {
        this.IntervalMessage = Result;

        if(Result >= 5)
        {
            this.StopInterval.unsubscribe();
            this.Notification= false;
        }
    });

  
}
// --------------------------------------------------

  GotoLogin()
  {
    document.getElementById("LoginPannel")?.scrollIntoView({behavior:'smooth'});
  }
// ------------------------------------------------------------------------------------------

}
