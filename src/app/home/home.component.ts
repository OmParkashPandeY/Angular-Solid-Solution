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
  GotoPhp()
  {
    document.getElementById('php')?.scrollIntoView({behavior:'smooth'});
  }
  GotoPhpOpps()
  {
    document.getElementById('phpoops')?.scrollIntoView({behavior:'smooth'});
  }
  GotoCodeigniter()
  {
    document.getElementById('codeigniter')?.scrollIntoView({behavior:'smooth'});
  }
  GotoMysql()
  {
    document.getElementById('mysql')?.scrollIntoView({behavior:'smooth'});
  }
  GotoMockTest()
  {
    document.getElementById('mocktest')?.scrollIntoView({behavior:'smooth'});
  }
// ------------------------------------------------------------------------------------------

}
